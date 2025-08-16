import axios from "axios";
import { toast } from "react-toastify";
import { FrontendRoutes } from "../common/enums/enums";

export const fetchMenuItemsByIdService = async (id: string) => {
  try {
    const response = await axios.get(`${FrontendRoutes.MENU_ITEMS_URL}/${id}`);
    const menuItems = response.data.menuItems;
    return menuItems;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const message = err.response?.data.message || "Failed to fetch the menu.";
      toast.error(message, {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  }
};
