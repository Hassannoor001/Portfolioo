import { useState, useEffect, useRef } from 'react'

// ─── Types ───────────────────────────────────────────────────────────────────

interface NavItem {
  label: string
  href: string
}

// ─── Constants ───────────────────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#mindbridge' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

const SKILLS = {
  Frontend: ['React.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
  Backend: ['Python', 'Django', 'Django REST Framework', 'PHP', 'Yii Framework', 'REST APIs'],
  Database: ['PostgreSQL', 'SQLite', 'Database Design'],
  'Software Engineering': [
    'System Design',
    'Software Architecture',
    'Authentication',
    'Role-Based Access Control',
    'API Development',
    'Enterprise Application Development',
  ],
  'Dev Tools': ['Git', 'GitHub', 'VS Code'],
}

const TIMELINE = [
  {
    year: '2023',
    title: 'BSc Software Development',
    desc: 'Enrolled at KCA University, Kenya — building foundations in software engineering, algorithms, and systems design.',
  },
  {
    year: '2023–24',
    title: 'Full-Stack Foundations',
    desc: 'Built academic software systems spanning frontend, backend, and database layers. Gained practical experience across the full stack.',
  },
  {
    year: '2024',
    title: 'Enterprise Software Focus',
    desc: 'Deepened work on backend architecture, REST APIs, and authentication. Started exploring enterprise application patterns.',
  },
  {
    year: '2025',
    title: 'Meysun PMS & Product Thinking',
    desc: 'Began development of Meysun PMS for Meysun Enterprises. Exploring product and startup concepts including the Smart Waste Collection Platform.',
  },
  {
    year: '2026',
    title: 'MindBridge ERP',
    desc: 'Developed MindBridge ERP for MindBridge Kenya — a real-world enterprise system supporting therapy operations and school partnerships.',
  },
]

const CAPABILITIES = [
  {
    icon: '⬡',
    title: 'Full-Stack Web Development',
    desc: 'End-to-end web applications from database schema to UI. React frontends paired with Django or PHP backends.',
  },
  {
    icon: '◈',
    title: 'Backend & API Development',
    desc: 'RESTful APIs, business logic layers, and server-side architecture designed for reliability and maintainability.',
  },
  {
    icon: '◻',
    title: 'Frontend Development',
    desc: 'Responsive, accessible interfaces built with React, TypeScript, and modern CSS. Focus on usability and performance.',
  },
  {
    icon: '◫',
    title: 'Database Design',
    desc: 'Relational schema design, normalization, query optimization, and data modeling for complex business domains.',
  },
  {
    icon: '⬕',
    title: 'Enterprise Software Development',
    desc: 'Multi-role, multi-module business systems with authentication, permissions, dashboards, and audit trails.',
  },
  {
    icon: '◩',
    title: 'Software Architecture',
    desc: 'System design decisions that balance complexity, scalability, and maintainability for real organizational needs.',
  },
  {
    icon: '⬘',
    title: 'Business Software Solutions',
    desc: 'Translating organizational workflows into software — from requirements through delivery.',
  },
  {
    icon: '⬙',
    title: 'SaaS Application Development',
    desc: 'Multi-tenant web applications with subscription models, role-based access, and client-facing portals.',
  },
]

const WHY_POINTS = [
  {
    label: 'Enterprise-First Thinking',
    text: 'I approach software from a systems perspective — understanding how people, processes, and data interact before writing a line of code.',
  },
  {
    label: 'Full-Stack Range',
    text: 'Working across frontend, backend, and database means I can own a feature end-to-end and make informed trade-offs at every layer.',
  },
  {
    label: 'Real-World Experience',
    text: 'MindBridge ERP was built for an actual operating organization. I have navigated real requirements, real constraints, and real users.',
  },
  {
    label: 'African Technology Context',
    text: 'I build for the Kenyan and broader African market — understanding local business realities, infrastructure constraints, and user needs.',
  },
  {
    label: 'Independent Execution',
    text: 'I can scope, design, and ship software independently without needing every decision handed down. I own the outcome.',
  },
  {
    label: 'Continuous Growth',
    text: 'Each project pushes into new technical territory. I invest in depth — not just shipping features, but understanding the underlying systems.',
  },
]

// ─── Utility hooks ───────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function HeroGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Subtle grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(78,126,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(78,126,255,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '55%',
          width: '600px',
          height: '600px',
          background:
            'radial-gradient(circle, rgba(78,126,255,0.08) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
        }}
      />
      {/* Architecture nodes — abstract enterprise visualization */}
      <svg
        className="absolute right-0 top-0 w-1/2 h-full opacity-20"
        viewBox="0 0 500 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Connection lines */}
        <line x1="250" y1="100" x2="150" y2="220" stroke="#4e7eff" strokeWidth="0.8" />
        <line x1="250" y1="100" x2="360" y2="200" stroke="#4e7eff" strokeWidth="0.8" />
        <line x1="250" y1="100" x2="250" y2="280" stroke="#4e7eff" strokeWidth="0.8" />
        <line x1="150" y1="220" x2="100" y2="360" stroke="#4e7eff" strokeWidth="0.8" />
        <line x1="150" y1="220" x2="250" y2="350" stroke="#4e7eff" strokeWidth="0.8" />
        <line x1="360" y1="200" x2="420" y2="340" stroke="#4e7eff" strokeWidth="0.8" />
        <line x1="360" y1="200" x2="300" y2="360" stroke="#4e7eff" strokeWidth="0.8" />
        <line x1="250" y1="280" x2="200" y2="430" stroke="#4e7eff" strokeWidth="0.8" />
        <line x1="250" y1="280" x2="340" y2="450" stroke="#4e7eff" strokeWidth="0.8" />
        <line x1="100" y1="360" x2="200" y2="430" stroke="#4e7eff" strokeWidth="0.5" />
        <line x1="420" y1="340" x2="340" y2="450" stroke="#4e7eff" strokeWidth="0.5" />
        <line x1="200" y1="430" x2="340" y2="450" stroke="#4e7eff" strokeWidth="0.5" />
        {/* Node circles */}
        <circle cx="250" cy="100" r="6" fill="#4e7eff" opacity="0.9" />
        <circle cx="150" cy="220" r="4" fill="#4e7eff" opacity="0.7" />
        <circle cx="360" cy="200" r="4" fill="#4e7eff" opacity="0.7" />
        <circle cx="250" cy="280" r="5" fill="#4e7eff" opacity="0.8" />
        <circle cx="100" cy="360" r="3" fill="#4e7eff" opacity="0.5" />
        <circle cx="420" cy="340" r="3" fill="#4e7eff" opacity="0.5" />
        <circle cx="300" cy="360" r="3" fill="#4e7eff" opacity="0.5" />
        <circle cx="200" cy="430" r="4" fill="#4e7eff" opacity="0.6" />
        <circle cx="340" cy="450" r="4" fill="#4e7eff" opacity="0.6" />
        {/* Outer ring on main node */}
        <circle cx="250" cy="100" r="14" stroke="#4e7eff" strokeWidth="0.8" opacity="0.4" />
        <circle cx="250" cy="100" r="22" stroke="#4e7eff" strokeWidth="0.5" opacity="0.2" />
      </svg>
    </div>
  )
}

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

