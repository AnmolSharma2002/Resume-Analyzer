import api from "../utils/axios";

export const login = async (email, password) => {
  try {
    const res = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    return res.data;
  } catch (error) {
    throw error.response?.data?.message || "Login failed";
  }
};

export const signup = async (name, email, password) => {
  try {
    const res = await api.post("/auth/signup", {
      username: name,
      email,
      password,
    });
    localStorage.setItem("token", res.data.token);
    return res.data;
  } catch (error) {
    throw error.response?.data?.message || "Signup failed";
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
