import "../../styles/login.css";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="login-hero-container">
      <div className="login-content-box">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">
          Log in to continue improving your resume
        </p>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="forgot-password">
            <Link href="/forgot-password">Forgot password?</Link>
          </div>

          <button type="submit" className="login-button">
            Log In
          </button>
        </form>

        <div className="signup-link">
          Don't have an account? <Link href="/signup">Sign up</Link>
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
