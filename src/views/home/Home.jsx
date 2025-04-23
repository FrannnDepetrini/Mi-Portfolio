import { ReactTyped } from "react-typed";
import { FiSun, IoMoonOutline } from "../../utils/icons";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import UseTranslation from "../../customHooks/useTranslation/useTranslation";
import classNames from "classnames";

const Home = ({
  scrollSection,
  onLoadImages,
  loading,
  language,
  handleChangeLang,
  theme,
  onChangeTheme,
}) => {
  const [visibleImgInf, setVisibleImgInf] = useState(false);
  const [movedImg, setMovedImg] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [loadedImages, setLoadedImages] = useState(0);

  const onScroll = (scrollId) => {
    scrollSection(scrollId);
    setActiveSection(scrollId);
  };

  const translate = UseTranslation();

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
        <div
          className={classNames(styles.menu_container, {
            [styles.menu_dark]: theme === "dark",
          })}
        >
          <div
            onClick={() => onScroll("home")}
            className={classNames(styles.option, {
              [styles.focus]: activeSection === "home",
              [styles.focus_dark]: activeSection === "home" && theme === "dark",
            })}
          >
            {translate("nav_home")}
          </div>
          <div
            onClick={() => onScroll("about")}
            className={classNames(styles.option, {
              [styles.focus]: activeSection === "about",
              [styles.focus_dark]:
                activeSection === "about" && theme === "dark",
            })}
          >
            {translate("nav_about")}
          </div>
          <div
            onClick={() => onScroll("projects")}
            className={classNames(styles.option, {
              [styles.focus]: activeSection === "projects",
              [styles.focus_dark]:
                activeSection === "projects" && theme === "dark",
            })}
          >
            {translate("projects")}
          </div>
          <div
            onClick={() => onScroll("studies")}
            className={classNames(styles.option, {
              [styles.opt_dark]: theme === "dark",
              [styles.focus]: activeSection === "studies",
              [styles.focus_dark]:
                activeSection === "studies" && theme === "dark",
            })}
          >
            {translate("studies")}
          </div>
          <div
            onClick={() => onScroll("experience")}
            className={classNames(styles.option, {
              [styles.focus]: activeSection === "experience",
              [styles.focus_dark]:
                activeSection === "experience" && theme === "dark",
            })}
          >
            {translate("nav_contact")}
          </div>
        </div>
        <div
          className={classNames(styles.theme_container, {
            [styles.th_dark]: theme === "dark",
          })}
        >
          <button onClick={handleChangeLang}>{language}</button>
          <div onClick={onChangeTheme}>
            {theme == "dark" ? <IoMoonOutline /> : <FiSun />}
          </div>
        </div>
      </div>
      <div className={styles.main_container}>
        <div
          className={classNames(styles.h1_container, {
            [styles.h1C_dark]: theme === "dark",
          })}
        >
          <h1>
            {translate("welcome_first")} <br />
            {!loading && (
              <span
                className={classNames(styles.spanTyped, {
                  [styles.spanDark]: theme === "dark",
                })}
              >
                <ReactTyped
                  startDelay={800}
                  typeSpeed={60}
                  showCursor={false}
                  strings={["Francisco"]}
                />
              </span>
            )}
            <br />
            <span
              className={classNames(styles.spanTyped, {
                [styles.spanDark]: theme === "dark",
              })}
            >
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
