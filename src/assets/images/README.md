# Nova Motion — Image Assets Guide

All image folders are pre-created. Drop your photos in the correct folder,
then update the matching data file or section file to point to the image path.

Search for `📸` anywhere in `/src` to find every image slot in the codebase.

---

## Folder Map

| Folder         | Used in                          | Dimensions         | Notes                        |
|----------------|----------------------------------|--------------------|------------------------------|
| `hero/`        | `sections/Hero.jsx`              | 1920 × 1080 px +   | Landscape, high-res          |
| `about/`       | `sections/About.jsx`             | 800 × 1000 px (main), 300 × 300 (badge) | Portrait + square |
| `classes/`     | `src/data/classes.js`            | 600 × 400 px       | One image per class          |
| `instructors/` | `src/data/team.js`               | 400 × 400 px       | Square, face-centred         |
| `products/`    | `src/data/products.js`           | 600 × 600 px       | Square, white/neutral bg     |
| `testimonials/`| `sections/Testimonials.jsx`      | 100 × 100 px       | Optional circular avatars    |

---

## How to Add an Image

### Example — Reformer Flow class thumbnail:

1. Copy your photo to:
   `src/assets/images/classes/reformer-flow.jpg`

2. Open `src/data/classes.js` and find the Reformer Flow entry.

3. Change:
   ```js
   image: null,
   ```
   to:
   ```js
   image: "/src/assets/images/classes/reformer-flow.jpg",
   ```

4. Save. Vite hot-reloads instantly — you'll see the image appear.

---

## Tips

- Use `.jpg` for photos, `.webp` for best performance, `.png` for images with transparency.
- Compress images before adding: [squoosh.app](https://squoosh.app) is free and excellent.
- Keep filenames lowercase with hyphens: `studio-interior.jpg` ✓  `Studio Interior.JPG` ✗
