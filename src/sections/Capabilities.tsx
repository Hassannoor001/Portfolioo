import { CAPABILITIES } from '../data/constants';
import { FadeIn } from '../components/ui/FadeIn';

export function Capabilities() {
  return (
    <section className="py-28 border-t border-white/5" aria-labelledby="capabilities-heading">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="font-mono text-xs text-[#4e7eff] tracking-widest uppercase mb-4">
            05 — What I Do
          </p>
          <h2
            id="capabilities-heading"
            className="font-serif text-4xl sm:text-5xl text-white leading-tight mb-16"
          >
            Areas of practice
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-xl overflow-hidden">
          {CAPABILITIES.map((cap, i) => (
            <FadeIn key={cap.title} delay={i * 50}>
              <div className="bg-[#0c0c0f] p-6 h-full group hover:bg-[#131318] transition-colors duration-200">
                <span className="text-2xl text-[#4e7eff]/60 block mb-4" aria-hidden="true">
                  {cap.icon}
                </span>
                <h3 className="text-white text-sm font-medium mb-3 leading-snug">
                  {cap.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
