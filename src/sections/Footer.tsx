export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      className="border-t border-white/5 py-12"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-serif text-white/80 text-lg mb-1">Hassan Noor Shaban</p>
            <p className="text-white/35 text-sm font-mono">Software Developer</p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-2">
            <p className="text-white/30 text-sm">
              [your.email@placeholder.com]
            </p>
            <p className="text-white/20 text-xs font-mono">
              © {year} Hassan Noor Shaban. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
