import styles from "../styles/projects.module.css";
import projects from "../data/project-data";

const Project = () => {
  return (
    <section className={styles.portfolio}>
      <h2>My Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div className={styles.card} key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <span className={styles.tech}>{project.tech}</span>
            <a href={project.link} target="_blank" rel="noreferrer" className={styles.link}>
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
