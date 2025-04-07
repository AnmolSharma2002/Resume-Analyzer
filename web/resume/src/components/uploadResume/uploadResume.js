"use client";
import React, { useState } from "react";
import "./uploadResume.css";

const UploadSection = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    // Placeholder for actual upload logic
    console.log("Uploading:", selectedFile.name);
  };

  return (
    <section className="upload-section">
      <h2>Upload Resume</h2>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        />
        <button type="submit">Upload</button>
      </form>
    </section>
  );
};

export default UploadSection;
