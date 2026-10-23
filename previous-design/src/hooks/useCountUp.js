import { useEffect, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

/**
 * Eased progress from 0 to 1 that starts when `active` turns true.
 * Jumps straight to 1 when the visitor prefers reduced motion.
 */
export function useCountUp(active, duration = 1800) {
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!active) return undefined;
    if (reduced) {
      setProgress(1);
      return undefined;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, Math.max(0, (now - start) / duration));
      setProgress(1 - Math.pow(1 - t, 3));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, duration, reduced]);

  return progress;
}
