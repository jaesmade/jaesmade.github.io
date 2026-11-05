---
name: Pocket console CV
description: A beige handheld frame and olive LCD for Josh Andrew Esmade's portfolio.
colors:
  bg: "#677558"
  shell: "#e4d7b6"
  hardware-ink: "#153519"
  screen: "#c6d877"
  ink: "#153519"
  muted: "#304d26"
  line: "#536e36"
  surface: "#d0df8e"
  tone-warm: "#bdce73"
  tone-cool: "#b5ca6c"
  tone-soft: "#cbdc87"
  accent: "#153519"
  on-accent: "#d4e48f"
  accent-hover: "#254b24"
  focus: "#153519"
  dark-screen: "#203a29"
  dark-ink: "#d3e39c"
  dark-muted: "#becf8f"
  dark-line: "#85995f"
  dark-surface: "#29462e"
  dark-tone-warm: "#334c2f"
  dark-tone-cool: "#3d5734"
  dark-tone-soft: "#2d482e"
  dark-accent: "#cfdf8e"
  dark-on-accent: "#153519"
  dark-accent-hover: "#e0ecaf"
  dark-focus: "#e0ecaf"
typography:
  display:
    fontFamily: "Pixel, monospace"
    fontSize: "clamp(32px, 3.5vw, 48px)"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Pixel, monospace"
    fontSize: "clamp(23px, 2.7vw, 34px)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Pixel, monospace"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.8
  body:
    fontFamily: "Aldrich, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  intro:
    fontFamily: "Aldrich, Arial, sans-serif"
    fontSize: "clamp(18px, 2.25vw, 22px)"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Aldrich, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
  small:
    fontFamily: "Aldrich, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.75
rounded:
  square: "0px"
spacing:
  space-1: "4px"
  space-2: "8px"
  space-3: "12px"
  space-4: "16px"
  space-5: "20px"
  space-6: "24px"
  space-8: "32px"
  space-10: "40px"
  space-12: "48px"
  space-16: "64px"
  page-gutter: "clamp(16px, 2.2vw, 32px)"
  section-space: "clamp(32px, 4vw, 56px)"
  outer-space: "clamp(12px, 2.4vw, 40px)"
  bezel: "clamp(12px, 1.7vw, 24px)"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.square}"
    padding: "8px 16px"
    height: "48px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "8px 16px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.on-accent}"
  filter:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    padding: "8px 16px"
    rounded: "{rounded.square}"
  filter-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  project-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.square}"
  footer-item:
    textColor: "{colors.ink}"
    padding: "8px 12px"
    rounded: "{rounded.square}"
  footer-item-active:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
---

# Design System: Pocket console CV

## Overview

**Creative North Star: "Pocket console"**

Early monochrome handheld interfaces give the portfolio its material character: a warm beige enclosure, olive LCD, block lettering, inset rules, and continuous stepped contours. The real CV is immediately readable within the screen. Existing portrait, project artwork, toolbox marks, and local fonts anchor the interface in Josh's work.

The shell is compact hardware around a natural scrolling document. Project selection uses an inverted row with a pixel triangle; direct homepage actions and labeled footer navigation guide exploration. This record describes the current source, not a declaration that finish review or reference matching has passed.

**Key Characteristics:**
- Beige hardware surrounding an olive LCD.
- Local pixel headings paired with Aldrich reading text.
- Continuous stepped border geometry and rectangular content controls.
- Inverted selection, visible keyboard focus, and labeled footer navigation.
- Narrow mobile bezel with stacked content.

## Colors

The palette combines warm hardware neutrals with monochrome green screen tones. Frontmatter records light values and the explicit dark variant; source custom properties remain the runtime authority.

### Primary

- **Olive ink / accent:** headings, body emphasis, selected controls, outlines, and screen keylines.
- **Pale selection text:** the readable inverse foreground on the accent.
- **LCD green:** the screen's main field, with lighter surface and related warm, cool, and soft tones for supporting content.

### Neutral

- **Moss canvas:** exterior background.
- **Beige shell:** hardware enclosure and title strip.
- **Muted olive:** reading paragraphs and secondary metadata.
- **Rule olive:** dividers and content borders.

Dark mode replaces screen tokens with forest green surfaces and pale olive text; hardware beige, exterior moss, and hardware ink remain stable. Print uses white paper and dark text.

