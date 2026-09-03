import { FadeIn } from '../../components/ui/FadeIn';
import { Tag } from '../../components/ui/Tag';

export function MeysunProject() {
  return (
    <section className="py-20" aria-labelledby="meysun-heading">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-white/30 tracking-widest uppercase">
                  02 of 03
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Tag variant="orange">In Development</Tag>
                <Tag>Project Management System</Tag>
              </div>
              <h2 id="meysun-heading" className="font-serif text-3xl sm:text-4xl text-white leading-tight mb-4">
                Meysun PMS
              </h2>
              <p className="text-white/50 leading-relaxed text-sm mb-6">
                A web-based Project Management System currently in development for{' '}
                <strong className="text-white/70">Meysun Enterprises</strong>, Eldoret, Kenya —
                designed to support project planning, task management, resource coordination,
                and client relations.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['React.js', 'Django REST Framework', 'PostgreSQL', 'SQLite'].map((t) => (
                  <Tag key={t} variant="blue">{t}</Tag>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3">
              <h3 className="text-xs font-mono text-white/30 uppercase tracking-widest mb-4">
                Planned Modules
              </h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  'Project Planning & Scheduling',
                  'Task Creation, Assignment & Tracking',
                  'Resource Management',
                  'Time Tracking & Billing',
                  'Document Management',
                  'Client Portal',
                  'Financial Management',
                  'Reporting & Analytics',
                  'Role-Based Access Control',
                  'Notifications & Alerts',
                ].map((mod) => (
                  <div
                    key={mod}
                    className="glass-card flex items-center gap-2 px-3 py-2 rounded-xl hover:border-white/15 transition-all duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange-400/60 flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm text-white/55">{mod}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 glass-card p-4 rounded-xl border-orange-500/15">
                <p className="text-xs font-mono text-orange-400/70 uppercase tracking-widest mb-1">
                  Status
                </p>
                <p className="text-sm text-white/50">
                  Currently in development. Roles: Administrator, Project Manager, Team Member,
                  Client. Architecture: React frontend, Django REST Framework backend, SQLite
                  (dev) → PostgreSQL (production).
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
