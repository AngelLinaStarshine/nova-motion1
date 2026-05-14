# Nova Motion — Pilates Studio Website

A complete, production-ready boutique Pilates studio website.
Built with **React 18 + Vite + React Router v6**.

---

## Quick Start

```bash
unzip nova-motion.zip
cd nova-motion
npm install
npm run dev
```

Open **http://localhost:5173** — hot reload is enabled.

### Build for production

```bash
npm run build     # outputs to /dist
npm run preview   # preview the production build locally
```

Deploy `/dist` to Vercel, Netlify, or any static host.

**Vercel / Netlify note:** Because this is a client-side router, add a catch-all rewrite:
- Vercel: create `vercel.json` → `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`
- Netlify: create `public/_redirects` → `/* /index.html 200`

---

## Pages and Routes

| URL            | Page         | Key content                                       |
|----------------|--------------|---------------------------------------------------|
| /              | Home         | Hero, Marquee, About teaser, Testimonials, CTA    |
| /schedule      | Schedule     | Full 7-day timetable with live booking            |
| /classes       | Classes      | Filterable grid, class modals, instructor strip   |
| /collection    | Shop         | Filterable product grid, cart slide-in            |
| /membership    | Membership   | 3-tier pricing cards, FAQ accordion               |
| /about         | About        | Story, values grid, timeline, instructors         |
| /contact       | Contact      | Validated form, map slot, studio info             |
| *              | 404          | Branded not-found page                            |

---

## File Structure

```
nova-motion/
├── index.html                  HTML shell + Google Fonts
├── vite.config.js              Vite config + @ path alias
├── package.json
├── .gitignore
│
├── public/
│   └── favicon.svg
│
└── src/
    ├── main.jsx                React root mount
    ├── App.jsx                 BrowserRouter + global state + all routes
    │
    ├── styles/
    │   └── globals.css         CSS variables, animations, buttons, utilities
    │
    ├── hooks/
    │   └── useCart.js          add / remove / qty / total
    │
    ├── data/                   Edit content here — no need to touch components
    │   ├── classes.js          6 class definitions (add image: field here)
    │   ├── schedule.js         7-day weekly timetable
    │   ├── products.js         6 products (add image: field here)
    │   ├── membership.js       3 membership tiers
    │   └── team.js             4 instructors (add image: field here)
    │
    ├── components/             Reusable UI pieces
    │   ├── Navbar.jsx          Sticky nav with Router NavLink active states
    │   ├── Footer.jsx          4-col footer with newsletter strip
    │   ├── PageHero.jsx        Inner-page banner (all pages share this)
    │   ├── ImagePlaceholder.jsx Branded SVG shown before real images added
    │   ├── CartPanel.jsx       Slide-in cart drawer
    │   ├── Toast.jsx           Animated notification banner
    │   ├── BookingModal.jsx    Class booking form modal
    │   ├── ClassModal.jsx      Class detail overlay
    │   └── MembershipModal.jsx Membership sign-up modal
    │
    ├── sections/               Full-width reusable page sections
    │   ├── Hero.jsx            📸 hero-bg.jpg slot
    │   ├── Marquee.jsx         Animated class-name ticker
    │   ├── About.jsx           📸 studio-interior.jpg + studio-detail.jpg
    │   ├── Schedule.jsx        Day tabs, slot cards, booking state
    │   ├── Classes.jsx         📸 class thumbnails
    │   ├── Instructors.jsx     📸 instructor headshots, expandable bio
    │   ├── Collection.jsx      📸 product photos
    │   ├── Membership.jsx      3 pricing cards
    │   ├── Testimonials.jsx    📸 optional member avatars
    │   └── CTA.jsx             Free class email capture with confirmation
    │
    ├── pages/                  One file per route
    │   ├── HomePage.jsx
    │   ├── SchedulePage.jsx
    │   ├── ClassesPage.jsx
    │   ├── ShopPage.jsx
    │   ├── MembershipPage.jsx
    │   ├── AboutPage.jsx       Story + values grid + timeline
    │   ├── ContactPage.jsx     Full form with validation + map embed slot
    │   └── NotFoundPage.jsx    404
    │
    └── assets/
        └── images/
            ├── hero/           hero-bg.jpg  (1920x1080 recommended)
            ├── about/          studio-interior.jpg  800x1000
            │                   studio-detail.jpg    300x300
            │                   studio-wide.jpg      1200x600
            ├── classes/        one 600x400 jpg per class (6 total)
            ├── instructors/    one 400x400 jpg per instructor (4 total)
            ├── products/       one 600x600 jpg per product (6 total)
            └── testimonials/   one 100x100 jpg per member (optional)
```

---

## Adding Your Images

Every image slot shows a branded placeholder until a real photo is added.
Search for the emoji **📸** anywhere in the codebase to find every slot.

### Classes, products, instructors

Open the relevant data file and add an `image` field:

```js
// src/data/classes.js
{ id: 1, name: "Mat Fundamentals", image: "/src/assets/images/classes/mat-fundamentals.jpg", ... }

// src/data/products.js
{ id: 1, name: "Nova Grip Socks", image: "/src/assets/images/products/grip-socks.jpg", ... }

// src/data/team.js
{ id: 1, name: "Elena Vasquez", image: "/src/assets/images/instructors/elena-vasquez.jpg", ... }
```

### Hero background

In `src/sections/Hero.jsx`, uncomment:

```jsx
backgroundImage: "url('/src/assets/images/hero/hero-bg.jpg')",
backgroundSize: "cover",
backgroundPosition: "center",
```

---

## Customising Content

| What to change        | File                              |
|-----------------------|-----------------------------------|
| Classes               | src/data/classes.js               |
| Weekly schedule       | src/data/schedule.js              |
| Shop products         | src/data/products.js              |
| Membership plans      | src/data/membership.js            |
| Instructors           | src/data/team.js                  |
| Brand colours         | src/styles/globals.css (:root)    |
| Fonts                 | index.html + :root CSS vars       |
| Studio address        | src/components/Footer.jsx         |
| Nav links             | src/components/Navbar.jsx         |
| Social links          | src/components/Footer.jsx         |
| Testimonials          | src/sections/Testimonials.jsx     |
| FAQ questions         | src/pages/MembershipPage.jsx      |
| Studio timeline       | src/pages/AboutPage.jsx           |
| Contact subjects list | src/pages/ContactPage.jsx         |

---

## Features

- React Router v6 — 8 fully separate pages with clean URLs
- Sticky frosted-glass navbar with active link highlighting
- Slide-in cart with quantity controls, remove, and checkout
- Live class booking — slots stay booked across page navigation
- Class and product filtering with animated transitions
- Class detail, booking, and membership modals
- Instructor cards with click-to-expand bios
- Membership FAQ accordion
- Full contact form with field-level validation
- Scroll-to-top on every route change
- Branded image placeholders — swap in a photo by adding one field
- Mobile-responsive layout with hamburger menu
- CSS custom properties — retheme the entire site from one file
- Zero external UI library dependencies
