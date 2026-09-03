import { SKILLS } from '../data/constants';
import { FadeIn } from '../components/ui/FadeIn';

export function Skills() {
  return (
    <section
      id="skills"
      className="py-28"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="font-mono text-xs text-[#4e7eff] tracking-widest uppercase mb-4">
            02 — Core Skills
          </p>
          <h2
            id="skills-heading"
            className="font-serif text-4xl sm:text-5xl text-white leading-tight mb-16"
          >
            Technical foundation
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(SKILLS).map(([group, items], i) => (
            <FadeIn key={group} delay={i * 60}>
              <div className="glass-card rounded-2xl p-6 h-full hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 group">
                <h3 className="font-mono text-xs text-[#4e7eff]/70 tracking-widest uppercase mb-4 group-hover:text-[#4e7eff] transition-colors">
                  {group}
                </h3>
                <ul className="space-y-2" role="list">
                  {items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-[#4e7eff] flex-shrink-0" aria-hidden="true" />
                      <span className="text-white/70 text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
