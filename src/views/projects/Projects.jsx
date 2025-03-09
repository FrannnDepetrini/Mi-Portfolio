import ProjectsList from "../../components/projectsList/ProjectsList";
import styles from "./projects.module.css";
import { useEffect, useState } from "react";

const Projects = ({ onLoadImages }) => {
  const [loadedImages, setLoadedImages] = useState(0);
  const cardData = [
    {
      id: 1,
      title: "DreamAir",
      image:
        "https://res.cloudinary.com/ded9gllk0/image/upload/v1740783289/DreamAir_zycyyt.png",
    },
    {
      id: 2,
      title: "DreamAirAPI",
      image:
        "https://res.cloudinary.com/ded9gllk0/image/upload/v1740783290/DreamAirAPI_ww3jnn.png",
    },
    {
      id: 3,
      title: "Truco.py",
      image:
        "https://res.cloudinary.com/ded9gllk0/image/upload/v1740783291/Trucopy_raboyr.png",
    },
  ];

  const amountImgs = cardData.length;

  useEffect(() => {
    console.log("hola 3");
    cardData.forEach((pr) => {
      const img = new Image();
      img.src = pr.image;
      img.onload = () => {
        console.log("hola 4");
        setLoadedImages((prev) => prev + 1);
      };
    });
  }, []);

  useEffect(() => {
    if (amountImgs === loadedImages) {
      console.log("hola 2");
      onLoadImages();
    }
  }, [loadedImages]);

  return (
    <div className={styles.projects_container}>
      <div className={styles.h1_container}>
        <h1>
          Sobre <span>mi</span>
        </h1>
      </div>
      <div className={styles.list_container}>
        <ProjectsList cardData={cardData}></ProjectsList>
      </div>
    </div>
  );
};

export default Projects;
