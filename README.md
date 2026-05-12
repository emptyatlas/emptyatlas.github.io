# Empty Atlas — Official Website

Official website for **Empty Atlas**, a melodic indie rock band from Jackson, Mississippi. Built with Angular 21 as a single-page application with a dark, mobile-first design.

Empty Atlas is a melodic indie rock band with music for fans of Manchester Orchestra, Thrice, Death Cab for Cutie and The Killers. Stream the latest single "Godspeed" on Spotify, Apple Music, Bandcamp, and more.

## Development

```bash
npm start        # Dev server at http://localhost:4200 (auto-reload)
npm run build    # Production build → dist/
npm run watch    # Watch mode build
npm test         # Unit tests (Vitest)
```

Scaffold a new component:
```bash
ng generate component components/<name>   # shared component
ng generate component pages/<name>        # page
```

## Tech Stack

- **Angular 21** — standalone components, lazy-loaded routes
- **TypeScript** — strict mode, ES2022
- **Font Awesome** — brand icons (streaming, social)
- **Google Fonts** — Raleway (body), Mansalva (headings)
- **Bandsintown Widget** — live tour dates
- **Vitest** — unit testing

## Project Structure

```
src/
  app/
    components/
      footer/          # Global footer
      nav/             # Sticky nav with mobile hamburger
      social-icons/    # Reusable streaming/social icon row
    data/
      releases.ts      # All release metadata (shared by music and lyrics pages)
      lyrics/          # Per-release lyrics files + barrel index
    pages/
      about/           # Bio, awards & achievements, band members, press
      contact/         # Contact form
      home/            # Hero, tour dates, social CTA
      lyrics/          # Song/album lyrics at /music/:slug
      music/           # Full discography
    globals.ts         # Centralized external URLs and contact info
  styles.css           # Global design tokens and utility classes
  index.html           # Base HTML, SEO meta tags, JSON-LD structured data
```

## Content

- **Music** — full discography with Spotify, Apple Music, and Bandcamp links; each release links to a lyrics page
- **Lyrics** — per-song pages at `/music/:slug`; singles show full text, albums show an accordion by track
- **Tour** — Bandsintown widget (home page, `#tour` anchor)
- **Merch** — links to Fourthwall and Square shops
- **About** — bio, awards & achievements, band members, press features
- **Contact** — mailto-based contact form

## Adding Lyrics

**Single:** open `src/app/data/lyrics/<slug>.ts` and replace the placeholder with the full lyrics string.

**Album track:** open `src/app/data/lyrics/<album>.ts` and add to the `tracks` array:
```ts
{ title: 'Track Name', lyrics: `...` }
```

## SEO

- Open Graph and Twitter Card meta tags in `index.html`
- Per-page `<title>` and `<meta description>` set via Angular `Title`/`Meta` services
- Per-lyrics-page title and description set dynamically from song/album name
- JSON-LD `MusicGroup` structured data in `index.html`
- Canonical URL: `https://emptyatlas.com`
