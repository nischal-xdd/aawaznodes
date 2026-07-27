import { HardDrive, Database, Users, RefreshCw } from 'lucide-react'
import { ButtonLink } from '../ui/Button'
import Chip from '../ui/Chip'
import ScrollReveal from '../ui/ScrollReveal'

export default function DashboardShowcase() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <p className="text-xs font-medium text-orange uppercase tracking-wider mb-3">
              Free Dashboard
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">
              Your hosting command center
            </h2>
            <p className="text-muted text-base leading-relaxed mb-6">
              Track servers, allocate resources, renew worlds, earn coins, manage
              referrals, and reach support without leaving the workspace.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <Chip>Server lifecycle</Chip>
              <Chip>Coin economy</Chip>
              <Chip>Resource upgrades</Chip>
              <Chip>Renewal controls</Chip>
            </div>

            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/start-free" variant="primary">
                Start Free
              </ButtonLink>
              <ButtonLink href="/free-hosting" variant="ghost">
                Free Hosting Details
              </ButtonLink>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="right">
            <article className="glass-panel overflow-hidden glow-cyan">
              <header className="flex items-center justify-between px-5 py-3 border-b border-line">
                <div className="flex items-center gap-2 text-xs font-medium font-mono text-muted">
                  <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                  SERVER OVERVIEW
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green/10 border border-green/30 px-2.5 py-0.5 text-[10px] font-medium text-green">
                  READY
                </span>
              </header>

              <div className="grid grid-cols-3 gap-px bg-line">
                {[
                  { icon: HardDrive, label: 'Memory', value: '4GB' },
                  { icon: Database, label: 'Storage', value: '6GB' },
                  { icon: Users, label: 'Players', value: '0 / 20' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-panel p-4 text-center">
                    <span className="text-[10px] text-muted uppercase tracking-wider flex items-center justify-center gap-1 mb-1">
                      <stat.icon size={10} />
                      {stat.label}
                    </span>
                    <strong className="text-lg font-bold font-display text-text">
                      {stat.value}
                    </strong>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-[#050d18]">
                <div className="font-mono text-xs space-y-1.5">
                  <div className="text-green/80">&gt; World slot available.</div>
                  <div className="text-green/80">&gt; Renewal balance synced.</div>
                  <div className="text-green/80">&gt; Upgrade path ready.</div>
                  <div className="text-cyan/50 flex items-center gap-1">
                    <RefreshCw size={10} className="animate-spin" />
                    <span>Dashboard ready</span>
                  </div>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
