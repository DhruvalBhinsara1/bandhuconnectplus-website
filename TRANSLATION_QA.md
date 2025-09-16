# Translation QA Checklist — BandhuConnect+

## Translation Coverage & QA Status (September 2025)

- **All major sections (hero, features, Why BandhuConnect+, download) are fully translatable.**
- **All 10 supported Indian languages have up-to-date keys for all user-facing text.**
- **Recent additions:**
  - Why BandhuConnect+ feature titles/descriptions now use translation keys in all languages
  - Download section status and QR code caption are translatable
- **Fallback:** If a translation is missing, the key string is shown (report these for correction).

1. Key coverage

 - Ensure every key from `src/locales/<lang>/common.json` is present and not missing when switching languages.
 - If a key is missing, the site currently falls back to the key string; report missing keys using the translator's spreadsheet or issue tracker.

1. In-context rendering

 - Check hero headings, subheadings, feature titles, feature descriptions, download CTA, and footer copy for line breaks, overflow, and truncation at desktop widths and narrower breakpoints.
 - Verify CTAs remain short enough not to overflow buttons; propose concise variants where needed.

1. Script & font rendering

 - Verify glyphs render correctly for each language: Devanagari (hi/mr), Bengali (bn), Tamil (ta), Telugu (te), Gujarati (gu), Kannada (kn), Odia (or), Malayalam (ml), Urdu (ur).
 - Confirm correct font is loaded by inspecting `html[lang]` and that the chosen font falls back correctly when a glyph is missing.

1. Directionality (RTL)

 - For Urdu (`lang="ur"`): confirm `dir="rtl"` is applied to `<html>` and interface reads right-to-left.
 - Check UI elements: navigation alignment, close icons, and any directional chevrons. Mirror icons if they appear reversed.

1. Accessibility

 - Confirm `document.documentElement.lang` and `dir` change when switching language.
 - Use screen reader or VoiceOver to validate the aria-live announcement fires when the language changes.
 - Verify focus order remains logical after language switch.

1. Pluralization & context

 - For strings that could be pluralized or include numbers, ensure translators have context. Add notes in the translation spreadsheet where needed.

1. Tone & brand

 - Ensure translations follow the brand voice: clear, empathetic, direct. Avoid overly formal or literal machine-translated phrasing.

1. Visual checks

 - Desktop (primary): 1440px and 1600px widths.
 - Tablet: 768px width.
 - Mobile narrow: 360px width.
 - Check for layout breaks, button wrapping, or overlapping elements.

1. Sign-off

 - Provide a short comment with locale, reviewer name, and date when a locale is approved.

- Desktop (primary): 1440px and 1600px widths.
- Tablet: 768px width.
- Mobile narrow: 360px width.
- Check for layout breaks, button wrapping, or overlapping elements.

9. Sign-off

- Provide a short comment with locale, reviewer name, and date when a locale is approved.

Notes:
- If serious RTL layout fixes are required, file separate layout tickets with screenshots and the component path (e.g., `src/components/Header.tsx`).
- Consider adding locale-specific screenshots to the PR for easier review.

