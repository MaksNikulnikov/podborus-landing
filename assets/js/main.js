(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile menu
  const burger = document.querySelector(".burger");
  const mobileNav = document.querySelector(".mobile-nav");
  if (burger && mobileNav) {
    burger.addEventListener("click", () => {
      const isOpen = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!isOpen));
      mobileNav.hidden = isOpen;
    });

    // Close menu on link click
    mobileNav.querySelectorAll("a[href^='#']").forEach((a) => {
      a.addEventListener("click", () => {
        burger.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
      });
    });
  }

  // AOS animations (optional)
  if (window.AOS) {
    window.AOS.init({
      once: true,
      duration: 650,
      easing: "ease-out-quart",
      offset: 80,
      disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
    });
  }

  // Swiper testimonials
  if (window.Swiper) {
    // Respect reduced motion
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // eslint-disable-next-line no-new
    new window.Swiper("#reviewsSwiper", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 14,
      autoplay: reduceMotion ? false : { delay: 4500, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      keyboard: { enabled: true },
      breakpoints: {
        860: { slidesPerView: 2 }
      }
    });
  }
})();
