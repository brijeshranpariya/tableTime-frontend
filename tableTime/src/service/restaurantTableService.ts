import axios from "axios";
import { toast } from "react-toastify";
import { FrontendRoutes } from "../common/enums/enums";

export const getAvailableTableDetailsById = async (id: string) => {
  try {
    const response = await axios.get(
      `${FrontendRoutes.RESTAURANT_TABLE_URL}/${id}`
    );
    const tableDetails = response.data.tableDetails;
    return tableDetails;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const message =
        err.response?.data.message ||
        "Failed to fetch available table details.";
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
