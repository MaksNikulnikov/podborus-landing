const yearElement = document.getElementById('year');
if (yearElement) yearElement.textContent = String(new Date().getFullYear());

const burgerButton = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');

function setMobileNavOpen(isOpen) {
  if (!burgerButton || !mobileNav) return;

  burgerButton.setAttribute('aria-expanded', String(isOpen));
  mobileNav.hidden = !isOpen;
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function isMobileLayout() {
  return window.matchMedia('(max-width: 980px)').matches;
}

if (burgerButton && mobileNav) {
  burgerButton.addEventListener('click', () => {
    if (!isMobileLayout()) return;
    const isOpen = burgerButton.getAttribute('aria-expanded') === 'true';
    setMobileNavOpen(!isOpen);
  });

  mobileNav.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.tagName.toLowerCase() !== 'a') return;
    setMobileNavOpen(false);
  });

  window.addEventListener('resize', () => {
    if (!isMobileLayout()) {
      setMobileNavOpen(false);
    } else {
      setMobileNavOpen(false);
    }
  });
}
