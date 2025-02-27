import ProjectCard from "../../components/projectCard/ProjectCard";
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
        <ProjectCard name="DreamAir"></ProjectCard>
        <ProjectCard name="DreamAirAPI"></ProjectCard>
        <ProjectCard name="Truco.Py"></ProjectCard>
      </div>
    </div>
  );
};

export default Projects;
