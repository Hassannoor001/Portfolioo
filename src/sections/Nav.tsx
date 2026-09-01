import { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../data/constants';

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <header
        role="banner"
        className={`transition-all duration-300 w-full max-w-4xl rounded-full ${
          scrolled ? 'glass-card' : 'bg-transparent'
        }`}
      >
        <nav
          className="px-6 h-14 flex items-center justify-between"
          aria-label="Main navigation"
        >
          <a
            href="#"
            className="font-serif text-lg text-white/90 hover:text-white transition-colors"
            aria-label="Hassan Noor Shaban — home"
          >
            HNS
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-sans text-white/60 hover:text-white transition-colors tracking-wide"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Get in Touch
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-5 h-px bg-white/70 transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-5 h-px bg-white/70 transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-5 h-px bg-white/70 transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </nav>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="md:hidden glass-card rounded-2xl mt-2 mx-2 p-6">
            <ul className="flex flex-col gap-4" role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block font-sans text-white/60 hover:text-white transition-colors py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  className="flex items-center justify-center w-full gap-2 px-4 py-3 rounded-full bg-[#4e7eff] text-white text-sm font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  )
}
