"use client";
import React, { useEffect } from "react";
import "./signout.css";

const SignOutSection = () => {
  useEffect(() => {
    // Placeholder logic for clearing session or redirecting
    console.log("Signing out...");

    // Example: Clear token and redirect to login
    // localStorage.removeItem("token");
    // window.location.href = "/login";
  }, []);

  return (
    <section className="signout-section">
      <h2>Signing Out...</h2>
      <p>You will be redirected shortly.</p>
    </section>
  );
};

export default SignOutSection;
