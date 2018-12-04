import { post } from "../utils/fetch";

export const sendContact = ({ name, email, message }) =>
  post('/contact-me', { name, email, message });
