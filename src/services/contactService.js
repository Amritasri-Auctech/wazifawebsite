/**
 * services/contactService.js
 * Contact form submission API call.
 */

import { postRequest } from "../Helpers/index";

/**
 * Send a contact form message.
 * @param {{ name: string, email: string, phone: string, message: string }} formData
 */
export const sendContactMessage = async (formData) => {
  const response = await postRequest({ url: "/contact", cred: formData });
  return response.data;
};
