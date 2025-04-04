// src/app/dashboard/page.js
"use client";

import React from "react";

const Dashboard = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Dashboard</h1>

      {/* Quick Stats */}
      <section style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
        <StatCard title="Resumes Analyzed" value="27" />
        <StatCard title="Job Categories" value="5" />
        <StatCard title="Best Score" value="92%" />
      </section>

      {/* Charts Placeholder */}
      <section style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem" }}>Resume Distribution</h2>
        <div style={{ height: "200px", background: "#eee", marginTop: "1rem" }}>
          {/* Placeholder for chart */}
          (Chart will go here)
        </div>
      </section>

      {/* Best Resume Highlight */}
      <section style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem" }}>Best Resume</h2>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            marginTop: "1rem",
          }}
        >
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Role:</strong> SDE
          </p>
          <p>
            <strong>Score:</strong> 92%
          </p>
          <button style={{ marginTop: "0.5rem" }}>View Resume</button>
        </div>
      </section>
    </div>
  );
};

const StatCard = ({ title, value }) => (
  <div
    style={{
      flex: 1,
      padding: "1rem",
      background: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 0 4px rgba(0,0,0,0.1)",
    }}
  >
    <h3 style={{ fontSize: "1.1rem", color: "#555" }}>{title}</h3>
    <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{value}</p>
  </div>
);

export default Dashboard;
