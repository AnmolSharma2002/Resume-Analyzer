import {
  loginUser,
  singupUser,
  verifyEmailOtp,
  resendOtp,
  logoutUser,
} from "@/adapter/servies/loginSignupServices";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const handleError = (error) => {
  toast.error(error?.message || "An unexpected error occurred");
};

//Login
export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => loginUser(data),
    onSuccess: (res) => {
      toast.success("Login Successful");
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
    onError: handleError,
  });
};

//Signup
export const useSignup = () => {
  return useMutation({
    mutationFn: (data) => singupUser(data),
    onSuccess: () => {
      toast.success("Signup Successful. Please verify OTP.");
    },
    onError: handleError,
  });
};

//verifyOTP
export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: (data) => verifyEmailOtp(data),
    onSuccess: () => {
      toast.success("Email verified successfully");
    },
    onError: handleError,
  });
};

//Resend OTP
export const useResendOtp = () => {
  return useMutation({
    mutationFn: (data) => resendOtp(data),
    onSuccess: () => {
      toast.success("OTP Resent Successfully");
    },
    onError: handleError,
  });
};

//logout
export const useLogout = () => {
  return useMutation({
    mutationFn: (data) => logoutUser(data),
    onSuccess: () => {
      toast.success("Logged out successfully");
    },
    onError: handleError,
  });
};
