import styles from "../styles/projects.module.css";
import projects from "../data/project-data";

const Project = () => {
  return (
    <section className={styles.portfolio}>
      <h2>My Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div className={styles.card} key={index}>
            {/* Screenshot */}
            {project.image && (
              <img
                src={project.image}
                alt={`${project.name} screenshot`}
                className={styles.image}
              />
            )}

            {/* Name & description */}
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <span className={styles.tech}>{project.tech}</span>

            {/* Links */}
            <div className={styles.links}>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.button}
                >
                  Live Demo
                </a>
              )}
              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noreferrer"
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
};

export default Project;
