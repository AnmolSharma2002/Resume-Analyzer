import { Routes } from "@/routes/routes";
import axios from "axios";
import Cookies from "js-cookie";
import Router from "next/router";

const disableAPITimeout =
  process.env.NEXT_PUBLIC_DISABLE_API_TIMEOUT === "true";

const defaultRequestHeaders = {
  "Content-Type": "application/json",
};

// Create axios instance
const rootInterceptor = axios.create({
  withCredentials: true, // Important for JWT cookie
  headers: defaultRequestHeaders,
  baseURL: process.env.BACKEND_URL || process.env.NEXT_PUBLIC_API_URL,
  ...(!disableAPITimeout && {
    timeout: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || "8000"),
  }),
});

// Request Interceptor
rootInterceptor.interceptors.request.use(
  (config) => {
    // No CSRF token logic needed
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Response Interceptor
rootInterceptor.interceptors.response.use(
  (response) => {
    // Normalize response structure
    return response.data?.data || response.data;
  },
  (error) => {
    const status = error?.response?.status;
    const operation = error?.response?.data?.operation;

    if (
      status === 401 &&
      !["verifyEmailOTP", "verifySignupEmail", "verifyPhoneOTP"].includes(
        operation
      )
    ) {
      Router.replace(Routes.HOME);
      return;
    }

    console.error("Response error:", error);

    return Promise.reject(
      status >= 500
        ? { message: "Something went wrong. Please try again later." }
        : error?.response?.data || error
    );
  }
);

export { rootInterceptor };
