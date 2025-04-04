"use client";
import { useState, useEffect } from "react";
import styles from "./authForm.module.css";

export default function AuthForm({ onSubmit, isLogin }) {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimateIn(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!isLogin) {
        await onSubmit({ username, email, password });
      } else {
        await onSubmit({ email, password });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authBackground}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>
      <div
        className={`${styles.authCard} ${animateIn ? styles.animateIn : ""}`}
      >
        <div className={styles.authHeader}>
          <h1>{isLogin ? "Welcome Back" : "Create Account"}</h1>
          <p>
            {isLogin
              ? "Sign in to continue your journey"
              : "Join our amazing community"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.authForm}>
          {!isLogin && (
            <div className={styles.formGroup}>
              <label htmlFor="username">Username</label>
              <div className={styles.inputContainer}>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <span className={styles.inputBorder}></span>
              </div>
            </div>
          )}

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <div className={styles.inputContainer}>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span className={styles.inputBorder}></span>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <div className={styles.inputContainer}>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className={styles.inputBorder}></span>
            </div>
          </div>

          <button
            type="submit"
            className={`${styles.submitButton} ${
              isLoading ? styles.loading : ""
            }`}
            disabled={isLoading}
          >
            <span className={styles.buttonText}>
              {isLoading
                ? "Processing..."
                : isLogin
                ? "Sign In"
                : "Create Account"}
            </span>
            <span className={styles.buttonLoader}></span>
          </button>
        </form>

        <div className={styles.authFooter}>
          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <a href={`${process.env.NEXT_PUBLIC_WEB_URL}/signup`}>Sign-up</a>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <a href={`${process.env.NEXT_PUBLIC_WEB_URL}/login`}>Sign-in</a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
