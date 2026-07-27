import {
  Zap, Layout, Puzzle, ShieldCheck, Database, Terminal,
  FileText, Clock, Globe, Activity,
} from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'

const features = [
  { icon: Zap, title: 'Instant Setup', desc: 'Launch servers in seconds with our streamlined creation flow.' },
  { icon: Layout, title: 'Full Control Panel', desc: 'Complete server management with files, console, and settings.' },
  { icon: Puzzle, title: 'Plugin Support', desc: 'Install Paper, Purpur, Fabric, Forge, and more with one click.' },
  { icon: ShieldCheck, title: 'DDoS Protection', desc: 'Automatic mitigation keeps your server online during attacks.' },
  { icon: Database, title: 'Database Access', desc: 'MySQL databases included for plugins that need persistent data.' },
  { icon: Terminal, title: 'Live Console', desc: 'Real-time server console with command input and log streaming.' },
  { icon: FileText, title: 'File Manager', desc: 'Browse, upload, edit, and manage all server files from the panel.' },
  { icon: Clock, title: 'Scheduled Tasks', desc: 'Automate backups, restarts, and custom commands on a schedule.' },
  { icon: Globe, title: 'Java & Bedrock', desc: 'Support for both Java Edition and Bedrock Edition servers.' },
  { icon: Activity, title: 'Server Monitoring', desc: 'Track CPU, RAM, disk, and network usage in real time.' },
]

export default function Features() {
  return (
    <div className="py-20 md:py-28">
      <div className="container-site">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-medium text-orange uppercase tracking-wider mb-3">
              Features
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
              Everything you need to host
            </h1>
            <p className="text-muted text-base md:text-lg leading-relaxed">
              A complete hosting platform with all the tools to manage your Minecraft
              community.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.06}>
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
    </div>
  )
}
