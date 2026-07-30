# DIVYAM® — Pure Vegetarian Luxury Weddings (Prayagraj)

A pixel-faithful clone of the luxury wedding website wireframe, built with:

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (design tokens matched to the wireframe's design system)
- **Framer Motion** for animations (navbar dropdown, room-pill-style interactions, accordion, testimonial slider)
- **lucide-react** icons, styled gold (`#C59D5F`), thin stroke to match the wireframe's icon style
- **MongoDB Atlas** for storing "Request a Consultation" form submissions

## Design tokens (from the wireframe's design system panel)

| Token | Value |
|---|---|
| Primary Navy | `#0B1627` |
| Gold | `#C59D5F` |
| Background | `#F8F5EF` |
| Border | `#E8DEDD` |
| Text | `#1D1D1D` |
| Heading font | Cormorant Garamond |
| Body font | DM Sans |
| Card radius | 16px |
| Button radius | 10px |

## Getting started

```bash
npm install
cp .env.local.example .env.local
# edit .env.local and paste your MongoDB Atlas connection string
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## MongoDB Atlas setup

1. Create a free cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).
2. Create a database user and allow network access (or `0.0.0.0/0` for local dev).
3. Copy the connection string into `.env.local` as `MONGODB_URI`.
4. Consultation form submissions are saved to the `consultations` collection in the `divyam` database (configurable via `MONGODB_DB`).

The form on the Contact section posts to `POST /api/consultation` (`src/app/api/consultation/route.ts`), which validates the payload and inserts it into MongoDB Atlas.

## Project structure

```
src/
  app/
    api/consultation/route.ts   # Form submission -> MongoDB Atlas
    layout.tsx                  # Fonts + metadata
    page.tsx                    # Assembles all sections
    globals.css
  components/
    Navbar.tsx
    Hero.tsx
    PromiseBar.tsx
    Services.tsx
    PromiseOfPurity.tsx
    PlanningTimeline.tsx
    PlanningReadiness.tsx
    CelebrationsGallery.tsx
    Testimonials.tsx
    FAQ.tsx
    ContactSection.tsx
    Footer.tsx
  lib/
    mongodb.ts                  # Cached MongoClient connection
```

## Notes

- All sections are responsive (mobile → desktop), matching the wireframe's "all sections are responsive" note.
- Image areas (hero, food, celebration cards) are left as styled placeholders — drop real photography into `public/` and swap the placeholder blocks with `next/image` when ready.
- Reduced-motion is respected globally via `globals.css`.
