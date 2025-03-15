import ProjectsList from "../../components/projectsList/ProjectsList";
import styles from "./projects.module.css";
import { useEffect, useState } from "react";
import { projectData } from "./projectData";
import UseTranslation from "../../customHooks/useTranslation/useTranslation";
import classNames from "classnames";

const Projects = ({ onLoadImages, language, theme }) => {
  const [loadedImages, setLoadedImages] = useState(0);

  const amountImgs = projectData[language].length;
  const translate = UseTranslation();
  useEffect(() => {
    projectData[language].forEach((pr) => {
      const img = new Image();
      img.src = pr.image;
      img.onload = () => {
        setLoadedImages((prev) => prev + 1);
      };
    });
  }, []);

  useEffect(() => {
    if (amountImgs === loadedImages) {
      onLoadImages();
    }
  }, [loadedImages]);

  return (
    <div className={styles.projects_container}>
      <div
        className={classNames(styles.h1_container, {
          [styles.h1C_dark]: theme === "dark",
        })}
      >
        <h1>
          {translate("myPlural")}{" "}
          <span
            className={classNames(styles.spanGeneric, {
              [styles.spanG_dark]: theme === "dark",
            })}
          >
            {translate("projects")}
          </span>
        </h1>
      </div>
      <div className={styles.list_container}>
        <ProjectsList
          theme={theme}
          cardData={projectData[language]}
        ></ProjectsList>
      </div>
    </div>
  );
};

export default Projects;
