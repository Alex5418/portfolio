'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

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
  const [isOpen, setIsOpen] = useState(false)

  // Close on route change
  useEffect(() => { setIsOpen(false) }, [pathname])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-[#1a1a2a]" style={{ background: 'rgba(10,10,18,0.85)', backdropFilter: 'blur(16px)' }}>
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between h-14">
          <Link href="/" className="text-base font-semibold tracking-tight">
            <span className="text-accent">A</span>lex Wang
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-1">
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

          {/* Hamburger button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setIsOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-text-primary origin-center"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-px bg-text-primary"
              transition={{ duration: 0.15 }}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-text-primary origin-center"
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="fixed top-14 left-0 right-0 z-40 md:hidden border-b border-[#1a1a2a]"
              style={{ background: 'rgba(10,10,18,0.97)', backdropFilter: 'blur(16px)' }}
            >
              <div className="flex flex-col items-center py-6 gap-1">
                {navLinks.map((l) => {
                  const active = pathname === l.href
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={`w-full text-center px-6 py-3 text-sm transition-all ${
                        active ? 'text-accent font-semibold' : 'text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {l.label}
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
