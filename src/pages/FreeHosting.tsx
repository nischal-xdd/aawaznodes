import { Server, Zap, HardDrive, Cpu, Shield, Headphones } from 'lucide-react'
import { ButtonLink } from '../components/ui/Button'
import ScrollReveal from '../components/ui/ScrollReveal'

const specs = [
  { icon: HardDrive, label: '4GB RAM', desc: 'Upgradeable up to 8GB' },
  { icon: Server, label: '6GB Disk', desc: 'Upgradeable up to 16GB' },
  { icon: Cpu, label: '125% CPU', desc: 'Upgradeable up to 200%' },
  { icon: Shield, label: 'DDoS Protection', desc: 'Automatic mitigation' },
  { icon: Zap, label: 'Instant Deploy', desc: 'Server ready in seconds' },
  { icon: Headphones, label: 'Community Support', desc: 'Via Discord' },
]

export default function FreeHosting() {
  return (
    <div className="py-20 md:py-28">
      <div className="container-site">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-medium text-orange uppercase tracking-wider mb-3">
              Free Hosting
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
              Start your Minecraft server for free
            </h1>
            <p className="text-muted text-base md:text-lg leading-relaxed">
              Get a fully-featured Minecraft server at no cost. No credit card required.
              Upgrade as your community grows.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {specs.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.08}>
              <div className="glass-panel p-6 group hover:border-cyan/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center mb-4 text-cyan group-hover:bg-cyan/20 transition-colors">
                  <s.icon size={18} />
                </div>
                <h3 className="text-base font-semibold mb-1">{s.label}</h3>
                <p className="text-sm text-muted">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="glass-panel p-8 md:p-12 text-center">
            <h2 className="text-2xl font-display font-bold mb-4">
              Ready to launch your server?
            </h2>
            <p className="text-muted mb-6 max-w-lg mx-auto">
              Create an account, choose your server configuration, and start playing in
              minutes. It&apos;s completely free.
            </p>
            <ButtonLink href="/start-free" variant="primary">
              Create Free Server
            </ButtonLink>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
