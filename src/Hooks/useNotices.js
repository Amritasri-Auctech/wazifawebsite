/**
 * hooks/useNotices.js
 * Fetches notices from API. Falls back to static data if API is unavailable.
 */

import { useState, useEffect } from "react";
import { fetchNotices } from "../services/noticeService";
import { STATIC_NOTICES } from "../constants/homeData";

/**
 * @param {number} limit - number of notices to fetch
 * @returns {{ notices: Array, loading: boolean, error: string|null }}
 */
const useNotices = (limit = 4) => {
  const [notices, setNotices]   = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error,   setError]     = useState(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchNotices(limit);
        if (!cancelled) setNotices(data);
      } catch {
        if (!cancelled) {
          // API unavailable — use static fallback
          setNotices(STATIC_NOTICES.slice(0, limit));
          setError("Using cached data");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => { cancelled = true; };
  }, [limit]);

  return { notices, loading, error };
};

export default useNotices;
