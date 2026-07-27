import { Link } from 'react-router-dom'
import { Mail, MessageCircle } from 'lucide-react'

const exploreLinks = [
  { to: '/free-hosting', label: 'Free Hosting' },
  { to: '/premium-hosting', label: 'Premium' },
  { to: '/features', label: 'Features' },
  { to: '/community', label: 'Discord' },
]

export default function Footer() {
  return (
    <footer className="glass-panel mt-24 rounded-none border-x-0 border-b-0">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-xs font-medium text-orange uppercase tracking-wider mb-2">
              Public Information
            </p>
            <h2 className="text-xl font-display font-bold mb-3">Aawaz Nodes</h2>
            <p className="text-sm text-muted leading-relaxed">
              Free Minecraft hosting with original guides, visible trust pages, and a
              cleaner path into the dashboard when you are actually ready to launch.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Explore</h3>
            <div className="flex flex-col gap-2">
              {exploreLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted hover:text-cyan transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:aawaznodes@gmail.com"
                className="flex items-center gap-2 text-sm text-muted hover:text-orange transition-colors"
              >
                <Mail size={14} />
                aawaznodes@gmail.com
              </a>
              <p className="text-sm text-muted">Instagram ID: nxclxr_</p>
              <a
                href="https://discord.gg/9Vw3XBtZ3N"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-cyan hover:text-cyan/80 transition-colors"
              >
                <MessageCircle size={14} />
                Join Discord
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Aawaz Nodes. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-xs text-muted hover:text-text transition-colors">
              Terms
            </Link>
            <Link to="/" className="text-xs text-muted hover:text-text transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
