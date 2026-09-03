import { FadeIn } from '../../components/ui/FadeIn';
import { Tag } from '../../components/ui/Tag';
import { DashboardMock } from '../../components/DashboardMock';

export function MindBridgeProject() {
  return (
    <section
      id="mindbridge"
      className="py-28"
      aria-labelledby="mindbridge-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="flex flex-wrap items-start justify-between gap-4 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <p className="font-sans font-medium text-xs text-[#4e7eff] tracking-widest uppercase">
                  03 — Featured Work
                </p>
                <span className="font-sans font-medium text-xs text-white/20">01 of 03</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <Tag variant="blue">Flagship Project</Tag>
                <Tag variant="green">Enterprise ERP</Tag>
              </div>
              <h2
                id="mindbridge-heading"
                className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mt-4"
              >
                MindBridge ERP
              </h2>
            </div>
            <div className="flex items-center gap-2 text-white/20 font-sans font-medium text-sm pt-2">
              <span>— Real-world enterprise system</span>
            </div>
          </div>
        </FadeIn>

        {/* Main two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <FadeIn>
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-sans font-medium text-white/40 uppercase tracking-widest mb-3">
                  Project Overview
                </h3>
                <p className="text-white/70 leading-relaxed font-sans">
                  MindBridge ERP is an Enterprise Resource Planning system developed for{' '}
                  <strong className="text-white/90">MindBridge Kenya</strong> — an organization
                  that provides professional therapy services to students through partnerships with
                  schools across Kenya.
                </p>
              </div>
              <div>
                <h3 className="text-xs font-sans font-medium text-white/40 uppercase tracking-widest mb-3">
                  The Problem
                </h3>
                <p className="text-white/70 leading-relaxed font-sans">
                  Managing therapy operations across multiple school partnerships requires
                  coordinating sessions, student records, therapist assignments, and reporting —
                  tasks that are operationally complex without centralized software. MindBridge
                  Kenya needed an internal system to unify and streamline these workflows.
                </p>
              </div>
              <div>
                <h3 className="text-xs font-sans font-medium text-white/40 uppercase tracking-widest mb-3">
                  My Role
                </h3>
                <p className="text-white/70 leading-relaxed font-sans">
                  I was responsible for the full-stack development of the system — from database
                  schema and backend architecture to the frontend interface and API layer.
                </p>
                <ul className="mt-3 space-y-1.5" role="list">
                  {[
                    'Full-stack development',
                    'Backend architecture & API design',
                    'Database design & modeling',
                    'Frontend interface development',
                    'Authentication & role-based access control',
                    'System architecture decisions',
                  ].map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-white/60 font-sans">
                      <span className="text-[#4e7eff] mt-1" aria-hidden="true">→</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="glass-card p-2 rounded-2xl glow-accent relative">
              <DashboardMock />
            </div>
          </FadeIn>
        </div>

        {/* Tech stack */}
        <FadeIn>
          <div className="glass-card rounded-xl p-6 mb-12">
            <h3 className="text-xs font-sans font-medium text-white/40 uppercase tracking-widest mb-5">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Frontend — React Framework',
                'Backend — Node.js',
                'Database — PostgreSQL',
                'REST APIs',
                'Authentication',
                'Role-Based Access Control',
              ].map((tech) => (
                <Tag key={tech} variant={tech.startsWith('[') ? 'default' : 'blue'}>
                  {tech}
                </Tag>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Problem → Solution → Impact */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            {
              label: 'Problem',
              text: 'Dispersed, manual coordination of student therapy sessions, school partnerships, and operational data across MindBridge Kenya.',
            },
            {
              label: 'Solution',
              text: 'A centralized ERP system providing unified management of sessions, students, therapists, schools, and reporting from a single platform.',
            },
            {
              label: 'Business Value',
              text: 'Structured, auditable operational data. Role-based access for different user types. A scalable software foundation for the organization.',
            },
          ].map((item, i) => (
            <FadeIn key={item.label} delay={i * 80} className="glass-card rounded-xl overflow-hidden">
              <div className="p-6 h-full">
                <p className="font-sans font-medium text-xs text-[#4e7eff] tracking-widest uppercase mb-3">
                  {item.label}
                </p>
                <p className="text-white/60 text-sm leading-relaxed font-sans">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Key system areas */}
        <FadeIn>
          <div className="mb-12">
            <h3 className="text-xs font-sans font-medium text-white/40 uppercase tracking-widest mb-5">
              System Capabilities
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                'User & Role Management',
                'Session Scheduling & Tracking',
                'Student Records Management',
                'School Partnership Management',
                'Therapist Assignment',
                'Operational Dashboard',
                'Reporting & Analytics',
                'Secure Authentication',
                'Data Management',
              ].map((cap) => (
                <div
                  key={cap}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg glass-card"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4e7eff] flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-white/65 font-sans">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Visual showcase — interface screenshots */}
        <FadeIn>
          <div className="mb-12">
            <h3 className="text-xs font-sans font-medium text-white/40 uppercase tracking-widest mb-5">
              Interface Showcase
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Sessions Management View', src: '/screenshots/sessions_management.jpg' },
                { label: 'Student Records Panel', src: '/screenshots/student_records.jpg' },
                { label: 'School Partnerships Overview', src: '/screenshots/school_partnerships.jpg' },
                { label: 'Analytics & Reports', src: '/screenshots/analytics_reports.jpg' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group relative aspect-video rounded-xl glass-card overflow-hidden flex items-center justify-center p-1"
                >
                  <div className="w-full h-full rounded-lg overflow-hidden relative">
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0f]/90 via-[#0c0c0f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white/90 text-sm font-medium font-sans">{item.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-white/5">
            <div>
              <p className="text-white/80 text-lg font-serif italic">
                "An ERP built for a real organization — from requirements to delivery."
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#4e7eff]/50 bg-[#4e7eff]/10 text-white text-sm font-medium hover:bg-[#4e7eff]/25 hover:border-[#4e7eff]/80 shadow-[0_0_30px_rgba(78,126,255,0.15)] hover:shadow-[0_0_40px_rgba(78,126,255,0.3)] transition-all duration-200"
            >
              Discuss This Project
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
