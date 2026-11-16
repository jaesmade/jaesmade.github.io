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

- `src/data/portfolio.ts`: name, introduction, About-page portrait, social links, skills, certificates, projects, and the `home` editorial configuration. `home.featuredProjects` is `"all"` to rotate through the portfolio in its existing order, or an array of exact project titles to choose a subset; slides retain portfolio order. `home.rotationIntervalMs` is `6000` for a six-second interval. Each featured slide reuses its project’s image, alt text, title, description, category, and first three technologies, without duplicate assets or project entries. Pause/Resume and Next project are compact secondary controls; on phones their counter sits above the two buttons. Featured descriptions remain 14px and technology labels 12px at every width. Rotation pauses while the panel is hovered or contains keyboard focus, while a project dialog is open, when the panel is offscreen, or when the document is hidden. Reduced-motion preference starts in manual mode and removes the fade. The fixed image region and shared grid rows reserve the tallest title, description, and technology content so changing projects does not move the surrounding layout. Homepage actions and links omit decorative arrows; the résumé action retains its meaningful download icon. View project opens the same accessible File window dialog used by Projects. View projects opens the project browser; Résumé downloads the existing PDF directly. The footer provides the shared Home, Projects, About, and Contact navigation plus the theme control; on phones, all four pages use five equal items with 52px targets and 10px labels. The role/location line follows the home greeting, above the introductory copy; redundant header and work-area navigation are omitted. Homepage social links omit Facebook while Contact retains the full social list.
- Replace `src/assets/me.webp` or change the photo import in the data file to update the About-page portrait.
- Toolbox badges pair each skill with a full-color brand icon. Local SVGs live in `src/assets/toolbox/color/`, and their label mappings live in `src/components/ToolboxIcon.tsx`. Nmap uses its official eye artwork. Machine Learning, NLP, UI/UX Design, and openpyxl use colored line icons that adapt to both themes; new skill labels fall back to a code icon until you add a mapping. Asset sources and licenses are documented in `src/assets/toolbox/SOURCE.md`.
- Projects use a selectable list beside a shared image-and-summary panel. At 1100px and above, the panel stacks its full-width screenshot over the summary; from 700px through 1099px, the panel follows the selected row with image and summary side by side, and narrower screens stack them. Its 16:9 media region contains the full image with an 8px inset, soft-tone background, and fine border. Optional `role` adds a My role line to the preview; optional `contribution` supplies the Overview's My contribution text. Optional `approach` adds a separate Technical approach block alongside it; when neither field exists, Overview shows `description`. View project opens the File window dialog with Overview and Details & links tabs. Overview shows the screenshot gallery, contribution, and tech stack; its details hint switches tabs and focuses Details & links. Details & links contains verified destinations followed by `details: [{ heading, body }]`; technical approach is shown in Overview rather than duplicated there. Detail sections also support `items`, `ordered`, `code`, and `after`; set `collapsible: true` to put a section in a native disclosure, as SkillDis does for Local Setup. Its feature sections separate job seeker and employer tools.
- Optional `repository: { url, stars, forks }` and `liveUrl: "https://…"` fields add GitHub and live-website links directly to the project preview, beside View details. These destinations also remain available inside Details & links. Preview actions wrap on smaller screens, and external links open in a new tab. Add only verified project URLs and accurate details, roles, and contributions. Links are hidden when unavailable. The interface works entirely from local data and does not call GitHub at runtime. Internal tab and panel IDs retain `explore` for compatibility with the earlier label.
- Optional `download: { url, label }` adds a direct file download immediately after GitHub in the preview and Details & links. Excel Workbook Splitter & Merger links directly to `main.exe` from the repository's App v1.01 Windows release. This uses GitHub's attachment response without an intermediate release page or a runtime API call. Its preview shows the desktop app screenshot, and the project description and setup instructions come from the repository README. Screen Assistant links directly to the `Study-Desk-0.2.0-Setup-x64.exe` Windows x64 installer from its Study Desk v0.2.0 release, labeled Download for Windows.
- Project screenshots live in `public/projects/`. Add your system screenshots there, then update each project's `image` and `imageAlt` in `src/data/portfolio.ts` (for example, `image: "projects/skilldis.webp"`). Paths are relative to `public/`, without a leading slash. Previews reserve a 16:9 area and contain the full image without cropping. Missing files show a neutral fallback.
- Facebook Media Scraper is listed under Automation with its GitHub repository and the tourism office's reference-video use case. Its Details & links content follows the local `facebook_scraper/README.md`: desktop workflow, scanning and exports, sign-in and history limits, plus expandable source setup, standalone Windows build, and command-line usage. Its preview and Overview use `public/projects/facebook-media-scraper/01-desktop.webp`, converted losslessly from the user-supplied desktop screenshot at its original 991×748 dimensions; the adjacent JSON records provenance.
- Optional `icon: "projects/skilldis/skilldis-mark.svg"` supplies project artwork in the list, preview heading, and dialog header. Optional `screenshots: [{ src: "projects/skilldis/01-home.webp", alt: "Describe the screenshot", caption: "Home" }]` supplies an ordered Overview gallery; `image` and `imageAlt` still select the featured preview. Without screenshots, Overview keeps the single-image view. The gallery has wrapping Previous/Next controls, Left/Right/Home/End keys while focused, horizontal swipe, and a caption/counter; it never autoplays and resets to the first screenshot when reopened or when returning to Overview.
- SkillDis includes five actual screenshots in `public/projects/skilldis/`, ordered `01-home.webp` through `05-employer-workspace.webp`: Home, Job seeker dashboard, PWD dashboard, Application tracking, and Employer workspace. Its featured preview is `03-pwd-dashboard.webp`. WebP files preserve the supplied images' original dimensions; adjacent `.webp.json` files record provenance. Preserve those records and the SVG artwork's retained license comments when updating assets.
- Municipal Siniloan Website links to `https://siniloanlaguna.gov.ph/` and includes five WebP captures in `public/projects/siniloan/`: homepage, services, offices, transparency, and tourism. The homepage is the preview. The retained SVG seal is a vector trace of the supplied municipal artwork; a 128px lossless WebP derived from it supplies the small icon in the project list, preview, and dialog. Adjacent `.webp.json` files record the screenshot sources and icon derivation.
- Both current projects have real galleries. Enlarge screenshot is an always-visible 44px icon button inset 8px from the contained image's top-right corner, in both galleries and single-image views. Its solid surface, inward focus, accessible label, and hover title identify the action; gallery captions and navigation remain below the image. The button opens the current image in a native modal portaled to `document.body`, above the project dialog. Fit width keeps natural image height and scrolls tall captures; Actual size permits scrolling at the original dimensions. Switching sizes resets the scroll position. A failed image shows Retry screenshot. Escape, the close control, or a backdrop click closes only the viewer and returns focus to its exact trigger, keeping the project dialog open. Keyboard events stay inside the viewer, and touch events on the trigger and viewer do not swipe the parent gallery. Its controls and scrollable image region support keyboard use, both themes, and phone layouts.
- `src/index.css`: theme colors, typography, responsive layout, and print styles. Shared controls use 48px targets, 14px labels, 20px icons, and 1px borders; compact utilities use 44px targets. Reading roles use 16px body, 14px small text, 12px metadata, and 1.75 leading. Media wells share an 8px inset, soft-tone fill, and fine border. About, Projects, and Contact share the Back-and-title heading row. Home uses the standard secondary Download résumé action with download icon and inline PDF suffix. About intentionally retains the user-selected inverted stepped résumé button with document icon and stacked (PDF) caption (64px minimum height, 56px on phones). Both use View projects for the project-page link; project dialog triggers read View project, and repository actions read GitHub.
- Color roles live in the root theme tokens (`--accent`, `--tone-warm`, `--tone-cool`, and `--tone-soft`). Spacing uses a 4px scale with responsive page gutters; change these tokens to adjust the whole template.
- `index.html`: browser title, description, and favicon for your version.
- `public/Josh-Andrew-Esmade-Resume.pdf` is the downloadable résumé linked from Home and About. Edit `scripts/build_resume.py`, then run `python scripts/build_resume.py` to regenerate it. Update the download filename in `src/App.tsx` if you rename the PDF.

Light/dark preference is stored locally when browser storage is available. Project filtering runs entirely in the browser. Toolbox project links open Projects, reset the filter to All, and select the named project. An actual route change moves focus to the labeled main region. Contact offers the visitor’s email app and Copy email address; the latter reports success politely or asks the visitor to select and copy the visible address if clipboard access fails. Both Contact actions are full-width on phones, with 14px email text.

### Add certificates

The About profile uses a portrait and résumé column beside the biography and education. Below 600px the résumé spans the full profile width; at 360px and below portrait and facts stack vertically. Its toolbox follows the [GitHub profile's Tech Stack](https://github.com/jaesmade/jaesmade/blob/main/README.md), combining Frontend and Backend into Web and retaining Automation; Machine Learning, AI, & Data Tools; Databases; and Tools & Design. Edit `skillGroups` in `src/data/portfolio.ts` to update the toolbox; `profile.skills` is derived from these groups.

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
