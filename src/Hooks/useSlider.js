/**
 * hooks/useSlider.js
 * Generic auto-advancing slider / carousel logic.
 * Reuse karo HeroSlider, TestimonialsSection, kisi bhi slider mein.
 */

import { useState, useEffect, useCallback } from "react";

/**
 * @param {number} total     - Total number of slides
 * @param {number} interval  - Auto-advance interval in ms (0 = disabled)
 * @returns {{ current, setCurrent, prev, next, goTo }}
 */
const useSlider = (total, interval = 5000) => {
  const [current, setCurrent] = useState(0);

  const prev   = useCallback(() => setCurrent((p) => (p - 1 + total) % total), [total]);
  const next   = useCallback(() => setCurrent((p) => (p + 1) % total), [total]);
  const goTo   = useCallback((i) => setCurrent(i), []);

  useEffect(() => {
    if (!interval || total <= 1) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [next, interval, total]);

  return { current, setCurrent, prev, next, goTo };
};

export default useSlider;
