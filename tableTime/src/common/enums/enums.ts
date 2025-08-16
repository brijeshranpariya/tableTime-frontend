const backEndLink =
  import.meta.env.VITE_BACKEND_LINK ?? "http://localhost:3000";
export const FrontendRoutes = {
  CUSTOMERS_URL: `${backEndLink}/api/customers`,
  FAVORITE_URL: `${backEndLink}/api/favorite`,
  MENU_ITEMS_URL: `${backEndLink}/api/menu-items`,
  ORDER_ITEMS_URL: `${backEndLink}/api/order-items`,
  ORDERS_URL: `${backEndLink}/api/orders`,
  OTP_VERIFICATION_URL: `${backEndLink}/api/otp-verification`,
  PAYMENT_URL: `${backEndLink}/api/payment`,
  RESERVATION_URL: `${backEndLink}/api/reservation`,
  RESTAURANT_TABLE_URL: `${backEndLink}/api/restaurant-table`,
  RESTAURANT_URL: `${backEndLink}/api/restaurants`,
} as const;

export const REGEX = {
  EMAIL: `^[a-zA-Z0-9._%+-]+@gmail\.com$`,
  PASSWORD: `^(?=\\S*?[A-Z])(?=\\S*?[a-z])(?=\\S*?[0-9])(?=\\S*?[@$!%*?&]).{6,}$`,
  NAME: "^[a-zA-Z]{2,50}$",
};
export const BUTTON_TEXT = {
  SENT_OTP: "Send OTP",
  VERIFY: "VERIFY",
};
