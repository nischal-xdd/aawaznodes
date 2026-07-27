import ScrollReveal from '../ui/ScrollReveal'
import { Zap, Layout, Puzzle, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Instant setup',
    desc: 'Choose a supported version and available node, then launch from one focused flow.',
  },
  {
    icon: Layout,
    title: 'Full panel access',
    desc: 'Manage files, console, backups, databases, schedules, plugins, and server settings.',
  },
  {
    icon: Puzzle,
    title: 'Mods and plugins',
    desc: 'Run Paper, Purpur, Fabric, Forge, and other supported server environments.',
  },
  {
    icon: ShieldCheck,
    title: 'Protected infrastructure',
    desc: 'Node health, capacity checks, cooldowns, and platform safeguards protect every launch.',
  },
]

export default function FeaturesGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-medium text-orange uppercase tracking-wider mb-3">
              Free Hosting Platform
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">
              Everything your Minecraft world needs
            </h2>
            <p className="text-muted text-base leading-relaxed">
              A practical free hosting stack with the controls normally reserved for paid
              services.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.1}>
              <div className="glass-panel p-6 h-full group hover:border-cyan/30 hover:shadow-[0_0_40px_rgba(69,208,255,0.08)] transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center mb-4 text-cyan group-hover:bg-cyan/20 transition-colors">
                  <f.icon size={18} />
                </div>
                <h3 className="text-base font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
