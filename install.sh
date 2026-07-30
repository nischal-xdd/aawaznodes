#!/bin/bash

# =========================================================
# Aawaz Nodes - Automated Installation & Management Script
# Repository: https://github.com/nischal-xdd/aawaznodes
# =========================================================

set -e

# Colors for UI
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m'

print_banner() {
    clear
    echo -e "${CYAN}${BOLD}"
    echo "  ========================================================"
    echo "    _    _      __        __ _           _                "
    echo "   / \  | |     \ \      / /(_)         | |               "
    echo "  / _ \ | |      \ \ /\ / /  _  ___   __| | ___  ___     "
    echo " / ___ \| |___    \ V  V /  | |/ _ \ / _  |/ _ \/ __|    "
    echo "/_/   \_\_____|    \_/\_/   |_| (_) | (_| | (_) \__ \    "
    echo "                          \___/ \__,_|\___/|___/    "
    echo "                                                          "
    echo "            AAWAZ NODES MANAGEMENT & INSTALLER             "
    echo "            Default Port: 6767                             "
    echo "  ========================================================"
    echo -e "${NC}\n"
}

log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
log_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

check_root() {
    if [ "$EUID" -ne 0 ]; then
        log_warning "This script is recommended to be run as root or with sudo."
    fi
}

install_panel() {
    print_banner
    echo -e "${BOLD}--- [1] Full Panel Installation ---${NC}\n"

    check_root
    log_info "Checking system environment..."

    if command -v apt-get &> /dev/null; then
        sudo dpkg --configure -a 2>/dev/null || true
        sudo apt-get install -f -y 2>/dev/null || true
        sudo apt-get update -y || true
        sudo apt-get install -y curl git build-essential ca-certificates tar xz-utils || log_warning "Some packages failed to install"
    elif command -v yum &> /dev/null; then
        sudo yum update -y || true
        sudo yum install -y curl git make gcc-c++ ca-certificates tar xz || log_warning "Some packages failed to install"
    fi

    # Node.js check
    NEED_NODE_UPGRADE=0
    if ! command -v node &> /dev/null; then
        NEED_NODE_UPGRADE=1
    else
        NODE_MAJOR=$(node -v | cut -d'.' -f1 | tr -d 'v')
        NODE_MINOR=$(node -v | cut -d'.' -f2)
        if [ "$NODE_MAJOR" -lt 22 ]; then
            [ "$NODE_MAJOR" -lt 20 ] || [ "$NODE_MINOR" -lt 19 ] && NEED_NODE_UPGRADE=1
        fi
    fi

    if [ "$NEED_NODE_UPGRADE" -eq 1 ]; then
        log_info "Installing Node.js 22.x..."
        if command -v apt-get &> /dev/null; then
            curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash - 2>/dev/null || true
            sudo apt-get install -y nodejs 2>/dev/null || true
        fi
        CURRENT_NODE_MAJOR=$(node -v 2>/dev/null | cut -d'.' -f1 | tr -d 'v' || echo "0")
        if [ "$CURRENT_NODE_MAJOR" -lt 22 ]; then
            log_info "Installing Node.js binary directly..."
            ARCH=$(uname -m)
            case "$ARCH" in x86_64) NODE_ARCH="x64" ;; aarch64) NODE_ARCH="arm64" ;; armv7l) NODE_ARCH="armv7l" ;; *) NODE_ARCH="x64" ;; esac
            curl -fsSL "https://nodejs.org/dist/v22.13.1/node-v22.13.1-linux-${NODE_ARCH}.tar.xz" -o /tmp/node22.tar.xz 2>/dev/null || true
            [ -f /tmp/node22.tar.xz ] && sudo tar -xJf /tmp/node22.tar.xz -C /usr/local --strip-components=1 2>/dev/null && rm -f /tmp/node22.tar.xz
        fi
    fi

    command -v node &> /dev/null && log_success "Node.js $(node -v) ready." || log_error "Node.js install failed."

    # PM2
    command -v pm2 &> /dev/null || sudo npm install -g pm2 2>/dev/null || true

    # Docker
    command -v docker &> /dev/null || { curl -fsSL https://get.docker.com | sh 2>/dev/null || true; }

    log_info "Setting up Aawaz Nodes..."

    if [ -f ".env" ]; then
        log_info "Using existing .env file..."
    else
        log_info "Creating .env file..."
        echo "PORT=6767" > .env
        echo "JWT_SECRET=$(head -c 32 /dev/urandom | base64 2>/dev/null || date +%s | md5sum | head -c 32)" >> .env
        echo "NODE_ENV=production" >> .env
    fi

    log_info "Installing dependencies..."
    npm install

    log_info "Building application..."
    npm run build

    log_info "Creating admin user..."
    npm run createuser

    log_info "Starting with PM2..."
    npx pm2 start ecosystem.config.cjs
    npx pm2 save

    log_success "=========================================="
    log_success " Aawaz Nodes installed & started!"
    log_success " Access: http://<SERVER-IP>:6767"
    log_success "=========================================="
}

update_panel() {
    print_banner
    echo -e "${BOLD}--- [2] Update Aawaz Nodes ---${NC}\n"
    log_info "Pulling latest code..."
    git stash 2>/dev/null || true
    git pull origin main
    npm install
    npm run build
    npx pm2 restart aawaz-nodes || npx pm2 restart all
    log_success "Panel updated and restarted!"
}

create_admin_user() {
    print_banner
    echo -e "${BOLD}--- [3] Create Admin User ---${NC}\n"
    npm run createuser
    log_success "Admin user created!"
}

restart_panel() {
    print_banner
    echo -e "${BOLD}--- [4] Restart Aawaz Nodes ---${NC}\n"
    npx pm2 restart aawaz-nodes || npx pm2 restart all
    log_success "Panel restarted!"
}

while true; do
    print_banner
    echo -e "  ${BOLD}1)${NC} Install Panel"
    echo -e "  ${BOLD}2)${NC} Update Panel"
    echo -e "  ${BOLD}3)${NC} Create Admin User"
    echo -e "  ${BOLD}4)${NC} Restart Panel"
    echo -e "  ${BOLD}5)${NC} Exit"
    read -p " Choose (1-5): " CHOICE
    case "$CHOICE" in
        1) install_panel; read -p "Press Enter..." ;;
        2) update_panel; read -p "Press Enter..." ;;
        3) create_admin_user; read -p "Press Enter..." ;;
        4) restart_panel; read -p "Press Enter..." ;;
        5) echo -e "\n${YELLOW}Goodbye!${NC}\n"; exit 0 ;;
        *) log_error "Invalid option."; sleep 1 ;;
    esac
done
