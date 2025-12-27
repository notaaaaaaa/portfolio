/**
 * Home Page Component
 * Portfolio for Aravind Srinivasan - Software Engineer
 * Sections: About, Projects, Experience, Achievements, Certifications, Contact
 */

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects.json";
import experience from "../data/experience.json";
import certificates from "../data/certificates.json";

const Home = () => {
  const timelineRefs = useRef([]);

  useEffect(() => {
    const items = timelineRefs.current.filter(Boolean);
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Full-Screen Hero Section */}
      <section id="hero" className="hero-fullscreen">
        <div className="hero-content">
          <div className="hero-head">
            <h1 className="hero-name">Aravind Srinivasan</h1>
            <p className="hero-subtitle">
              Software Engineer & Full Stack Developer
            </p>
          </div>
          <p className="hero-intro">
            Computer Science undergraduate specializing in Cyber Security at
            Shiv Nadar University. My jam? Full-stack development,
            cybersecurity, and building software that's both powerful and
            secure. Always hunting for real-world problems ripe for smart
            solutions. SOC operations and EDR tools are my playground – security
            operations where I learn, experiment, and unleash my inner geek.
            Creative, driven, and maybe a little obsessed with making the
            digital world a more secure place through code? That's me. Let's
            connect!
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="hero-btn hero-btn-light">
              <i className="bi bi-envelope"></i> Contact Me
            </a>
            <a
              href="https://github.com/notaaaaaaa"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn-dark"
            >
              <i className="bi bi-github"></i> GitHub
            </a>
            <a
              href="https://linkedin.com/in/aravind-srinivasan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn-dark"
            >
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-hero">
        <div className="container-xxl px-4">
          <div className="about-hero-shell">
            <div className="about-hero-grid" aria-hidden="true" />
            <div className="row g-5 align-items-center position-relative">
              <div className="col-lg-6">
                <div className="about-hero-left">
                  <h2 className="about-hero-title">About</h2>
                  <p className="about-hero-subtitle">
                    A quick snapshot of what I build and how I work.
                  </p>

                  <div className="about-hero-copy">
                    <p className="mb-3">
                      I’m a Computer Science undergraduate specializing in Cyber
                      Security with hands-on experience building
                      production-ready web applications and security engineering
                      workflows.
                    </p>
                    <p className="mb-3">
                      I’ve worked on SOC operations, SIEM-driven threat
                      detection, and EDR tooling, and I enjoy translating
                      security requirements into practical engineering
                      decisions.
                    </p>
                    <p className="mb-0">
                      On the software side, I build full-stack solutions with
                      clean APIs, reliable data layers, and performance-aware
                      implementations — always with a security mindset.
                    </p>
                  </div>

                  <div className="about-timeline" aria-label="About highlights">
                    <div className="about-timeline-item">
                      <div className="about-timeline-kicker">Strengths</div>
                      <div className="about-timeline-text">
                        Building scalable features, writing maintainable code,
                        and solving problems under constraints.
                      </div>
                    </div>
                    <div className="about-timeline-item">
                      <div className="about-timeline-kicker">Focus</div>
                      <div className="about-timeline-text">
                        Clean architecture, measurable impact, and secure-by-
                        default patterns.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="about-hero-right">
                  <div className="about-panels" aria-label="Skills">
                    <div className="about-panel about-panel-core">
                      <div className="about-panel-head">
                        <div className="about-panel-step">
                          <span className="about-panel-label">Core</span>
                          <span className="about-panel-icon" aria-hidden="true">
                            <i className="bi bi-braces"></i>
                          </span>
                        </div>
                        <div className="about-panel-title">Languages</div>
                      </div>
                      <div className="about-chip-wrap">
                        {[
                          "Python",
                          "Java",
                          "C",
                          "JavaScript",
                          "SQL",
                          "Solidity",
                        ].map((skill) => (
                          <span key={skill} className="about-chip">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="about-panel about-panel-build">
                      <div className="about-panel-head">
                        <div className="about-panel-step">
                          <span className="about-panel-label">Build</span>
                          <span className="about-panel-icon" aria-hidden="true">
                            <i className="bi bi-box"></i>
                          </span>
                        </div>
                        <div className="about-panel-title">Technologies</div>
                      </div>
                      <div className="about-chip-wrap">
                        {[
                          "React.js",
                          "Node.js",
                          "Express",
                          "PostgreSQL",
                          "Firebase",
                          "Docker",
                        ].map((skill) => (
                          <span key={skill} className="about-chip">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="about-panel about-panel-defend">
                      <div className="about-panel-head">
                        <div className="about-panel-step">
                          <span className="about-panel-label">Defend</span>
                          <span className="about-panel-icon" aria-hidden="true">
                            <i className="bi bi-shield-check"></i>
                          </span>
                        </div>
                        <div className="about-panel-title">Security</div>
                      </div>
                      <div className="about-chip-wrap">
                        {["EDR", "SIEM", "Firewalls", "SOC", "Zero Trust"].map(
                          (skill) => (
                            <span key={skill} className="about-chip">
                              {skill}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">Projects</h2>
          <div className="row g-4">
            {projects.map((project) => (
              <div key={project.id} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text text-muted">
                      {project.description}
                    </p>
                    <div className="mb-3">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="badge bg-secondary me-1 mb-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.impact && project.impact.length > 0 && (
                      <div className="mb-3">
                        <small className="text-success fw-bold">
                          <i className="bi bi-graph-up"></i> Impact:
                        </small>
                        <ul className="small mb-0 mt-1">
                          {project.impact.slice(0, 2).map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <Link
                      to={`/projects/${project.id}`}
                      className="btn btn-primary mt-auto"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-timeline-section">
        <div className="container-xxl px-4">
          <div className="experience-head">
            <h2 className="experience-title">Experience</h2>
          </div>

          <div className="timeline" aria-label="Work experience timeline">
            {experience.map((exp, index) => {
              const sideClass =
                index % 2 === 0
                  ? "timeline-item--left"
                  : "timeline-item--right";

              return (
                <div
                  key={exp.id}
                  ref={(el) => (timelineRefs.current[index] = el)}
                  className={`timeline-item ${sideClass}`}
                >
                  <div className="timeline-node" aria-hidden="true" />

                  <div className="card timeline-card shadow-sm">
                    <div className="card-body">
                      <div className="timeline-card-head">
                        <div>
                          <h5 className="timeline-role mb-1">{exp.position}</h5>
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="timeline-company"
                            >
                              {exp.company}
                            </a>
                          ) : (
                            <div className="timeline-company">
                              {exp.company}
                            </div>
                          )}
                        </div>
                        <span className="timeline-date">{exp.duration}</span>
                      </div>

                      <p className="timeline-desc mt-3 mb-0">
                        {exp.description}
                      </p>

                      <div className="mt-3">
                        <strong className="d-block mb-2">
                          Key Responsibilities:
                        </strong>
                        <div className="d-flex flex-wrap gap-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <span key={idx} className="badge timeline-chip">
                              {resp}
                            </span>
                          ))}
                        </div>
                      </div>

                      {exp.technicalDetails && (
                        <div className="mt-3">
                          <strong className="d-block mb-2">
                            Technical Details:
                          </strong>
                          <ul className="mb-0">
                            {exp.technicalDetails.map((detail, idx) => (
                              <li key={idx} className="small">
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements & Certifications Section */}
      <section id="achievements" className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">Achievements & Certifications</h2>

          {/* LeetCode Achievements */}
          <div className="mb-5">
            <h4 className="mb-3">
              <i className="bi bi-trophy-fill text-warning"></i> Competitive
              Programming
            </h4>
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="row text-center">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="p-3">
                      <h2 className="text-primary fw-bold mb-0">1658</h2>
                      <p className="text-muted mb-0">Peak Rating</p>
                      <small className="text-success">Top 16% Globally</small>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0 border-start border-end">
                    <div className="p-3">
                      <h2 className="text-primary fw-bold mb-0">650+</h2>
                      <p className="text-muted mb-0">Problems Solved</p>
                      <small>Arrays, DP, Graphs, Data Structures</small>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3">
                      <h2 className="text-primary fw-bold mb-0">LeetCode</h2>
                      <p className="text-muted mb-0">Platform</p>
                      <small>Contest Participant</small>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="mb-0 fst-italic">
                    Demonstrated strong analytical and problem-solving skills by
                    applying efficient algorithms under time constraints
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="mb-3">
              <i className="bi bi-patch-check-fill text-success"></i>{" "}
              Certifications
            </h4>
            <div className="row g-3">
              {/* Group certifications by category */}
              {["professional", "technical", "simulation"].map((category) => {
                const categoryCerts = certificates.filter(
                  (cert) => cert.category === category
                );
                if (categoryCerts.length === 0) return null;

                return (
                  <div key={category} className="col-12">
                    <h6 className="text-uppercase text-muted mb-2">
                      {category === "professional"
                        ? "Professional Certifications"
                        : category === "technical"
                        ? "Technical Certifications"
                        : "Industry Simulations"}
                    </h6>
                    <div className="row g-3">
                      {categoryCerts.map((cert) => (
                        <div key={cert.id} className="col-md-6">
                          <div className="card h-100">
                            <div className="card-body">
                              <h6 className="card-title">{cert.name}</h6>
                              <p className="card-text text-muted mb-2">
                                {cert.issuer}
                              </p>
                              {cert.credentialUrl && (
                                <a
                                  href={cert.credentialUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn-sm btn-outline-primary"
                                >
                                  View Credential
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">Contact</h2>
          <p className="lead mb-4">
            Open to opportunities in software engineering and cybersecurity
            roles.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="d-flex flex-column gap-3">
                <div>
                  <i className="bi bi-envelope-fill fs-4 text-primary"></i>
                  <p className="mb-0 mt-2">
                    <a
                      href="mailto:aravindx04@gmail.com"
                      className="text-decoration-none"
                    >
                      aravindx04@gmail.com
                    </a>
                  </p>
                </div>
                <div>
                  <i className="bi bi-telephone-fill fs-4 text-primary"></i>
                  <p className="mb-0 mt-2">+91-86086 79096</p>
                </div>
                <div className="mt-3">
                  <a
                    href="https://github.com/notaaaaaaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark btn-lg me-3"
                  >
                    <i className="bi bi-github"></i> GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/aravind-srinivasan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg"
                  >
                    <i className="bi bi-linkedin"></i> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
