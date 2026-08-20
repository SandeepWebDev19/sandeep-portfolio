import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Contact from "./sections/contact";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

      <AnimatedBackground />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

    </div>
  );
}

export default App;