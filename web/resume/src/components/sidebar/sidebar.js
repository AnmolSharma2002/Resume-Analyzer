"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import "./sidebar.css";

// Define the icons directly to avoid dependencies
const IconChartBar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="9" y1="9" x2="9" y2="15" />
    <line x1="15" y1="6" x2="15" y2="15" />
  </svg>
);

const IconFileArrowUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M12 12v6" />
    <path d="m15 15-3-3-3 3" />
  </svg>
);

const IconFiles = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
    <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" />
    <path d="M15 2v5h5" />
  </svg>
);

const IconLogOut = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const IconMenu = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const IconX = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const navItems = [
    { name: "Resume Analytics", path: "/dashboard", icon: IconChartBar },
    { name: "Upload Resume", path: "/dashboard/upload", icon: IconFileArrowUp },
    { name: "Previous Resumes", path: "/dashboard/resumes", icon: IconFiles },
    { name: "Sign Out", path: "/login", icon: IconLogOut },
  ];

  const handleNavigation = (path) => {
    router.push(path);
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      {isMobile && (
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <IconX /> : <IconMenu />}
        </button>
      )}

      {/* Sidebar Overlay for Mobile */}
      {isMobile && isMobileMenuOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Sidebar */}
      {(!isMobile || (isMobile && isMobileMenuOpen)) && (
        <aside className={`sidebar ${isMobile ? "mobile" : ""}`}>
          <div className="logo-container">
            <div className="logo-background" />
            <h2 className="logo">
              <span className="logo-full">Resume Portal</span>
              <span className="logo-short">RP</span>
            </h2>
          </div>

          <nav className="nav-links">
            {navItems.map((item, index) => (
              <div
                key={item.path}
                className="nav-item-container"
                onMouseEnter={() => setHoveredItem(item.path)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <button
                  className={`nav-button ${
                    pathname === item.path ? "active" : ""
                  }`}
                  onClick={() => handleNavigation(item.path)}
                >
                  <div className="button-content">
                    <span className="nav-icon">{<item.icon />}</span>
                    <span className="nav-text">{item.name}</span>
                  </div>

                  {pathname === item.path && (
                    <div className="active-indicator" />
                  )}
                </button>

                {(hoveredItem === item.path || pathname === item.path) && (
                  <div className="glow-effect" />
                )}
              </div>
            ))}
          </nav>

          <div className="sidebar-footer">
            <div className="pulse-container">
              <div className="pulse-dot"></div>
              <div className="pulse-ring"></div>
            </div>
            <span className="status-text">Online</span>
          </div>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
