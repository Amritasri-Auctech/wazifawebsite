/**
 * services/noticeService.js
 * All API calls related to Notices & Announcements.
 */

import { getRequest } from "../Helpers/index";

/**
 * Fetch latest notices/announcements.
 * @param {number} limit - How many notices to fetch (default 4)
 * @returns {Promise<Array>} Array of notice objects
 */
export const fetchNotices = async (limit = 4) => {
  const response = await getRequest(`/notices?limit=${limit}`);
  return response.data;
};

/**
 * Fetch a single notice by ID.
 * @param {string|number} id
 */
export const fetchNoticeById = async (id) => {
  const response = await getRequest(`/notices/${id}`);
  return response.data;
};
