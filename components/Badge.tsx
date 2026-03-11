import { CSSProperties } from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'work' | 'education' | 'default'
  style?: CSSProperties
}

const variantStyles = {
  work: { background: '#e9456018', color: '#e94560' },
  education: { background: '#0f346018', color: '#5a8abf' },
  default: { background: '#1a1a2a', color: '#888' },
}

export default function Badge({ children, variant = 'default', style }: BadgeProps) {
  const vs = variantStyles[variant]
  return (
    <span
      style={{ ...vs, ...style }}
      className="text-[10px] font-semibold px-2 py-0.5 rounded-[10px] whitespace-nowrap tracking-wide font-mono"
    >
      {children}
    </span>
  )
}
