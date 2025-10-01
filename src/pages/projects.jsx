import React from "react";
import styles from "../styles/projects.module.css";
import { projects } from "../data/project-data";
import Button from "../components/button";
import PageWrapper from "../components/page-wrapper";

export default function Projects() {
  return (
    <PageWrapper>
      <section className={styles.projects}>
        <h2 className={`heading ${styles.heading}`}>Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={`${styles.card} ${styles.fadeIn}`}>
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
                {project.demo && <Button href={project.demo}>Demo</Button>}
                {project.source && (
                  <Button href={project.source}>Source Code</Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
