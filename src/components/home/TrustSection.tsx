import { Activity, MapPin, MessageCircle, Crown } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'

const items = [
  {
    icon: Activity,
    title: 'Live status',
    desc: 'Review service availability and operational notices from a dedicated status page.',
  },
  {
    icon: MapPin,
    title: 'Node visibility',
    desc: 'Understand locations, latency expectations, and available hosting capacity.',
  },
  {
    icon: MessageCircle,
    title: 'Community support',
    desc: 'Use the official Discord community for direct public help and platform updates.',
  },
  {
    icon: Crown,
    title: 'Premium when ready',
    desc: 'Compare paid plans on this site, then continue through manual activation.',
  },
]

export default function TrustSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-medium text-orange uppercase tracking-wider mb-3">
              Performance And Trust
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">
              Built for real communities
            </h2>
            <p className="text-muted text-base leading-relaxed">
              Clear product limits, visible status, and direct support keep hosting
              predictable.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.1}>
              <div className="glass-panel p-6 h-full group hover:border-orange/30 hover:shadow-[0_0_40px_rgba(255,154,61,0.08)] transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-orange/10 border border-orange/20 flex items-center justify-center mb-4 text-orange group-hover:bg-orange/20 transition-colors">
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
