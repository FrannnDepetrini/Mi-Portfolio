import { ReactTyped } from "react-typed";
import { FiSun, IoMoonOutline } from "../../utils/icons";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import UseTranslation from "../../customHooks/useTranslation/useTranslation";

const Home = ({
  scrollSection,
  onLoadImages,
  loading,
  language,
  handleChangeLang,
}) => {
  const [activeIndex, setActiveIndex] = useState("home");
  const [visibleImgInf, setVisibleImgInf] = useState(false);
  const [movedImg, setMovedImg] = useState(false);

  const [loadedImages, setLoadedImages] = useState(0);
  const [theme, setTheme] = useState("dark");
  const onScroll = (scrollId) => {
    setActiveIndex(scrollId);
    scrollSection(scrollId);
  };

  const translate = UseTranslation();

  const handleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
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
    imgUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
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
            {translate("nav_home")}
          </div>
          <div
            onClick={() => onScroll("about")}
            className={
              activeIndex == "about" ? styles.about_focus : styles.about
            }
          >
            {translate("nav_about")}
          </div>
          <div
            onClick={() => onScroll("projects")}
            className={
              activeIndex == "projects"
                ? styles.projects_focus
                : styles.projects
            }
          >
            {translate("projects")}
          </div>
          <div
            onClick={() => onScroll("studies")}
            className={
              activeIndex == "studies" ? styles.studies_focus : styles.studies
            }
          >
            {translate("studies")}
          </div>
          <div
            onClick={() => onScroll("experience")}
            className={
              activeIndex == "experience"
                ? styles.experience_focus
                : styles.experience
            }
          >
            {translate("nav_contact")}
          </div>
        </div>
        <div className={styles.theme_container}>
          <button onClick={handleChangeLang}>{language}</button>
          <div onClick={handleTheme}>
            {theme == "dark" ? <IoMoonOutline /> : <FiSun />}
          </div>
        </div>
      </div>
      <div className={styles.main_container}>
        <div className={styles.h1_container}>
          <h1>
            {translate("welcome_first")} <br />
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
            <br />
            {translate("welcome_second")} <br /> {translate("my")} <br />{" "}
            portfolio
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
        &quot; {translate("3dmodel_first")} <br />
        {translate("3dmodel_second")} &quot;
      </h1>
    </div>
  );
};

export default Home;
