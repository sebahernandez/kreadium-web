# Inter Font Files - Kreadium

This directory contains the Inter font family files used across the Kreadium website.

## Font Files (WOFF2 Format)

```
Inter-Regular.woff2      109 KB  (Weight 400) - Body text, paragraphs
Inter-Medium.woff2       111 KB  (Weight 500) - Navigation, emphasis
Inter-SemiBold.woff2     112 KB  (Weight 600) - Buttons, UI elements
Inter-Bold.woff2         112 KB  (Weight 700) - Headings, titles
Inter-ExtraBold.woff2    112 KB  (Weight 800) - Hero headings
```

**Total Size:** ~555 KB

## Quick Start

### Using with Tailwind CSS

```html
<!-- Regular (400) -->
<p class="font-normal">Body text</p>

<!-- Medium (500) -->
<span class="font-medium">Navigation</span>

<!-- SemiBold (600) -->
<button class="font-semibold">Button</button>

<!-- Bold (700) -->
<h2 class="font-bold">Heading</h2>

<!-- ExtraBold (800) -->
<h1 class="font-extrabold">Hero Title</h1>
```

### Using with CSS

```css
.my-element {
  font-family: 'Inter', -apple-system, sans-serif;
  font-weight: 600; /* SemiBold */
}
```

## Documentation

- **FONTS.md** - Complete technical documentation
- **QUICK_REFERENCE.md** - Developer quick reference guide
- **FONT_LOADING_DIAGRAM.txt** - Visual loading strategy diagram
- **README.md** - This file

## Implementation

The fonts are loaded via @font-face declarations in `/src/layouts/Layout.astro` with:

- `font-display: swap` for better performance
- Preloading for critical weights (Regular, Bold, ExtraBold)
- System font fallbacks
- Unicode range optimization for Latin characters

## License

**Inter Font** is licensed under the **SIL Open Font License 1.1**

- Free for commercial use
- No attribution required
- Source: https://github.com/rsms/inter

## Support

For issues or questions about font implementation, see:

- `/FONT_IMPLEMENTATION_SUMMARY.md` (project root)
- `/TESTING_GUIDE.md` (project root)

## Performance

- **Load time:** ~200-400ms on 3G
- **Browser support:** 99%+ (WOFF2 format)
- **CLS impact:** < 0.05 (minimal layout shift)

## Don't Delete These Files!

These font files are critical for the site's typography and branding. Deleting them will cause the site to fall back to system fonts.
