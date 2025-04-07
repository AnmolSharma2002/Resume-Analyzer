import api from "@/utils/axios";
import { toast } from "react-toastify";

export const uploadResume = async (formData) => {
  try {
    const res = await api.post("/resume", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    toast.success("Resume uploaded successfully!");
    return res.data;
  } catch (error) {
    toast.error("Resume upload failed!");
    console.error("Failed to upload the resume", error);
    return {
      error: true,
      message: error.response?.data?.message || "Resume upload failed!",
    };
  }
};
