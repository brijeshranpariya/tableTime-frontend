import axios from "axios";
import { toast } from "react-toastify";
import { FrontendRoutes } from "../common/enums/enums";

export const fetchRestaurantListService = async () => {
  try {
    const response = await axios.get(`${FrontendRoutes.RESTAURANT_URL}/`);
    const restaurantList = response.data.restaurantList;
    return restaurantList;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const message =
        err.response?.data.message || "Failed to fetch restaurant details";
      toast.error(message, { position: "top-center", autoClose: 3000 });
    } else {
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  }
};

export const getRestaurantById = async (id: string) => {
  try {
    const response = await axios.get(`${FrontendRoutes.RESTAURANT_URL}/${id}`);
    const restaurantDetails = response.data.restaurantDetails;
    return restaurantDetails;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const message =
        err.response?.data.message || "Failed to fetch restaurant details";
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
