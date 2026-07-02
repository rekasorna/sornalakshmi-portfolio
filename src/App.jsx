import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const pages = {
    home: <Hero setPage={setActivePage} />,
    about: <About />,
    skills: <Skills />,
    projects: <Projects />,
    experience: <Experience />,
    contact: <Contact />,
  };

  return (
    <div className="min-h-screen flex flex-col bg-ink">
      <Navbar activePage={activePage} setPage={setActivePage} />
      <main className="flex-1 overflow-y-auto">
        {pages[activePage] || pages['home']}
      </main>
      <Footer />
    </div>
  );
}
