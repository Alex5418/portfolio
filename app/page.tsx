'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const keywords = ['Economics', 'Computer Science', 'Business Analytics', 'Data Visualization']

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-[80vh] text-center relative">
      {/* Decorative orb */}
      <div className="absolute top-20 right-[5%] w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #e9456008 0%, transparent 70%)' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-mono text-[11px] uppercase tracking-[5px] text-accent mb-4">Portfolio</p>
        <h1 className="text-5xl font-extralight tracking-tight leading-tight mb-3">
          Yiduo (Alex) Wang
        </h1>
        <p className="text-base text-text-secondary font-light mb-10 tracking-wide">
          Economist × Technologist × Data Storyteller
        </p>

        <div className="flex gap-2 justify-center flex-wrap mb-12">
          {keywords.map((k) => (
            <span key={k} className="text-[11px] px-4 py-1.5 rounded-full border border-[#222] text-[#999]">
              {k}
            </span>
          ))}
        </div>

        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/projects"
            className="px-6 py-2.5 text-sm rounded-lg bg-accent text-white font-medium hover:bg-[#d63a53] transition-colors">
            View Projects
          </Link>
          <Link href="/about"
            className="px-6 py-2.5 text-sm rounded-lg border border-[#333] text-[#aaa] hover:border-[#555] transition-colors">
            About Me
          </Link>
          <Link href="/contact"
            className="px-6 py-2.5 text-sm rounded-lg border border-[#333] text-[#aaa] hover:border-[#555] transition-colors">
            Get In Touch
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
