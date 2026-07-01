/**
 * hooks/useJobs.js
 * Fetches job listings from API with pagination and category filter.
 */

import { useState, useEffect } from "react";
import { fetchJobs } from "../services/jobService";

/**
 * @param {{ page?: number, limit?: number, category?: string }} params
 * @returns {{ jobs, loading, error, total, refetch }}
 */
const useJobs = ({ page = 1, limit = 10, category = "" } = {}) => {
  const [jobs,    setJobs]    = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);
  const [total,   setTotal]   = useState(0);

  const load = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchJobs({ page, limit, category });
      setJobs(data?.items ?? data);
      setTotal(data?.total ?? data?.length ?? 0);
    } catch (err) {
      setError(err?.response?.data?.message ?? "Failed to load jobs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, category]);

  return { jobs, loading, error, total, refetch: load };
};

export default useJobs;
