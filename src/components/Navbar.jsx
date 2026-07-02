import { useState, useEffect } from 'react';
import { profile } from '../data/profile';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-ink/90 border-b border-white/8 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#top" className="font-display font-semibold tracking-tight text-cream text-lg">
          Sorna<span className="text-rose">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-sand">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-rose transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-rose transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
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

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-charcoal/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block font-mono text-xs uppercase tracking-widest text-sand hover:text-rose transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-rose/50 text-rose px-4 py-2 rounded-full mt-2"
          >
            Say hello
          </a>
        </div>
      </div>
    </header>
  );
}
