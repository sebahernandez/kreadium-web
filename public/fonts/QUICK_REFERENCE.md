# Inter Font - Quick Reference Guide

## Tailwind CSS Classes (Most Common)

```html
<!-- Body text (default) -->
<p class="font-normal">Regular paragraph text</p>

<!-- Navigation, subtle emphasis -->
<a class="font-medium">Nav link</a>

<!-- Buttons, important UI elements -->
<button class="font-semibold">Button text</button>

<!-- Section headings -->
<h2 class="font-bold">Section Heading</h2>

<!-- Hero, main headings -->
<h1 class="font-extrabold">Hero Title</h1>
```

## Font Weight Reference

| Weight | Tailwind Class | Use Case | Example |
|--------|----------------|----------|---------|
| 400 | `font-normal` | Body text, paragraphs | Blog posts, descriptions |
| 500 | `font-medium` | Navigation, subtle emphasis | Menu items, tags |
| 600 | `font-semibold` | Buttons, important UI | CTAs, form labels |
| 700 | `font-bold` | Headings, strong emphasis | H2, H3, section titles |
| 800 | `font-extrabold` | Hero headings, major emphasis | H1, hero sections |

## Visual Examples

```
EXTRABOLD (800): Experiencias Digitales que Inspiran
BOLD (700): Desarrollo y Diseño Web Profesional
SEMIBOLD (600): Nuestros Servicios
MEDIUM (500): Ver más información
REGULAR (400): Agencia de desarrollo web en Chile
```

## Inter Features Enabled

- **Kerning**: Better letter spacing
- **Ligatures**: fi, fl combinations
- **Contextual Alternates**: Smart character substitutions
- **Letter Spacing**: Optimized for web (-0.011em body, -0.022em headings)

## Common Patterns

### Hero Section
```html
<h1 class="text-7xl font-extrabold">
  Main Title
</h1>
<p class="text-2xl font-normal">
  Subtitle description
</p>
```

### Card Component
```html
<div class="card">
  <h3 class="text-xl font-bold">Card Title</h3>
  <p class="text-base font-normal">Card description</p>
  <button class="font-semibold">Action</button>
</div>
```

### Navigation
```html
<nav>
  <a class="font-medium">Home</a>
  <a class="font-medium">Services</a>
  <a class="font-semibold">Contact</a> <!-- Highlighted -->
</nav>
```

## Performance Tips

1. **Preloaded weights**: Regular (400), Bold (700), ExtraBold (800)
2. **On-demand**: Medium (500), SemiBold (600)
3. **Total size**: ~555 KB (acceptable for 5 weights)
4. **Load time**: ~200-400ms on 3G

## Testing Fonts Locally

```bash
# Start dev server
npm run dev

# Check Network tab in DevTools
# Filter by: Font
# Should see 5 WOFF2 files loading
```

## Troubleshooting

**Fonts not loading?**
- Check `/public/fonts/` directory exists
- Verify font files are ~110KB each
- Check DevTools Console for errors

**Wrong weight displaying?**
- Clear browser cache
- Check Tailwind class is correct
- Verify font-weight in DevTools

**Fonts look blurry?**
- Check display is HiDPI/Retina
- Verify font-smoothing is applied
- Test on different browsers

## Files Location

```
/public/fonts/
├── Inter-Regular.woff2      (109 KB)
├── Inter-Medium.woff2       (111 KB)
├── Inter-SemiBold.woff2     (112 KB)
├── Inter-Bold.woff2         (112 KB)
├── Inter-ExtraBold.woff2    (112 KB)
├── FONTS.md                 (Full documentation)
└── QUICK_REFERENCE.md       (This file)
```

## Need More Info?

- Full documentation: `/public/fonts/FONTS.md`
- Implementation summary: `/FONT_IMPLEMENTATION_SUMMARY.md`
- Inter website: https://rsms.me/inter/
- Inter GitHub: https://github.com/rsms/inter
