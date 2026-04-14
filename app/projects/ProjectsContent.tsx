'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Badge from '@/components/Badge'
import Tag from '@/components/Tag'
import projectsData from '@/data/manual-projects.json'

const statusStyles: Record<string, { bg: string; text: string; label: string }> = {
  completed: { bg: '#6b8f7120', text: '#6b8f71', label: 'Completed' },
  'in-progress': { bg: '#e9456020', text: '#e94560', label: 'In Progress' },
  planned: { bg: '#53348320', text: '#9575cd', label: 'Coming Soon' },
}

type FeaturedProject = { id: string; title: string; desc: string; tags: string[]; status: string; type: string; from?: string; fromCategory?: string; github?: string }
type ArchiveProject = { id: string; title: string; desc: string; tags: string[]; github?: string; from: string; fromCategory?: string }

export default function ProjectsContent({ highlight }: { highlight?: string }) {
  const [tagFilter, setTagFilter] = useState('all')
  const highlightRef = useRef<HTMLDivElement>(null)
  const [pulse, setPulse] = useState(false)

  const allTags = ['all', ...Array.from(new Set([
    ...projectsData.featured.flatMap((p) => p.tags),
    ...projectsData.archive.flatMap((p) => p.tags),
  ]))]

  const filterFn = (p: FeaturedProject | ArchiveProject) => tagFilter === 'all' || p.tags.includes(tagFilter)

  // Scroll to and pulse highlighted card
  useEffect(() => {
    if (!highlight) return
    const timer = setTimeout(() => {
      highlightRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      setPulse(true)
      setTimeout(() => setPulse(false), 2000)
    }, 300)
    return () => clearTimeout(timer)
  }, [highlight])

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Section title="Projects" subtitle="What I Have Built">
        <p className="text-[13px] text-text-muted -mt-4 mb-5">
          From classroom economics to building Flask apps and data pipelines.
        </p>
        <div className="flex gap-1.5 mb-6 flex-wrap">
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setTagFilter(t)}
              className={`px-3 py-0.5 text-[10px] rounded-xl font-mono transition-all ${
                tagFilter === t
                  ? 'border border-accent bg-[#e9456015] text-accent'
                  : 'border border-[#1a1a2a] text-text-muted hover:border-[#333]'
              }`}
            >
              {t === 'all' ? 'All' : t}
            </button>
          ))}
        </div>
      </Section>

      {/* Featured */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-base">⭐</span>
          <span className="text-sm font-bold text-accent">Featured</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {(projectsData.featured as FeaturedProject[]).filter(filterFn).map((p) => {
            const st = statusStyles[p.status] || statusStyles.completed
            const isHighlighted = highlight === p.id
            return (
              <div
                key={p.id}
                ref={isHighlighted ? highlightRef : undefined}
                className={`transition-all duration-300 rounded-xl ${isHighlighted && pulse ? 'ring-2 ring-accent' : ''}`}
              >
                <Card hover>
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <div className="text-[15px] font-semibold leading-snug">{p.title}</div>
                    <Badge style={{ background: st.bg, color: st.text }}>{st.label}</Badge>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed mb-3">{p.desc}</p>
                  <div className="flex gap-1 flex-wrap mb-2">
                    {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                  <div className="flex justify-between items-center">
                    {p.from && (
                      <div className="text-[10px] text-text-muted">
                        {p.type === 'course' ? '📚' : '💼'}{' '}
                        {p.type === 'course' && p.fromCategory ? (
                          <Link href={`/education?highlight=${p.fromCategory}`} className="hover:text-accent hover:underline transition-colors">
                            From: {p.from}
                          </Link>
                        ) : (
                          <>From: {p.from}</>
                        )}
                      </div>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-[10px] text-text-muted hover:text-text-secondary transition-colors">
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </Card>
              </div>
            )
          })}
        </div>
      </div>

      {/* Archive */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-base">📚</span>
          <span className="text-sm font-bold text-accent-green">Coursework Archive</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          {(projectsData.archive as ArchiveProject[]).filter(filterFn).map((p) => {
            const isHighlighted = highlight === p.id
            return (
              <div
                key={p.id}
                ref={isHighlighted ? highlightRef : undefined}
                className={`bg-[#0c0c18] border rounded-lg p-4 transition-all duration-300 ${
                  isHighlighted && pulse ? 'border-accent ring-1 ring-accent' : 'border-[#151528]'
                }`}
              >
                <div className="text-sm font-semibold mb-1">{p.title}</div>
                <p className="text-[11px] text-text-secondary leading-relaxed mb-2">{p.desc}</p>
                <div className="flex gap-1 flex-wrap mb-1.5">
                  {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
                <div className="flex justify-between items-center">
                  <Link
                    href={`/education?highlight=${p.fromCategory || 'all'}`}
                    className="text-[10px] text-accent-green hover:underline"
                  >
                    🔗 {p.from}
                  </Link>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-[10px] text-text-muted hover:text-text-secondary transition-colors">
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
