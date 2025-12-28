/**
 * ProjectDetails Page Component
 * Technical deep-dive into specific projects
 */

import { useParams, Link, Navigate } from "react-router-dom";
import projects from "../data/projects.json";

// Import all images from the images folder
const images = import.meta.glob("../images/*", { eager: true, as: "url" });

const ProjectDetails = () => {
  const { id } = useParams();

  // Find the project by ID
  const project = projects.find((p) => p.id === parseInt(id));

  // Redirect to home if project not found
  if (!project) {
    return <Navigate to="/" replace />;
  }

  // Dynamic image import helper
  const getImageUrl = (imageName) => {
    const imagePath = `../images/${imageName}`;
    return images[imagePath] || "";
  };

  return (
    <main className="py-20" style={{ backgroundColor: "var(--body-bg)" }}>
      <div className="container mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <nav aria-label="breadcrumb" className="mb-8">
          <ol className="flex space-x-2 text-sm">
            <li>
              <Link to="/" className="text-primary hover:underline">
                Home
              </Link>
            </li>
            <li>
              <span style={{ color: "var(--body-color)" }}>/</span>
            </li>
            <li>
              <Link to="/#projects" className="text-primary hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <span style={{ color: "var(--body-color)" }}>/</span>
            </li>
            <li className="text-muted" aria-current="page">
              {project.title}
            </li>
          </ol>
        </nav>

        {/* Project Header */}
        <div className="mb-8">
          <h1
            className="text-5xl font-bold mb-4"
            style={{ color: "var(--heading-color)" }}
          >
            {project.title}
          </h1>
          <p className="text-xl text-muted">{project.description}</p>
        </div>

        {/* Technologies Used */}
        <div className="mb-8">
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: "var(--heading-color)" }}
          >
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-block bg-primary text-white font-semibold px-4 py-2 rounded text-base"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Overview */}
        <div className="mb-8">
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: "var(--heading-color)" }}
          >
            Technical Overview
          </h3>
          <p className="text-lg" style={{ color: "var(--body-color)" }}>
            {project.detailedDescription}
          </p>
        </div>

        {/* Impact Metrics */}
        {project.impact && project.impact.length > 0 && (
          <div className="mb-8">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--heading-color)" }}
            >
              Impact & Results
            </h3>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <ul className="mb-0 list-disc list-inside space-y-2">
                {project.impact.map((item, index) => (
                  <li key={index} className="text-green-800">
                    <strong>{item}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Key Features */}
        <div className="mb-8">
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: "var(--heading-color)" }}
          >
            Key Features
          </h3>
          <div>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="card p-4 flex items-start">
                  <i className="bi bi-check-circle-fill text-success text-xl mr-3 mt-0.5"></i>
                  <span style={{ color: "var(--body-color)" }}>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technical Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="mb-8">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--heading-color)" }}
            >
              Technical Challenges Solved
            </h3>
            <div
              className="card"
              style={{ backgroundColor: "var(--bg-subtle)" }}
            >
              <div className="p-6">
                <ul className="mb-0 list-disc list-inside space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} style={{ color: "var(--body-color)" }}>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Security Considerations */}
        {project.security && project.security.length > 0 && (
          <div className="mb-8">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--heading-color)" }}
            >
              <i className="bi bi-shield-lock-fill text-danger mr-2"></i>
              Security Considerations
            </h3>
            <div className="card border-2 border-red-500">
              <div className="p-6">
                <ul className="mb-0 list-disc list-inside space-y-2">
                  {project.security.map((sec, index) => (
                    <li key={index} style={{ color: "var(--body-color)" }}>
                      {sec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mb-8">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--heading-color)" }}
            >
              Screenshots
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img
                    src={getImageUrl(screenshot)}
                    alt={`${project.title} - Screenshot ${index + 1}`}
                    className="w-full h-auto object-cover"
                    style={{
                      border: "2px solid var(--border-color)",
                      borderRadius: "0.5rem",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* External Links */}
        <div className="mb-8">
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: "var(--heading-color)" }}
          >
            Links
          </h3>
          <div className="flex flex-wrap gap-4">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-800 text-white font-medium py-3 px-6 rounded hover:bg-gray-700 transition-colors"
              >
                <i className="bi bi-github"></i> View on GitHub
              </a>
            ) : (
              <button
                className="inline-flex items-center gap-2 bg-gray-400 text-white font-medium py-3 px-6 rounded cursor-not-allowed"
                disabled
              >
                <i className="bi bi-github"></i> Private Repository
              </button>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white font-medium py-3 px-6 rounded hover:bg-blue-700 transition-colors"
              >
                <i className="bi bi-box-arrow-up-right"></i> Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 border-2 border-gray-400 text-lg font-medium py-3 px-6 rounded hover:bg-gray-100 transition-colors"
            style={{
              color: "var(--body-color)",
              borderColor: "var(--border-color)",
            }}
          >
            <i className="bi bi-arrow-left"></i> Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
