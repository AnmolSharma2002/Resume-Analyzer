"use client";
import React from "react";
import "./resumeList.css";

const PreviousResumesSection = () => {
  return (
    <section className="previous-resumes-section">
      <h2>Uploaded Resumes</h2>
      <ul>
        {/* Placeholder data, to be replaced with dynamic content */}
        <li>resume1.pdf - Score: 90</li>
        <li>resume2.pdf - Score: 75</li>
      </ul>
    </section>
  );
};

export default PreviousResumesSection;
