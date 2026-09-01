export function Tag({
  children,
  variant = 'default',
}: {
  children: React.ReactNode
  variant?: 'default' | 'blue' | 'orange' | 'green'
}) {
  const colors = {
    default: 'bg-white/5 text-white/50 border border-white/8',
    blue: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    orange: 'bg-orange-500/10 text-orange-400 border border-orange-500/20',
    green: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  }
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono tracking-wide ${colors[variant]}`}
    >
      {children}
    </span>
  )
}
