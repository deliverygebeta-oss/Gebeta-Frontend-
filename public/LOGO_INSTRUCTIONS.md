# Logo Installation Instructions

## How to Add Your Logo

1. **Save your logo file** as `logo.png` in this directory (`client/public/`)

2. **The logo is already integrated** into:
   - ✅ Navbar (top navigation)
   - ✅ Footer (bottom section)

3. **Supported formats:**
   - PNG (recommended for transparency)
   - SVG (for scalability)
   - JPG/JPEG (for photos)

## Logo Specifications

### Current Settings:
- **Navbar Logo Height**: 45px (width auto-scales)
- **Footer Logo Height**: 50px (width auto-scales)
- **Format**: PNG with transparent background (recommended)

### Recommended Logo Sizes:
- **Minimum**: 200px × 200px
- **Recommended**: 500px × 500px or higher
- **Format**: PNG with transparent background

## File Naming

Your logo should be named **exactly** as:
```
logo.png
```

Place it in: `client/public/logo.png`

## Alternative Formats

If you want to use SVG or other formats:

### For SVG:
1. Save as `logo.svg` in `client/public/`
2. Update the imports in:
   - `client/src/components/Navbar/Navbar.js` → Change `logo.png` to `logo.svg`
   - `client/src/components/Footer/Footer.js` → Change `logo.png` to `logo.svg`

### For JPG:
1. Save as `logo.jpg` in `client/public/`
2. Update the imports (same as above, change to `logo.jpg`)

## Favicon (Browser Tab Icon)

To update the favicon with your logo:
1. Create a 32×32px or 64×64px version of your logo
2. Save as `favicon.ico` in `client/public/`
3. Replace the existing `favicon.ico`

## Verification

After adding the logo:
1. Restart the development server
2. Refresh your browser
3. Check navbar (top) and footer (bottom) for your logo

## Need Help?

If your logo doesn't appear:
1. Check the file is named exactly `logo.png`
2. Check it's in `client/public/` directory
3. Restart the development server with `npm run dev`
4. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

