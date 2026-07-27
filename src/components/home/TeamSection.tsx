import { Crown, Users, Flag, Settings } from 'lucide-react'
import { ButtonLink } from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'

const team = [
  {
    name: 'Nischal Adhikari',
    role: 'Founder & CEO',
    roleColor: 'text-orange',
    badgeBg: 'bg-orange/20 border-orange/40',
    badgeIcon: Crown,
    desc: 'Vision, infrastructure, platform direction',
    descIcon: Flag,
  },
  {
    name: 'XYZ',
    role: 'Co-Founder',
    roleColor: 'text-cyan',
    badgeBg: 'bg-cyan/20 border-cyan/40',
    badgeIcon: Users,
    desc: 'Operations, support, service stability',
    descIcon: Settings,
  },
]

export default function TeamSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-medium text-orange uppercase tracking-wider mb-3">
              Our Leadership
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">
              Meet the Team Behind{' '}
              <span className="gradient-text">Aawaz Nodes</span>
            </h2>
            <p className="text-muted text-base leading-relaxed">
              Built by a focused team working on performance, community, and accessible
              Minecraft hosting.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.15}>
              <div className="glass-panel overflow-hidden group hover:border-cyan/20 transition-all duration-300">
                <div className="relative h-64 bg-gradient-to-br from-panel-strong to-panel flex items-center justify-center overflow-hidden">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange/20 to-cyan/20 border-2 border-line flex items-center justify-center">
                    <member.badgeIcon size={40} className="text-muted" />
                  </div>
                  <span
                    className={`absolute top-3 right-3 w-8 h-8 rounded-full ${member.badgeBg} border flex items-center justify-center`}
                  >
                    <member.badgeIcon size={14} />
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <span className={`text-sm font-medium ${member.roleColor}`}>
                    {member.role}
                  </span>
                  <div className="my-3 h-px bg-line" />
                  <p className="text-sm text-muted flex items-center gap-2">
                    <member.descIcon size={13} className="text-muted/60" />
                    {member.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonLink href="/features" variant="primary">
              Meet The Team
            </ButtonLink>
            <ButtonLink
              href="https://discord.gg/9Vw3XBtZ3N"
              variant="secondary"
            >
              Join Discord
            </ButtonLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
