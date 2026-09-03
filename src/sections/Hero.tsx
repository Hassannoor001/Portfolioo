import { FadeIn } from '../components/ui/FadeIn';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24" aria-label="Introduction">

      <div className="relative max-w-6xl mx-auto px-6 py-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="max-w-xl">
            <FadeIn delay={100}>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-[5.5rem] text-white leading-[1.1] mb-4">
                Hassan Noor<br />Shaban
              </h1>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="font-sans text-sm tracking-[0.3em] text-white/50 uppercase mb-8">
                Software Developer
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-lg text-white/60 font-sans font-light leading-relaxed mb-10">
                Crafting scalable software solutions and innovative web experiences with expertise in full-stack development, cloud architecture, and robust enterprise engineering.
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex flex-wrap gap-4 mb-14">
                <a
                  href="#work"
                  className="inline-flex justify-center items-center px-8 py-3.5 rounded-full border border-[#4e7eff]/50 bg-[#4e7eff]/10 text-white font-medium hover:bg-[#4e7eff]/20 transition-all glow-accent"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="inline-flex justify-center items-center px-8 py-3.5 rounded-full border border-white/20 glass-card text-white/80 font-medium hover:text-white transition-all hover:bg-white/5"
                >
                  Contact Me
                </a>
              </div>
            </FadeIn>

            {/* Tech Stack Icons */}
            <FadeIn delay={500}>
              <div className="flex items-center gap-6">
                {[
                  { name: 'React', icon: '⚛️' },
                  { name: 'Node.js', icon: '🟢' },
                  { name: 'Python', icon: '🐍' },
                  { name: 'AWS', icon: '☁️' },
                  { name: 'Docker', icon: '🐋' },
                ].map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-xl group-hover:scale-110 group-hover:border-white/30 transition-all">
                      {tech.icon}
                    </div>
                    <span className="text-[10px] text-white/40 font-mono tracking-wider group-hover:text-white/80 transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Profile Hexagon */}
          <FadeIn delay={300} className="hidden lg:flex justify-end relative">
            <div className="relative w-[450px] h-[450px] flex items-center justify-center">
              {/* Decorative shapes behind */}
              <div className="absolute right-0 top-10 w-48 h-48 bg-emerald-400 rounded-full blur-[80px] opacity-20" />
              <div className="absolute right-[-20px] top-[-20px] w-64 h-64 bg-emerald-500/20 rounded-full" />
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#4e7eff] rounded-full blur-[60px] opacity-30" />
              
              {/* Hexagon Frame */}
              <div className="relative w-[380px] h-[420px] glass-card border-2 border-white/10 overflow-hidden flex items-center justify-center"
                   style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                
                {/* Fallback silhouette if no image is provided */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1c1c24] to-[#0c0c0f] flex items-center justify-center">
                  <svg className="w-32 h-32 text-white/10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>

                {/* You can replace this with your actual image */}
                {<img src="/profile.png" alt="Hassan Noor Shaban" className="w-full h-full object-cover relative z-50" /> }
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
