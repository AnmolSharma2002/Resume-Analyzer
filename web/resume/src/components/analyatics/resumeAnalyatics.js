"use client";
import React from "react";
import "./resumeAnalyatics.css";

const AnalyticsSection = () => {
  return (
    <section className="analytics-section">
      <h2>Resume Analytics</h2>
      <div className="analytics-graphs">
        {/* Placeholder for graphs */}
        <div className="graph-box">Graph 1: Resume Count</div>
        <div className="graph-box">Graph 2: Resume Types</div>
        <div className="graph-box">Graph 3: Scores Overview</div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
