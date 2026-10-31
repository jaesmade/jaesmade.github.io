# Static CV / portfolio template

A React + TypeScript + Vite website using the Pocket console design: a beige hardware frame, green LCD content area, local pixel headings, project galleries, and footer navigation in the screen's normal flow. A coordinated green LCD dark theme is included. No server, database, API keys, or remote font requests are required.

## Run

Use Node.js 22.12+ or 24 LTS.

```sh
npm install
npm run dev
npm run build
npm run preview
```

Upload the contents of `dist/` to any static host. Hash navigation (`#about`, `#portfolio`, `#contact`) works without server rewrite rules. Old `#resume` links open About, where visitors can download the résumé. Vite uses a relative base so the build also supports repository subpaths. Serve the site over HTTP; do not open index.html via file://.

## GitHub Pages

The portfolio is published at https://jaesmade.github.io/ from the `jaesmade/jaesmade.github.io` repository. Set **Settings → Pages → Source** to **GitHub Actions**.

The repository-root workflow `.github/workflows/deploy.yml` installs the locked dependencies with Node.js 24, lints and builds `CV_front`, and deploys only `CV_front/dist`. Push changes under `CV_front/` to `main` to publish them, or run **Deploy portfolio to GitHub Pages** manually from the Actions tab. The `base: "./"` configuration supports the root site and hash navigation without additional routing rules.

## Personalize

- `src/data/portfolio.ts`: name, introduction, About-page portrait, social links, skills, certificates, and projects. Current content preserves the original CV as an example.
- Replace `src/assets/me.webp` or change the photo import in the data file to update the About-page portrait.
- Toolbox badges pair each skill with a full-color brand icon. Local SVGs live in `src/assets/toolbox/color/`, and their label mappings live in `src/components/ToolboxIcon.tsx`. Nmap uses its official eye artwork. Machine Learning, NLP, UI/UX Design, and openpyxl use colored line icons that adapt to both themes; new skill labels fall back to a code icon until you add a mapping. Asset sources and licenses are documented in `src/assets/toolbox/SOURCE.md`.
- Projects use a selectable list beside a shared image-and-summary panel. Optional `role` adds a My role line to the preview; optional `contribution` supplies the Overview's My contribution text, falling back to `description` when omitted. View details opens the File window dialog with Overview and Details & links tabs. Overview shows the screenshot gallery, contribution, and tech stack; its details hint switches tabs and focuses Details & links. Optional `approach` adds a Technical approach section there, followed by `details: [{ heading, body }]`. Detail sections also support `items`, `ordered`, `code`, and `after`; set `collapsible: true` to put a section in a native disclosure, as SkillDis does for Local Setup. Its feature sections separate job seeker and employer tools.
- Optional `repository: { url, stars, forks }` and `liveUrl: "https://…"` fields add GitHub and live-website links directly to the project preview, beside View details. These destinations also remain available inside Details & links. Preview actions wrap on smaller screens, and external links open in a new tab. Add only verified project URLs and accurate details, roles, and contributions. Links are hidden when unavailable. The interface works entirely from local data and does not call GitHub at runtime. Internal tab and panel IDs retain `explore` for compatibility with the earlier label.
- Project screenshots live in `public/projects/`. Add your system screenshots there, then update each project's `image` and `imageAlt` in `src/data/portfolio.ts` (for example, `image: "projects/skilldis.webp"`). Paths are relative to `public/`, without a leading slash. Previews reserve a 16:9 area and contain the full image without cropping. Missing files show a neutral fallback.
- Optional `icon: "projects/skilldis/skilldis-mark.svg"` supplies project artwork in the list, preview heading, and dialog header. Optional `screenshots: [{ src: "projects/skilldis/01-home.webp", alt: "Describe the screenshot", caption: "Home" }]` supplies an ordered Overview gallery; `image` and `imageAlt` still select the featured preview. Without screenshots, Overview keeps the single-image view. The gallery has wrapping Previous/Next controls, Left/Right/Home/End keys while focused, horizontal swipe, and a caption/counter; it never autoplays and resets to the first screenshot when reopened or when returning to Overview.
- SkillDis includes five actual screenshots in `public/projects/skilldis/`, ordered `01-home.webp` through `05-employer-workspace.webp`: Home, Job seeker dashboard, PWD dashboard, Application tracking, and Employer workspace. Its featured preview is `03-pwd-dashboard.webp`. WebP files preserve the supplied images' original dimensions; adjacent `.webp.json` files record provenance. Preserve those records and the SVG artwork's retained license comments when updating assets.
- Municipal Siniloan Website links to `https://siniloanlaguna.gov.ph/` and includes five WebP captures in `public/projects/siniloan/`: homepage, services, offices, transparency, and tourism. The homepage is the preview. Its SVG seal is a vector trace of the supplied municipal artwork, used in the project list, preview, and dialog. Adjacent `.webp.json` files retain the screenshot source URLs and capture metadata.
- Both current projects have real galleries. Enlarge screenshot opens the current image in a native modal portaled to `document.body`, above the project dialog. Fit width keeps natural image height and scrolls tall captures; Actual size permits scrolling at the original dimensions. Switching sizes resets the scroll position. A failed image shows Retry screenshot. Escape, the close control, or a backdrop click closes only the viewer and returns focus to its exact trigger, keeping the project dialog open. Keyboard events stay inside the viewer. Its controls and scrollable image region support keyboard use, both themes, and phone layouts.
- `src/index.css`: theme colors, typography, responsive layout, and print styles.
- Color roles live in the root theme tokens (`--accent`, `--tone-warm`, `--tone-cool`, and `--tone-soft`). Spacing uses a 4px scale with responsive page gutters; change these tokens to adjust the whole template.
- `index.html`: browser title, description, and favicon for your version.
- `public/Josh-Andrew-Esmade-Resume.pdf` is the downloadable résumé linked from About. Edit `scripts/build_resume.py`, then run `python scripts/build_resume.py` to regenerate it. Update the download filename in `src/App.tsx` if you rename the PDF.

