import { MessageCircle, ExternalLink, Users, Shield, Zap, Heart } from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'

const perks = [
  { icon: Users, title: 'Community', desc: 'Join hundreds of server owners sharing tips and advice.' },
  { icon: Shield, title: 'Support', desc: 'Get direct help from staff and experienced community members.' },
  { icon: Zap, title: 'Updates', desc: 'Be the first to know about new features and improvements.' },
  { icon: Heart, title: 'Events', desc: 'Participate in community events, giveaways, and competitions.' },
]

export default function Community() {
  return (
    <div className="py-20 md:py-28">
      <div className="container-site">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-medium text-orange uppercase tracking-wider mb-3">
              Community
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
              Join our Discord
            </h1>
            <p className="text-muted text-base md:text-lg leading-relaxed">
              Connect with other server owners, get support, and stay updated on the
              latest platform developments.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {perks.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <div className="glass-panel p-6 h-full group hover:border-cyan/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center mb-4 text-cyan group-hover:bg-cyan/20 transition-colors">
                  <p.icon size={18} />
                </div>
                <h3 className="text-base font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="glass-panel p-8 md:p-12 text-center glow-cyan">
            <div className="w-16 h-16 rounded-2xl bg-[#5865F2]/20 border border-[#5865F2]/40 flex items-center justify-center mx-auto mb-6">
              <MessageCircle size={28} className="text-[#5865F2]" />
            </div>
            <h2 className="text-2xl font-display font-bold mb-3">
              Ready to join?
            </h2>
            <p className="text-muted mb-6 max-w-md mx-auto">
              Our Discord server is the best way to get support, meet the community, and
              stay informed.
            </p>
            <a
              href="https://discord.gg/9Vw3XBtZ3N"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-[var(--radius-site)] px-6 py-3 text-sm font-semibold bg-[#5865F2] text-white hover:brightness-110 transition-all"
            >
              <ExternalLink size={14} />
              Join Discord Server
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
