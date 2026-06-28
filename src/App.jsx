import { useState } from 'react';
import { useLenis } from './hooks/useLenis';
import './index.css';
import './App.css';

import Loader from './Components/Common/Loader';
import ScrollProgress from './Components/Common/ScrollProgress';
import CustomCursor from './Components/CustomCursor/CustomCursor';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/LandingPage/NewLandigUI';
import About from './Components/About/NewAboutUI';
import Experience from './Components/Education/Education';
import Skills from './Components/Skill/Skills';
import SkillMarquee from './Components/Skill/SkillMarquee';
import Projects from './Components/Project/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  useLenis();

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <div className="app-root">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <SkillMarquee />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
