import { CAPABILITIES } from '../data/constants';
import { FadeIn } from '../components/ui/FadeIn';

export function Capabilities() {
  return (
    <section className="py-28" aria-labelledby="capabilities-heading">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CAPABILITIES.map((cap, i) => (
            <FadeIn key={cap.title} delay={i * 50}>
              <div className="glass-card rounded-2xl p-6 h-full group hover:border-[#4e7eff]/30 hover:bg-white/[0.06] transition-all duration-300 glow-accent-hover">
                <span className="text-2xl text-[#4e7eff]/60 block mb-4 group-hover:text-[#4e7eff]/90 transition-colors" aria-hidden="true">
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
