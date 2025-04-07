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
    alert(`File "${selectedFile.name}" uploaded successfully!`); // Feedback for demo
    setSelectedFile(null); // Reset after upload
  };

  return (
    <section className="upload-section">
      <h2 className="upload-title">Upload Resume</h2>
      <form onSubmit={handleUpload} className="upload-form">
        <div className="upload-input-container">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="upload-input"
          />
        </div>
        <button type="submit" className="upload-button">
          Upload
        </button>
      </form>
    </section>
  );
};

export default UploadSection;
// Compare this snippet from src/components/uploadResume/uploadResume.js:
