/* ==========================================================================
   ERIK HELMERS — PORTFOLIO SCRIPT
   --------------------------------------------------------------------------
   The two lists you'll edit most live at the top of this file:
     • PROJECTS — one entry per project card, shown in this order
     • GALLERY  — one entry per photo, shown in this order
   Everything under "SITE BEHAVIOR" runs the page. You shouldn't need to
   touch it to add or change content.
   ========================================================================== */


/* ==========================================================================
   PROJECTS  (EDIT ME)
   --------------------------------------------------------------------------
   To add a project, copy one { ... } block, paste it where you want it in
   the list, and change the values:

     slug      Lowercase id with dashes. Used for the shareable link
               (yoursite/#project/<slug>) and the image folder name.
     role, dates, where   Leave as "" to hide.
     summary   Short version shown on the card.
     bullets   Full bullets in the detail view. Use [] to show the summary.
     link      The big button in the detail view, or null to hide it.
     cover     Card + detail image, 1600 × 900.
     coverAlt  Describes the cover image for screen readers.
     coverFocus  Optional. Which part of the cover stays in frame if it gets
               cropped, as "x% y%" (see "focus" under GALLERY below).
     shots     Any number of extra screenshots, 1600 × 900 each.

   Put the images in assets/projects/<slug>/.
   ========================================================================== */
const PROJECTS = [
  {
    slug: "pathfinder",
    title: "PATHFINDER",
    role: "Embedded Firmware", // EDIT: your role title
    dates: "September 2026 – October 2026",
    where: "Gonzaga University First Year Design Challenge, Spokane, WA",
    stack: ["Embedded", "I2C", "UART", "Sensor fusion"], // EDIT: add your language + microcontroller
    summary:
      "Firmware for a rugged handheld sensor tool: 10+ sensors across three I2C buses, running in 50% of flash with no heap allocation after startup.",
    bullets: [
      "Designed and deployed complete embedded firmware for a rugged handheld environmental sensor device integrating 10+ sensors across three I2C buses and UART interfaces.",
      "Implemented six cross-sensor integrations demonstrating practical signal processing and sensor fusion, directly supporting project judging criteria.",
      "Engineered robust sensor drivers with auto-detection, mock fallbacks, and graceful degradation.",
      "Optimized code efficiency to 50% flash (13.6 KB RAM) on a constrained platform, using fixed buffers, no heap allocation after startup, and integer math where floating-point is unavailable in the standard library.",
    ],
    link: null, // e.g. { label: "View on GitHub", url: "https://github.com/ControllerArmy/..." }
    cover: "assets/projects/pathfinder/cover.jpg",
    coverAlt: "The PATHFINDER handheld sensor device", // EDIT: describe your image
    shots: [
      "assets/projects/pathfinder/shot-1.jpg",
      "assets/projects/pathfinder/shot-2.jpg",
    ],
  },
  {
    slug: "grog-n-gold",
    title: "Grog N' Gold",
    role: "Lead Programmer",
    dates: "March 2026 – May 2026",
    where: "DigiPen Academy, Redmond, WA",
    stack: ["Unity", "C#"],
    summary:
      "A ship-based adventure game with enemy AI, shop-driven progression, and boss fights with weak-point detection. 51 custom C# scripts.",
    bullets: [
      "Architected a ship-based adventure game in Unity with 51 custom C# scripts, implementing enemy AI, a multi-tiered progression system with currency and shop mechanics, and a boss-encounter framework with weak-point detection.",
      "Engineered game state management including pause menu, scene switching, save/load, and end-game tracking; optimized performance across 35+ animation sequences and spatial audio systems.",
      "Shipped fully functional builds with high replayability through biome selection and player agency.",
    ],
    link: { label: "Play on itch.io", url: "https://digipen-academy-wanic.itch.io/grog-and-gold" },
    cover: "assets/projects/grog-n-gold/cover.jpg",
    coverAlt: "Grog N' Gold gameplay", // EDIT: describe your image
    shots: [
      "assets/projects/grog-n-gold/shot-1.jpg",
      "assets/projects/grog-n-gold/shot-2.jpg",
      "assets/projects/grog-n-gold/shot-3.jpg",
    ],
  },
  {
    slug: "scally-and-wag",
    title: "Scally & Wag: One Last Adventure",
    role: "Lead Programmer & Game Director",
    dates: "March 2025 – May 2025",
    where: "DigiPen Academy, Redmond, WA",
    stack: ["Unity", "C#"],
    summary:
      "A water-themed 2D arcade game shipped to Android, WebGL, and Windows, with a custom camera, dynamic audio, and a full UI framework.",
    bullets: [
      "Developed a multi-platform 2D arcade game with water-themed gameplay, obstacle generation, health tracking, and collision detection across Android, WebGL, and Windows.",
      "Engineered audio management with ambient sound, dynamic music triggers, and combo feedback; designed a custom camera controller with shake effects and parallax scrolling.",
      "Built the complete UI framework: high score tracking, main menu navigation, credits, and responsive interactions across multiple resolutions.",
    ],
    link: { label: "Play on itch.io", url: "https://digipen-academy-wanic.itch.io/2025scallyandwag" },
    cover: "assets/projects/scally-and-wag/cover.jpg",
    coverAlt: "Scally & Wag gameplay", // EDIT: describe your image
    shots: [
      "assets/projects/scally-and-wag/shot-1.jpg",
      "assets/projects/scally-and-wag/shot-2.jpg",
      "assets/projects/scally-and-wag/shot-3.jpg",
    ],
  },
  {
    // TODO: fill in role, dates, summary, bullets, and the repo link.
    slug: "helm-launcher",
    title: "Helm Launcher",
    role: "",
    dates: "",
    where: "",
    stack: ["Electron"],
    summary: "A multi-platform game launcher built with Electron.",
    bullets: [],
    link: null, // e.g. { label: "View on GitHub", url: "https://github.com/ControllerArmy/REPO-NAME" }
    cover: "assets/projects/helm-launcher/cover.jpg",
    coverAlt: "The Helm Launcher interface",
    shots: [],
  },
];


