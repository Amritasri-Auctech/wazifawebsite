/**
 * hooks/useTestimonials.js
 * Fetches testimonials from API. Falls back to static data if API is unavailable.
 */

import { useState, useEffect } from "react";
import { fetchTestimonials } from "../services/testimonialService";
import { STATIC_TESTIMONIALS } from "../constants/homeData";

/**
 * @param {number} limit
 * @returns {{ testimonials: Array, loading: boolean, error: string|null }}
 */
const useTestimonials = (limit = 3) => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading,      setLoading]      = useState(true);
  const [error,        setError]        = useState(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchTestimonials(limit);
        if (!cancelled) setTestimonials(data);
      } catch {
        if (!cancelled) {
          setTestimonials(STATIC_TESTIMONIALS.slice(0, limit));
          setError("Using cached data");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => { cancelled = true; };
  }, [limit]);

  return { testimonials, loading, error };
};

export default useTestimonials;
