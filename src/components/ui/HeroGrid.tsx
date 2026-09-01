export function HeroGrid() {
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
