import axios from "axios";

export const fetchDashboardData = async () => {
  try {
    const res = await axios.get("/dashboard", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data;
  } catch (error) {
    return {
      error: true,
      message: error.respose?.data.message || "Error fetching dashboard",
    };
  }
};
