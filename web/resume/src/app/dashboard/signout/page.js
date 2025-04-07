// app/dashboard/signout/page.js

"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/sidebar/sidebar";

const SignOutPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Clear token/session here
    localStorage.removeItem("token");
    // Redirect to login page
    router.push("/login");
  }, [router]);

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <h2>Signing Out...</h2>
        <p>You are being redirected.</p>
      </main>
    </div>
  );
};

export default SignOutPage;
