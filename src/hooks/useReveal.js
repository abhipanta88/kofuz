import { useEffect, useRef } from 'react';

/**
 * useReveal — attaches an IntersectionObserver to reveal elements
 * marked with `.reveal` within the container. Adds `is-visible`
 * once per element (observer is disconnected after reveal).
 */
export default function useReveal({ threshold = 0.15, once = true } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = root.querySelectorAll('.reveal');
    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [threshold, once]);

  return ref;
}
