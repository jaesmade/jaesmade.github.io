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
    fontSize: "clamp(32px, 4.45vw, 56px)"
    fontWeight: 400
    lineHeight: 1.4
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
    lineHeight: 1.8
  intro:
    fontFamily: "Aldrich, Arial, sans-serif"
    fontSize: "clamp(18px, 2.25vw, 22px)"
    fontWeight: 400
    lineHeight: 1.5
  menu:
    fontFamily: "Pixel, monospace"
    fontSize: "clamp(15px, 1.35vw, 18px)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Aldrich, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
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
    padding: "16px 20px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.on-accent}"
  filter:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    padding: "12px 20px"
    rounded: "{rounded.square}"
  filter-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  skill:
    textColor: "{colors.ink}"
    padding: "12px 16px"
    typography: "{typography.label}"
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

The shell is compact hardware around a natural scrolling document. Selection is an inverted menu row with a pixel triangle; secondary navigation is integrated into the screen's lower edge. This record describes the current source, not a declaration that finish review or reference matching has passed.

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

The compact block headings establish the handheld character; Aldrich supports longer reading and small labeled controls. All recorded roles use regular weight. The base body size is the browser default inherited by the source; component sizes override it where needed.

### Hierarchy

- **Display:** home greeting; narrows at the tablet and mobile breakpoints. Mobile uses `clamp(24px, 7.1vw, 34px)` with line-height (1.5).
- **Headline:** inner-page titles; mobile uses `clamp(21px, 5.5vw, 28px)`.
- **Title:** section headings, with ample line-height for the pixel face.
- **Body:** long paragraphs with a maximum reading width (70ch).
- **Intro:** larger introductory copy, limited to (380px) on desktop.
- **Menu:** home destination labels, reduced to (12px) below (850px), (10px) below (600px), and (9px) below (360px).
- **Label:** skills, metadata, and compact actions. Footer controls use (14px) on desktop and (12px) on mobile.

**The Two Voices Rule.** Pixel carries identity and headings; Aldrich carries prose and utility labels.

## Layout

The main enclosure is full width up to (1400px), centered within fluid exterior padding. The LCD has its own fluid gutter and a separate hardware bezel. Home uses two columns in a (1.14:1) ratio, separated by a fluid gap of (40–86px); inner pages grow with the document rather than introducing a fixed scrolling panel.

Spacing follows the source's four-pixel rhythm. Home's screen minimum height is `clamp(360px, 65dvh, 600px)`; short desktop viewports have a dedicated reduced-height arrangement. The footer stays in normal screen flow.

At (1100px), footer navigation compresses. At (850px), home becomes one column, menu rows shorten, and the vertical column divider disappears. At (600px), the bezel becomes (10px), screen gutters become (14px), project and About grids become one column, filters use two columns, and the footer uses a two-column grid with a full-width theme control. At (360px), topbar wrapping and smaller labels preserve fit. Project cards otherwise use an auto-fill grid with a (310px) minimum.

## Elevation & Depth

Depth comes from the beige enclosure, inset double screen rules, stepped outlines, and tonal LCD layers. Main surfaces have no drop shadows. The project dialog alone has a diffuse shadow (`0 20px 64px var(--shadow)`) over a dark translucent backdrop. Its shadow color is theme dependent: light (`#10251538`) and dark (`#0b180e70`).

**The Inset Hardware Rule.** The enclosure's contour and screen keylines establish depth; ordinary content controls remain flat.

## Shapes

The shell, screen, and home menu use embedded geometric (32px) SVG border images, sliced at (10) and stretched with an (8px) painted border. Their continuous stepped contours and inset screen/menu rules are code-native geometry. Theme and selected-state SVGs supply the correct fills and keylines; these surfaces deliberately have transparent CSS backgrounds because their border images include the fill.

Content cards, filters, skills, and primary actions use square corners and thin rectangular rules. Small screw details are decorative hardware and are hidden from assistive technology. Existing toolbox brand marks retain their own shapes; the small pandas backing is an asset legibility exception, not a general corner token.

## Components

### Buttons

Primary actions are flat rectangles using accent fill, inverse text, a matching two-pixel border, and a minimum height (48px). Hover switches to accent-hover. Global link and button focus uses a three-pixel outline with a five-pixel offset. Ordinary text links underline on hover and retain at least (44px) interaction height.

The résumé download sits directly below the portrait, aligned to its full width. It reuses the home menu's stepped border, leading document icon, pixel label, and inverse hover/focus state, with a compact PDF label. It remains a native download link; the selection cursor is reserved for the homepage menu. Portrait and download share a compact column on mobile, and the download control is omitted in print.

### Chips

Skill labels are noninteractive outlined tags with inline toolbox marks and a minimum height (44px). Project technology tags use the cool LCD tone and a one-pixel rule. Category filters are buttons with surface fill; hover uses the cool tone and selected state uses accent inversion.

### Cards / Containers

Project cards have a two-pixel rule and a landscape image area (16:10). Hover or focus within reveals an ink-colored detail overlay; the image button's focus outline is inset. Touch surfaces show the overlay at rest and omit its longer description. Portrait framing uses a thin rule, surface fill, and a small inset.

### Navigation

Home destination rows use the stepped double contour, leading inline SVG icon, and pixel label. About me is selected initially. Pointer entry or keyboard focus moves the triangular cursor and inversion to that row, which remains selected after the pointer leaves and when returning home during the same app session. Action links use clear text without decorative arrows. Color transitions use (140ms) with `steps(2, end)`.

The footer consists of labeled inline SVG links inside the LCD, with accent inversion for the current page and a cool-tone hover background. It remains in document flow. The hardware title and on-screen handle link home.

### Project dialog

The native dialog uses a double ink rule, LCD background, sticky title bar, a (44px) close button, and a separate project-category metadata line. Desktop content is two columns; mobile becomes one column. The modal has constrained viewport height and scrolls its own content. Escape, close button, and backdrop dismissal restore the trigger focus in the application.

Reduced-motion preference removes animations, transitions, and smooth scrolling. Project overlays otherwise use (180ms) ease-out opacity and visibility transitions.

## Do's and Don'ts

### Do:
- **Do** use the green LCD palette inside the beige hardware in both themes.
- **Do** preserve continuous stepped contours and their inset keylines on shell, screen, and home menu.
- **Do** use Pixel for headings and Aldrich for reading and labeled controls.
- **Do** keep footer navigation integrated in normal screen flow.
- **Do** preserve clear focus, labeled actions, and the narrow mobile bezel.

### Don't:
- **Don't** replace the approved LCD family with an unrelated dark palette.
- **Don't** add floating navigation over the document.
- **Don't** add a start gate, fictional statistics, or invented portfolio content.
- **Don't** treat retained asset colors as additional interface accent tokens.

