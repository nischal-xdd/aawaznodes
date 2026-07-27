import { type ReactNode } from 'react'
import { cn } from '../../lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-orange text-bg font-semibold hover:brightness-110 hover:shadow-[0_0_30px_rgba(255,154,61,0.3)]',
  secondary:
    'bg-panel-strong border border-line text-text font-medium hover:border-cyan hover:text-cyan',
  ghost:
    'bg-transparent text-muted font-medium hover:text-text',
}

export default function Button({
  className,
  variant = 'primary',
  children,
  disabled,
  type = 'button',
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-[var(--radius-site)] px-6 py-3 text-sm transition-all duration-200 cursor-pointer whitespace-nowrap',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </button>
  )
}

export function ButtonLink({
  variant = 'primary',
  href,
  className,
  children,
}: {
  variant?: ButtonVariant
  href: string
  className?: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-[var(--radius-site)] px-6 py-3 text-sm transition-all duration-200 cursor-pointer whitespace-nowrap',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </a>
  )
}