/* ==========================================================================
   GALLERY  (EDIT ME)
   --------------------------------------------------------------------------
   One line per photo. Don't upload camera files directly: put them in
   originals/ and run tools/resize-photos.ps1, which makes a 2400px copy in
   assets/gallery/ (full-screen viewer) and a 1600px copy in
   assets/gallery/thumbs/ (grid). It prints the src to use here.
     alt      Describes the photo for screen readers (required).
     caption  Shown under the photo in the lightbox. "" for none.
     shape    "wide" = spans 2 columns, "tall" = spans 2 rows, "" = normal.

   Framing (optional). The grid crops photos to fit their box; the
   full-screen viewer always shows the whole photo.
     focus    The point to keep in frame, as "x% y%" from the top-left.
              "50% 50%" = center (default), "85% 50%" = right side,
              "50% 20%" = near the top. Words work too: "left", "bottom".
     zoom     Crop in tighter around the focus point. 1 = none, 1.3 = 30%.
              Values below 1 can't zoom out; use a different shape instead
              (a landscape photo in a "tall" box loses about half its width).
   Example:  { src: "...", alt: "...", caption: "", shape: "tall", focus: "85% 50%", zoom: 1.2 },

   The current mix of shapes fills the grid evenly. If you add or remove
   photos and see a gap, try changing a shape.
   ========================================================================== */
