export function DashboardMock() {
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
