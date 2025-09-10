import Contact from "../views/contact/contact";
import { Home, About, Projects, Studies } from "../views/index";
import classNames from "classnames";
import styles from "./Page.module.css";
import { useContext, useEffect, useState } from "react";
import { LangContext } from "../services/langContext/langContext";
import { SectionContext } from "../services/sectionContext/sectionContext";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../services/themeContext/themeContext";
const amountImages = 4;

const Page = () => {
  const { language, handleChangeLang } = useContext(LangContext);
  const [loadedImages, setLoadedImages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  const { theme, handleChangeTheme } = useContext(ThemeContext);

  const { handleSelectSection, handleInView, section } =
    useContext(SectionContext);

  const { ref: prRef, inView: prInView } = useInView({
    threshold: 0.7,
  });
  const { ref: homeRef, inView: homeInView } = useInView({
    threshold: 0.7,
  });
  const { ref: studiesRef, inView: studiesInView } = useInView({
    threshold: 0.7,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.7,
  });
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.7,
  });

  useEffect(() => {
    if (homeInView) {
      handleSelectSection("home");
    } else if (aboutInView) {
      handleSelectSection("about");
    } else if (prInView) {
      handleSelectSection("projects");
      handleInView();
    } else if (studiesInView) {
      handleSelectSection("studies");
    } else if (contactInView) {
      handleSelectSection("contact");
    }
  }, [prInView, homeInView, aboutInView, studiesInView, contactInView]);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    handleSelectSection(sectionId);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleImageLoaded = () => {
    setLoadedImages((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedImages === amountImages && loading) {
      setTimeout(() => {
        setFade(true);
      }, 1000);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [loadedImages]);
  return (
    <>
      {loading && (
        <div
          className={classNames(styles.loader_container, {
            [styles.fadeLoader]: fade,
          })}
        >
          <div className={styles.loader}></div>
        </div>
      )}
      <div className={styles.page_container}>
        <section
          ref={homeRef}
          id="home"
          className={classNames(styles.slides, {
            [styles.slides_dark]: theme === "dark",
          })}
        >
          <Home
            section={section}
            language={language}
            handleChangeLang={handleChangeLang}
            loading={loading}
            onLoadImages={handleImageLoaded}
            scrollSection={handleScroll}
            theme={theme}
            onChangeTheme={handleChangeTheme}
          ></Home>
        </section>
        <section
          ref={aboutRef}
          id="about"
          className={classNames(styles.slides, {
            [styles.slides_dark]: theme === "dark",
          })}
        >
          <About onLoadImages={handleImageLoaded} theme={theme}></About>
        </section>
        <section
          ref={prRef}
          id="projects"
          className={classNames(styles.slides, {
            [styles.slides_dark]: theme === "dark",
          })}
        >
          <Projects
            language={language}
            onLoadImages={handleImageLoaded}
            theme={theme}
          ></Projects>
        </section>
        <section
          ref={studiesRef}
          id="studies"
          className={classNames(styles.slides, {
            [styles.slides_dark]: theme === "dark",
          })}
        >
          <Studies onLoadImages={handleImageLoaded} theme={theme}></Studies>
        </section>
        <section
          ref={contactRef}
          id="contact"
          className={classNames(styles.slides, {
            [styles.slides_dark]: theme === "dark",
          })}
        >
          <Contact onLoadImages={handleImageLoaded} theme={theme}></Contact>
        </section>
      </div>
    </>
  );
};

export default Page;
