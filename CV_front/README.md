# Static CV / portfolio template

A React + TypeScript + Vite website inspired by the DIMFLIX reference: pixel fonts, an ivory/teal/clay palette, a project gallery, and a floating navigation dock. A coordinated evergreen dark theme is included. No server, database, API keys, or remote font requests are required.

## Run

Use Node.js 22.12+ or 24 LTS.

```sh
npm install
npm run dev
npm run build
npm run preview
```

Upload the contents of `dist/` to any static host. Hash navigation (`#about`, `#portfolio`, `#contact`) works without server rewrite rules. Old `#resume` links open About, where visitors can download the résumé. Vite uses a relative base so the build also supports repository subpaths. Serve the site over HTTP; do not open index.html via file://.

## Personalize

- `src/data/portfolio.ts`: name, introduction, About-page portrait, social links, skills, certificates, and projects. Current content preserves the original CV as an example.
- Replace `src/assets/me.webp` or change the photo import in the data file to update the About-page portrait.
- Toolbox badges pair each skill with a full-color brand icon. Local SVGs live in `src/assets/toolbox/color/`, and their label mappings live in `src/components/ToolboxIcon.tsx`. Nmap uses its official eye artwork. Machine Learning, NLP, UI/UX Design, and openpyxl use colored line icons that adapt to both themes; new skill labels fall back to a code icon until you add a mapping. Asset sources and licenses are documented in `src/assets/toolbox/SOURCE.md`.
- Projects use an image gallery like the DIMFLIX portfolio: hover or focus a tile to see its summary, then select it to open a detail modal with its description, tech stack, and guide. Edit each project's `guide` list in `src/data/portfolio.ts` to describe what visitors should explore. Set an optional `repository: { url, stars, forks }` to show a GitHub action in the modal and stat badges on the tile. Add only real links and counts. The gallery works entirely from local data and does not call GitHub.
- Project image placeholders live in `public/projects/`. Add your system screenshots there, then update each project's `image` and `imageAlt` in `src/data/portfolio.ts` (for example, `image: "projects/skilldis.webp"`). Paths are relative to `public/`, without a leading slash. Tiles display at a 16:10 ratio; use that ratio or expect some cropping. Missing files show a neutral fallback.
- `src/index.css`: theme colors, typography, responsive layout, and print styles.
- Color roles live in the root theme tokens (`--accent`, `--tone-warm`, `--tone-cool`, and `--tone-soft`). Spacing uses a 4px scale with responsive page gutters; change these tokens to adjust the whole template.
- `index.html`: browser title, description, and favicon for your version.
- `public/Josh-Andrew-Esmade-Resume.pdf` is the downloadable résumé linked from About. Edit `scripts/build_resume.py`, then run `python scripts/build_resume.py` to regenerate it. Update the download filename in `src/App.tsx` if you rename the PDF.

Light/dark preference is stored locally when browser storage is available. Project filtering runs entirely in the browser. Contact opens the visitor’s email app.

### Add certificates

The About profile includes a Certificates section below My toolbox. It shows an empty state until you add your own entries to `profile.certificates` in `src/data/portfolio.ts`.

1. Put your certificate PDFs or images in `public/certificates/`.
2. Add an entry for each credential. The following is an illustrative example; replace every value with your actual certificate details:

```ts
certificates: [
  {
    id: "my-certificate",
    title: "Your certificate title",
    issuer: "Issuing organization",
    issued: "Month Year",
    file: "certificates/my-certificate.pdf",
    credentialUrl: "https://issuer.example/verify/your-credential",
  },
] as Certificate[],
```

Use a unique `id` for each entry. `issued`, `file`, and `credentialUrl` are optional: omit any that you do not have. File paths are relative to `public/`, without a leading slash, and support PDF, JPG, PNG, and WebP files. Visitors can open your file with **View certificate** and follow the issuer's link with **Verify credential**. The list also supports entries that only have a title and issuer. Publish updated files and rebuild the site when adding certificates; this static template has no upload form.

## Assets and credit

Full-color toolbox brand icons come from [Devicon](https://github.com/devicons/devicon), with Nmap's eye artwork from the [Nmap Project](https://nmap.org/images/). SVGs and licenses are bundled locally in `src/assets/toolbox/`, alongside the retained monochrome Simple Icons assets. See `SOURCE.md` in that folder for versions, credits, and theme adjustments.

Design inspiration: the supplied `dimflix.github.io-main` repository. The local `PressStart2P-Regular.woff` and `aldrichrusbydaymarius.woff` font files were copied from its `src/assets/fonts` directory. The portrait and CV content come from this project's original files. No reference-author biography, résumé, project claims, or API integrations are included. Preserve applicable font licenses when redistributing; the supplied reference did not include font license files.

## Checks

```sh
npm run build
npm run lint
```
