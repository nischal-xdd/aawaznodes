import { useEffect, useRef } from 'react'

export default function CursorLight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const move = (e: MouseEvent) => {
      el.style.setProperty('--cx', `${e.clientX}px`)
      el.style.setProperty('--cy', `${e.clientY}px`)
    }

    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[1] opacity-60 hidden md:block"
      style={{
        background:
          'radial-gradient(600px circle at var(--cx, 50%) var(--cy, 50%), rgba(69,208,255,0.06), transparent 60%)',
      }}
      aria-hidden="true"
    />
  )
}
