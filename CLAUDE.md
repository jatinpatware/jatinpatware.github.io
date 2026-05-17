# Portfolio — How to Update

## Single source of truth: `data.js`

**All content lives in `data.js`.** Never edit `index.html`, `resume/resume_print.html`, or `README.md` directly for content changes — they are all generated/rendered from `resumeData`.

### What updates automatically

| What changed | What to do | What happens automatically |
|---|---|---|
| Resume content (jobs, skills, certs, etc.) | Edit `data.js` | Portfolio site re-renders on load; push triggers README generation via CI |
| Certification link | Add `link: "..."` to the cert entry in `data.js` | Live on next page load |
| New project (ready to publish) | Set `status: "live"` and `github: "..."` in `data.js` | GitHub link appears on the card |
| New project (placeholder) | Add entry with `status: "coming-soon"`, `github: null` | Shows "Coming Soon" badge |

### What to regenerate manually (when needed)

```bash
# Regenerate the PDF resume from resume_print.html (which reads from data.js):
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu \
  --print-to-pdf="resume/Jatin_Patware_Senior_Data_Engineer.pdf" \
  "file:///$(pwd)/resume/resume_print.html"
```

Commit the new PDF alongside your `data.js` change.

### CI/CD

- **GitHub Actions** (`.github/workflows/generate-readme.yml`): runs `scripts/generate_readme.js` on every push to `main` that touches `data.js`. Commits the updated `README.md` automatically.
- **GitHub Pages** (`.github/workflows/deploy.yml`): deploys the site on every push to `main`.

### File map

```
data.js                          ← EDIT THIS ONLY for content changes
index.html                       ← shell; rendered by js/main.js
js/main.js                       ← reads resumeData, builds all DOM
css/styles.css                   ← styles only; no content
resume/resume_print.html         ← print-to-PDF template; reads data.js via <script>
scripts/generate_readme.js       ← generates README.md from data.js
README.md                        ← auto-generated; do not edit manually
```

### Personal GitHub token

Stored at `~/.config/personal-github/token` (chmod 600). Use only when explicitly asked to push to jatinpatware's personal GitHub.