const GALLERY = [
  { src: "assets/gallery/photo-01.jpg", alt: "Car photo 1", caption: "", shape: "wide" },
  { src: "assets/gallery/photo-02.jpg", alt: "Car photo 2", caption: "", shape: "tall", focus: "85% 50%" },
  { src: "assets/gallery/photo-03.jpg", alt: "Car photo 3", caption: "", shape: "" },
  { src: "assets/gallery/photo-04.jpg", alt: "Car photo 4", caption: "", shape: "" },
  { src: "assets/gallery/photo-05.jpg", alt: "Car photo 5", caption: "", shape: "" },
  { src: "assets/gallery/photo-06.jpg", alt: "Car photo 6", caption: "", shape: "wide" },
  { src: "assets/gallery/photo-07.jpg", alt: "Car photo 7", caption: "", shape: "" },
  { src: "assets/gallery/photo-08.jpg", alt: "Car photo 8", caption: "", shape: "" },
  { src: "assets/gallery/photo-09.jpg", alt: "Car photo 9", caption: "", shape: "" },
];


/* ==========================================================================
   SITE BEHAVIOR
   ========================================================================== */

const root = document.documentElement;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const escapeHTML = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[char]);

const svgIcon = (path, className = "icon") =>
  `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${path}"/></svg>`;

const ICONS = {
  arrowRight: svgIcon("M5 12h14M13 6l6 6-6 6"),
  external: svgIcon("M7 17 17 7M8 7h9v9"),
};

function syncScrollLock() {
  const menuOpen = $("[data-nav]")?.classList.contains("is-open");
  const dialogOpen = $$("dialog").some((dialog) => dialog.open);
  root.classList.toggle("is-locked", Boolean(menuOpen || dialogOpen));
}


/* ---------- Image placeholders --------------------------------------------
   Images that fail to load (because you haven't added them yet) turn into a
   striped box showing the exact path and size the site expects. */

// `fallback`: a second file to try if `src` is missing (e.g. full photo when
// its thumbnail hasn't been generated yet).
// `focus` / `zoom`: framing for cropped images (see GALLERY notes above).
function mediaHTML(src, alt, size, className = "", { eager = false, fallback = "", focus = "", zoom = 0 } = {}) {
  const label = fallback || src;
  const fallbackAttr = fallback ? ` data-fallback="${escapeHTML(fallback)}"` : "";
  const framing = [
    focus ? `--focus: ${focus}` : "",
    Number(zoom) > 0 ? `--zoom: ${Number(zoom)}` : "",
  ].filter(Boolean).join("; ");
  const styleAttr = framing ? ` style="${escapeHTML(framing)}"` : "";
  return `<div class="media ${className}" data-label="${escapeHTML(label)}&#10;${escapeHTML(size)}"><img src="${escapeHTML(src)}"${fallbackAttr}${styleAttr} alt="${escapeHTML(alt)}"${eager ? "" : ' loading="lazy"'} decoding="async"></div>`;
}

function initImagePlaceholders() {
  const setMissing = (img, missing) => img.closest(".media")?.classList.toggle("is-missing", missing);

  const handleBroken = (img) => {
    if (img.dataset.fallback && img.getAttribute("src") !== img.dataset.fallback) {
      img.src = img.dataset.fallback;
    } else {
      setMissing(img, true);
    }
  };

  document.addEventListener("error", (event) => {
    if (event.target instanceof HTMLImageElement) handleBroken(event.target);
  }, true);

  document.addEventListener("load", (event) => {
    if (event.target instanceof HTMLImageElement) setMissing(event.target, false);
  }, true);

  // Catch images that already failed before this script ran.
  $$(".media img").forEach((img) => {
    if (img.complete && img.naturalWidth === 0) handleBroken(img);
  });
}


/* ---------- Projects ------------------------------------------------------ */

const tagsHTML = (tags) =>
  tags.length ? `<ul class="tags">${tags.map((tag) => `<li>${escapeHTML(tag)}</li>`).join("")}</ul>` : "";

const projectMeta = (project) =>
  [project.role, project.dates].filter(Boolean).map(escapeHTML).join(" · ");

