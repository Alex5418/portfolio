'use client'
import { useState } from 'react'
import Link from 'next/link'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Badge from '@/components/Badge'
import Tag from '@/components/Tag'
import courses from '@/data/courses.json'

const education = [
  { school: 'Gies College of Business, UIUC', degree: 'M.S. Technology Management', period: 'Aug 2024 — Dec 2025', concentration: 'Business Analysis and IT' },
  { school: 'University of Illinois at Urbana-Champaign', degree: 'B.S. Economics, Minor in Computer Science', period: 'Aug 2020 — May 2024' },
]

const categoryColors: Record<string, { bg: string; text: string; label: string }> = {
  cs: { bg: '#e9456018', text: '#e94560', label: 'CS' },
  ba: { bg: '#53348318', text: '#9575cd', label: 'BA' },
  econ: { bg: '#0f346018', text: '#5a8abf', label: 'Econ' },
  math: { bg: '#6b8f7118', text: '#6b8f71', label: 'Math' },
}

const cats = ['all', 'cs', 'ba', 'econ', 'math']

export default function EducationContent({ initialFilter }: { initialFilter: string }) {
  const validFilter = cats.includes(initialFilter) ? initialFilter : 'all'
  const [filter, setFilter] = useState(validFilter)
  const filtered = courses.filter((c) => filter === 'all' || c.category === filter)

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Section title="Education" subtitle="Academic Background">
        {education.map((ed) => (
          <Card key={ed.school} className="mb-3">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <div className="text-base font-semibold">{ed.degree}</div>
                <div className="text-[13px] text-text-secondary">{ed.school}</div>
                {'concentration' in ed && ed.concentration && (
                  <div className="text-xs text-accent-purple mt-1">Concentration: {ed.concentration}</div>
                )}
              </div>
              <span className="font-mono text-xs text-accent">{ed.period}</span>
            </div>
          </Card>
        ))}
      </Section>

      <Section title="Coursework" subtitle="Courses">
        <div className="flex gap-1.5 mb-5 flex-wrap">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3.5 py-1 text-[11px] rounded-full uppercase tracking-wide transition-all ${
                filter === c
                  ? 'border border-accent bg-[#e9456015] text-accent'
                  : 'border border-[#222] text-[#777] hover:border-[#444]'
              }`}
            >
              {c === 'all' ? 'All' : categoryColors[c]?.label || c}
            </button>
          ))}
        </div>

        <div className="grid gap-2">
          {filtered.map((c) => {
            const cat = categoryColors[c.category] || { bg: '#1a1a2a', text: '#888', label: c.category }
            const projectId = 'project' in c ? c.project : undefined
            return (
              <div key={c.name} className="flex items-center justify-between px-4 py-3 bg-surface border border-[#1a1a2a] rounded-lg gap-3 flex-wrap">
                <div className="flex items-center gap-2.5 flex-1">
                  <Badge style={{ background: cat.bg, color: cat.text }}>{cat.label}</Badge>
                  <span className="text-[13px] font-medium">{c.name}</span>
                  {projectId && (
                    <Link
                      href={`/projects?highlight=${projectId}`}
                      className="text-[10px] text-accent hover:underline"
                    >
                      🔗 View Project
                    </Link>
                  )}
                </div>
                <div className="flex gap-1">
                  {c.tools.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
            )
          })}
        </div>
      </Section>
    </div>
  )
}