function Tag({
  children,
  variant = 'default',
}: {
  children: React.ReactNode
  variant?: 'default' | 'blue' | 'orange' | 'green'
}) {
  const colors = {
    default: 'bg-white/5 text-white/50 border border-white/8',
    blue: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    orange: 'bg-orange-500/10 text-orange-400 border border-orange-500/20',
    green: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  }
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono tracking-wide ${colors[variant]}`}
    >
      {children}
    </span>
  )
}

// ─── Sections ────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-[#0c0c0f]/80 border-b border-white/5' : ''
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
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
                className="text-sm text-white/50 hover:text-white/90 transition-colors tracking-wide"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded bg-[#4e7eff] text-white text-sm font-medium hover:bg-[#6690ff] transition-colors"
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
        <div className="md:hidden bg-[#0c0c0f]/95 backdrop-blur-xl border-b border-white/5 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-white/60 hover:text-white transition-colors py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#4e7eff] text-white text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16" aria-label="Introduction">
      <HeroGrid />
      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span
              className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
              aria-hidden="true"
            />
            <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
              Software Developer · Nairobi, Kenya
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
            Hassan Noor
            <br />
            <span className="italic text-[#4e7eff]">Shaban</span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/60 font-light leading-relaxed mb-4 max-w-2xl">
            Software Developer building practical enterprise and business solutions.
          </p>
          <p className="text-base text-white/40 leading-relaxed mb-10 max-w-xl">
            I design and build full-stack software systems for real organizations — from ERP
            platforms to project management tools. My work sits at the intersection of software
            engineering and real-world operational needs.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#4e7eff] text-white text-sm font-medium hover:bg-[#6690ff] transition-colors"
            >
              View My Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#mindbridge"
              className="inline-flex items-center gap-2 px-5 py-3 rounded border border-white/10 text-white/70 text-sm font-medium hover:border-white/20 hover:text-white transition-colors"
            >
              Explore MindBridge
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded border border-white/10 text-white/70 text-sm font-medium hover:border-white/20 hover:text-white transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 rounded border border-white/10 text-white/70 text-sm font-medium hover:border-white/20 hover:text-white transition-colors"
              aria-label="Download CV (placeholder)">
              Download CV
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 2v8M3.5 7l3.5 3.5L10.5 7M2.5 12h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30" aria-hidden="true">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/60" />
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  )
}

function About() {
  const { ref, inView } = useInView()
  return (
    <section id="about" className="py-28 border-t border-white/5" aria-labelledby="about-heading">
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

function Skills() {
  return (
    <section
      id="skills"
      className="py-28 border-t border-white/5"
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-lg overflow-hidden">
          {Object.entries(SKILLS).map(([group, items], i) => (
            <FadeIn key={group} delay={i * 60}>
              <div className="bg-[#0c0c0f] p-6 h-full">
                <h3 className="font-mono text-xs text-white/40 tracking-widest uppercase mb-4">
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

// MindBridge dashboard mock visual
function DashboardMock() {
  return (
    <div
      className="rounded-xl overflow-hidden border border-white/10"
      style={{ background: '#111116' }}
      role="img"
      aria-label="MindBridge ERP dashboard interface mockup"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" aria-hidden="true" />
        <div className="ml-3 flex-1 h-5 rounded bg-white/5 max-w-[200px] flex items-center px-2">
          <span className="text-white/20 font-mono text-[10px]">mindbridge.app/dashboard</span>
        </div>
      </div>

      {/* App shell */}
      <div className="flex h-72">
        {/* Sidebar */}
        <div className="w-44 border-r border-white/5 p-3 flex-shrink-0">
          <div className="flex items-center gap-2 mb-5 px-2">
            <div className="w-5 h-5 rounded bg-[#4e7eff]/30 flex items-center justify-center">
              <span className="text-[8px] text-[#4e7eff] font-bold">M</span>
            </div>
            <span className="font-mono text-[10px] text-white/60">MindBridge</span>
          </div>
          {[
            { label: 'Dashboard', active: true },
            { label: 'Sessions' },
            { label: 'Students' },
            { label: 'Schools' },
            { label: 'Therapists' },
            { label: 'Reports' },
            { label: 'Settings' },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 px-2 py-1.5 rounded text-[10px] mb-0.5 ${
                item.active
                  ? 'bg-[#4e7eff]/15 text-[#4e7eff]'
                  : 'text-white/30 hover:text-white/50'
              }`}
              aria-hidden="true"
            >
              <span
                className={`w-1 h-1 rounded-full ${item.active ? 'bg-[#4e7eff]' : 'bg-white/20'}`}
              />
              {item.label}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 overflow-hidden">
          <div className="mb-4">
            <p className="text-[10px] text-white/30 font-mono mb-0.5">Overview</p>
            <p className="text-xs text-white/70">MindBridge Kenya — Admin Dashboard</p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-2 mb-4" aria-hidden="true">
            {[
              { label: 'Active Sessions', value: '—', note: '[placeholder]' },
              { label: 'Partner Schools', value: '—', note: '[placeholder]' },
              { label: 'Student Cases', value: '—', note: '[placeholder]' },
            ].map((card) => (
              <div key={card.label} className="bg-white/[0.03] rounded p-2 border border-white/5">
                <p className="text-[9px] text-white/30 mb-1">{card.label}</p>
                <p className="text-sm font-mono text-white/50">{card.value}</p>
                <p className="text-[8px] text-white/20 mt-0.5">{card.note}</p>
              </div>
            ))}
          </div>

          {/* Activity list */}
          <div className="bg-white/[0.02] rounded border border-white/5 p-2" aria-hidden="true">
            <p className="text-[9px] font-mono text-white/30 mb-2 uppercase tracking-wider">Recent Activity</p>
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2 py-1 border-b border-white/[0.03] last:border-0">
                <div className="w-5 h-5 rounded-full bg-[#4e7eff]/10 flex-shrink-0" />
                <div className="flex-1">
                  <div className="h-1.5 bg-white/10 rounded w-3/4 mb-1" />
                  <div className="h-1.5 bg-white/5 rounded w-1/2" />
                </div>
                <div className="h-1.5 bg-white/10 rounded w-8" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function MindBridgeProject() {
  return (
    <section
      id="mindbridge"
      className="py-28 border-t border-white/5"
      aria-labelledby="mindbridge-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="flex flex-wrap items-start justify-between gap-4 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <p className="font-mono text-xs text-[#4e7eff] tracking-widest uppercase">
                  03 — Featured Work
                </p>
                <span className="font-mono text-xs text-white/20">01 of 03</span>
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
            <div className="flex items-center gap-2 text-white/20 font-mono text-sm pt-2">
              <span>— Real-world enterprise system</span>
            </div>
          </div>
        </FadeIn>

        {/* Main two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <FadeIn>
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-3">
                  Project Overview
                </h3>
                <p className="text-white/70 leading-relaxed">
                  MindBridge ERP is an Enterprise Resource Planning system developed for{' '}
                  <strong className="text-white/90">MindBridge Kenya</strong> — an organization
                  that provides professional therapy services to students through partnerships with
                  schools across Kenya.
                </p>
              </div>
              <div>
                <h3 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-3">
                  The Problem
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Managing therapy operations across multiple school partnerships requires
                  coordinating sessions, student records, therapist assignments, and reporting —
                  tasks that are operationally complex without centralized software. MindBridge
                  Kenya needed an internal system to unify and streamline these workflows.
                </p>
              </div>
              <div>
                <h3 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-3">
                  My Role
                </h3>
                <p className="text-white/70 leading-relaxed">
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
                    <li key={r} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="text-[#4e7eff] mt-1" aria-hidden="true">→</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <DashboardMock />
          </FadeIn>
        </div>

        {/* Tech stack */}
        <FadeIn>
          <div className="border border-white/5 rounded-xl p-6 mb-12">
            <h3 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-5">
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
        <div className="grid sm:grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden mb-12">
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
            <FadeIn key={item.label} delay={i * 80}>
              <div className="bg-[#0c0c0f] p-6 h-full">
                <p className="font-mono text-xs text-[#4e7eff] tracking-widest uppercase mb-3">
                  {item.label}
                </p>
                <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Key system areas */}
        <FadeIn>
          <div className="mb-12">
            <h3 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-5">
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
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/5 bg-white/[0.02]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4e7eff] flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-white/65">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Visual showcase — placeholder panels */}
        <FadeIn>
          <div className="mb-12">
            <h3 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-5">
              Interface Showcase
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Sessions Management View',
                'Student Records Panel',
                'School Partnerships Overview',
                'Analytics & Reports',
              ].map((view) => (
                <div
                  key={view}
                  className="aspect-video rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-center p-8"
                  role="img"
                  aria-label={`${view} — screenshot placeholder`}
                >
                  <div>
                    <p className="font-mono text-xs text-white/20 tracking-widest uppercase mb-2">
                      Screenshot Placeholder
                    </p>
                    <p className="text-sm text-white/40">{view}</p>
                    <p className="text-xs text-white/20 mt-1">Replace with actual screenshot</p>
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#4e7eff] text-white text-sm font-medium hover:bg-[#6690ff] transition-colors"
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

function MeysunProject() {
  return (
    <section className="py-20 border-t border-white/5" aria-labelledby="meysun-heading">
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
                    className="flex items-center gap-2 px-3 py-2 rounded border border-white/5 bg-white/[0.02]"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange-400/60 flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm text-white/55">{mod}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 rounded-lg border border-orange-500/10 bg-orange-500/[0.03]">
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

function WasteProject() {
  return (
    <section className="py-20 border-t border-white/5" aria-labelledby="waste-heading">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-white/30 tracking-widest uppercase">
                  03 of 03
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Tag>Product Concept</Tag>
                <Tag>Startup Concept</Tag>
              </div>
              <h2
                id="waste-heading"
                className="font-serif text-3xl sm:text-4xl text-white leading-tight mb-4"
              >
                Smart Waste Collection Platform
              </h2>
              <p className="text-white/50 leading-relaxed text-sm mb-6">
                A startup concept addressing waste collection coordination challenges in Kenya.
                Designed to connect residents, waste collectors, and property managers through
                a unified scheduling and management platform.
              </p>
            </div>
            <div className="lg:col-span-3">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xs font-mono text-white/30 uppercase tracking-widest mb-3">
                    Platform Users
                  </h3>
                  {[
                    'Residents — schedule pickups',
                    'Waste collectors — manage jobs',
                    'Property managers — monitor collection',
                    'Businesses — recurring subscriptions',
                  ].map((u) => (
                    <div key={u} className="flex items-center gap-2 py-1.5 text-sm text-white/50">
                      <span className="w-1 h-1 rounded-full bg-white/25 flex-shrink-0" aria-hidden="true" />
                      {u}
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="text-xs font-mono text-white/30 uppercase tracking-widest mb-3">
                    Target Market
                  </h3>
                  {[
                    'Apartment managers',
                    'Gated communities',
                    'Restaurants & hotels',
                    'Offices & institutions',
                  ].map((m) => (
                    <div key={m} className="flex items-center gap-2 py-1.5 text-sm text-white/50">
                      <span className="w-1 h-1 rounded-full bg-white/25 flex-shrink-0" aria-hidden="true" />
                      {m}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 p-4 rounded-lg border border-white/5 bg-white/[0.02]">
                <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2">
                  Why it matters
                </p>
                <p className="text-sm text-white/50">
                  This concept demonstrates the ability to identify operational gaps in the
                  African market, model a product around real user needs, and think through
                  viable revenue structures — combining software engineering with product thinking.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function Journey() {
  return (
    <section
      id="journey"
      className="py-28 border-t border-white/5"
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
                      <div className="w-2.5 h-2.5 rounded-full border-2 border-[#4e7eff] bg-[#0c0c0f]" />
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

function Capabilities() {
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

function WhyMe() {
  return (
    <section
      className="py-28 border-t border-white/5"
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
              <article className="p-6 rounded-xl border border-white/5 bg-white/[0.015] hover:border-white/10 hover:bg-white/[0.025] transition-all duration-200">
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

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-white/[0.03] border border-white/8 rounded px-4 py-3 text-white/80 text-sm placeholder:text-white/25 focus:outline-none focus:border-[#4e7eff]/50 focus:bg-white/[0.05] transition-colors'

  return (
    <section id="contact" className="py-28 border-t border-white/5" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <p className="font-mono text-xs text-[#4e7eff] tracking-widest uppercase mb-4">
              07 — Contact
            </p>
            <h2
              id="contact-heading"
              className="font-serif text-4xl sm:text-5xl text-white leading-tight mb-6"
            >
              Have a problem that<br />
              <span className="italic text-[#4e7eff]">software can solve?</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              Whether you need enterprise software built, an existing system extended, or a
              technical partner for a product idea — I am interested in practical work that
              makes a real difference.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-white/30 w-16">Phone</span>
                <span className="text-white/50 text-sm">
                  [0743723375]
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-white/30 w-16">Email</span>
                <span className="text-white/50 text-sm">
                  [hn8505341@gmail.com]
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-white/30 w-16">GitHub</span>
                <span className="text-white/50 text-sm">
                  [github.com/Hassannoor001]
                </span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-64 p-8 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03]">
                <div className="w-10 h-10 rounded-full bg-emerald-500/15 flex items-center justify-center mb-4">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M3 9l4 4 8-8" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-white font-medium text-lg mb-2">Message sent</h3>
                <p className="text-white/50 text-sm">Thank you for reaching out. I will be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-white/30 uppercase tracking-widest mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className={inputClass}
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-white/30 uppercase tracking-widest mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={inputClass}
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-white/30 uppercase tracking-widest mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className={inputClass}
                      placeholder="What is this about?"
                      value={form.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-white/30 uppercase tracking-widest mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className={inputClass + ' resize-none'}
                      placeholder="Describe your project or question..."
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded bg-[#4e7eff] text-white text-sm font-medium hover:bg-[#6690ff] transition-colors focus-visible:ring-2 focus-visible:ring-[#4e7eff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0f]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function Footer() {
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

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <MindBridgeProject />
        <MeysunProject />
        <WasteProject />
        <Journey />
        <Capabilities />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
