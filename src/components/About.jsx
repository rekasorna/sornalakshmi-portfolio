import { profile } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="px-6 py-16 sm:py-24 bg-cream text-ink relative overflow-hidden min-h-[calc(100vh-65px)]">
      {/* Subtle decorative blob */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-lilac/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[0.42fr_0.58fr] gap-16 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-rose" />
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-rose">01 · About</p>
            </div>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Where data meets&nbsp;
              <span className="text-rose italic">product.</span>
            </h2>

            {/* Education card */}
            <div className="mt-10 rounded-2xl border border-ink/10 bg-white/50 p-6 space-y-1 backdrop-blur-sm">
              <p className="font-mono text-[10px] uppercase tracking-widest text-rose">Education</p>
              <p className="font-display font-semibold mt-2">{profile.education.school}</p>
              <p className="text-sm text-ink/60">{profile.education.degree}</p>
              <p className="text-sm text-ink/60">{profile.education.period} · {profile.education.detail}</p>
            </div>

            {/* Location */}
            <div className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-ink/50 bg-ink/5 px-3 py-1.5 rounded-full border border-ink/10">
              <span className="w-1.5 h-1.5 rounded-full bg-rose" />
              {profile.location}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-ink/75">{profile.about}</p>

            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {profile.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-ink/10 bg-white/60 p-6 hover:border-rose/40 hover:shadow-sm transition-all duration-300 group"
                >
                  <p className="font-display font-bold text-3xl text-ink group-hover:text-rose transition-colors duration-300">
                    {s.value}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-ink/15 text-ink/70 px-4 py-2 rounded-full hover:border-rose hover:text-rose transition-all duration-300"
              >
                GitHub ↗
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-ink/15 text-ink/70 px-4 py-2 rounded-full hover:border-rose hover:text-rose transition-all duration-300"
              >
                LinkedIn ↗
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-ink/15 text-ink/70 px-4 py-2 rounded-full hover:border-rose hover:text-rose transition-all duration-300"
              >
                Email ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
