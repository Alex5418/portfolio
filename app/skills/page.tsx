import Section from '@/components/Section'
import Card from '@/components/Card'
import skillsData from '@/data/skills.json'
import personal from '@/data/personal.json'

export default function SkillsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Section title="Skills" subtitle="Tech Stack">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {skillsData.map((cat) => (
            <Card key={cat.category}>
              <div className="text-[10px] font-bold text-accent mb-3.5 uppercase tracking-wide">
                {cat.category}
              </div>
              {cat.items.map((item) => (
                <div key={item.name} className="mb-2.5">
                  <div className="text-sm font-semibold">{item.name}</div>
                  <div className="text-[11px] text-text-muted">{item.detail}</div>
                </div>
              ))}
            </Card>
          ))}
        </div>
      </Section>

      <Section title="GitHub Activity" subtitle="Open Source">
        <Card className="text-center py-8">
          <div className="text-3xl mb-3">💻</div>
          <div className="text-sm text-text-secondary mb-2">
            GitHub contribution graph and language stats will be auto-generated here
          </div>
          <a href={personal.github} target="_blank" rel="noopener noreferrer"
            className="text-xs text-accent hover:underline">
            View GitHub Profile ↗
          </a>
        </Card>
      </Section>
    </div>
  )
}
