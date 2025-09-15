# Translation QA Checklist — BandhuConnect+

This checklist is a concise guide for reviewers and translators to validate in-context translations across the landing page.

1) Key coverage
- Ensure every key from `src/locales/<lang>/common.json` is present and not missing when switching languages.
- If a key is missing, the site currently falls back to the key string; report missing keys using the translator's spreadsheet or issue tracker.

2) In-context rendering
- Check hero headings, subheadings, feature titles, feature descriptions, download CTA, and footer copy for line breaks, overflow, and truncation at desktop widths and narrower breakpoints.
- Verify CTAs remain short enough not to overflow buttons; propose concise variants where needed.

3) Script & font rendering
- Verify glyphs render correctly for each language: Devanagari (hi/mr), Bengali (bn), Tamil (ta), Telugu (te), Gujarati (gu), Kannada (kn), Odia (or), Malayalam (ml), Urdu (ur).
- Confirm correct font is loaded by inspecting `html[lang]` and that the chosen font falls back correctly when a glyph is missing.

4) Directionality (RTL)
- For Urdu (`lang="ur"`): confirm `dir="rtl"` is applied to `<html>` and interface reads right-to-left.
- Check UI elements: navigation alignment, close icons, and any directional chevrons. Mirror icons if they appear reversed.

5) Accessibility
- Confirm `document.documentElement.lang` and `dir` change when switching language.
- Use screen reader or VoiceOver to validate the aria-live announcement fires when the language changes.
- Verify focus order remains logical after language switch.

6) Pluralization & context
- For strings that could be pluralized or include numbers, ensure translators have context. Add notes in the translation spreadsheet where needed.

7) Tone & brand
- Ensure translations follow the brand voice: clear, empathetic, direct. Avoid overly formal or literal machine-translated phrasing.

8) Visual checks
- Desktop (primary): 1440px and 1600px widths.
- Tablet: 768px width.
- Mobile narrow: 360px width.
- Check for layout breaks, button wrapping, or overlapping elements.

9) Sign-off
- Provide a short comment with locale, reviewer name, and date when a locale is approved.

Notes:
- If serious RTL layout fixes are required, file separate layout tickets with screenshots and the component path (e.g., `src/components/Header.tsx`).
- Consider adding locale-specific screenshots to the PR for easier review.

