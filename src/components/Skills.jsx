import { profile } from '../data/profile';

const ICONS = {
  'Languages':               '💻',
  'Frontend':                '🎨',
  'Backend':                 '⚙️',
  'AI & Machine Learning':   '🤖',
  'Libraries & Frameworks':  '📦',
  'Visualization':           '📊',
  'Databases':               '🗄️',
  'Cloud & DevOps':          '☁️',
};

const ACCENT = {
  'Languages':               'lilac',
  'Frontend':                'rose',
  'Backend':                 'lilac',
  'AI & Machine Learning':   'rose',
  'Libraries & Frameworks':  'lilac',
  'Visualization':           'rose',
  'Databases':               'lilac',
  'Cloud & DevOps':          'rose',
};

export default function Skills() {
  const groups = Object.entries(profile.skills);

  return (
    <section id="skills" className="px-6 py-16 sm:py-24 bg-ink relative overflow-hidden min-h-[calc(100vh-65px)]">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-rose/6 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-lilac/6 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-6 h-px bg-rose" />
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-rose">02 · Skills</p>
        </div>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-cream mb-4">
          Tools of the trade.
        </h2>
        <p className="text-sand/50 font-mono text-sm mb-12 max-w-md">
          Technologies I use to build end-to-end data and full-stack solutions.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map(([group, skills]) => {
            const accent = ACCENT[group] || 'lilac';
            return (
              <div
                key={group}
                className="group rounded-2xl border border-white/8 bg-charcoal/50 p-5 hover:border-rose/30 hover:bg-charcoal/80 transition-all duration-300 backdrop-blur-sm"
              >
                {/* Category header */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-lg">{ICONS[group] || '🔧'}</span>
                  <h3 className={`font-mono text-[11px] uppercase tracking-widest ${accent === 'rose' ? 'text-rose' : 'text-lilac'}`}>
                    {group}
                  </h3>
                </div>

                {/* Skills pills */}
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-sand/70 bg-white/3 hover:border-rose/40 hover:text-cream hover:bg-rose/10 transition-all duration-200 cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
