import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

/**
 * Navbar Component
 * Navigation bar for Aravind Srinivasan's Portfolio
 * Features: sticky positioning, section links, external profile links, theme toggle
 */
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`sticky top-0 z-50 shadow-sm transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link
            to="/"
            className={`text-xl font-bold transition-colors ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Aravind Srinivasan
          </Link>

          {/* Hamburger Toggle for Mobile */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset ${
              theme === "dark"
                ? "text-white hover:bg-gray-700 focus:ring-white"
                : "text-black hover:bg-gray-100 focus:ring-gray-500"
            }`}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navbar Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            <a
              href="#about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                theme === "dark"
                  ? "text-white hover:bg-gray-700"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              About
            </a>
            <a
              href="#projects"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                theme === "dark"
                  ? "text-white hover:bg-gray-700"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              Projects
            </a>
            <a
              href="#experience"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                theme === "dark"
                  ? "text-white hover:bg-gray-700"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              Experience
            </a>
            <a
              href="#achievements"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                theme === "dark"
                  ? "text-white hover:bg-gray-700"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              Achievements
            </a>
            <a
              href="#contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                theme === "dark"
                  ? "text-white hover:bg-gray-700"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              Contact
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`ml-2 px-3 py-1.5 text-sm rounded-md border transition-colors ${
                theme === "dark"
                  ? "text-white border-gray-600 hover:bg-gray-700"
                  : "text-black border-gray-300 hover:bg-gray-100"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>

        {/* Mobile Navbar Links */}
        <div
          className={`lg:hidden ${isOpen ? "block" : "hidden"}`}
          id="navbarNav"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                theme === "dark"
                  ? "text-white hover:bg-gray-700"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                theme === "dark"
                  ? "text-white hover:bg-gray-700"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                theme === "dark"
                  ? "text-white hover:bg-gray-700"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              Experience
            </a>
            <a
              href="#achievements"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                theme === "dark"
                  ? "text-white hover:bg-gray-700"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              Achievements
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                theme === "dark"
                  ? "text-white hover:bg-gray-700"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              Contact
            </a>

            {/* Theme Toggle Button - Mobile */}
            <button
              onClick={toggleTheme}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium border transition-colors ${
                theme === "dark"
                  ? "text-white border-gray-600 hover:bg-gray-700"
                  : "text-black border-gray-300 hover:bg-gray-100"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
