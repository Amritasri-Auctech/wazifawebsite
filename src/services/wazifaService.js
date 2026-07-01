/**
 * services/wazifaService.js
 * All API calls related to Wazifadar & Wazifa distribution.
 */

import { getRequest, postRequest } from "../Helpers/index";

/**
 * Fetch list of wazifadars.
 * @param {{ page?: number, limit?: number }} params
 */
export const fetchWazifadars = async ({ page = 1, limit = 10 } = {}) => {
  const response = await getRequest(`/wazifadars?page=${page}&limit=${limit}`);
  return response.data;
};

/**
 * Fetch wazifa distribution schedule.
 */
export const fetchWazifaSchedule = async () => {
  const response = await getRequest("/wazifa/schedule");
  return response.data;
};

/**
 * Submit a new wazifa application.
 * @param {Object} formData
 */
export const applyForWazifa = async (formData) => {
  const response = await postRequest({ url: "/wazifa/apply", cred: formData });
  return response.data;
};
