# Sornalakshmi G — Portfolio

React + Vite + Tailwind portfolio for Data Analyst / Full Stack Developer roles.
Projects section auto-syncs with your public GitHub repos (no backend needed).
Contact form sends messages to your inbox via EmailJS (no backend needed).

## Structure

```
portfolio/
  src/
    data/profile.js         <- ALL your content lives here (edit this first)
    hooks/useGithubRepos.js <- fetches your live GitHub repos client-side
    components/
      Navbar.jsx
      Hero.jsx
      GithubTerminal.jsx    <- signature "live from GitHub" panel
      About.jsx
      Skills.jsx
      Projects.jsx          <- shows live repos, falls back to profile.js list
      Experience.jsx
      Contact.jsx           <- EmailJS contact form
      Footer.jsx
    App.jsx
    index.css
  tailwind.config.js         <- color palette (Inner Child theme) + fonts
  .env.example                <- copy to .env and fill in EmailJS keys
```

## 1. Install

```bash
npm install
```

## 2. Set your content

Open `src/data/profile.js` and fill in:
- `githubUsername` — your GitHub handle (this powers the live projects feed)
- `github`, `linkedin`, `email`, `phone`
- `about`, `skills`, `experience`, `education`, `certifications`

No other file needs personal data edited into it.

## 3. Connect GitHub (auto-sync projects)

Nothing to configure beyond `githubUsername` in `profile.js`. On every page load,
the site calls the public GitHub REST API:

```
GET https://api.github.com/users/<username>/repos?sort=updated
```

Whenever you push a new repo or update an existing one, it appears on the site
automatically the next time someone visits — no redeploy required.

Optional: list specific repo names in `pinnedNames` (in `useGithubRepos` calls)
to always show certain projects first.

> Unauthenticated GitHub API calls are limited to 60 requests/hour per visitor IP —
> fine for normal portfolio traffic. If you outgrow it, add a GitHub personal
> access token via a small serverless function later.

## 4. Connect EmailJS (get messages from the contact form)

1. Create a free account at https://www.emailjs.com
2. Add an **Email Service** (e.g. connect your Gmail) → note the **Service ID**
3. Create an **Email Template** with variables `from_name`, `from_email`, `message`, `to_email` → note the **Template ID**
4. Go to **Account → General** → copy your **Public Key**
5. Copy `.env.example` to `.env` and paste in the three values:

```bash
cp .env.example .env
```

```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

Restart the dev server after editing `.env`.

## 5. Run locally

```bash
npm run dev
```

## 6. Deploy

Push to GitHub, then import the repo on [Vercel](https://vercel.com) or
[Netlify](https://netlify.com). Add the same three `VITE_EMAILJS_*` variables
in the host's Environment Variables settings before deploying.

## Design notes

- **Palette**: near-black base (`ink` #0F0D0E) for a premium/tech feel, with
  cream (`cream` #F3EEE9) alternating sections for contrast, and the two
  accent colors from your reference palette — rose (`rose` #C4737C) for
  primary actions and lilac (`lilac` #DFA0F3) for data/secondary highlights.
- **Type**: Space Grotesk (display), Inter (body), JetBrains Mono (labels,
  terminal, tags) — the mono face signals "data/tech" throughout.
- **Signature element**: the `GithubTerminal` panel in the hero — a live,
  real-time feed of your GitHub activity styled as a terminal, which doubles
  as proof of the "reflects on push" requirement.
- Resume is intentionally **not** embedded as a PDF; all resume content is
  rewritten as structured sections instead.
