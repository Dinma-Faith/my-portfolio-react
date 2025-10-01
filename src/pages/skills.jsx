import styles from "../styles/skills.module.css";
import { skillsData } from "../data/skill-data";
import PageWrapper from "../components/page-wrapper";

const Skills = () => {
  return (
    <PageWrapper>
      <section className={styles.skills}>
        <h2 className={`heading ${styles.heading}`}>My Skills</h2>
        <div className={styles.grid}>
          {skillsData.map((skill, index) => (
            <div key={index} className={styles.skillBox}>
              <img src={skill.logo} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Skills;
