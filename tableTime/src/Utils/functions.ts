import { REGEX } from "../common/enums/enums";

export const validateEmail = (email: string) => {
  const emailRegex = new RegExp(REGEX.EMAIL);
  return emailRegex.test(email.trim());
};

export const validatePassword = (password: string) => {
  const nameRegex = new RegExp(REGEX.PASSWORD);
  return nameRegex.test(password.trim());
};
