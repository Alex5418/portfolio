interface SectionProps {
  title: string
  subtitle?: string
  children: React.ReactNode
}

export default function Section({ title, subtitle, children }: SectionProps) {
  return (
    <div className="mb-14">
      <div className="mb-6">
        {subtitle && (
          <p className="font-mono text-[10px] uppercase tracking-[3px] text-accent mb-1">{subtitle}</p>
        )}
        <h2 className="text-2xl font-light tracking-tight">{title}</h2>
      </div>
      {children}
    </div>
  )
}
