import { WHY_POINTS } from '../data/constants';
import { FadeIn } from '../components/ui/FadeIn';

export function WhyMe() {
  return (
    <section
      className="py-28"
      aria-labelledby="why-me-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="font-mono text-xs text-[#4e7eff] tracking-widest uppercase mb-4">
            06 — Why Work With Me
          </p>
          <h2
            id="why-me-heading"
            className="font-serif text-4xl sm:text-5xl text-white leading-tight mb-16"
          >
            What I bring to the work
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_POINTS.map((point, i) => (
            <FadeIn key={point.label} delay={i * 60}>
              <article className="glass-card p-6 rounded-2xl hover:border-[#4e7eff]/30 hover:bg-white/[0.06] transition-all duration-300">
                <h3 className="text-white font-medium mb-3">{point.label}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{point.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
