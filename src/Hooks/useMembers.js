/**
 * hooks/useMembers.js
 * Fetches paginated member list with search support.
 */

import { useState, useEffect } from "react";
import { fetchMembers } from "../services/memberService";

/**
 * @param {{ page?: number, limit?: number, search?: string }} params
 * @returns {{ members, loading, error, total, refetch }}
 */
const useMembers = ({ page = 1, limit = 10, search = "" } = {}) => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);
  const [total,   setTotal]   = useState(0);

  const load = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchMembers({ page, limit, search });
      setMembers(data?.items ?? data);
      setTotal(data?.total ?? data?.length ?? 0);
    } catch (err) {
      setError(err?.response?.data?.message ?? "Failed to load members");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, search]);

  return { members, loading, error, total, refetch: load };
};

export default useMembers;
