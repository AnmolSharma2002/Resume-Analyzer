import {
  loginUser,
  singupUser,
  verifyEmailOtp,
  resendOtp,
  logoutUser,
} from "@/adapter/servies/loginSignupServices";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { publish } from "@/common/utils/eventBus";
import events from "@/common/events";

//Login
export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => loginUser(data),
    onSuccess: (res) => {
      publish(events.OPEN_ALERT, "Login Successful");
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
      publish(events.OPEN_ALERT, "Signup Successful. Please verify OTP.");
    },
    onError: handleError,
  });
};

//verifyOTP
export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: (data) => verifyEmailOtp(data),
    onSuccess: () => {
      publish(events.OPEN_ALERT, "Email verified successfully");
    },
    onError: handleError,
  });
};

//Resend OTP
export const useResendOtp = () => {
  return useMutation({
    mutationFn: (data) => resendOtp(data),
    onSuccess: () => {
      publish(events.OPEN_ALERT, "OTP Resent Successfully");
    },
    onError: handleError,
  });
};

//logout
export const useLogout = () => {
  return useMutation({
    mutationFn: (data) => logoutUser(data),
    onSuccess: () => {
      publish(events.OPEN_ALERT, "Logged out successfully");
    },
    onError: handleError,
  });
};
