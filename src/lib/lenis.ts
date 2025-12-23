import Lenis from 'lenis';

let lenis: Lenis | null = null;

export function initLenis() {
  if (lenis) return lenis;

  const prefersReduced = typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Faster and lighter defaults; avoid heavy smoothing if the user prefers reduced motion
  lenis = new Lenis({
    duration: prefersReduced ? 0.1 : 0.7,
    easing: (t: number) => Math.min(1, 1 - Math.pow(1 - t, 3)),
    smooth: !prefersReduced,
    wheelMultiplier: prefersReduced ? 1 : 1.25,
    direction: 'vertical',
    gestureDirection: 'vertical',
  });

  lenis.on('scroll', ({ scroll, limit }) => {
    // set a 0-1 CSS variable for components to use
    const progress = limit > 0 ? scroll / limit : 0;
    document.documentElement.style.setProperty('--scroll', String(progress));
  });

  function raf(time: number) {
    lenis && lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // expose globally for quick access in debugging
  (window as any).lenis = lenis;

  return lenis;
}

export function getLenis() {
  return lenis;
}
