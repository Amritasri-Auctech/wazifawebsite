/**
 * services/testimonialService.js
 * All API calls related to Testimonials.
 */

import { getRequest } from "../Helpers/index";

/**
 * Fetch approved testimonials.
 * @param {number} limit
 */
export const fetchTestimonials = async (limit = 3) => {
  const response = await getRequest(`/testimonials?limit=${limit}&status=approved`);
  return response.data;
};
