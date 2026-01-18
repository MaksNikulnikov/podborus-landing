# Podborus Landing (Static)

Production-grade static landing page for **Podborus** (recruiting / staffing services in Russia).
Built as a lightweight, fast, SEO-friendly site with semantic HTML, dark theme, and minimal JS.

- **Stack:** HTML + CSS + vanilla JS
- **Fonts:** Geologica, Montserrat, Nobile (Google Fonts)
- **UI libraries:** Swiper (reviews carousel), AOS (scroll animations)
- **No forms in v1:** primary CTA via Telegram / phone / email (lead capture via direct contact)

---

## Project structure

```
podborus-landing/
  index.html
  privacy.html
  assets/
    css/
      styles.css
    js/
      main.js
    img/
      logo-mark.svg
      favicon.svg
      hero-abstract.webp
      team-working.webp
      process-timeline.webp
      case-1.webp
      case-2.webp
      case-3.webp
```

---

## Images you must provide

Place these files in `assets/img/` with **exact names**:

- `hero-abstract.webp` — abstract tech background, dark SaaS style, 1600×900
- `team-working.webp` — neutral office hiring discussion scene, no recognizable faces, 1200×800
- `process-timeline.webp` — infographic illustration, **3:2 ratio**, recommended 1200×800
- `case-1.webp` — case cover: industry/production, abstract, dark palette, 1200×800
- `case-2.webp` — case cover: retail, abstract, dark palette, 1200×800
- `case-3.webp` — case cover: IT, abstract, dark palette, 1200×800
- `logo-mark.svg` — brand mark (people v4 with frame)
- `favicon.svg` — favicon mark (same style, no frame)

> Important: keep `process-timeline.webp` **3:2**. In HTML the image uses the same ratio (e.g. width="1200" height="800") to avoid distortion and CLS.

---

## Prerequisites

- Git
- Any static server for local preview (choose one):
  - Node.js 18+ (recommended) OR
  - Python 3

---

## Quick start (Git Bash)

### 1) Create repo and initial commit

```bash
mkdir podborus-landing
cd podborus-landing
git init
```

Create folders:

```bash
mkdir -p assets/css assets/js assets/img
```

Add files (`index.html`, `privacy.html`, `assets/css/styles.css`, `assets/js/main.js`) and images into `assets/img`.

Commit:

```bash
git add -A
git commit -m "feat: initial production landing (static HTML/CSS/JS)"
```

---

## Local development

### Option A — Node (recommended)

If you don't have a server yet:

```bash
npm -g i serve
serve .
```

Open the shown URL (typically `http://localhost:3000`).

### Option B — Python

```bash
python -m http.server 3000
```

Open `http://localhost:3000`.

---

## Production notes (static hosting)

This project is a static site: upload the folder contents to any static hosting.

Recommended: configure the server to serve:
- `/index.html` as default document
- `/privacy.html` as a normal page
- `cache-control` long for images, short for HTML if you update frequently

---

## Accessibility & SEO checklist

- Semantic sections (`header`, `main`, `section`, `footer`)
- `aria-label` used where needed (nav, carousels)
- Skip link present (`.skip-link`)
- `alt` text on content images, empty `alt=""` for decorative mark in header
- Meta tags: description, keywords, canonical, OpenGraph
- JSON-LD (`ProfessionalService`) included

---

## Content ownership and compliance

- Replace phone/Telegram/email with real contacts before publishing.
- Add a real **Privacy Policy** in `privacy.html`.
- If you later enable forms and collect personal data (PDn), implement:
  - explicit consent,
  - data processing policy,
  - localization requirements as applicable for Russia.

---

## Suggested commits (when iterating)

- `feat: add hero + services + contacts sections`
- `feat: add process infographic section`
- `feat: add cases grid`
- `feat: add testimonials carousel`
- `feat: add faq section`
- `chore: optimize images and metadata`
- `fix: preserve 3:2 ratio for process image`

---

## License

Proprietary / client work.
