# Font Implementation Testing Guide

## Quick Visual Test

### 1. Start Development Server

```bash
npm run dev
```

Open http://localhost:4321

### 2. Open Browser DevTools

**Chrome/Edge:**
- Press `F12` or `Cmd+Option+I` (Mac) / `Ctrl+Shift+I` (Windows)

**Firefox:**
- Press `F12` or `Cmd+Option+I` (Mac) / `Ctrl+Shift+I` (Windows)

### 3. Check Network Tab

1. Go to **Network** tab
2. Filter by **Font** (or type "Inter" in search)
3. Refresh the page (`Cmd+R` or `Ctrl+R`)

**You should see 5 font files loading:**

```
✓ Inter-Regular.woff2    (~109 KB)
✓ Inter-Medium.woff2     (~111 KB)
✓ Inter-SemiBold.woff2   (~112 KB)
✓ Inter-Bold.woff2       (~112 KB)
✓ Inter-ExtraBold.woff2  (~112 KB)
```

**Status:** All should be `200 OK` (green)

**Timing:** Should load in < 500ms on fast connection

### 4. Verify Font Loading Priority

In Network tab, check the **Waterfall** view:

**Expected order:**
1. Inter-Regular.woff2 (preloaded - loads first)
2. Inter-Bold.woff2 (preloaded - loads first)
3. Inter-ExtraBold.woff2 (preloaded - loads first)
4. Inter-Medium.woff2 (on-demand - loads when needed)
5. Inter-SemiBold.woff2 (on-demand - loads when needed)

### 5. Inspect Font Rendering

#### Method 1: DevTools Elements Tab

1. Right-click on any text → **Inspect**
2. Check **Computed** tab
3. Find **font-family**

**Expected value:**
```
Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
```

#### Method 2: Visual Inspection

1. Find Hero section heading "Experiencias Digitales"
2. Right-click → Inspect
3. Check **Computed** styles:
   - `font-family`: Should be **Inter**
   - `font-weight`: Should be **800** (ExtraBold)

---

## Page-by-Page Testing

### Homepage (/)

| Element | Expected Font | Expected Weight | How to Check |
|---------|---------------|-----------------|--------------|
| Hero Title "Experiencias Digitales" | Inter | 800 (ExtraBold) | Inspect element |
| Hero "que Inspiran" | Inter | 800 (ExtraBold) | Inspect element |
| Section headings | Inter | 700 (Bold) | Inspect H2 elements |
| Body text | Inter | 400 (Regular) | Inspect P elements |
| Navigation links | Inter | 500 (Medium) | Inspect nav links |
| Buttons | Inter | 600 (SemiBold) | Inspect button elements |

### Visual Verification Steps

1. **Hero Section**
   - Text should look crisp and modern
   - Bold headings should be visibly heavier than body text
   - No "flash" of different font when page loads

2. **Navigation**
   - Links should be medium weight (500)
   - Text should be clear and readable

3. **Service Cards**
   - Titles should be bold (700)
   - Descriptions should be regular (400)

4. **Contact Form**
   - Labels should be semibold (600)
   - Input text should be regular (400)

---

## Browser Compatibility Testing

### Desktop Browsers

| Browser | Version | Status | Notes |
|---------|---------|--------|-------|
| Chrome | Latest | Should work | ✓ WOFF2 support |
| Firefox | Latest | Should work | ✓ WOFF2 support |
| Safari | 12+ | Should work | ✓ WOFF2 support |
| Edge | Latest | Should work | ✓ WOFF2 support |

### Mobile Browsers

| Browser | OS | Status | Notes |
|---------|-----|--------|-------|
| Safari | iOS 10+ | Should work | Test on iPhone |
| Chrome | Android | Should work | Test on Android device |
| Samsung Internet | Android | Should work | Test if available |

---

## Performance Testing

### Lighthouse Audit

1. Open DevTools
2. Go to **Lighthouse** tab
3. Select **Performance** and **Desktop**
4. Click **Analyze page load**

**Target Metrics:**
- Performance: > 90
- CLS (Cumulative Layout Shift): < 0.1
- LCP (Largest Contentful Paint): < 2.5s

### Font Loading Metrics

In DevTools Console, run:

```javascript
// Check if fonts are loaded
document.fonts.ready.then(() => {
  console.log('All fonts loaded!');
  document.fonts.forEach(font => {
    console.log(`${font.family} ${font.weight} ${font.style}`);
  });
});
```

