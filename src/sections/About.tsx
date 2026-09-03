import { useInView } from '../hooks/useInView';
import { Tag } from '../components/ui/Tag';

export function About() {
  const { ref, inView } = useInView()
  return (
    <section id="about" className="py-28" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-16 items-start"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div>
            <p className="font-mono text-xs text-[#4e7eff] tracking-widest uppercase mb-4">
              01 — About
            </p>
            <h2
              id="about-heading"
              className="font-serif text-4xl sm:text-5xl text-white leading-tight mb-6"
            >
              Engineering software that{' '}
              <span className="italic text-white/60">fits</span> the problem
            </h2>
          </div>
          <div className="space-y-5 text-white/60 leading-relaxed">
            <p>
              I am a Software Developer and Bachelor of Science in Software Development student at
              KCA University, Kenya. My focus is building practical software systems that address
              real organizational needs — not theoretical exercises, but working tools that people
              depend on.
            </p>
            <p>
              I work across the full stack: frontend development with React and TypeScript,
              backend services with Django and PHP, database design with PostgreSQL, and REST API
              architecture. I have built enterprise-grade software for actual operating organizations,
              navigating real requirements and real constraints.
            </p>
            <p>
              What drives my work is the challenge of understanding a business problem deeply
              enough to translate it into a software architecture — then executing that architecture
              to a professional standard.
            </p>
            <div className="pt-4 flex flex-wrap gap-2">
              {[
                'Full-Stack',
                'APIs',
                'Databases',
                'Enterprise Software',
                'System Architecture',
              ].map((tag) => (
                <Tag key={tag} variant="blue">
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
