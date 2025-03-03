import ProjectsList from "../../components/projectsList/ProjectsList";
import styles from "./projects.module.css";

const Projects = () => {
  return (
    <div className={styles.projects_container}>
      <div className={styles.h1_container}>
        <h1>
          Sobre <span>mi</span>
        </h1>
      </div>
      <div className={styles.list_container}>
        <ProjectsList></ProjectsList>
      </div>
    </div>
  );
};

export default Projects;