function renderProjects() {
  const list = $("[data-projects]");
  if (!list) return;

  list.innerHTML = PROJECTS.map((project) => `
    <li class="project-card" data-reveal>
      <a class="project-link" href="#project/${escapeHTML(project.slug)}">
        ${mediaHTML(project.cover, "", "1600 × 900", "", { focus: project.coverFocus })}
        <div class="project-body">
          <h3 class="project-title">${escapeHTML(project.title)}</h3>
          ${projectMeta(project) ? `<p class="project-meta">${projectMeta(project)}</p>` : ""}
          <p class="project-summary">${escapeHTML(project.summary)}</p>
          ${tagsHTML(project.stack)}
          <span class="project-more">View project ${ICONS.arrowRight}</span>
        </div>
      </a>
    </li>`).join("");
}

function projectDetailHTML(project) {
  const index = PROJECTS.indexOf(project);
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const facts = [["Role", project.role], ["When", project.dates], ["Where", project.where]]
    .filter(([, value]) => value);

  return `
    <header class="pd-head">
      <p class="eyebrow">Project ${index + 1} of ${PROJECTS.length}</p>
      <h2 class="display" id="pd-title" tabindex="-1">${escapeHTML(project.title)}</h2>
      ${facts.length ? `<dl class="pd-facts">${facts.map(([label, value]) => `<div><dt>${label}</dt><dd>${escapeHTML(value)}</dd></div>`).join("")}</dl>` : ""}
      ${tagsHTML(project.stack)}
      ${project.link?.url ? `
        <a class="btn btn--accent btn--lg pd-cta" href="${escapeHTML(project.link.url)}" target="_blank" rel="noopener">
          ${escapeHTML(project.link.label)} ${ICONS.external}<span class="visually-hidden"> (opens in a new tab)</span>
        </a>` : ""}
    </header>

    ${mediaHTML(project.cover, project.coverAlt, "1600 × 900", "pd-cover", { eager: true, focus: project.coverFocus })}

    <section class="pd-columns" aria-labelledby="pd-built">
      <h3 class="pd-subtitle" id="pd-built">What I built</h3>
      ${project.bullets.length
        ? `<ul class="pd-bullets">${project.bullets.map((bullet) => `<li>${escapeHTML(bullet)}</li>`).join("")}</ul>`
        : `<p class="pd-summary">${escapeHTML(project.summary)}</p>`}
    </section>

    ${project.shots.length ? `
      <div class="pd-shots">
        ${project.shots.map((src, i) => mediaHTML(src, `${project.title} screenshot ${i + 1}`, "1600 × 900")).join("")}
      </div>` : ""}

    ${next !== project ? `
      <a class="pd-next" href="#project/${escapeHTML(next.slug)}" data-replace>
        <span class="pd-next-label">Next project</span>
        <span class="pd-next-title">${escapeHTML(next.title)} ${ICONS.arrowRight}</span>
      </a>` : ""}`;
}

