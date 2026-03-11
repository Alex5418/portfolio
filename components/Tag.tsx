export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] px-1.5 py-0.5 rounded font-mono whitespace-nowrap"
      style={{ background: '#0f346020', color: '#5a8abf' }}>
      {children}
    </span>
  )
}
