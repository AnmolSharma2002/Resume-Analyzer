import Link from "next/link";

export default function Home() {
  return (
    <div className="hero-container">
      <div className="content-box">
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
          <Link href="/login">
            <button className="secondary-button">Log In</button>
          </Link>
        </div>
      </div>
      <div className="decoration-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </div>
  );
}