**The LCD Continuity Rule.** Theme changes retain the green LCD family and beige hardware. Light is the default; an explicit stored console preference selects dark.

## Typography

**Display Font:** Pixel, the locally hosted Press Start 2P, with monospace fallback.  
**Body Font:** locally hosted Aldrich, with Arial and sans-serif fallback.

The compact block headings establish the handheld character; Aldrich supports longer reading and small labeled controls. All recorded roles use regular weight. Reading text uses an explicit body size and shared leading; component roles retain their own display scale. Shared source properties define body (16px), small text and control labels (14px), metadata (12px), and reading line-height (1.75).

### Hierarchy

- **Display:** home greeting; narrows at the tablet and mobile breakpoints. The regular muted role/location line (12px) follows the greeting before the introductory copy. Mobile uses `clamp(24px, 7.1vw, 34px)` with line-height (1.5).
- **Headline:** inner-page titles; mobile uses `clamp(21px, 5.5vw, 28px)`.
- **Title:** section headings, with ample line-height for the pixel face.
- **Body:** long paragraphs with a maximum reading width (70ch).
- **Intro:** larger introductory copy, limited to (380px) on desktop.
- **Label:** skills, metadata, and compact actions. Footer controls use (14px) on desktop, (12px) below (850px), and (10px) on phones. Copyright text scales from (11px) to (13px). Third-level headings use regular Aldrich.

**The Two Voices Rule.** Pixel carries identity and headings; Aldrich carries prose and utility labels.

## Layout

The main enclosure is full width up to (1400px), centered within fluid exterior padding. The LCD has its own fluid gutter and a separate hardware bezel. Home pairs the introduction and direct actions with featured work in a (0.9:1.1) column ratio, separated by a fluid gap of (32–56px); inner pages grow with the document rather than introducing a fixed scrolling panel.

Spacing follows the source's four-pixel rhythm. Home's screen minimum height is `clamp(360px, 65dvh, 600px)`; short desktop viewports have a dedicated reduced-height arrangement. The footer stays in normal screen flow.

At (1100px), footer navigation compresses; below that width the shared project preview flows at full width immediately after the selected project row. The preview places image and summary side by side from (700px) through (1099px), stacking them at narrower widths and on desktop from (1100px). At (850px), home becomes one column and the vertical column divider disappears. At (600px), the bezel becomes (10px), screen gutters become (14px), the About grid becomes one column, filters use two columns, and every page uses the same five-item footer grid with (52px) targets and (10px) labels. At (360px), topbar wrapping and smaller labels preserve fit. The desktop project selector uses a compact list beside a wider image-and-summary panel with a (32px) gutter; preview padding and major gaps are (24px), with (20px) between summary groups. Phones use (16px) preview padding and summary gaps.

The approved homepage extension pairs introduction and direct project/résumé actions with one real project artifact. Desktop uses a (0.9:1.1) column ratio and a fluid (32–56px) gap; the screenshot is contained in its original colors rather than cropped or recolored. At (850px) and below the content stacks, the featured panel is at most (600px) wide. At (600px) and below the project and résumé actions become full-width, the homepage footer uses five equal labeled destinations including the theme control. The five-item footer arrangement is shared by all four pages.

## Elevation & Depth

Depth comes from the beige enclosure, inset double screen rules, stepped outlines, and tonal LCD layers. Main surfaces have no drop shadows. The project dialog and screenshot viewer share a diffuse modal shadow (`0 20px 64px var(--shadow)`) over dark translucent backdrops. Their shadow color is theme dependent: light (`#10251538`) and dark (`#0b180e70`).

**The Inset Hardware Rule.** The enclosure's contour and screen keylines establish depth; ordinary content controls remain flat.

## Shapes

The shell, screen, and featured project frame use embedded geometric (32px) SVG border images, sliced at (10) and stretched with an (8px) painted border. Their continuous stepped contours and inset screen/feature rules are code-native geometry. Theme SVGs supply the correct fills and keylines; these surfaces deliberately have transparent CSS backgrounds because their border images include the fill.

Content panels, filters, technology tags, and primary actions use square corners and thin rectangular rules. Small screw details are decorative hardware and are hidden from assistive technology. Existing toolbox brand marks retain their own shapes; the small pandas backing is an asset legibility exception, not a general corner token.

