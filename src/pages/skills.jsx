import styles from "../styles/skills.module.css";
import skillsData from "../data/skill-data";

const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2>My Skills</h2>
      <div className={styles.grid}>
        {skillsData.map((skill, index) => (
          <div key={index} className={styles.skillBox}>
            <img src={skill.logo} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
