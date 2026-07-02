import { profile } from '../data/profile';

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-28 bg-ink relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-rose/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-6 h-px bg-rose" />
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-rose">04 · Experience</p>
        </div>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-cream mb-16">
          Where I've worked.
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-[168px] top-0 bottom-0 w-px bg-gradient-to-b from-rose/30 via-white/10 to-transparent" />

          <div className="space-y-12">
            {profile.experience.map((job, i) => (
              <div
                key={job.role + job.company}
                className="md:grid md:grid-cols-[168px_1fr] gap-10 items-start"
              >
                {/* Left: dates */}
                <div className="md:text-right relative mb-4 md:mb-0">
                  <p className="font-mono text-xs text-lilac leading-relaxed">{job.period}</p>
                  <p className="font-mono text-[11px] text-sand/40 mt-1">{job.location}</p>

                  {/* Timeline dot */}
                  <div className="hidden md:block absolute -right-[21px] top-1.5 w-3 h-3 rounded-full bg-rose ring-4 ring-ink z-10" />
                </div>

                {/* Right: content */}
                <div className="rounded-2xl border border-white/8 bg-charcoal/40 p-6 hover:border-rose/20 transition-all duration-300 group">
                  <h3 className="font-display font-semibold text-xl text-cream group-hover:text-rose transition-colors duration-200">
                    {job.role}
                  </h3>
                  <p className="text-rose text-sm mt-1 mb-5 font-mono">{job.company}</p>
                  <ul className="space-y-3">
                    {job.points.map((pt, j) => (
                      <li key={j} className="text-sand/70 text-sm leading-relaxed flex gap-3">
                        <span className="text-rose/60 mt-1 shrink-0">▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        {profile.certifications?.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-6 h-px bg-lilac" />
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-lilac">Certifications</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {profile.certifications.map((c) => (
                <div
                  key={c.name}
                  className="rounded-2xl border border-white/8 bg-charcoal/40 p-5 hover:border-lilac/30 hover:bg-charcoal/60 transition-all duration-300 group"
                >
                  <p className="font-display font-medium text-cream text-sm leading-tight group-hover:text-lilac transition-colors duration-200">
                    {c.name}
                  </p>
                  <p className="font-mono text-[11px] text-sand/40 mt-2">{c.issuer}</p>
                  <p className="font-mono text-[10px] text-lilac/60 mt-1">{c.year}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