## Components

### Buttons

Primary actions are flat rectangles using accent fill, inverse text, a matching one-pixel border, and a minimum height (48px), with (8px 16px) base padding. Utility labels use regular Aldrich (14px/1.5), with (20px) action icons. Hover switches to accent-hover. Secondary actions use a surface fill and one-pixel line border, turning cool with an ink border on hover; the dialog footer Close is a compact (44px) secondary action. Global link and button focus uses a three-pixel outline with a three-pixel offset; inverted controls use inward inverse focus where needed. Disabled controls reduce opacity and expose a disabled cursor. Pressing actions moves them down (1px); reduced-motion preference removes the press movement. Ordinary text links underline on hover and retain at least (44px) interaction height.

The About page uses the approved Player profile composition. A compact left column holds a square portrait in its original colors, role, location, availability, and résumé download. The portrait has no filters or blend effects in either theme. A one-pixel vertical rule separates it from the wider biography, introduction, education, and project action. The About Download résumé control is an intentional user-selected exception to shared secondary actions: an inverted stepped frame with a document icon, regular (14px) label, and stacked (12px) (PDF) caption. Its minimum height is (64px), reducing to (56px) on phones; the document icon reduces from (28px) to (24px). Theme-specific resume border images supply the inverse fill; hover and visible focus use the normal stepped frame and ink text. Home retains its standard secondary résumé action with download icon and inline PDF suffix. Both remain native download links. Below 600px, portrait and profile details sit side by side above the biography, with a horizontal divider replacing the vertical rule. The résumé spans both profile columns on phones. At (360px) and below, portrait and facts stack vertically. The download control is omitted in print.

The full-width About toolbox follows the GitHub profile's Tech Stack, with Frontend and Backend combined into Web. The other four ruled rows are Automation; Machine Learning, AI, & Data Tools; Databases; and Tools & Design. Each row has a narrow category column and wrapping icon-and-name entries, without individual tag borders. Below 600px, each category sits above its tools. Brand artwork is retained, with custom line symbols for tools without dedicated marks. Certificates appear below the toolbox only when real entries exist.

### Homepage featured work and direct navigation

The homepage reuses the existing continuous stepped border for its featured project rotation. Each slide uses the real project title, category, contained screenshot, description, and a wrapping text-only list of its first three technologies. Projects appear in portfolio order; local configuration may select a subset by exact title. The image region uses soft-tone fill, a one-pixel secondary rule, (8px) inset, and desktop height `clamp(240px, 22vw, 296px)`; below (850px) it uses `clamp(208px, 54vw, 296px)`, capped at (280px) on phones. Shared grid rows reserve the tallest title, description, and technology content across all slides; changing projects preserves the panel height and surrounding layout. An underlined View project button opens the shared project dialog with the same focus restoration as other project triggers. The direct View projects action uses accent inversion; the résumé download uses the existing square secondary action. These actions share the standard (48px) minimum height, (14px) labels, and (20px) icons at all widths. The action row uses (12px) gaps and margins of (24px) above and (12px) below; phones reduce these to (8px) gaps and (20px/8px) margins. No new interface palette, font, shadow, or raster treatment is introduced.

Rotation advances every six seconds with a (400ms) fade. Visible Pause/Resume and Next project secondary controls use (14px) labels and support manual use; on phones the counter occupies a row above the two controls. Featured descriptions use (14px/1.75) and technology labels (12px) at all widths. A reserved category width (8ch) keeps the feature header stable. A one-pixel secondary rule separates the control strip, with (12px) top margin, (8px) top padding, and (44px) button targets. Autoplay pauses on pointer hover, keyboard focus within the panel, an open project dialog, an offscreen panel, or a hidden document. Reduced-motion preference starts in manual mode and removes the fade. Homepage links and actions omit decorative arrows; the résumé download retains its meaningful download icon. These motion and layout behaviors belong to the homepage feature; they do not change the manual screenshot galleries.

The header contains the wordmark only, with a minimum interaction height (44px). Labeled footer navigation provides the shared Home, Projects, About, and Contact destinations inside the LCD and in normal document flow. The duplicate header links and work-area navigation strip are omitted. Featured content remains configured in local portfolio data.