// Each project has its own URL (#project/<slug>), so links can be shared and
// the browser's Back button closes the detail view.
function initProjectDialog() {
  const dialog = $("#project-dialog");
  const content = $("[data-project-content]");
  if (!dialog || !content) return;

  const defaultTitle = document.title;
  let openedFromPage = false;
  let returnFocus = null;

  const projectFromHash = () => {
    const match = location.hash.match(/^#project\/([\w-]+)$/);
    return match ? PROJECTS.find((project) => project.slug === match[1]) : undefined;
  };

  const open = (project) => {
    content.innerHTML = projectDetailHTML(project);
    document.title = `${project.title} — Erik Helmers`;
    if (dialog.open) {
      $("#pd-title", content).focus();
    } else {
      returnFocus = document.activeElement;
      dialog.showModal();
      syncScrollLock();
    }
    dialog.scrollTop = 0;
  };

  const route = (fromPage) => {
    const project = projectFromHash();
    if (project) {
      if (!dialog.open) openedFromPage = fromPage;
      open(project);
    } else if (dialog.open) {
      dialog.close();
    }
  };

  window.addEventListener("hashchange", () => route(true));

  dialog.addEventListener("click", (event) => {
    if (event.target.closest("[data-close]")) dialog.close();

    // "Next project" swaps content without adding a history entry, so one
    // Back press still returns to the page.
    const nextLink = event.target.closest("[data-replace]");
    if (nextLink) {
      event.preventDefault();
      location.replace(nextLink.getAttribute("href"));
    }
  });

  dialog.addEventListener("close", () => {
    document.title = defaultTitle;
    syncScrollLock();
    if (projectFromHash()) {
      if (openedFromPage) {
        history.back();
      } else {
        history.replaceState(null, "", "#projects");
        $("#projects")?.scrollIntoView();
      }
    }
    returnFocus?.focus({ preventScroll: true });
  });

  route(false);
}


/* ---------- Photography + lightbox ---------------------------------------- */

const photoSize = (photo) =>
  photo.shape === "tall" ? "1600 × 2400 (portrait)" : "2400 × 1600 (landscape)";

// assets/gallery/photo-01.jpg -> assets/gallery/thumbs/photo-01.jpg
const thumbFor = (src) => src.replace(/([^/]+)$/, "thumbs/$1");

function renderGallery() {
  const list = $("[data-gallery]");
  if (!list) return;

  list.innerHTML = GALLERY.map((photo, i) => `
    <li class="gallery-item${photo.shape ? ` gallery-item--${escapeHTML(photo.shape)}` : ""}" data-reveal>
      <button class="gallery-btn" type="button" data-index="${i}" aria-label="View larger: ${escapeHTML(photo.alt)}">
        ${mediaHTML(thumbFor(photo.src), "", photoSize(photo), "", { fallback: photo.src, focus: photo.focus, zoom: photo.zoom })}
      </button>
    </li>`).join("");
}

function initLightbox() {
  const list = $("[data-gallery]");
  const box = $("#lightbox");
  if (!list || !box || !GALLERY.length) return;

  const stage = $(".lb-stage", box);
  const media = $(".lb-media", box);
  const img = $("img", media);
  const caption = $(".lb-caption", box);
  const counter = $(".lb-count", box);
  const wrap = (i) => (i + GALLERY.length) % GALLERY.length;
  let index = 0;
  let returnFocus = null;

  img.draggable = false;
  img.addEventListener("load", () => img.classList.remove("is-loading"));
  img.addEventListener("error", () => img.classList.remove("is-loading"));

  const show = (i) => {
    index = wrap(i);
    const photo = GALLERY[index];
    media.dataset.label = `${photo.src}\n${photoSize(photo)}`;
    if (img.getAttribute("src") !== photo.src) {
      media.classList.remove("is-missing");
      img.classList.add("is-loading");
      img.src = photo.src;
    }
    img.alt = photo.alt;
    caption.textContent = photo.caption || "";
    counter.textContent = `${index + 1} / ${GALLERY.length}`;

    // Preload neighbours so arrowing through feels instant.
    [wrap(index + 1), wrap(index - 1)].forEach((n) => {
      new Image().src = GALLERY[n].src;
    });
  };

  list.addEventListener("click", (event) => {
    const button = event.target.closest("[data-index]");
    if (!button) return;
    returnFocus = button;
    show(Number(button.dataset.index));
    box.showModal();
    syncScrollLock();
  });

  box.addEventListener("click", (event) => {
    if (event.target.closest("[data-close]")) box.close();
    else if (event.target.closest("[data-prev]")) show(index - 1);
    else if (event.target.closest("[data-next]")) show(index + 1);
  });

  box.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") show(index + 1);
    if (event.key === "ArrowLeft") show(index - 1);
  });

  box.addEventListener("close", () => {
    syncScrollLock();
    returnFocus?.focus();
  });

  // Swipe left/right on touch screens.
  let startX = null;
  stage.addEventListener("pointerdown", (event) => {
    startX = event.clientX;
  });
  stage.addEventListener("pointerup", (event) => {
    if (startX === null) return;
    const distance = event.clientX - startX;
    startX = null;
    if (Math.abs(distance) > 50) show(index + (distance < 0 ? 1 : -1));
  });
}


