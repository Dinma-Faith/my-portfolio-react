import React from "react";
import styles from "../styles/projects.module.css";
import projects from "../data/project-data"; // adjust path if needed

export default function Projects() {
  return (
    <section className={styles.projects}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            {/* Project Image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />
            )}

            {/* Title & description */}
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>

            {/* Tech Stack */}
            <div className={styles.tech}>{project.tech}</div>

            {/* Links */}
            <div className={styles.links}>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  Demo
                </a>
              )}
              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  Source Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
