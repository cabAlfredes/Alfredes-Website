# WWW.ALFREDES.COM.AR

Website for **Cabaña Alfredes**, a cabin rental in Argentina. Built with Astro and deployed on Vercel.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Astro 5 (static output) |
| Language | TypeScript + JavaScript |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui (Radix UI primitives) |
| Email | Mailgun via Astro API endpoint |
| Image Processing | Sharp |
| Sitemap | @astrojs/sitemap |
| Deployment | Vercel (via @astrojs/vercel adapter) |
| Analytics | Vercel Web Analytics |
| Package Manager | pnpm |

---

## Project Structure

```
/
├── src/
│   ├── pages/                  # File-based routing (Astro pages)
│   │   ├── index.astro         # Home — video hero with lazy-loaded background
│   │   ├── about.astro         # La Cabaña — about the cabin
│   │   ├── servicios.astro     # Services and amenities
│   │   ├── fotos.astro         # Photo gallery
│   │   ├── contacto.astro      # Contact page
│   │   ├── como_llegar.astro   # How to arrive / directions
│   │   └── api/
│   │       └── emailHandler.ts # Mailgun email endpoint
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro    # Shell: <html>, <head>, Navbar, <slot />
│   │
│   ├── components/
│   │   ├── Navbar.astro        # Responsive navbar (desktop + mobile hamburger)
│   │   ├── ContactForm.astro   # Booking/contact form
│   │   ├── PageHero.astro      # Page banner/hero
│   │   └── ui/                 # shadcn/ui primitives (button, card, input, etc.)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       └── textarea.tsx
│   │
│   ├── assets/
│   │   └── gallery/            # Source images (processed by Sharp at build time)
│   │       ├── exterior/       # Exterior cabin photos
│   │       └── interior/       # Interior cabin photos
│   │
│   ├── lib/
│   │   └── utils.ts            # Tailwind class merging utility (clsx + tailwind-merge)
│   │
│   └── styles/
│       └── globals.css         # Global styles + Tailwind base
│
├── public/                     # Static assets (served as-is)
│   ├── assets/
│   │   ├── hero_xl.jpg         # Hero poster image
│   │   ├── hero-video.webm     # Background video (lazy-loaded)
│   │   ├── images/slider/      # Slider images
│   │   └── fonts/              # Self-hosted fonts
│   ├── logo.png / logo.svg
│   └── favicon.ico
│
├── astro.config.mjs            # Astro config (Tailwind, Vercel adapter, sitemap)
├── tsconfig.json
└── components.json             # shadcn/ui config
```

---

## Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Full-screen video hero (lazy-loaded WEBM, poster fallback), CTA to booking |
| `/about` | La Cabaña | About the cabin |
| `/servicios` | Servicios | Services and amenities |
| `/fotos` | Fotos | Interior & exterior photo gallery |
| `/contacto` | Contacto | Contact/booking form |
| `/como_llegar` | Cómo Llegar | Directions and map |

---

## Hero Video

The home page uses a lazy-loaded video background to avoid blocking initial page load:

- The `<video>` element is rendered with a `data-src` attribute and a static poster image (`hero_xl.jpg`)
- On page load, the video is fetched via `fetch()` and set as a Blob URL — only on desktop (viewport > 767px)
- A play/pause toggle button lets users control the video
- On mobile, the video is paused and the static poster is shown

---

## Email

Contact form submissions POST to `/api/emailHandler`, which uses **Mailgun** to send the inquiry to `cab.alfredes@gmail.com`. Requires a `MAILGUN` environment variable.

```
MAILGUN=your-mailgun-api-key
```

---

## Navbar

`src/components/Navbar.astro` renders a responsive navigation bar:

- **Desktop**: horizontal link list with active-state detection via `Astro.url.pathname`
- **Mobile**: hamburger button toggles a slide-in drawer (plain JS, no framework)
- Active links are highlighted with a leaf icon accent

---

## Getting Started

```bash
pnpm install
pnpm dev
```

Build for production:

```bash
pnpm build
pnpm start      # runs the built Vercel SSR entry
pnpm preview    # preview the static build locally
```

Lint / type-check:

```bash
pnpm lint       # runs astro check
```
