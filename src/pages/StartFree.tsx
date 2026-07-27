import { useState } from 'react'
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'

export default function StartFree() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="py-20 md:py-28">
      <div className="container-site">
        <ScrollReveal>
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <p className="text-xs font-medium text-orange uppercase tracking-wider mb-3">
                Get Started
              </p>
              <h1 className="text-3xl font-display font-bold mb-2">
                Create your account
              </h1>
              <p className="text-sm text-muted">
                Sign up and launch your free Minecraft server in minutes.
              </p>
            </div>

            <div className="glass-panel p-8">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >
                <div>
                  <label className="block text-xs font-medium text-muted mb-2">
                    Username
                  </label>
                  <div className="relative">
                    <User
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted/60"
                    />
                    <input
                      type="text"
                      placeholder="Choose a username"
                      className="w-full bg-bg border border-line rounded-[var(--radius-site)] pl-9 pr-4 py-2.5 text-sm text-text placeholder:text-muted/40 focus:outline-none focus:border-cyan/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted/60"
                    />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full bg-bg border border-line rounded-[var(--radius-site)] pl-9 pr-4 py-2.5 text-sm text-text placeholder:text-muted/40 focus:outline-none focus:border-cyan/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted/60"
                    />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a password"
                      className="w-full bg-bg border border-line rounded-[var(--radius-site)] pl-9 pr-10 py-2.5 text-sm text-text placeholder:text-muted/40 focus:outline-none focus:border-cyan/50 transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted/60 hover:text-muted transition-colors"
                    >
                      {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-[var(--radius-site)] px-6 py-3 text-sm font-semibold bg-orange text-bg hover:brightness-110 hover:shadow-[0_0_30px_rgba(255,154,61,0.3)] transition-all cursor-pointer"
                >
                  Create Account
                </button>
              </form>

              <div className="mt-6 pt-5 border-t border-line text-center">
                <p className="text-sm text-muted">
                  Already have an account?{' '}
                  <a href="/login" className="text-cyan hover:underline">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
