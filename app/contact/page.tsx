import Section from '@/components/Section'
import Card from '@/components/Card'
import Badge from '@/components/Badge'
import personal from '@/data/personal.json'

const contacts = [
  { label: 'Email', value: personal.email, link: `mailto:${personal.email}`, icon: '📧' },
  { label: 'LinkedIn', value: 'Yiduo Wang', link: personal.linkedin, icon: '💼' },
  { label: 'GitHub', value: 'Alex5418', link: personal.github, icon: '💻' },
  { label: 'Location', value: personal.location, icon: '📍' },
]

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Section title="Get In Touch" subtitle="Contact">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {contacts.map((c) => (
            <Card key={c.label} hover>
              <div className="text-2xl mb-2.5">{c.icon}</div>
              <div className="text-[10px] uppercase tracking-wide text-text-muted mb-1">{c.label}</div>
              {'link' in c && c.link ? (
                <a href={c.link} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-accent font-medium hover:underline">
                  {c.value} ↗
                </a>
              ) : (
                <div className="text-sm text-[#ccc] font-medium">{c.value}</div>
              )}
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Download Resume" subtitle="PDF">
        <Card className="text-center py-8">
          <div className="text-3xl mb-3">📄</div>
          <div className="text-sm text-text-secondary mb-4">
            Resume PDF download link will go here
          </div>
          <button className="px-7 py-2.5 text-sm rounded-lg border border-accent text-accent hover:bg-[#e9456010] transition-colors">
            Download Resume
          </button>
        </Card>
      </Section>

      <Section title="AI Assistant" subtitle="Chat">
        <Card className="text-center py-8" style={{ background: 'linear-gradient(135deg, #14142a, #0f0f1c)', border: '1px solid #e9456030' }}>
          <div className="text-3xl mb-3">🤖</div>
          <div className="text-base font-semibold mb-2">Portfolio Chatbot</div>
          <div className="text-[13px] text-text-secondary mb-4 max-w-sm mx-auto">
            Ask me anything about Alex — education, projects, skills, or experience. Powered by RAG + Claude API.
          </div>
          <Badge style={{ background: '#53348325', color: '#9575cd' }}>Coming Soon</Badge>
        </Card>
      </Section>
    </div>
  )
}
