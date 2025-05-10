import { rootInterceptor } from "../interceptor/rootInterceptor";

//Login
export const loginUser = async (data) => {
  const response = await rootInterceptor.post("/auth/login", data);
  return response;
};

//Singup
export const singupUser = async (data) => {
  const response = await rootInterceptor.post("/auth/signup", data);
  return response;
};

//Verify OTP
export const verifyEmailOtp = async (data) => {
  const response = await rootInterceptor.post("/auth/verify-email-otp", data);
  return response;
};

//Resend OTP
export const resendOtp = async (data) => {
  const response = await rootInterceptor.post("/auth/resend-otp", data);
  return response;
};

//Logout
export const logoutUser = async () => {
  return rootInterceptor.post("/auth/logout");
};
