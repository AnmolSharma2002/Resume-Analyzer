"use client";
import React from "react";
import { uploadResume } from "@/services/resumeServices";
import UploadSection from "@/components/uploadResume/uploadResume";

const UploadPage = () => {
  const handleResumeUpload = async (formData) => {
    try {
      const response = await uploadResume(formData);
      console.log("Resume uploaded:", response.data);
      return { success: true, message: "Resume uploaded successfully!" };
    } catch (error) {
      console.error("Upload failed:", error);
      return { success: false, message: "Upload failed. Try again." };
    }
  };

  return <UploadSection onUpload={handleResumeUpload} />;
};

export default UploadPage;
