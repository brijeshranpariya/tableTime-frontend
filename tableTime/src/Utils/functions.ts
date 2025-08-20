import parsePhoneNumberFromString from "libphonenumber-js";
import { REGEX } from "../common/enums/enums";
import type { AvailableTableDetails } from "../common/interface/interface";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export const validateEmail = (email: string) => {
  const emailRegex = new RegExp(REGEX.EMAIL);
  return emailRegex.test(email.trim());
};

export const validatePassword = (password: string) => {
  const nameRegex = new RegExp(REGEX.PASSWORD);
  return nameRegex.test(password.trim());
};

export const isValidPhoneNumber = (countryCode: string, phone: string) => {
  const input = countryCode.includes("+")
    ? countryCode + phone
    : `+${countryCode + phone}`;
  const phoneNumber = parsePhoneNumberFromString(input);
  return phoneNumber ? phoneNumber.isValid() : false;
};

export const findClosestGreater = (
  val: number,
  tableDetails: AvailableTableDetails[]
): AvailableTableDetails[] => {
  if (tableDetails.length > 0) {
    const sortedTableData = tableDetails.sort(
      (a, b) => a.total_capacity - b.total_capacity
    );
    const filteredTables = sortedTableData.filter(
      (table) => table.total_capacity <= val + 2 && table.total_capacity >= val
    );
    if (filteredTables.length > 1) {
      let min = filteredTables[0].total_capacity;
      filteredTables.forEach((element) => {
        if (element.total_capacity < min) {
          min = element.total_capacity;
        }
      });
      const match = filteredTables.find((item) => item.total_capacity === min);
      return match ? [match] : [];
    }
    return filteredTables;
  }
  return [];
};

export const setCookie = (name: string, value: string, time: number) => {
  let expires = "";
  if (time) {
    const date = new Date();
    date.setTime(date.getTime() + time);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie =
    name + "=" + encodeURIComponent(value) + expires + ";path= / ";
};
export const getCookie = (key: string) => {
  const token = cookies.get(key);
  return token;
};

export const navigateToSignUp = (statusCode: number) => {
  if (statusCode == 401 || statusCode == 403) {
    window.location.href = import.meta.env.VITE_FRONTEND_LINK;
    console.log("url: ", window.location);
  }
};
