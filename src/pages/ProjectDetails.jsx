/**
 * ProjectDetails Page Component
 * Technical deep-dive into specific projects
 */

import { useParams, Link, Navigate } from "react-router-dom";
import projects from "../data/projects.json";

const ProjectDetails = () => {
  const { id } = useParams();

  // Find the project by ID
  const project = projects.find((p) => p.id === parseInt(id));

  // Redirect to home if project not found
  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="py-5">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/#projects">Projects</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {project.title}
            </li>
          </ol>
        </nav>

        {/* Project Header */}
        <div className="mb-4">
          <h1 className="display-5 fw-bold">{project.title}</h1>
          <p className="lead text-muted">{project.description}</p>
        </div>

        {/* Technologies Used */}
        <div className="mb-4">
          <h3>Tech Stack</h3>
          <div>
            {project.technologies.map((tech, index) => (
              <span key={index} className="badge bg-primary me-2 mb-2 fs-6">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Overview */}
        <div className="mb-4">
          <h3>Technical Overview</h3>
          <p className="fs-5">{project.detailedDescription}</p>
        </div>

        {/* Impact Metrics */}
        {project.impact && project.impact.length > 0 && (
          <div className="mb-4">
            <h3>Impact & Results</h3>
            <div className="alert alert-success">
              <ul className="mb-0">
                {project.impact.map((item, index) => (
                  <li key={index} className="mb-2">
                    <strong>{item}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Key Features */}
        <div className="mb-4">
          <h3>Key Features</h3>
          <div className="row">
            <div className="col-12">
              <ul className="list-group">
                {project.features.map((feature, index) => (
                  <li key={index} className="list-group-item">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="mb-4">
            <h3>Technical Challenges Solved</h3>
            <div className="card bg-light">
              <div className="card-body">
                <ul className="mb-0">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="mb-2">
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
          <div className="mb-4">
            <h3>
              <i className="bi bi-shield-lock-fill text-danger me-2"></i>
              Security Considerations
            </h3>
            <div className="card border-danger">
              <div className="card-body">
                <ul className="mb-0">
                  {project.security.map((sec, index) => (
                    <li key={index} className="mb-2">
                      {sec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Screenshots Placeholder */}
        <div className="mb-4">
          <h3>Screenshots</h3>
          <div className="row g-3">
            {[1, 2, 3].map((num) => (
              <div key={num} className="col-md-4">
                <div
                  className="bg-light border rounded d-flex align-items-center justify-content-center"
                  style={{ height: "200px" }}
                >
                  <span className="text-muted">Screenshot {num}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* External Links */}
        <div className="mb-4">
          <h3>Links</h3>
          <div className="d-flex gap-2">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                <i className="bi bi-github"></i> View on GitHub
              </a>
            ) : (
              <button className="btn btn-secondary" disabled>
                <i className="bi bi-github"></i> Private Repository
              </button>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="bi bi-box-arrow-up-right"></i> Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-5">
          <Link to="/#projects" className="btn btn-outline-secondary btn-lg">
            <i className="bi bi-arrow-left"></i> Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