The project dialog Overview now shows optional contribution and technical approach as separate reading blocks beside the gallery. When both are absent, the description provides the Overview. Details & links retains verified destinations and the detailed sections without repeating the technical approach. Technology labels and existing dialog/gallery behavior continue unchanged.

### Chips

Skill labels are noninteractive entries with inline toolbox marks. Project technology tags are passive outlined labels: transparent fill, one-pixel secondary rule, minimum height (28px), (4px 8px) padding, and Aldrich text (12px/1.5). Category filters are (44px) surface buttons with full one-pixel borders and (14px) labels; hover uses the cool tone and selected state uses accent inversion. Square tonal count badges are at least (24px), reducing to (20px) on phones; selected badges reverse their foreground and fill. Phone filters use two columns, compact (8px) horizontal padding, and (14px) labels. Secondary rules use `--line-soft`, mixing the theme's line color at 45% with its screen color.

### Cards / Containers

Project choices use (76px) minimum-height rows, subtle horizontal separators, compact tonal category badges, and an inverted selected row with a pixel cursor. The shared preview has a simple one-pixel line frame and surface fill, with a fine divider below its heading, a reserved 16:9 image area, description, optional My role line, technology tags, and a filled View project action with a folder icon. Available GitHub and Live website destinations appear directly before View project as secondary actions with their matching icons; the action row wraps with (12px) gaps and preserves (48px) targets. External links open in a new tab with project-specific accessible labels and remain available in the dialog. Images use contain sizing to retain the full artwork and update with selection. The full-width (16:9) media region has a one-pixel secondary rule, soft-tone fill, and (8px) image inset; on desktop the summary follows below it. The two current projects, SkillDis and Municipal Siniloan Website, have real screenshot galleries; unavailable images retain the neutral fallback. Console and featured-frame stepped outlines remain the strongest framing. Portrait framing shares the media well's one-pixel secondary rule, soft-tone fill, and (8px) inset.

### Navigation

About, Projects, and Contact share a page heading with the (44px) Back control beside the title, (20px) gap, (24px) bottom padding, (32px) bottom margin, and one-pixel secondary rule. On phones these become (12px), (20px), and (24px). Project-opening actions consistently read View project with project-specific accessible names; page links read View projects; repository actions read GitHub in the preview and dialog.

The footer consists of labeled inline SVG links inside the LCD, with accent inversion for the current page and a cool-tone hover background. Controls reserve a one-pixel transparent border that becomes a secondary rule on hover; the active item has an accent border and inward inverse focus. A one-pixel line rule separates the footer from content. It remains in document flow. Inner-page Back is an outlined (44px) square surface control. The hardware title and on-screen handle link home.

An actual route change moves focus to the labeled main region. Contact pairs the email link with a flat, outlined Copy email address control; a polite status confirms copying or directs visitors to select the visible address if clipboard access fails. Both Contact actions span the available width on phones, with (14px) email text.

### Project dialog

Facebook Media Scraper appears under Automation and reuses the existing project presentation with the user-supplied desktop screenshot, converted to lossless WebP at its original 991×748 dimensions with adjacent provenance JSON. Its summary and contribution state the tourism office's use of reference videos from other Facebook pages. Details & links follows the local README, covering the desktop workflow, scanning and exports, sign-in and history limits, with source setup, standalone Windows build, and command-line usage in native disclosures. The explanation grid allows its column to shrink, wraps long file paths, and keeps command blocks scrolling within their own width on phones. The Python/Tkinter/Playwright/yt-dlp stack comes from the local source. No new visual tokens are introduced.

The native dialog uses the approved File window composition: a single one-pixel frame and LCD background, a project mark or folder icon beside the wrapping pixel title and category, a (44px) close control, square Overview / Details & links tabs, and a separate Close footer. A flex column keeps the header, tabs, and footer available while only the body scrolls; these are not sticky title bars. The dialog is at most (960px) wide with viewport clearance. Its body uses a stable height of `min(460px, 64dvh)`, a reserved scrollbar gutter, and contained overscroll.

