import { Nav } from './sections/Nav';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { MindBridgeProject } from './sections/projects/MindBridgeProject';
import { MeysunProject } from './sections/projects/MeysunProject';
import { WasteProject } from './sections/projects/WasteProject';
import { Journey } from './sections/Journey';
import { Capabilities } from './sections/Capabilities';
import { WhyMe } from './sections/WhyMe';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

export default function App() {
  return (
    <>
      {/* Global ambient background — persists across all sections */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true" style={{ zIndex: 0 }}>
        {/* Subtle grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Blue orb — top left */}
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-[#4e7eff]/15 rounded-full blur-[140px]" />
        {/* Emerald orb — top right */}
        <div className="absolute top-[5%] right-[-5%] w-[700px] h-[700px] bg-emerald-500/8 rounded-full blur-[160px]" />
        {/* Blue orb — mid page */}
        <div className="absolute top-[50%] left-[40%] w-[500px] h-[500px] bg-[#4e7eff]/10 rounded-full blur-[140px]" />
        {/* Emerald orb — lower page */}
        <div className="absolute top-[75%] left-[-5%] w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[150px]" />
        {/* Blue orb — bottom right */}
        <div className="absolute bottom-[-5%] right-[-5%] w-[600px] h-[600px] bg-[#4e7eff]/12 rounded-full blur-[160px]" />
      </div>

      <Nav />
      <main id="main-content" className="relative" style={{ zIndex: 1 }}>
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
