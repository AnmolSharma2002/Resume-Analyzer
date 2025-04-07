"use client";
import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
import "./resumeAnalyatics.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const AnalyticsSection = () => {
  // Sample stats data
  const stats = {
    totalResumes: 56,
    avgScore: 82.5,
    uniqueTypes: 3,
  };

  // Bar Chart Data (Resume Count)
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Resumes Uploaded",
        data: [12, 19, 3, 5, 2, 15],
        backgroundColor: "rgba(59, 130, 246, 0.8)",
        borderColor: "#60a5fa",
        borderWidth: 1,
        hoverBackgroundColor: "#3b82f6",
      },
    ],
  };

  // Doughnut Chart Data (Resume Types)
  const doughnutData = {
    labels: ["PDF", "Word", "Other"],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: ["#60a5fa", "#1e293b", "#94a3b8"],
        hoverBackgroundColor: ["#3b82f6", "#0f172a", "#64748b"],
        borderWidth: 2,
        borderColor: "#1e293b",
      },
    ],
  };

  // Line Chart Data (Scores Overview)
  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Average Score",
        data: [75, 82, 78, 90],
        fill: true,
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderColor: "#60a5fa",
        tension: 0.4,
        pointBackgroundColor: "#3b82f6",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#3b82f6",
      },
    ],
  };

  // Responsive Chart Options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#94a3b8",
          font: {
            size:
              window.innerWidth <= 480
                ? 10
                : window.innerWidth <= 768
                ? 12
                : 14,
          },
        },
        position: "top",
      },
      tooltip: {
        backgroundColor: "#1e293b",
        titleColor: "#fff",
        bodyColor: "#94a3b8",
        borderColor: "#60a5fa",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#94a3b8",
          font: { size: window.innerWidth <= 480 ? 10 : 12 },
        },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
      y: {
        ticks: {
          color: "#94a3b8",
          font: { size: window.innerWidth <= 480 ? 10 : 12 },
        },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
    },
  };

  return (
    <section className="analytics-section">
      <h2 className="analytics-title">Resume Analytics</h2>

      {/* Stats Section */}
      <div className="analytics-stats">
        <div className="stat-box">
          <div className="stat-number">{stats.totalResumes}</div>
          <div className="stat-label">Total Resumes</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">{stats.avgScore}</div>
          <div className="stat-label">Avg. Score</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">{stats.uniqueTypes}</div>
          <div className="stat-label">Unique Types</div>
        </div>
      </div>

      {/* Graphs Section */}
      <div className="analytics-graphs">
        <div className="graph-box">
          <h3 className="graph-title">Resume Count</h3>
          <div className="chart-container">
            <Bar data={barData} options={chartOptions} />
          </div>
        </div>
        <div className="graph-box">
          <h3 className="graph-title">Resume Types</h3>
          <div className="chart-container">
            <Doughnut data={doughnutData} options={chartOptions} />
          </div>
        </div>
        <div className="graph-box">
          <h3 className="graph-title">Scores Overview</h3>
          <div className="chart-container">
            <Line data={lineData} options={chartOptions} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
