import { profile } from '../data/profile';
import { useGithubRepos } from '../hooks/useGithubRepos';

export default function GithubTerminal() {
  const { repos, status } = useGithubRepos(profile.githubUsername, { perPage: 5 });

  return (
    <div className="rounded-2xl border border-white/10 bg-charcoal/70 shadow-2xl shadow-black/50 overflow-hidden backdrop-blur-sm">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-white/[0.02]">
        <span className="w-2.5 h-2.5 rounded-full bg-rose/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-sand/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-lilac/70" />
        <span className="ml-4 font-mono text-[11px] text-sand/50">
          ~ github --user {profile.githubUsername}
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-5 font-mono text-[12px] leading-relaxed h-72 overflow-y-auto space-y-1 custom-scroll">
        <p className="text-sand/40">$ gh repo list {profile.githubUsername} --limit 5</p>

        {status === 'loading' && (
          <p className="text-lilac animate-pulse mt-2">
            <span className="inline-block w-3 h-3 rounded-full border border-lilac border-t-transparent animate-spin mr-2" />
            Fetching repositories…
          </p>
        )}

        {status === 'error' && (
          <div className="mt-2 space-y-1">
            <p className="text-rose">⚠ Rate limited or username not found</p>
            <p className="text-sand/40">Showing fallback data…</p>
            {profile.featuredProjects.slice(0, 3).map((p) => (
              <div key={p.title} className="mt-2">
                <span className="text-lilac">↳ {p.title}</span>
                {p.tags[0] && <span className="text-sand/40"> · {p.tags[0]}</span>}
              </div>
            ))}
          </div>
        )}

        {status === 'success' && repos.length === 0 && (
          <p className="text-sand/40 mt-2">No public repositories found.</p>
        )}

        {status === 'success' && repos.map((r, i) => (
          <div key={r.id} className="mt-2" style={{ animationDelay: `${i * 80}ms` }}>
            <a
              href={r.link}
              target="_blank"
              rel="noreferrer"
              className="text-lilac hover:text-cream hover:underline transition-colors"
            >
              ↳ {r.title}
            </a>
            {r.tags[0] && <span className="text-sand/40"> · {r.tags[0]}</span>}
            {r.stars > 0 && <span className="text-sand/30"> · ★ {r.stars}</span>}
          </div>
        ))}

        <p className="text-sand/25 mt-4 pt-2 border-t border-white/5">
          $ {/* cursor */}<span className="animate-pulse">▋</span>
        </p>
        <p className="text-sand/25 text-[10px]">
          Updates live on every push to GitHub
        </p>
      </div>
    </div>
  );
}
