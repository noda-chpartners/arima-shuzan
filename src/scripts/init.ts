import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const header = document.querySelector<HTMLElement>('[data-header]');
const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu-btn]');
const menu = document.querySelector<HTMLElement>('[data-menu]');

const closeMenu = () => {
  menu?.setAttribute('data-open', 'false');
  menuBtn?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
};

menuBtn?.addEventListener('click', () => {
  const open = menu?.getAttribute('data-open') === 'true';
  menu?.setAttribute('data-open', open ? 'false' : 'true');
  menuBtn.setAttribute('aria-expanded', open ? 'false' : 'true');
  document.body.style.overflow = open ? '' : 'hidden';
});

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

if (reduced) {
  document.documentElement.setAttribute('data-reduced', 'true');
} else {
  const lenis = new Lenis({
    autoRaf: false,
    duration: 1.05,
    anchors: true,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  lenis.on('scroll', ({ scroll }) => {
    if (!header) return;
    header.setAttribute('data-scrolled', scroll > 16 ? 'true' : 'false');
  });

  const hero = document.querySelector('[data-hero]');
  if (hero) {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('[data-hero-photo]', { scale: 1.08, opacity: 0, duration: 1.15 })
      .from(
        '[data-hero-bubble]',
        { y: 36, opacity: 0, duration: 0.8, ease: 'back.out(1.4)' },
        '-=0.55',
      )
      .from(
        '[data-chip]',
        { y: 16, opacity: 0, stagger: 0.08, duration: 0.55, ease: 'back.out(1.6)' },
        '-=0.4',
      );
  }

  gsap.utils.toArray<HTMLElement>('[data-fade]').forEach((el) => {
    gsap.from(el, {
      y: 28,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%' },
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((el) => {
    gsap.from(el.querySelectorAll(':scope > *'), {
      y: 24,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'back.out(1.2)',
      scrollTrigger: { trigger: el, start: 'top 86%' },
    });
  });
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});
