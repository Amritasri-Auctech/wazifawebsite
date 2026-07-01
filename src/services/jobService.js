/**
 * services/jobService.js
 * All API calls related to Jobs & Career section.
 */

import { getRequest, postRequest } from "../Helpers/index";

/**
 * Fetch all active job listings.
 * @param {{ page?: number, limit?: number, category?: string }} params
 */
export const fetchJobs = async ({ page = 1, limit = 10, category = "" } = {}) => {
  const query = category
    ? `/jobs?page=${page}&limit=${limit}&category=${encodeURIComponent(category)}`
    : `/jobs?page=${page}&limit=${limit}`;
  const response = await getRequest(query);
  return response.data;
};

/**
 * Fetch a single job by ID.
 * @param {string|number} id
 */
export const fetchJobById = async (id) => {
  const response = await getRequest(`/jobs/${id}`);
  return response.data;
};

/**
 * Submit a job application.
 * @param {Object} formData
 */
export const applyForJob = async (formData) => {
  const response = await postRequest({ url: "/jobs/apply", cred: formData });
  return response.data;
};
