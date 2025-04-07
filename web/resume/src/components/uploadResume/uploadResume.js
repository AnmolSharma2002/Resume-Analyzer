"use client";
import React, { useState } from "react";
import "./uploadResume.css";

const UploadSection = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    setStatusMessage("Uploading...");

    const result = await onUpload(formData);

    setStatusMessage(result.message);
    if (result.success) {
      setSelectedFile(null); // Reset only if successful
    }
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
      {statusMessage && <p className="upload-status">{statusMessage}</p>}
    </section>
  );
};

export default UploadSection;
