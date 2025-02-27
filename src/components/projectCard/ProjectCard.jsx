import styles from "./ProjectCard.module.css";

const ProjectCard = ({ name, imgUrl }) => {
  return (
    <div className={styles.project_card}>
      <div className={styles.box}></div>
      <img src={imgUrl} className={styles.image}></img>
      <h1 className={styles.project_title}>{name} </h1>
    </div>
  );
};

export default ProjectCard;
