# erikhelmers.com

Personal portfolio for Erik Helmers, hosted on GitHub Pages from the `ControllerArmy.github.io` repo. Plain HTML, CSS and JavaScript: no framework, no build step, no npm.

```
index.html          The page. About, Experience and Contact text live here.
404.html            "Page not found" page (self-contained on purpose).
css/styles.css      All styling. Theme tokens are at the top.
js/main.js          PROJECTS and GALLERY lists are at the top.
assets/             Images, icons, share image, resume PDF.
tools/              resize-photos.ps1: makes web-sized gallery photos.
originals/          Your full-size photos. Stays on this computer (not uploaded).
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
| `assets/images/portrait.jpg` (photo of you, About section) | 1200 × 1500 | 250 KB |
| `assets/projects/<slug>/cover.jpg` | 1600 × 900 | 250 KB |
| `assets/projects/<slug>/shot-1.jpg`, `shot-2.jpg`, ... | 1600 × 900 | 250 KB each |
| Gallery photos | made for you by `tools/resize-photos.ps1` (see "Add a photo") | |
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

Each project gets a shareable link: `https://erikhelmers.com/#project/<slug>`.

## Add a photo

Don't put camera files straight into `assets/`. At 5000+ px and 15–25 MB they look grainy in the grid
and are far too heavy for visitors. Instead:

1. Copy the full-size photo into `originals/`, e.g. `originals/photo-10.jpg`.
2. Run the resizer from this folder. It makes a 2400px copy in `assets/gallery/` for the full-screen viewer
   and a 1600px copy in `assets/gallery/thumbs/` for the grid, and prints the `src` to use. You can also
   right-click the script and choose **Run with PowerShell**.

   ```bash
   powershell -ExecutionPolicy Bypass -File tools/resize-photos.ps1
   ```

3. Add one line to `GALLERY` in `js/main.js`:

   ```js
   { src: "assets/gallery/photo-10.jpg", alt: "Red 911 at sunset", caption: "Laguna Seca, 2026", shape: "" },
   ```

`shape` is `"wide"` (2 columns), `"tall"` (2 rows), or `""`. If the grid shows a gap, change a shape.

### Framing a photo in the grid

The grid crops each photo to fill its box (the full-screen viewer always shows the whole photo).
Add these to a photo's line to control the crop:

- `focus: "85% 50%"` keeps that point in frame: `x% y%` from the top-left. `"50% 50%"` is the center
  (the default), `"0% 50%"` the left edge, `"50% 100%"` the bottom.
- `zoom: 1.3` crops in 30% tighter around the focus point. It can't zoom out: to show more of a photo,
  give it a shape that matches it (a landscape photo in a `"tall"` box loses about half its width).

```js
{ src: "assets/gallery/photo-02.jpg", alt: "...", caption: "", shape: "tall", focus: "85% 50%", zoom: 1.2 },
```

Tweak the numbers, save, refresh. For a permanent crop (one that also applies in the full-screen
viewer), crop in your photo editor before exporting. The hero photo uses the same `--focus` idea:
it's on the `<img>` in `index.html`, and project covers take an optional `coverFocus`.

The script is Windows-only. On a Mac, export at 2400px on the long edge (sRGB, ~80% quality) into
`assets/gallery/`. If there's no thumbnail, the grid just uses that file instead.

`originals/` is in `.gitignore`, so it only exists on this computer. Keep your masters backed up
somewhere else too (e.g. Dropbox).

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

## Custom domain (erikhelmers.com)

The site is served by GitHub Pages; erikhelmers.com just points at it.

- **`CNAME` file:** GitHub created it in the repo root; it contains `erikhelmers.com`. Don't delete it, or
  the domain stops working.
- **DNS** is managed at Hover, where the domain is registered. In Hover the nameservers must be Hover's own
  (`ns1.hover.com`, `ns2.hover.com`); if they point anywhere else (e.g. Wix), Hover's DNS records are ignored.
  Hover's **DNS** tab needs:

  | Type | Host | Value |
  | --- | --- | --- |
  | A | `erikhelmers.com` (or `@`) | `185.199.108.153` |
  | A | `erikhelmers.com` (or `@`) | `185.199.109.153` |
  | A | `erikhelmers.com` (or `@`) | `185.199.110.153` |
  | A | `erikhelmers.com` (or `@`) | `185.199.111.153` |
  | CNAME | `www` | `controllerarmy.github.io` |

  Remove any other A or CNAME records for `@`, `*` and `www` (like Hover's default parking records).
  Keep MX records if you use email on this domain.
- **HTTPS:** once **Settings → Pages** says the DNS check succeeded, tick **Enforce HTTPS**.
  GitHub issues the certificate; it can take up to an hour or so after DNS updates.
- `controllerarmy.github.io` automatically redirects to erikhelmers.com.

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
- [ ] Photo `alt` text: describe each photo for screen readers
- [ ] `photo-03` is only 744 × 596: swap in a larger export if you have one
