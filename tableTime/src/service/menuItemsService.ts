import axios from "axios";
import { toast } from "react-toastify";
import { FrontendRoutes } from "../common/enums/enums";
import { getCookie, navigateToSignUp } from "../Utils/functions";

export const fetchMenuItemsByIdService = async (id: string) => {
  try {
    const response = await axios.get(`${FrontendRoutes.MENU_ITEMS_URL}/${id}`, {
      headers: {
        token: getCookie("token"),
      },
    });
    const menuItems = response.data.menuItems;
    return menuItems;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (err.response) navigateToSignUp(err.response?.status);
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
