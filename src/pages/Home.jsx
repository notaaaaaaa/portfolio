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
            Computer Science undergraduate specializing in Cyber Security at
            Shiv Nadar University. My daily bread is full-stack development,
            cybersecurity, and building software that’s powerful and secure. I
            focus on real-world problems that demand practical, well-reasoned
            solutions. Blockchain systems and decentralized architectures deeply
            interest me—especially how trust, security, and scalability work
            without central control. Driven by logic and systems thinking, I
            build secure software, if that’s what you’re looking for, let’s
            connect.
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
              href="https://www.linkedin.com/in/aravind-srinivasan-87200225a/"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="about-hero-shell" style={{ transform: "scale(0.9)" }}>
            <div className="about-hero-grid" aria-hidden="true" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Text Content */}
              <div>
                <h2
                  className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-2"
                  style={{ color: "var(--heading-color)" }}
                >
                  About
                </h2>
                <p
                  className="text-lg font-medium mt-2 mb-7 opacity-70"
                  style={{ color: "var(--body-color)" }}
                >
                  A quick snapshot of what I build and how I work.
                </p>

                <div
                  className="max-w-2xl space-y-3 text-lg leading-relaxed opacity-80"
                  style={{
                    color: "var(--body-color)",
                    fontSize: "1.04rem",
                    lineHeight: "1.85",
                  }}
                >
                  <p>
                    I’m a Computer Science undergraduate specializing in Cyber
                    Security with hands-on experience building production-ready
                    web applications and security engineering workflows.
                  </p>
                  <p>
                    I’ve worked on SOC operations, SIEM-driven threat detection,
                    and EDR tooling, and I enjoy translating security
                    requirements into practical engineering decisions.
                  </p>
                  <p>
                    On the software side, I build full-stack solutions with
                    clean APIs, reliable data layers, and performance-aware
                    implementations—always with a security mindset. I’m also
                    deeply interested in blockchain and decentralized systems,
                    particularly how cryptography, trust, and security are
                    engineered without centralized control.
                  </p>
                </div>

                {/* Strengths & Focus Timeline */}
                <div className="about-timeline" aria-label="About highlights">
                  <div className="about-timeline-item">
                    <div className="about-timeline-kicker">Strengths</div>
                    <div className="about-timeline-text">
                      Building scalable features, writing maintainable code, and
                      solving problems under constraints.
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

              {/* Right Column - Skills Panels */}
              <div className="flex flex-col gap-8" style={{ marginTop: "10%" }}>
                {/* Core / Languages Panel */}
                <div className="about-panel about-panel-core">
                  <div className="about-panel-head">
                    <div className="about-panel-step">
                      <span className="about-panel-label">CORE</span>
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

                {/* Build / Technologies Panel */}
                <div className="about-panel about-panel-build">
                  <div className="about-panel-head">
                    <div className="about-panel-step">
                      <span className="about-panel-label">BUILD</span>
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

                {/* Defend / Security Panel */}
                <div className="about-panel about-panel-defend">
                  <div className="about-panel-head">
                    <div className="about-panel-step">
                      <span className="about-panel-label">DEFEND</span>
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
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20"
        style={{ backgroundColor: "var(--bg-subtle)" }}
      >
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: "var(--heading-color)" }}
          >
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="flex flex-col">
                <div className="card h-full flex flex-col">
                  <div className="card-body flex flex-col flex-grow">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="text-muted mb-4">{project.description}</p>
                    <div className="mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-500 text-white text-xs font-semibold px-2.5 py-1 rounded mr-1 mb-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.impact && project.impact.length > 0 && (
                      <div className="mb-4">
                        <small className="text-success font-bold">
                          <i className="bi bi-graph-up"></i> Impact:
                        </small>
                        <ul className="text-sm mb-0 mt-1 list-disc list-inside">
                          {project.impact.slice(0, 2).map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <Link
                      to={`/projects/${project.id}`}
                      className="mt-auto inline-block text-center bg-primary text-white font-medium py-2 px-4 rounded hover:bg-blue-700 transition-colors"
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
                    <div className="p-6">
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
                        <strong className="block mb-2">
                          Key Responsibilities:
                        </strong>
                        <div className="flex flex-wrap gap-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <span key={idx} className="timeline-chip">
                              {resp}
                            </span>
                          ))}
                        </div>
                      </div>

                      {exp.technicalDetails && (
                        <div className="mt-3">
                          <strong className="block mb-2">
                            Technical Details:
                          </strong>
                          <ul className="mb-0">
                            {exp.technicalDetails.map((detail, idx) => (
                              <li key={idx} className="text-sm">
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
      <section
        id="achievements"
        className="py-20"
        style={{ backgroundColor: "var(--bg-subtle)" }}
      >
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: "var(--heading-color)" }}
          >
            Achievements & Certifications
          </h2>

          {/* LeetCode Achievements */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold mb-6">
              <i className="bi bi-trophy-fill text-warning"></i> Competitive
              Programming
            </h4>
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-3 text-center">
                  <div className="mb-6 md:mb-0">
                    <div className="p-3">
                      <h2 className="text-primary text-4xl font-bold mb-0">
                        1658
                      </h2>
                      <p className="text-muted mb-0">Peak Rating</p>
                      <small className="text-success">Top 16% Globally</small>
                    </div>
                  </div>
                  <div
                    className="mb-6 md:mb-0 md:border-l md:border-r"
                    style={{ borderColor: "var(--border-color)" }}
                  >
                    <div className="p-3">
                      <h2 className="text-primary text-4xl font-bold mb-0">
                        650+
                      </h2>
                      <p className="text-muted mb-0">Problems Solved</p>
                      <small>Arrays, DP, Graphs, Data Structures</small>
                    </div>
                  </div>
                  <div>
                    <div className="p-3">
                      <h2 className="text-primary text-4xl font-bold mb-0">
                        LeetCode
                      </h2>
                      <p className="text-muted mb-0">Platform</p>
                      <small>Contest Participant</small>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="mb-0 italic">
                    Demonstrated strong analytical and problem-solving skills by
                    applying efficient algorithms under time constraints
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-xl font-semibold mb-6">
              <i className="bi bi-patch-check-fill text-success"></i>{" "}
              Certifications
            </h4>
            <div className="space-y-4" style={{ transform: "scale(0.95)" }}>
              {/* Group certifications by category */}
              {["professional", "technical", "simulation"].map((category) => {
                const categoryCerts = certificates.filter(
                  (cert) => cert.category === category
                );
                if (categoryCerts.length === 0) return null;

                return (
                  <div key={category}>
                    <h6 className="text-sm uppercase text-muted mb-4 font-semibold">
                      {category === "professional"
                        ? "Professional Certifications"
                        : category === "technical"
                        ? "Technical Certifications"
                        : "Industry Simulations"}
                    </h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {categoryCerts.map((cert) => (
                        <div key={cert.id}>
                          <div className="card h-full">
                            <div className="card-body">
                              <h6 className="card-title text-base">
                                {cert.name}
                              </h6>
                              <p className="text-muted mb-4">{cert.issuer}</p>
                              {cert.credentialUrl && (
                                <a
                                  href={cert.credentialUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-block border border-primary text-primary px-3 py-1.5 text-sm rounded hover:bg-primary hover:text-white transition-colors"
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
      <section
        id="contact"
        className="py-20"
        style={{ backgroundColor: "var(--body-bg)" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: "var(--heading-color)" }}
          >
            Contact
          </h2>
          <p className="text-xl mb-8" style={{ color: "var(--body-color)" }}>
            Open to opportunities in software engineering and cybersecurity
            roles.
          </p>
          <div className="flex justify-center">
            <div className="w-full md:w-2/3">
              <div className="flex flex-col gap-6">
                <div>
                  <i className="bi bi-envelope-fill text-4xl text-primary"></i>
                  <p className="mb-0 mt-2">
                    <a
                      href="mailto:aravindx04@gmail.com"
                      className="no-underline hover:underline"
                      style={{ color: "var(--body-color)" }}
                    >
                      aravindx04@gmail.com
                    </a>
                  </p>
                </div>
                <div>
                  <i className="bi bi-telephone-fill text-4xl text-primary"></i>
                  <p
                    className="mb-0 mt-2"
                    style={{ color: "var(--body-color)" }}
                  >
                    +91-86086 79096
                  </p>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://github.com/notaaaaaaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 font-semibold py-3 px-8 text-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: "var(--heading-color)",
                      color: "var(--body-bg)",
                      border: "2px solid var(--heading-color)",
                    }}
                  >
                    <i className="bi bi-github text-xl"></i> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aravind-srinivasan-87200225a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 font-semibold py-3 px-8 text-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: "#0077b5",
                      color: "var(--body-bg)",
                      border: "2px solid #0077b5",
                    }}
                  >
                    <i className="bi bi-linkedin text-xl"></i> LinkedIn
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
