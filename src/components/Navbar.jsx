import { useState } from 'react';
import { profile } from '../data/profile';

const links = [
  { label: 'Home',       page: 'home'       },
  { label: 'About',      page: 'about'      },
  { label: 'Skills',     page: 'skills'     },
  { label: 'Projects',   page: 'projects'   },
  { label: 'Experience', page: 'experience' },
  { label: 'Contact',    page: 'contact'    },
];

export default function Navbar({ activePage, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function navigate(page) {
    setPage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-ink/90 border-b border-white/8 shadow-lg shadow-black/20">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <button
          onClick={() => navigate('home')}
          className="font-display font-semibold tracking-tight text-cream text-lg hover:text-rose transition-colors duration-200"
        >
          Sorna<span className="text-rose">.</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-sand">
          {links.map((l) => (
            <li key={l.page}>
              <button
                onClick={() => navigate(l.page)}
                className={`relative group transition-colors duration-200 pb-0.5 ${
                  activePage === l.page ? 'text-rose' : 'hover:text-rose'
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-rose transition-all duration-300 ${
                    activePage === l.page ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA — desktop */}
        <a
          href={`mailto:${profile.email}`}
          className="hidden md:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-rose/50 text-rose px-4 py-2 rounded-full hover:bg-rose hover:text-ink transition-all duration-300 hover:shadow-lg hover:shadow-rose/20"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-rose animate-pulse" />
          Say hello
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-cream transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-cream transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-cream transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="bg-charcoal/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 space-y-1">
          {links.map((l) => (
            <button
              key={l.page}
              onClick={() => navigate(l.page)}
              className={`w-full text-left block font-mono text-xs uppercase tracking-widest py-3 px-3 rounded-lg transition-all duration-200 ${
                activePage === l.page
                  ? 'text-rose bg-rose/10'
                  : 'text-sand hover:text-rose hover:bg-white/5'
              }`}
            >
              {activePage === l.page && <span className="mr-2 text-rose">›</span>}
              {l.label}
            </button>
          ))}
          <div className="pt-2">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-rose/50 text-rose px-4 py-2 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose animate-pulse" />
              Say hello
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