Overview splits the contained (16:9) screenshot gallery and contribution text (55:45), with a fine vertical separator and a full-width technology row below. Overview shows optional contribution and technical approach in separate blocks. The description is used only when both are absent. An underlined details hint switches to Details & links and focuses that tab. The galleries have wrapping previous/next controls, a polite caption and counter, focused Left/Right/Home/End navigation, and horizontal swipe; they reset when reopened or returning to Overview. At (600px) and below, content stacks, the vertical separator disappears, and header/body padding reduces from (24px) to (16px). Details & links uses readable explanation sections with a maximum width (68ch), regular Aldrich section headings (16px), and body text (16px) with line-height (1.75). Supplied repository and optional live-site destinations appear above the explanation, followed by detailed project sections; the technical approach stays in Overview. SkillDis groups features by job seeker and employer, with Local Setup in a native disclosure between fine horizontal rules and a (44px) summary target. Omit the link group when neither destination exists. Internal tab/panel identifiers retain `explore`; the removed What to explore section is not part of this component.

Tabs invert the selected state, retain visible inward focus, and expose tab / tabpanel semantics with roving keyboard focus using Left / Right, Home, and End. Switching tabs starts the scrolling body at its top; reopening a project starts at Overview. Escape, header close, footer Close, and backdrop dismissal restore the trigger focus; the document behind the dialog is scroll locked. Keep the inherited theme tokens and diffuse modal shadow. Reduced-motion preference removes animations, transitions, and smooth scrolling.

Tab controls use (14px/1.5) Aldrich text, (8px 16px) padding, surface fill, and fine borders with the bottom edge shared by the tab bar. On phones they flex equally with no minimum width and (12px) horizontal padding. Gallery arrows and header close controls are (44px) surface squares with (20px) SVGs; hover uses the cool tone and ink border and keyboard focus stays visible. The Overview Details & links hint has a meaningful folder icon; Copy email address has a copy icon.

### Screenshot viewer

Portrait, featured artwork, project preview, dialog gallery, and enlarged screenshot canvases share a media well: soft-tone fill, one-pixel secondary rule, and (8px) inset. Screenshot images remain contained in their original proportions and colors; enlarged images preserve natural dimensions in Fit width and Actual size.

Enlarge screenshot is an always-visible icon-only square (44px) over the image, inset (8px) from the contained screenshot's top-right corner in both galleries and single-image views. Natural image proportions determine the inset within the centered (16:9) media region. The control has an opaque surface fill, one-pixel rule, ink SVG (20px), inward focus, a project-specific accessible label, and an Enlarge screenshot title. It opens a second native modal through a body portal, with the LCD tokens, one-pixel rule, and inherited diffuse modal shadow. The viewer is at most (1440px) wide with (32px) viewport clearance; phones below (600px) use (16px) clearance. Its regular Pixel title uses `clamp(14px, 2vw, 22px)` with line-height (1.6), beside a (44px) close control. Header and size controls remain available above a focusable scrolling canvas, sharing the dialog's (24px) desktop and (16px) phone gutters.

Viewer utility controls share the surface fill, (14px/1.5) label, square border, and (44px) target of compact actions. Selected size controls use accent inversion; Retry screenshot uses the secondary action treatment with a (48px) target; unselected hover uses the cool tone. Inward focus remains visible on inverse controls. Press feedback moves controls (1px) and is removed for reduced motion.

Fit width contains the image horizontally without stretching or capping its natural height; Actual size removes the width limit so the original image can scroll in both directions. Pressed size controls use accent inversion, and changing size resets the canvas scroll. Loading failure replaces the image with a polite error and Retry screenshot action. Escape, backdrop, and close dismiss only the viewer, restoring its exact Enlarge screenshot trigger while preserving the parent dialog and its scroll lock. Viewer keyboard, cancel, close, and click events are isolated from the gallery and parent dialog; touch start/end on the image trigger and viewer are isolated from gallery swipes.

## Do's and Don'ts

### Do:
- **Do** use the green LCD palette inside the beige hardware in both themes.
- **Do** preserve continuous stepped contours and their inset keylines on shell, screen, and featured frame.
- **Do** use Pixel for headings and Aldrich for reading and labeled controls.
- **Do** keep footer navigation integrated in normal screen flow.
- **Do** preserve clear focus, labeled actions, and the narrow mobile bezel.

### Don't:
- **Don't** replace the approved LCD family with an unrelated dark palette.
- **Don't** add floating navigation over the document.
- **Don't** add a start gate, fictional statistics, or invented portfolio content.
- **Don't** treat retained asset colors as additional interface accent tokens.

