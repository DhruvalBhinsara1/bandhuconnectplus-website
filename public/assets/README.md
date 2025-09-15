# Assets folder for BandhuConnect+ website

Structure:

- `/public/assets/images/` - store site images (hero illustrations, icons, screenshots)
- `/public/assets/videos/` - store promotional videos (mp4, webm)

Naming & sizing recommendations:

- Hero images: `hero-<purpose>.<ext>` (e.g. `hero-landing.svg` or `hero-landing@2x.png`). Provide an SVG when possible for crisp scaling.
- Thumbnails: 1200×675 (16:9) for social previews.
- Illustrations: SVG preferred. If using PNG/JPEG, provide @1x and @2x variants.
- Videos: Provide MP4 (H.264) and WebM for broad browser support. Keep under 10–20MB for web delivery or use a CDN.

How to reference in code:


- Image in JSX:

```jsx
<img src="/assets/images/hero-landing.svg" alt="Hero illustration showing pilgrims and volunteers" loading="lazy" />
```


- Video in JSX:

```jsx
<video src="/assets/videos/intro.mp4" controls muted playsInline />
```

Accessibility & performance tips:

- Always include meaningful `alt` text for images used as content (decorative images can use empty alt `""`).
- Use `loading="lazy"` on non-critical images to defer loading on page load.
- Optimize images via tools like `imagemin` or services like Squoosh before committing large raster images.

If you'd like, I can add a sample hero SVG or example image file to demonstrate sizing and responsive `srcset` usage.
