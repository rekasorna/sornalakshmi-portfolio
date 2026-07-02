import { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import GithubTerminal from './GithubTerminal';

const ROLES = profile.roles;

export default function Hero({ setPage }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const target = ROLES[roleIndex];
    let i = displayed.length;

    if (typing) {
      if (i < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i + 1)), 60);
        return () => clearTimeout(t);
      } else {
        // pause then erase
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (i > 0) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i - 1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section id="top" className="relative min-h-[calc(100vh-65px)] flex items-center px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-ink">
        <div className="absolute inset-0 bg-gradient-to-br from-rose/10 via-transparent to-lilac/8" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-rose/8 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-lilac/8 blur-3xl" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center pt-24 pb-16">
        {/* Left column */}
        <div>
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-rose" />
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-rose">
              Portfolio · 2026
            </p>
          </div>

          {/* Name */}
          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-cream">
            {profile.name}
          </h1>

          {/* Typewriter role */}
          <div className="mt-5 h-9 flex items-center">
            <span className="font-mono text-lg sm:text-xl text-lilac">
              {displayed}
              <span className="animate-pulse text-rose">|</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="mt-6 max-w-xl text-sand/80 text-base sm:text-lg leading-relaxed">
            {profile.tagline}
          </p>

          {/* Location chip */}
          <div className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-sand/60 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-lilac" />
            {profile.location}
          </div>

          {/* CTA row */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setPage('projects')}
              className="px-7 py-3 rounded-full bg-rose text-ink font-mono text-xs uppercase tracking-widest font-medium hover:bg-lilac hover:shadow-lg hover:shadow-lilac/25 transition-all duration-300"
            >
              View Projects
            </button>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3 rounded-full border border-white/15 text-cream font-mono text-xs uppercase tracking-widest hover:border-rose hover:text-rose transition-all duration-300"
            >
              GitHub ↗
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-12 flex flex-wrap gap-8">
            {profile.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display font-semibold text-2xl text-cream">{s.value}</p>
                <p className="font-mono text-xs text-sand/50 mt-0.5 uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — live GitHub terminal */}
        <GithubTerminal />
      </div>

    </section>
  );
}
