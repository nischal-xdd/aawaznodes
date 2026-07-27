import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '../../lib/cn'
import { ButtonLink } from '../ui/Button'

const navLinks = [
  { to: '/free-hosting', label: 'Free Hosting' },
  { to: '/premium-hosting', label: 'Premium' },
  { to: '/features', label: 'Features' },
  { to: '/community', label: 'Discord' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-bg/90 backdrop-blur-xl border-b border-line shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent',
      )}
    >
      <nav className="container-site flex items-center justify-between h-16 md:h-18">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange to-cyan flex items-center justify-center text-bg font-bold text-sm font-display">
            A
          </div>
          <div className="hidden sm:block">
            <strong className="text-sm font-display font-bold text-text block leading-tight">
              Aawaz Nodes
            </strong>
            <small className="text-[10px] text-muted leading-tight">
              Free Minecraft hosting
            </small>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                location.pathname === link.to
                  ? 'text-cyan bg-cyan/10'
                  : 'text-muted hover:text-text',
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 text-sm font-medium text-muted hover:text-text transition-colors"
          >
            Login
          </Link>
          <ButtonLink href="/start-free" variant="primary" className="!px-5 !py-2 !text-sm">
            Start Free
          </ButtonLink>
        </div>

        <button
          className="md:hidden p-2 text-muted hover:text-text transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-xl border-t border-line">
          <div className="container-site py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                  location.pathname === link.to
                    ? 'text-cyan bg-cyan/10'
                    : 'text-muted hover:text-text',
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-line flex flex-col gap-2">
              <Link
                to="/login"
                className="px-4 py-3 text-sm font-medium text-muted hover:text-text transition-colors"
              >
                Login
              </Link>
              <ButtonLink href="/start-free" variant="primary" className="!text-sm">
                Start Free
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
