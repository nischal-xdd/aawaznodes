import { cn } from '../../lib/cn'

interface ChipProps {
  children: React.ReactNode
  variant?: 'default' | 'primary'
  className?: string
}

export default function Chip({ children, variant = 'default', className }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium border',
        variant === 'primary'
          ? 'bg-orange/10 border-orange/30 text-orange'
          : 'bg-panel border-line text-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}
