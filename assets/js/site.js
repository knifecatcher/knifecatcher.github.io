const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
const mediaItems = Array.from(document.querySelectorAll("[data-media]"));

const markMediaReady = (media) => {
  media.classList.add("is-ready");
};

revealItems.forEach((item) => item.classList.add("is-visible"));

mediaItems.forEach((media) => {
  if (media.tagName === "IMG") {
    if (media.complete) {
      markMediaReady(media);
      return;
    }

    media.addEventListener("load", () => markMediaReady(media), { once: true });
    media.addEventListener("error", () => markMediaReady(media), { once: true });
    return;
  }

  if (media.tagName === "VIDEO") {
    if (prefersReducedMotion) {
      media.removeAttribute("autoplay");
      media.pause();
      markMediaReady(media);
      return;
    }

    if (media.readyState >= 2) {
      markMediaReady(media);
      return;
    }

    media.addEventListener("loadeddata", () => markMediaReady(media), { once: true });
    media.addEventListener("error", () => markMediaReady(media), { once: true });
    return;
  }

  markMediaReady(media);
});

const currentUrl = new URL(window.location.href);
const samePageLinks = Array.from(document.querySelectorAll('a[href]'));

samePageLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (!href || href.startsWith("#")) {
    return;
  }

  let targetUrl;

  try {
    targetUrl = new URL(link.href, window.location.href);
  } catch {
    return;
  }

  const sameOrigin = targetUrl.origin === currentUrl.origin;
  const samePath = targetUrl.pathname === currentUrl.pathname;
  const sameSearch = targetUrl.search === currentUrl.search;
  const noHash = !targetUrl.hash;

  if (sameOrigin && samePath && sameSearch && noHash) {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });
  }
});

const quoteRotator = document.querySelector("[data-quote-rotator]");
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const headerInner = document.querySelector(".site-header__inner");
const mobileNav = document.querySelector("#site-nav");

if (mobileNavToggle && headerInner && mobileNav) {
  mobileNavToggle.addEventListener("click", () => {
    const isOpen = headerInner.classList.toggle("is-nav-open");
    mobileNavToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      headerInner.classList.remove("is-nav-open");
      mobileNavToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (quoteRotator) {
  const quotes = [
    "You appear, have a chance to blaze in the sky, then you disappear.",
    "Don't mistake motion for progress.",
    "Bright lattices of logic unfolding across that colorless void.",
    "You'll think of something.",
    "The future is already here, it's just not very evenly distributed.",
    "Any sufficiently advanced technology is indistinguishable from magic.",
    "Think lightly of yourself and deeply of the world.",
    "Make things for each other.",
    "This present moment used to be the unimaginable future.",
    "The magic is non-negotiable.",
    "The best way to predict the future is to invent it."
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteRotator.textContent = quotes[randomIndex];
}
