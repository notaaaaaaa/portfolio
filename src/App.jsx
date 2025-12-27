/**
 * Main App Component
 * Sets up routing and theme provider
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import "./styles/custom.css";

// Import Bootstrap JS for interactive components (navbar toggle, etc.)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          {/* Sticky Navbar */}
          <Navbar />

          {/* Route Configuration */}
          <Routes>
            {/* Home page with all sections */}
            <Route path="/" element={<Home />} />

            {/* Individual project details page */}
            <Route path="/projects/:id" element={<ProjectDetails />} />

            {/* 404 catch-all - redirects to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
