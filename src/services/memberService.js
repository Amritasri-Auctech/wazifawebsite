/**
 * services/memberService.js
 * All API calls related to Members.
 */

import { getRequest, postRequest } from "../Helpers/index";

/**
 * Fetch paginated member list.
 * @param {{ page?: number, limit?: number, search?: string }} params
 */
export const fetchMembers = async ({ page = 1, limit = 10, search = "" } = {}) => {
  const response = await getRequest(
    `/members?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}`
  );
  return response.data;
};

/**
 * Submit new member registration.
 * @param {Object} formData - Member registration payload
 */
export const registerMember = async (formData) => {
  const response = await postRequest({ url: "/members/register", cred: formData });
  return response.data;
};
