import { useState, useEffect } from 'react';

const BREAKPOINTS = { sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536 };
function getBp(w) {
  if (w >= BREAKPOINTS['2xl']) return '2xl';
  if (w >= BREAKPOINTS.xl) return 'xl';
  if (w >= BREAKPOINTS.lg) return 'lg';
  if (w >= BREAKPOINTS.md) return 'md';
  if (w >= BREAKPOINTS.sm) return 'sm';
  return 'xs';
}

export default function useBreakpoint() {
  const isClient = typeof window !== 'undefined';
  const [bp, setBp] = useState(isClient ? getBp(window.innerWidth) : 'xs');

  useEffect(() => {
    if (!isClient) return;
    let raf;
    const onResize = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setBp(getBp(window.innerWidth)));
    };
    window.addEventListener('resize', onResize);
    onResize();
    return () => {
      window.removeEventListener('resize', onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isClient]);

  return bp;
}