import { useState } from 'react';
import { profile } from '../data/profile';
import { useGithubRepos } from '../hooks/useGithubRepos';

const FILTERS = ['All', 'Python', 'React', 'Machine Learning', 'PHP'];

function getCategory(tags) {
  const t = tags.join(' ').toLowerCase();
  if (t.includes('python') || t.includes('ml') || t.includes('cnn') || t.includes('streamlit') || t.includes('machine learning')) return 'Python';
  if (t.includes('react') || t.includes('node') || t.includes('mern') || t.includes('express')) return 'React';
  if (t.includes('rag') || t.includes('llm') || t.includes('scikit') || t.includes('deep learning')) return 'Machine Learning';
  if (t.includes('php')) return 'PHP';
  return 'All';
}

function ProjectCard({ p }) {
  return (
    <a
      href={p.link || '#'}
      target={p.link ? '_blank' : undefined}
      rel="noreferrer"
      className="group flex flex-col rounded-2xl border border-ink/10 bg-white/50 hover:bg-white/70 hover:border-rose/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose/5 transition-all duration-300 overflow-hidden backdrop-blur-sm"
    >
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-rose via-lilac to-transparent group-hover:from-lilac group-hover:via-rose transition-all duration-500" />

      <div className="p-6 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display font-semibold text-lg text-ink leading-tight group-hover:text-rose transition-colors duration-200 flex-1 pr-2">
            {p.title}
          </h3>
          {p.stars > 0 && (
            <span className="font-mono text-[10px] text-ink/40 whitespace-nowrap flex items-center gap-1">
              ★ {p.stars}
            </span>
          )}
        </div>

        <p className="text-sm text-ink/65 leading-relaxed flex-1 mb-4">{p.description || 'No description provided.'}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-sand/60 text-ink/60"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Link hint */}
        {p.link && (
          <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-rose/60 group-hover:text-rose transition-colors flex items-center gap-1">
            View on GitHub
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </div>
        )}
      </div>
    </a>
  );
}

export default function Projects() {
  const { repos, status } = useGithubRepos(profile.githubUsername, { perPage: 6 });
  const [filter, setFilter] = useState('All');

  const rawProjects =
    status === 'success' && repos.length > 0
      ? repos.map((r) => ({
          title: r.title,
          description: r.description,
          tags: r.tags,
          link: r.link,
          stars: r.stars,
        }))
      : profile.featuredProjects;

  const filtered =
    filter === 'All'
      ? rawProjects
      : rawProjects.filter((p) => getCategory(p.tags) === filter);

  return (
    <section id="projects" className="px-6 py-16 sm:py-24 bg-cream text-ink relative overflow-hidden min-h-[calc(100vh-65px)]">
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-lilac/8 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-rose" />
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-rose">03 · Projects</p>
            </div>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl">
              Selected work.
            </h2>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-rose hover:text-ink border border-rose/30 hover:bg-rose px-4 py-2 rounded-full transition-all duration-300 self-start sm:self-auto"
          >
            All repos ↗
          </a>
        </div>

        {/* Status indicators */}
        {status === 'loading' && (
          <div className="flex items-center gap-2 mb-8 font-mono text-xs text-sand/60">
            <span className="w-1.5 h-1.5 rounded-full bg-lilac animate-ping" />
            Fetching live repos from GitHub…
          </div>
        )}
        {status === 'success' && (
          <div className="flex items-center gap-2 mb-8 font-mono text-xs text-sand/60">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Live from GitHub · updates on every push
          </div>
        )}
        {status === 'error' && (
          <div className="flex items-center gap-2 mb-8 font-mono text-xs text-rose/60">
            <span className="w-1.5 h-1.5 rounded-full bg-rose" />
            Showing featured projects (GitHub fetch unavailable)
          </div>
        )}

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-200 ${
                filter === f
                  ? 'bg-rose text-ink border-rose'
                  : 'border-ink/15 text-ink/60 hover:border-rose/50 hover:text-rose'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-ink/40 font-mono text-sm text-center py-16">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