/* ---------- Navigation ---------------------------------------------------- */

function initNav() {
  const nav = $("[data-nav]");
  if (!nav) return;
  const toggle = $(".nav-toggle", nav);
  const label = $(".nav-toggle-label", nav);
  const menu = $("#nav-menu");
  const main = $("#main");
  const footer = $(".site-footer");

  // Hide while scrolling down, show while scrolling up.
  let lastY = window.scrollY;
  let ticking = false;
  const onScroll = () => {
    ticking = false;
    const y = window.scrollY;
    nav.classList.toggle("is-top", y < 24);
    if (Math.abs(y - lastY) < 8) return;
    const scrollingDown = y > lastY;
    const pastHero = y > window.innerHeight * 0.6;
    nav.classList.toggle("is-hidden", scrollingDown && pastHero && !nav.classList.contains("is-open"));
    lastY = y;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(onScroll);
    }
  }, { passive: true });
  onScroll();

  // Phone menu
  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    label.textContent = open ? "Close" : "Menu";
    main.inert = open;
    if (footer) footer.inert = open;
    syncScrollLock();
  };

  toggle.addEventListener("click", () => {
    const open = !nav.classList.contains("is-open");
    setOpen(open);
    if (open) $("a", menu)?.focus();
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  window.matchMedia("(min-width: 48rem)").addEventListener("change", (event) => {
    if (event.matches) setOpen(false);
  });

  // Highlight the link for the section in the middle of the screen.
  if (!("IntersectionObserver" in window)) return;
  const links = new Map($$("a", menu).map((link) => [link.getAttribute("href").slice(1), link]));
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => link.removeAttribute("aria-current"));
      links.get(entry.target.id)?.setAttribute("aria-current", "true");
    });
  }, { rootMargin: "-45% 0px -54% 0px" });
  $$("main > section[id]").forEach((section) => spy.observe(section));
}


/* ---------- Scroll reveals ------------------------------------------------
   Anything with data-reveal fades up the first time it scrolls into view.
   Skipped entirely when the visitor prefers reduced motion. */

function initReveal() {
  if (reduceMotion.matches || !("IntersectionObserver" in window)) return;
  const items = $$("[data-reveal]");

  // Stagger cards and photos that appear together.
  items.forEach((item) => {
    if (item.parentElement.matches(".project-grid, .gallery")) {
      const position = [...item.parentElement.children].indexOf(item);
      item.style.setProperty("--reveal-delay", `${(position % 4) * 80}ms`);
    }
  });

  root.classList.add("has-reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -10% 0px" });
  items.forEach((item) => observer.observe(item));
}


/* ---------- Hero parallax ------------------------------------------------- */

function initParallax() {
  const hero = $(".hero");
  const image = $(".hero-media img");
  const content = $(".hero-content");
  if (!hero || !image || !content) return;

  let ticking = false;
  const update = () => {
    ticking = false;
    if (reduceMotion.matches) {
      image.style.transform = "";
      content.style.transform = "";
      content.style.opacity = "";
      return;
    }
    const height = hero.offsetHeight;
    const y = Math.min(Math.max(window.scrollY, 0), height);
    image.style.transform = `translate3d(0, ${(y * 0.3).toFixed(1)}px, 0)`;
    content.style.transform = `translate3d(0, ${(y * 0.12).toFixed(1)}px, 0)`;
    content.style.opacity = String(Math.max(0, 1 - y / (height * 0.7)));
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  reduceMotion.addEventListener("change", update);
  update();
}


/* ---------- Start ---------------------------------------------------------- */

initImagePlaceholders();
renderProjects();
renderGallery();
initNav();
initReveal();
initParallax();
initProjectDialog();
initLightbox();
$$("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
