import { FadeIn } from '../../components/ui/FadeIn';
import { Tag } from '../../components/ui/Tag';

export function WasteProject() {
  return (
    <section className="py-20" aria-labelledby="waste-heading">
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
              <div className="mt-4 glass-card p-4 rounded-xl">
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
