const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const desktopHomeMediaQuery = window.matchMedia("(min-width: 900px)");
const isHomeTemplate = document.body.classList.contains("template-home");
const useHoverHomeVideos = supportsHover && desktopHomeMediaQuery.matches;

const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
const mediaItems = Array.from(document.querySelectorAll("[data-media]"));
const managedVideos = mediaItems.filter((media) => media.matches("[data-managed-video]"));
const hoverVideos = Array.from(document.querySelectorAll("[data-hover-video]")).filter(
  (video) => useHoverHomeVideos || !video.matches(".project-card__video--desktop")
);

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

const activateVideo = (video) => {
  const shouldPlayWhenReady = video.dataset.playWhenReady === "true";

  const attemptPlay = () => {
    const playAttempt = video.play();
    if (playAttempt && typeof playAttempt.catch === "function") {
      playAttempt.catch(() => {});
    }
  };

  if (!video.dataset.activated) {
    video.dataset.activated = "true";
    video.preload = video.matches("[data-hover-video]") ? "auto" : "metadata";
    if (shouldPlayWhenReady) {
      video.addEventListener("canplay", attemptPlay, { once: true });
    }
    video.load();
    return;
  }

  if (shouldPlayWhenReady) {
    if (video.readyState < 2) {
      video.addEventListener("canplay", attemptPlay, { once: true });
      return;
    }

    attemptPlay();
  }
};

const resetVideo = (video) => {
  video.pause();
};

const enableAutoplay = (video) => {
  video.autoplay = true;
  video.setAttribute("autoplay", "");
  video.dataset.playWhenReady = "true";
  activateVideo(video);
};

const disableAutoplay = (video) => {
  video.autoplay = false;
  video.removeAttribute("autoplay");
  video.dataset.playWhenReady = "false";
  resetVideo(video);
};

if (managedVideos.length) {
  if (prefersReducedMotion) {
    managedVideos.forEach((video) => {
      video.pause();
      markMediaReady(video);
    });
  } else if (!isHomeTemplate) {
    managedVideos.forEach((video) => {
      enableAutoplay(video);
    });
  } else if ("IntersectionObserver" in window) {
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (entry.isIntersecting) {
            enableAutoplay(video);
            return;
          }

          disableAutoplay(video);
        });
      },
      {
        rootMargin: "200px 0px",
        threshold: 0.15
      }
    );

    managedVideos.forEach((video) => {
      videoObserver.observe(video);
    });
  } else {
    managedVideos.forEach((video) => {
      enableAutoplay(video);
    });
  }
}

if (hoverVideos.length && !prefersReducedMotion && useHoverHomeVideos) {
  if (!isHomeTemplate) {
    hoverVideos.forEach((video) => {
      enableAutoplay(video);
    });
  } else {
    const warmHoverVideos = () => {
      hoverVideos.forEach((video) => {
        if (!video.dataset.activated) {
          video.dataset.playWhenReady = "false";
          activateVideo(video);
        }
      });
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(warmHoverVideos, { timeout: 1500 });
    } else {
      window.setTimeout(warmHoverVideos, 300);
    }

    hoverVideos.forEach((video) => {
      const trigger = video.closest(".project-card__link");

      if (!trigger) {
        return;
      }

      trigger.addEventListener("mouseenter", () => {
        video.dataset.playWhenReady = "true";
        activateVideo(video);
      });

      trigger.addEventListener("mouseleave", () => {
        video.dataset.playWhenReady = "false";
        resetVideo(video);
      });

      trigger.addEventListener("focusin", () => {
        video.dataset.playWhenReady = "true";
        activateVideo(video);
      });

      trigger.addEventListener("focusout", () => {
        video.dataset.playWhenReady = "false";
        resetVideo(video);
      });
    });
  }
} else if (hoverVideos.length && !prefersReducedMotion) {
  if (!isHomeTemplate) {
    hoverVideos.forEach((video) => {
      enableAutoplay(video);
    });
  } else if ("IntersectionObserver" in window) {
    const hoverVideoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (entry.isIntersecting) {
            enableAutoplay(video);
            return;
          }

          disableAutoplay(video);
        });
      },
      {
        rootMargin: "50px 0px",
        threshold: 0.35
      }
    );

    hoverVideos.forEach((video) => {
      hoverVideoObserver.observe(video);
    });
  } else {
    hoverVideos.forEach((video) => {
      enableAutoplay(video);
    });
  }
} else if (hoverVideos.length) {
  hoverVideos.forEach((video) => {
    video.pause();
    markMediaReady(video);
  });
}

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
