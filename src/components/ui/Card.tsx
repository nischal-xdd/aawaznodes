import { cn } from '../../lib/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'strong'
}

export default function Card({ children, className, variant = 'default' }: CardProps) {
  return (
    <div
      className={cn(
        'glass-panel p-6 transition-all duration-300',
        variant === 'strong' && 'bg-panel-strong',
        'hover:border-cyan/30 hover:shadow-[0_0_40px_rgba(69,208,255,0.08)]',
        className,
      )}
    >
      {children}
    </div>
  )
}
