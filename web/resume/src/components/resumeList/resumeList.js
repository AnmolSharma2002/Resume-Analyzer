"use client";
import React from "react";
import "./resumeList.css";

const PreviousResumesSection = () => {
  // Sample data (replace with dynamic data later)
  const resumes = [
    { name: "resume1.pdf", score: 90 },
    { name: "resume2.pdf", score: 75 },
    { name: "resume3.docx", score: 88 },
    { name: "resume4.pdf", score: 82 },
  ];

  return (
    <section className="previous-resumes-section">
      <h2 className="previous-resumes-title">Uploaded Resumes</h2>
      <ul className="resume-list">
        {resumes.map((resume, index) => (
          <li key={index} className="resume-item">
            <span className="resume-name">{resume.name}</span>
            <span className="resume-score">Score: {resume.score}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PreviousResumesSection;