Light/dark preference is stored locally when browser storage is available. Project filtering runs entirely in the browser. Toolbox project links open Projects, reset the filter to All, and select the named project. An actual route change moves focus to the labeled main region. Contact offers the visitor’s email app and Copy email address; the latter reports success politely or asks the visitor to select and copy the visible address if clipboard access fails.

### Add certificates

The About profile uses a portrait and résumé column beside the biography and education. Its toolbox follows the [GitHub profile's Tech Stack](https://github.com/jaesmade/jaesmade/blob/main/README.md), combining Frontend and Backend into Web and retaining Automation; Machine Learning, AI, & Data Tools; Databases; and Tools & Design. Edit `skillGroups` in `src/data/portfolio.ts` to update the toolbox; `profile.skills` is derived from these groups.

The Certificates section appears below My toolbox when you add entries to `profile.certificates` in `src/data/portfolio.ts`.

The current list includes seven Koenig webinar participation certificates from March and May 2025, ordered newest first. The original PDFs are stored in `public/certificates/` with descriptive filenames. Titles and participation dates come from the supplied certificates; issuer verification URLs are omitted when unavailable.

1. Put your certificate PDFs or WebP images in `public/certificates/`.
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

Use a unique `id` for each entry. `issued`, `file`, and `credentialUrl` are optional: omit any that you do not have. File paths are relative to `public/`, without a leading slash, and support PDF documents and WebP images. Visitors can open your file with **View certificate** and follow the issuer's link with **Verify credential**. The list also supports entries that only have a title and issuer. Publish updated files and rebuild the site when adding certificates; this static template has no upload form.

## Assets and credit

Use SVG for vector artwork such as logos, toolbox icons, the favicon, placeholders, and CSS borders. Use WebP for complex raster images such as screenshots and photos; preserve their dimensions and transparency when converting. Existing bitmap artwork also stays WebP. Inline SVG interface symbols follow the theme. `npm run check:images` permits SVG artwork, checks WebP file signatures, and rejects other raster formats and their references before every production build. Artwork credits remain in the SVG comments and toolbox source notes.

Full-color toolbox brand icons come from [Devicon](https://github.com/devicons/devicon), with Nmap's eye artwork from the [Nmap Project](https://nmap.org/images/). SVGs and licenses are bundled locally in `src/assets/toolbox/`, alongside the retained monochrome Simple Icons assets. See `SOURCE.md` in that folder for versions, credits, and theme adjustments.

Design inspiration: the supplied `dimflix.github.io-main` repository. The local `PressStart2P-Regular.woff` and `aldrichrusbydaymarius.woff` font files were copied from its `src/assets/fonts` directory. The portrait and CV content come from this project's original files. No reference-author biography, résumé, project claims, or API integrations are included. Preserve applicable font licenses when redistributing; the supplied reference did not include font license files.

## Checks

```sh
npm run check:images
npm run build
npm run lint
```
