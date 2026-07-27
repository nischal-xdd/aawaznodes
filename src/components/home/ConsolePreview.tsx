import { useState, useEffect } from 'react'
import { Cpu, HardDrive, Activity, Terminal } from 'lucide-react'
import { ButtonLink } from '../ui/Button'

const consoleLines = [
  '> Allocating free node...',
  '> Loading Paper environment...',
  '> Mods and plugins ready.',
  '> Full panel access enabled.',
  '> World online. TPS stable.',
]

export default function ConsolePreview() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= consoleLines.length) {
          clearInterval(timer)
          return prev
        }
        return prev + 1
      })
    }, 800)
    return () => clearInterval(timer)
  }, [])

  return (
    <article className="glass-panel overflow-hidden glow-cyan">
      <header className="flex items-center justify-between px-5 py-3 border-b border-line">
        <div className="flex items-center gap-2 text-xs font-medium font-mono text-muted">
          <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
          AAWAZ CONSOLE
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-green/10 border border-green/30 px-2.5 py-0.5 text-[10px] font-medium text-green">
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
          NODE ONLINE
        </span>
      </header>

      <div className="grid grid-cols-3 gap-px bg-line">
        {[
          { icon: Activity, label: 'TPS', value: '20.0' },
          { icon: HardDrive, label: 'RAM', value: '4GB' },
          { icon: Cpu, label: 'CPU', value: '125%' },
        ].map((stat) => (
          <div key={stat.label} className="bg-panel p-4 text-center">
            <span className="text-[10px] text-muted uppercase tracking-wider flex items-center justify-center gap-1 mb-1">
              <stat.icon size={10} />
              {stat.label}
            </span>
            <strong className="text-lg font-bold font-display text-text">{stat.value}</strong>
          </div>
        ))}
      </div>

      <div className="p-5 bg-[#050d18] min-h-[160px]">
        <div className="flex items-center gap-2 mb-3">
          <Terminal size={12} className="text-cyan" />
          <span className="text-[10px] text-muted uppercase tracking-wider font-mono">
            Console Output
          </span>
        </div>
        <div className="font-mono text-xs space-y-1.5">
          {consoleLines.slice(0, visibleLines).map((line, i) => (
            <div
              key={i}
              className="text-green/80 animate-[fadeIn_0.3s_ease-out]"
              style={{ animationFillMode: 'both' }}
            >
              {line}
            </div>
          ))}
          {visibleLines < consoleLines.length && (
            <span className="inline-block w-2 h-3.5 bg-cyan/70 animate-pulse" />
          )}
        </div>
      </div>

      <footer className="flex gap-3 p-5 border-t border-line">
        <ButtonLink href="/start-free" variant="primary" className="!text-xs !px-4 !py-2">
          Create Server
        </ButtonLink>
        <ButtonLink href="/features" variant="ghost" className="!text-xs !px-4 !py-2">
          Explore Features
        </ButtonLink>
      </footer>
    </article>
  )
}
