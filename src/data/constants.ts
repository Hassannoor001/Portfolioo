interface NavItem {
  label: string
  href: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#mindbridge' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export const SKILLS = {
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

export const TIMELINE = [
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

export const CAPABILITIES = [
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

export const WHY_POINTS = [
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
