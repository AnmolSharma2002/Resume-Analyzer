// AnalyticsSection.jsx
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

  // Professional color palette
  const colors = {
    primary: "#2c3e50",
    secondary: "#34495e",
    accent: "#3498db",
    text: "#2c3e50",
    lightText: "#7f8c8d",
    background: "#f5f5f5",
    chartColors: ["#3498db", "#2c3e50", "#7f8c8d"],
  };

  // Bar Chart Data (Resume Count)
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Resumes Uploaded",
        data: [12, 19, 3, 5, 2, 15],
        backgroundColor: colors.accent,
        borderColor: colors.accent,
        borderWidth: 1,
      },
    ],
  };

  // Doughnut Chart Data (Resume Types)
  const doughnutData = {
    labels: ["PDF", "Word", "Other"],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: colors.chartColors,
        borderWidth: 1,
        borderColor: colors.background,
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
        fill: false,
        backgroundColor: colors.accent,
        borderColor: colors.accent,
        tension: 0.1,
        pointBackgroundColor: colors.accent,
        pointBorderColor: colors.background,
      },
    ],
  };

  // Professional Chart Options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: colors.text,
          font: {
            size: 12,
            family: "'Inter', 'Helvetica', sans-serif",
          },
        },
        position: "top",
      },
      tooltip: {
        backgroundColor: colors.secondary,
        titleColor: "#fff",
        bodyColor: "#fff",
        bodyFont: {
          family: "'Inter', 'Helvetica', sans-serif",
        },
        padding: 10,
        cornerRadius: 4,
        displayColors: true,
      },
    },
    scales: {
      x: {
        ticks: {
          color: colors.text,
          font: { size: 12, family: "'Inter', 'Helvetica', sans-serif" },
        },
        grid: { color: "rgba(0, 0, 0, 0.05)" },
      },
      y: {
        ticks: {
          color: colors.text,
          font: { size: 12, family: "'Inter', 'Helvetica', sans-serif" },
        },
        grid: { color: "rgba(0, 0, 0, 0.05)" },
      },
    },
  };

  return (
    <section className="analytics-section">
      <div className="analytics-container">
        <h2 className="analytics-title">Resume Performance Analysis</h2>

        {/* Stats Section */}
        <div className="analytics-stats">
          <div className="stat-box">
            <div className="stat-number">{stats.totalResumes}</div>
            <div className="stat-label">Total Resumes</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">{stats.avgScore}</div>
            <div className="stat-label">Average Score</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">{stats.uniqueTypes}</div>
            <div className="stat-label">Document Formats</div>
          </div>
        </div>

        {/* Graphs Section */}
        <div className="analytics-graphs">
          <div className="graph-box">
            <h3 className="graph-title">Monthly Resume Submissions</h3>
            <div className="chart-container">
              <Bar data={barData} options={chartOptions} />
            </div>
          </div>
          <div className="graph-box">
            <h3 className="graph-title">Document Format Distribution</h3>
            <div className="chart-container">
              <Doughnut data={doughnutData} options={chartOptions} />
            </div>
          </div>
          <div className="graph-box">
            <h3 className="graph-title">Performance Trend</h3>
            <div className="chart-container">
              <Line data={lineData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