**Expected output:**
```
All fonts loaded!
Inter 400 normal
Inter 500 normal
Inter 600 normal
Inter 700 normal
Inter 800 normal
```

---

## Mobile Testing

### iOS Safari

1. Open on iPhone/iPad
2. Check text rendering is crisp
3. Zoom in - text should remain sharp
4. Check no FOUT (flash of unstyled text)

### Android Chrome

1. Open on Android device
2. Check font loads properly
3. Test on 3G connection (DevTools throttling)
4. Verify load time is acceptable

### Responsive Breakpoints

Test at these viewport widths:
- 375px (Mobile - iPhone SE)
- 768px (Tablet)
- 1024px (Desktop)
- 1920px (Large Desktop)

---

## Common Issues & Solutions

### Issue 1: Fonts Not Loading

**Symptoms:**
- Text shows in system fonts
- No Inter files in Network tab

**Solutions:**
1. Check `/public/fonts/` directory exists
2. Verify font files are present
3. Clear browser cache (Cmd+Shift+R / Ctrl+Shift+F5)
4. Restart dev server

### Issue 2: FOUT (Flash of Unstyled Text)

**Symptoms:**
- Text appears in fallback font, then switches to Inter

**Expected Behavior:**
- This is NORMAL with `font-display: swap`
- Ensures text is readable immediately
- Better than invisible text (FOIT)

**If excessive:**
- Check preload links in Layout.astro
- Verify critical fonts (Regular, Bold, ExtraBold) are preloaded

### Issue 3: Wrong Font Weight

**Symptoms:**
- All text looks the same weight

**Solutions:**
1. Check Tailwind classes (font-bold, font-semibold, etc.)
2. Verify all 5 @font-face declarations loaded
3. Check browser supports variable fonts
4. Inspect element and verify computed font-weight

### Issue 4: Blurry Text

**Symptoms:**
- Text looks fuzzy or unclear

**Solutions:**
1. Check font-smoothing is applied (should be antialiased)
2. Test on Retina/HiDPI display
3. Verify zoom level is 100%
4. Check GPU acceleration is enabled

---

## Automated Testing Checklist

```bash
# Build project
npm run build

# Should complete without errors
# ✓ No font loading errors
# ✓ Build size is acceptable

# Test production build locally
npm run preview

# Open http://localhost:4321
# Test same steps as above
```

---

## Performance Benchmarks

### Expected Results

**Font Loading (3G):**
- First font: < 300ms
- All fonts: < 800ms

**Font Loading (4G/WiFi):**
- First font: < 100ms
- All fonts: < 300ms

**Page Load (Lighthouse):**
- FCP (First Contentful Paint): < 1.8s
- LCP (Largest Contentful Paint): < 2.5s
- CLS (Cumulative Layout Shift): < 0.1

### Monitor in Production

After deployment, check:
1. Real User Monitoring (RUM) metrics
2. Core Web Vitals in Google Search Console
3. User feedback on readability

---

## Deployment Checklist

Before pushing to production:

- [ ] All 5 font files present in `/public/fonts/`
- [ ] @font-face declarations added to Layout.astro
- [ ] Preload links added for critical fonts
- [ ] Tailwind config updated with Inter
- [ ] Global CSS updated with Inter features
- [ ] Build completes successfully
- [ ] No console errors in dev
- [ ] Lighthouse score > 90
- [ ] Tested on mobile device
- [ ] Tested on desktop browser
- [ ] Font files served with correct MIME type
- [ ] CORS headers configured (if using CDN)

---

## Test Results Template

Use this to document your testing:

```
Date: ___________
Tester: ___________

✓ Fonts load successfully
✓ No console errors
✓ Hero uses ExtraBold (800)
✓ Headings use Bold (700)
✓ Body uses Regular (400)
✓ Mobile rendering OK
✓ Desktop rendering OK
✓ Lighthouse score: ___/100
✓ Load time: ___ ms

Issues found:
1. _______________________
2. _______________________

Notes:
_________________________
_________________________
```

---

## Need Help?

1. Check browser console for errors
2. Review `/public/fonts/FONTS.md` documentation
3. Review `/FONT_IMPLEMENTATION_SUMMARY.md`
4. Check Network tab for font loading issues
5. Verify file paths are correct

---

**Last Updated**: December 30, 2025
