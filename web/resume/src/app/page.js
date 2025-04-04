"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isAnimated, setIsAnimated] = useState(false);

  // Add animation effect when component mounts
  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div className="hero-container">
      <div className={`content-box ${isAnimated ? "animateIn" : ""}`}>
        <h1 className="title">AI Resume Checker</h1>
        <p className="subtitle">
          Get instant professional feedback on your resume and stand out to
          recruiters
        </p>
        <div className="features">
          <div className="feature">
            <div className="feature-icon">✓</div>
            <span>AI-powered analysis</span>
          </div>
          <div className="feature">
            <div className="feature-icon">✓</div>
            <span>Industry-specific feedback</span>
          </div>
          <div className="feature">
            <div className="feature-icon">✓</div>
            <span>ATS compatibility check</span>
          </div>
        </div>
        <div className="cta-buttons">
          <Link href="/signup">
            <button className="primary-button">Get Started</button>
          </Link>
          <Link href="/login" className="login-link">
            <button className="secondary-button login-button">Log In</button>
          </Link>
        </div>
      </div>
      <div className="decoration-circles">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
    </div>
  );
}
