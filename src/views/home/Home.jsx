import { ReactTyped } from "react-typed";
import { IoMoonOutline } from "../../utils/icons";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";

const Home = ({ scrollSection, onLoadImages, loading }) => {
  const [activeIndex, setActiveIndex] = useState("home");
  const [visibleImgInf, setVisibleImgInf] = useState(false);
  const [movedImg, setMovedImg] = useState(false);
  const [language, setLanguage] = useState("Es");
  const [loadedImages, setLoadedImages] = useState(0);
  const onScroll = (scrollId) => {
    setActiveIndex(scrollId);
    scrollSection(scrollId);
  };

  const handleLanguage = () => {
    if (language == "Es") {
      setLanguage("En");
    } else {
      setLanguage("Es");
    }
  };

  const showImgInf = () => {
    if (!visibleImgInf) {
      setMovedImg(true);
      setTimeout(() => {
        setVisibleImgInf(true);
      }, 600);
    } else {
      setVisibleImgInf(false);
      setTimeout(() => {
        setMovedImg(false);
      }, 400);
    }
  };
  const imgUrls = [
    "https://res.cloudinary.com/ded9gllk0/image/upload/v1740783290/LogoDpx_f5zw6b.png",
    "https://res.cloudinary.com/ded9gllk0/image/upload/v1740783294/casaLowPoly_j6v8rb.png",
  ];
  const amountImgs = imgUrls.length;

  useEffect(() => {
    console.log("hola 3");
    imgUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
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
    <div className={styles.home_container}>
      <div className={styles.nav_container}>
        <div className={styles.nav_container}>
          <img
            src="https://res.cloudinary.com/ded9gllk0/image/upload/v1740783290/LogoDpx_f5zw6b.png"
            className={styles.icon}
          ></img>
        </div>
        <div className={styles.menu_container}>
          <div
            onClick={() => onScroll("home")}
            className={activeIndex == "home" ? styles.home_focus : styles.home}
          >
            Inicio
          </div>
          <div
            onClick={() => onScroll("about")}
            className={
              activeIndex == "about" ? styles.about_focus : styles.about
            }
          >
            Sobre mi
          </div>
          <div
            onClick={() => onScroll("projects")}
            className={
              activeIndex == "projects"
                ? styles.projects_focus
                : styles.projects
            }
          >
            Proyectos
          </div>
          <div
            onClick={() => onScroll("studies")}
            className={
              activeIndex == "studies" ? styles.studies_focus : styles.studies
            }
          >
            Estudios
          </div>
          <div
            onClick={() => onScroll("experience")}
            className={
              activeIndex == "experience"
                ? styles.experience_focus
                : styles.experience
            }
          >
            Contacto
          </div>
        </div>
        <div className={styles.theme_container}>
          <button onClick={handleLanguage}>{language}</button>
          <IoMoonOutline />
        </div>
      </div>
      <div className={styles.main_container}>
        <div className={styles.h1_container}>
          <h1>
            Hola, soy <br />
            {!loading && (
              <ReactTyped
                startDelay={800}
                typeSpeed={60}
                showCursor={false}
                strings={["Francisco"]}
              />
            )}
            <br />
            <span>
              {!loading && (
                <ReactTyped
                  startDelay={1600}
                  typeSpeed={60}
                  showCursor={false}
                  strings={["Depetrini"]}
                />
              )}
            </span>
            <br />y este es <br /> mi <br /> portfolio
          </h1>
        </div>
        <div className={styles.image_container}>
          <img
            src="https://res.cloudinary.com/ded9gllk0/image/upload/v1740783294/casaLowPoly_j6v8rb.png"
            onClick={showImgInf}
            className={`${styles.image} ${movedImg ? styles.moved : ""}`}
          ></img>
        </div>
      </div>
      <h1 className={`${styles.imgInf} ${visibleImgInf ? styles.visible : ""}`}>
        &quot; Modelo low-poly de mi habitacion <br />
        hecho en 3d por mi &quot;
      </h1>
    </div>
  );
};

export default Home;
