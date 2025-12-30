# Kreadium - Custom Font Documentation

## Font Family: Inter

**Inter** is a professional, modern sans-serif typeface designed specifically for computer screens. It's optimized for user interfaces and provides excellent readability at all sizes.

### Why Inter?

- **Modern & Professional**: Perfect for a web development agency brand
- **Excellent Readability**: Designed specifically for digital screens
- **Open Source**: Free to use (SIL Open Font License 1.1)
- **Web Optimized**: Clear at all sizes, from small text to large headings
- **Tech Industry Standard**: Used by companies like GitHub, Mozilla, and many tech startups

### Font Weights Included

The following font weights are included and optimized for web performance:

- **Regular (400)** - Base text, paragraphs, body copy
- **Medium (500)** - Subtle emphasis, navigation items
- **SemiBold (600)** - Subheadings, prominent UI elements
- **Bold (700)** - Headings, strong emphasis
- **ExtraBold (800)** - Hero headings, major emphasis

### File Format

All fonts are in **WOFF2** format, which provides:
- Best compression (30% smaller than WOFF)
- Supported by all modern browsers (Chrome, Firefox, Safari, Edge)
- Faster loading times
- Reduced bandwidth usage

### Font Files

```
/public/fonts/
├── Inter-Regular.woff2      (108 KB)
├── Inter-Medium.woff2       (111 KB)
├── Inter-SemiBold.woff2     (112 KB)
├── Inter-Bold.woff2         (112 KB)
└── Inter-ExtraBold.woff2    (112 KB)
```

**Total Size**: ~555 KB for all weights

### Implementation Details

**Font Loading Strategy:**
- `font-display: swap` - Show fallback font immediately, swap when custom font loads
- Critical weights (Regular, Bold) are preloaded in the HTML head
- Fallback to system fonts during loading
- Optimized @font-face declarations with unicode-range

**Performance Optimizations:**
1. Preload most critical font weights (Regular, Bold)
2. Use `font-display: swap` for better perceived performance
3. WOFF2 format for maximum compression
4. Proper fallback stack to system fonts

### Browser Support

- Chrome/Edge 36+
- Firefox 39+
- Safari 12+
- iOS Safari 10+
- Android Browser 67+

**Coverage**: 99%+ of users worldwide

### License

**SIL Open Font License 1.1**

Inter is free to use for both personal and commercial projects.

- **Source**: https://github.com/rsms/inter
- **License**: https://github.com/rsms/inter/blob/master/LICENSE.txt
- **Designer**: Rasmus Andersson

### Fallback Stack

When the custom font is loading or unavailable, the site falls back to:

```
-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
```

This ensures a consistent experience across all platforms.

### Usage Examples

```css
/* Regular text */
body {
  font-family: 'Inter', -apple-system, sans-serif;
  font-weight: 400;
}

/* Headings */
h1 {
  font-family: 'Inter', -apple-system, sans-serif;
  font-weight: 800;
}

/* Subheadings */
h2, h3 {
  font-family: 'Inter', -apple-system, sans-serif;
  font-weight: 700;
}

/* UI Elements */
button {
  font-family: 'Inter', -apple-system, sans-serif;
  font-weight: 600;
}
```

### Tailwind CSS Classes

```html
<!-- Regular -->
<p class="font-normal">Base text</p>

<!-- Medium -->
<span class="font-medium">Navigation item</span>

<!-- SemiBold -->
<h3 class="font-semibold">Subheading</h3>

<!-- Bold -->
<h2 class="font-bold">Heading</h2>

<!-- ExtraBold -->
<h1 class="font-extrabold">Hero Heading</h1>
```

### Performance Metrics

Expected performance improvements:
- **Font Load Time**: ~200-400ms (on 3G)
- **Time to Interactive**: No blocking, thanks to font-display: swap
- **Layout Shift**: Minimal, due to similar metrics between Inter and system fonts

### Maintenance

**Updating Fonts:**

To update to newer versions of Inter:

1. Visit https://github.com/rsms/inter/tree/master/docs/font-files
2. Download the latest WOFF2 files
3. Replace the files in `/public/fonts/`
4. Test across all pages
5. Clear CDN cache if applicable

**Adding Additional Weights:**

If you need additional weights (Light 300, Black 900):

1. Download from the Inter repository
2. Add to `/public/fonts/`
3. Add @font-face declaration in Layout.astro
4. Update tailwind.config.mjs with new weight
5. Update this documentation

---

**Last Updated**: December 30, 2025
**Inter Version**: Latest from official repository
