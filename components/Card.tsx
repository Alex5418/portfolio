'use client'
import { useState, CSSProperties } from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  style?: CSSProperties
}

export default function Card({ children, className = '', hover, style }: CardProps) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={style}
      className={`rounded-xl p-4 border transition-all duration-200 ${
        hovered && hover ? 'bg-[#14142a] border-border-hover' : 'bg-surface border-border'
      } ${className}`}
    >
      {children}
    </div>
  )
}
