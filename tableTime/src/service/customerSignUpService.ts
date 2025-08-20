import axios from "axios";
import { FrontendRoutes } from "../common/enums/enums";
import { toast } from "react-toastify";

export const generateOtpService = async (phoneNumber: String) => {
  try {
    const response = await axios.post(
      `${FrontendRoutes.CUSTOMERS_URL}/sign-up`,
      {
        phoneNumber,
      }
    );
    const data = response.data;
    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const message =
        err.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(message, { position: "top-center", autoClose: 3000 });
    } else {
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  }
};

export const verifyOTP = async (phoneNumber: string, OTP: string) => {
  try {
    const response = await axios.post(
      `${FrontendRoutes.OTP_VERIFICATION_URL}/verifyOtp`,
      {
        phoneNumber,
        OTP,
      }
    );
    const data = response.data;
    if (data.verified) {
      toast.success(response.data.message, {
        position: "top-center",
        autoClose: 3000,
      });
    }
    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const message =
        err.response?.data.message ||
        "Failed to verify the OTP, Please try again";
      toast.error(message, { position: "top-center", autoClose: 3000 });
    } else {
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  }
};

export const resendOTP = async (phoneNumber: string) => {
  try {
    const response = await axios.post(
      `${FrontendRoutes.OTP_VERIFICATION_URL}/resend`,
      {
        phoneNumber,
      }
    );
    const newOtp = response.data.OTP;
    toast.success(response.data.message, {
      position: "top-center",
      autoClose: 3000,
    });
    return newOtp;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const message =
        err.response?.data.message || "Failed to resend OTP, Please try again";
      toast.error(message, { position: "top-center", autoClose: 3000 });
    } else {
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  }
};
