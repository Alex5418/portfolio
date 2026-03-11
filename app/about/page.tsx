import Section from '@/components/Section'
import Card from '@/components/Card'
import Badge from '@/components/Badge'
import personal from '@/data/personal.json'
import timelineData from '@/data/timeline.json'
import experience from '@/data/experience.json'

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Section title="About Me" subtitle="Background">
        <Card>
          <p className="text-[15px] leading-[1.8] text-[#ccc]">{personal.bio}</p>
        </Card>
      </Section>

      <Section title="Journey" subtitle="Timeline">
        <div className="relative pl-7">
          <div className="absolute left-[6px] top-1 bottom-1 w-px bg-[#1a1a2a]" />
          {timelineData.map((e, i) => (
            <div key={i} className="mb-6 relative">
              <div className={`absolute -left-[25px] top-[5px] w-[11px] h-[11px] rounded-full border-2 border-bg ${e.type === 'work' ? 'bg-accent' : 'bg-accent-blue'}`} />
              <div className="flex items-center gap-2.5 mb-1">
                <span className="font-mono text-xs text-accent font-semibold">{e.year}</span>
                <Badge variant={e.type === 'work' ? 'work' : 'education'}>{e.type}</Badge>
              </div>
              <div className="text-[15px] font-semibold mb-0.5">{e.title}</div>
              <div className="text-[13px] text-text-secondary">{e.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Experience" subtitle="Work">
        {experience.map((job) => (
          <Card key={job.company} className="mb-3">
            <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
              <div>
                <div className="text-base font-semibold">{job.company}</div>
                <div className="text-[13px] text-text-secondary">{job.title}</div>
              </div>
              <div className="text-right">
                <div className="font-mono text-xs text-accent">{job.period}</div>
                <div className="text-[11px] text-text-muted">{job.location}</div>
              </div>
            </div>
            {job.bullets.map((b, i) => (
              <div key={i} className="flex gap-2 mb-1 text-[13px] text-[#bbb] leading-relaxed">
                <span className="text-[#333] shrink-0">•</span>{b}
              </div>
            ))}
          </Card>
        ))}
      </Section>
    </div>
  )
}
