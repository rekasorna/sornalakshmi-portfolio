import { useEffect, useState } from 'react';

/**
 * Pulls the user's public repos straight from the GitHub REST API at page load.
 * No backend needed — any new repo or push updates the "updated_at" field,
 * so the portfolio's project list stays current automatically.
 *
 * Note: unauthenticated GitHub API calls are capped at 60 requests/hour per IP.
 * That's plenty for a portfolio (one call per visitor session).
 */
export function useGithubRepos(username, { perPage = 6, pinnedNames = [] } = {}) {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState('loading'); // 'loading' | 'success' | 'error'

  useEffect(() => {
    if (!username || username === 'YOUR_GITHUB_USERNAME') {
      setStatus('error');
      return;
    }

    let cancelled = false;

    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=100`
        );
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        const data = await res.json();

        const cleaned = data
          .filter((r) => !r.fork && !r.archived)
          .map((r) => ({
            id: r.id,
            title: r.name,
            description: r.description || 'No description provided.',
            tags: r.language ? [r.language] : [],
            link: r.html_url,
            stars: r.stargazers_count,
            updatedAt: r.updated_at,
          }));

        // Pinned repos (by name) float to the top, rest sorted by most recently updated
        const pinned = pinnedNames
          .map((name) => cleaned.find((r) => r.title.toLowerCase() === name.toLowerCase()))
          .filter(Boolean);
        const rest = cleaned.filter((r) => !pinnedNames.includes(r.title));

        const ordered = [...pinned, ...rest].slice(0, perPage);

        if (!cancelled) {
          setRepos(ordered);
          setStatus('success');
        }
      } catch (err) {
        if (!cancelled) setStatus('error');
      }
    }

    fetchRepos();
    return () => {
      cancelled = true;
    };
  }, [username, perPage, pinnedNames.join(',')]);

  return { repos, status };
}
