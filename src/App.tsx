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
