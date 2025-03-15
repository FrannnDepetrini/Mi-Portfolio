import ProjectCard from "../projectCard/ProjectCard";
import styles from "./ProjectsList.module.css";

const ProjectsList = ({ cardData, theme }) => {
  const cardsMapped = () => {
    return cardData.map((pr) => (
      <ProjectCard theme={theme} key={pr.id} card={pr}></ProjectCard>
    ));
  };

  return (
    <div className={styles.container}>
      <div className={styles.card_container}>{cardsMapped()}</div>
    </div>
  );
};

export default ProjectsList;
