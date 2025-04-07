// components/Sidebar/Sidebar.js

"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import "./sidebar.css";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: "Resume Analytics", path: "/dashboard" },
    { name: "Upload Resume", path: "/dashboard/upload" },
    { name: "Previous Resumes", path: "/dashboard/resumes" },
    { name: "Sign Out", path: "/dashboard/signout" },
  ];

  return (
    <aside className="sidebar">
      <h2 className="logo">Resume Portal</h2>
      <nav className="nav-links">
        {navItems.map((item) => (
          <button
            key={item.path}
            className={pathname === item.path ? "active" : ""}
            onClick={() => router.push(item.path)}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
