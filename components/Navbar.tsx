'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Education', href: '/education' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="sticky top-0 z-50 border-b border-border" style={{ background: 'rgba(10,10,18,0.85)', backdropFilter: 'blur(16px)' }}>
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between h-14">
        <Link href="/" className="text-base font-semibold tracking-tight">
          <span className="text-accent">A</span>lex Wang
        </Link>
        <div className="flex gap-1">
          {navLinks.map((l) => {
            const active = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3.5 py-1.5 text-xs rounded-md transition-all ${
                  active ? 'bg-[#e9456018] text-accent font-semibold' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {l.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
