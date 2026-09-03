import { TIMELINE } from '../data/constants';
import { FadeIn } from '../components/ui/FadeIn';

export function Journey() {
  return (
    <section
      id="journey"
      className="py-28"
      aria-labelledby="journey-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="font-mono text-xs text-[#4e7eff] tracking-widest uppercase mb-4">
            04 — Development Journey
          </p>
          <h2
            id="journey-heading"
            className="font-serif text-4xl sm:text-5xl text-white leading-tight mb-16"
          >
            From foundation to enterprise
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 sm:left-[5.5rem] top-0 bottom-0 w-px bg-white/8"
            aria-hidden="true"
          />

          <ol className="space-y-0" aria-label="Development timeline">
            {TIMELINE.map((item, i) => (
              <FadeIn key={i} delay={i * 80}>
                <li className="relative flex gap-8 sm:gap-12 pb-10">
                  {/* Dot */}
                  <div
                    className="relative flex-shrink-0 flex items-start"
                    aria-hidden="true"
                  >
                    <div className="sm:w-20 flex justify-end">
                      <span className="font-mono text-xs text-white/30 pt-1 hidden sm:block">
                        {item.year}
                      </span>
                    </div>
                    <div className="relative ml-0 sm:ml-4 mt-1.5">
                      <div className="w-2.5 h-2.5 rounded-full border-2 border-[#4e7eff] bg-[#0a0a0c] shadow-[0_0_8px_rgba(78,126,255,0.6)]" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="pt-0">
                    <span className="font-mono text-xs text-[#4e7eff] sm:hidden block mb-1">
                      {item.year}
                    </span>
                    <h3 className="text-white font-medium mb-1.5">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed max-w-lg">{item.desc}</p>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
