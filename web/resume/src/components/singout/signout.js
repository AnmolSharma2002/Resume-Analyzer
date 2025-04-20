"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./signout.css";

const SignOutSection = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const router = useRouter();

  const handleSignOut = () => {
    // Clear session data (e.g., token)
    localStorage.removeItem("token"); // Uncomment and adjust based on your auth system
    console.log("Signing out...");
    setIsConfirmed(true);
    setTimeout(() => {
      router.push("/"); // Redirect to login page after a short delay
    }, 1000);
  };

  const handleCancel = () => {
    router.push("/dashboard"); // Redirect back to dashboard or wherever you prefer
  };

  return (
    <section className="signout-section">
      <h2 className="signout-title">
        {isConfirmed ? "Signing Out..." : "Confirm Sign Out"}
      </h2>
      <p className="signout-message">
        {isConfirmed
          ? "You will be redirected shortly."
          : "Do you really want to sign out?"}
      </p>
      {!isConfirmed && (
        <div className="signout-button-container">
          <button
            className="signout-button signout-confirm"
            onClick={handleSignOut}
          >
            Yes, Sign Out
          </button>
          <button
            className="signout-button signout-cancel"
            onClick={handleCancel}
          >
            No, Cancel
          </button>
        </div>
      )}
    </section>
  );
};

export default SignOutSection;
