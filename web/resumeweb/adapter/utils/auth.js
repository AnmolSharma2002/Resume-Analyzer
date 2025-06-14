// hooks/authHooks.js
import {
  loginUser,
  singupUser,
  verifyEmailOtp,
  resendOtp,
  logoutUser,
} from "@/adapter/servies/loginSignupServices";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// Clear authentication data
const clearAuthData = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("authUser");
    localStorage.removeItem("token");
  }
};

// Check if user is authenticated
export const isAuthenticated = () => {
  if (typeof window === "undefined") return false;

  const token = localStorage.getItem("token");
  const user = localStorage.getItem("authUser");

  return !!(token && user);
};

// Get current user data
export const getCurrentUser = () => {
  if (typeof window === "undefined") return null;

  try {
    const user = localStorage.getItem("authUser");
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error("Error parsing user data:", error);
    clearAuthData();
    return null;
  }
};

// Handle errors consistently
const handleError = (error) => {
  clearAuthData();
  const errorMessage =
    error?.response?.data?.message ||
    error?.message ||
    "An unexpected error occurred";

  toast.error(errorMessage);
  throw error; // Re-throw to allow component-level handling
};

// Login Hook
export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (res) => {
      try {
        // Your API returns: { token: "...", user: { id, username, email } }
        // So we access directly from res, not res.data
        const userData = res?.user; // Changed from res?.data?.user
        const token = res?.token; // Changed from res?.data?.token

        if (userData && token) {
          localStorage.setItem("authUser", JSON.stringify(userData));
          localStorage.setItem("token", token);
          queryClient.invalidateQueries({ queryKey: ["profile"] });

          // Don't show toast here, let the component handle it
          return userData; // Return user data for component use
        } else {
          clearAuthData();
          throw new Error("Invalid response data");
        }
      } catch (error) {
        clearAuthData();
        throw new Error("Login failed: Invalid response");
      }
    },
    onError: (error) => {
      handleError(error);
    },
  });
};

// Signup Hook
export const useSignup = () => {
  return useMutation({
    mutationFn: singupUser,
    onSuccess: (res) => {
      toast.success("Signup successful. Please verify OTP.");
      return res?.data;
    },
    onError: (error) => {
      handleError(error);
    },
  });
};

// Verify OTP Hook
export const useVerifyOtp = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: verifyEmailOtp,
    onSuccess: (res) => {
      try {
        // Assuming your verify OTP API has the same response structure
        const userData = res?.user; // Changed from res?.data?.user
        const token = res?.token; // Changed from res?.data?.token

        if (userData && token) {
          localStorage.setItem("authUser", JSON.stringify(userData));
          localStorage.setItem("token", token);
          queryClient.invalidateQueries({ queryKey: ["profile"] });
          toast.success("Email verified successfully");
          return userData;
        } else {
          clearAuthData();
          throw new Error("Invalid verification response");
        }
      } catch (error) {
        clearAuthData();
        throw new Error("Verification failed: Invalid response");
      }
    },
    onError: (error) => {
      handleError(error);
    },
  });
};

// Resend OTP Hook
export const useResendOtp = () => {
  return useMutation({
    mutationFn: resendOtp,
    onSuccess: (res) => {
      toast.success("OTP resent successfully");
      return res?.data;
    },
    onError: (error) => {
      handleError(error);
    },
  });
};

// Logout Hook
export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      clearAuthData();
      queryClient.clear(); // Clear all cache
      toast.success("Logged out successfully");
      return true;
    },
    onError: (error) => {
      // Even if logout fails on server, clear local data
      clearAuthData();
      queryClient.clear();

      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Logout failed, but local session cleared";

      toast.warning(errorMessage);
      return true; // Return true since we cleared local data anyway
    },
  });
};

// Custom hook to check authentication status
export const useAuth = () => {
  const user = getCurrentUser();
  const authenticated = isAuthenticated();

  return {
    user,
    isAuthenticated: authenticated,
    isLoading: false, // You might want to add actual loading state logic
  };
};
