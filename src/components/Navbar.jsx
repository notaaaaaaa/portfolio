import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

/**
 * Navbar Component
 * Navigation bar for Aravind Srinivasan's Portfolio
 * Features: sticky positioning, section links, external profile links, theme toggle
 */
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top shadow-sm ${
        theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/">
          Aravind Srinivasan
        </Link>

        {/* Hamburger Toggle for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#achievements">
                Achievements
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>

            {/* Theme Toggle Button */}
            <li className="nav-item ms-2">
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
