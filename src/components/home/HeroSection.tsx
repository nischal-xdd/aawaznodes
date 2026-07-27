import { ButtonLink } from '../ui/Button'
import Chip from '../ui/Chip'
import ScrollReveal from '../ui/ScrollReveal'
import ConsolePreview from './ConsolePreview'

export default function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-6">
              <Chip variant="primary">Free Minecraft Hosting</Chip>
              <Chip>India-focused platform</Chip>
              <Chip>No credit card</Chip>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-display font-bold leading-[1.1] tracking-tight mb-6">
              Free Minecraft server hosting with a cleaner control experience.
            </h1>

            <p className="text-muted text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              A free hosting experience paired with a focused dashboard for servers,
              rewards, and control.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <ButtonLink href="/start-free" variant="primary">
                Create Account
              </ButtonLink>
              <ButtonLink href="/features" variant="secondary">
                Open Dashboard
              </ButtonLink>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: '4GB RAM', sub: 'Upgradeable to 8GB' },
                { label: '6GB Disk', sub: 'Upgradeable to 16GB' },
                { label: '125% CPU', sub: 'Upgradeable to 200%' },
                { label: 'Full Panel', sub: 'Java and Bedrock' },
              ].map((item) => (
                <div key={item.label} className="text-center sm:text-left">
                  <strong className="text-sm font-bold text-text block">{item.label}</strong>
                  <span className="text-xs text-muted">{item.sub}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="right">
            <ConsolePreview />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
