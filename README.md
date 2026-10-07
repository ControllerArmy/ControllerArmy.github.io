# controllerarmy.github.io

Personal portfolio for Erik Helmers. Plain HTML, CSS and JavaScript: no framework, no build step, no npm.

```
index.html          The page. About, Experience and Contact text live here.
404.html            "Page not found" page (self-contained on purpose).
css/styles.css      All styling. Theme tokens are at the top.
js/main.js          PROJECTS and GALLERY lists are at the top.
assets/             Images, icons, share image, resume PDF.
```

## Run it locally

Double-click `index.html`, or drag it into a browser. Everything works straight from your hard drive.
The only network request is Google Fonts; offline, the site falls back to system fonts.

## Add your images

Until a file exists, the site shows a striped placeholder labeled with the exact path and size it expects.
Drop a file in with that name and refresh.

| File | Size (px) | Keep under |
| --- | --- | --- |
| `assets/images/hero.jpg` | 2400 × 1350 | 450 KB |
| `assets/projects/<slug>/cover.jpg` | 1600 × 900 | 250 KB |
| `assets/projects/<slug>/shot-1.jpg`, `shot-2.jpg`, ... | 1600 × 900 | 250 KB each |
| `assets/gallery/photo-01.jpg` ... `photo-09.jpg` | 2000 × 1333 landscape, 1333 × 2000 for `"tall"` | 400 KB each |
| `assets/og-image.jpg` (link preview, already made) | 1200 × 630 | 300 KB |

Project slugs: `pathfinder`, `grog-n-gold`, `scally-and-wag`, `helm-launcher`.

Export as JPEG at about 75–80% quality in sRGB. [Squoosh](https://squoosh.app) is a free in-browser compressor.
GitHub serves the repo as-is, so smaller files mean a faster site and a lighter repo.
To use `.webp` instead, change the extension in `js/main.js` (or `index.html` for the hero) to match.

## Add a project

1. Open `js/main.js` and find `const PROJECTS = [`.
2. Copy one `{ ... },` block and paste it where you want it in the list. Order in the list is order on the page.
3. Change the values. Comments at the top of the list explain each field. Set `link` to `null` to hide the button.
4. Make a folder `assets/projects/<your-slug>/` and add `cover.jpg` plus any screenshots you listed in `shots`.

Each project gets a shareable link: `https://controllerarmy.github.io/#project/<slug>`.

## Add a photo

Add one line to `GALLERY` in `js/main.js`:

```js
{ src: "assets/gallery/photo-10.jpg", alt: "Red 911 at sunset", caption: "Laguna Seca, 2026", shape: "" },
```

`shape` is `"wide"` (2 columns), `"tall"` (2 rows), or `""`. If the grid shows a gap, change a shape.

## Change the theme

All colors, fonts, sizes and spacing are CSS variables at the top of `css/styles.css` (section 1).

- **Accent:** change `--color-accent` (buttons, highlights on dark) and `--color-accent-ink` (accent text on light).
  Keep `--color-accent-ink` dark enough to read on the off-white background.
- **Fonts:** change the Google Fonts `<link>` in `index.html`, then `--font-display` and `--font-body`.
- Also update the colors in `404.html` and the `theme-color` meta tag in `index.html` so they match.

## Publish on GitHub Pages (first time)

1. On github.com, click **New repository**. Name it exactly `ControllerArmy.github.io`, set it to **Public**,
   and leave "Add a README", ".gitignore" and "license" unchecked.
2. In a terminal in this folder (it's already a git repository, so skip `git init`):

   ```bash
   git add .
   ```
   ```bash
   git commit -m "Initial portfolio site"
   ```
   ```bash
   git branch -M main
   ```
   ```bash
   git remote add origin https://github.com/ControllerArmy/ControllerArmy.github.io.git
   ```
   ```bash
   git push -u origin main
   ```

3. On GitHub, open the repo: **Settings → Pages**. Under **Build and deployment**, set Source to
   **Deploy from a branch**, Branch to **main**, folder **/ (root)**, then **Save**.
4. Wait a minute or two (the **Actions** tab shows progress), then visit https://controllerarmy.github.io.

## Push updates

```bash
git add .
```
```bash
git commit -m "Describe what changed"
```
```bash
git push
```

The live site updates in about a minute. If you still see the old version, hard-refresh with Ctrl+F5.

## Before you share the link

- [ ] Helm Launcher: role, dates, summary, bullets and repo link (in `js/main.js`)
- [ ] PATHFINDER: your role title and language/microcontroller tags
- [ ] Hero headline and About paragraph: make sure they sound like you
- [ ] Photo `alt` text: describe each car for screen readers
