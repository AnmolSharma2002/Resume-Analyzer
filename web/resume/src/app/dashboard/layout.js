// app/dashboard/layout.js

"use client";
import React from "react";
import Sidebar from "@/components/sidebar/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <main style={{ flexGrow: 1, padding: "20px" }}>{children}</main>
    </div>
  );
}
