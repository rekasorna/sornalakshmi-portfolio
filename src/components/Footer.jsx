import { profile } from '../data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 py-12 bg-ink border-t border-white/8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <a href="#top" className="font-display font-semibold text-cream tracking-tight">
              Sorna<span className="text-rose">.</span>
            </a>
            <p className="font-mono text-[11px] text-sand/40 mt-1">
              Data Analyst · Full Stack Developer
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 font-mono text-xs text-sand/50">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-rose transition-colors">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-rose transition-colors">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-rose transition-colors">
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-[11px] text-sand/30">
            © {year} {profile.name}. Built with React & Tailwind CSS.
          </p>
          <p className="font-mono text-[11px] text-sand/30">
            Projects auto-sync from{' '}
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-rose/50 hover:text-rose transition-colors">
              GitHub API ↗
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
