import Contact from "../views/contact/contact";
import { Home, About, Projects, Studies } from "../views/index";
import classNames from "classnames";
import styles from "./Page.module.css";
import { useEffect, useState } from "react";

const amountImages = 4;

const Page = () => {
  const [loadedImages, setLoadedImages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleImageLoaded = () => {
    console.log("hola 1");
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
        <section id="home" className={styles.slides}>
          <Home
            loading={loading}
            onLoadImages={handleImageLoaded}
            scrollSection={handleScroll}
          ></Home>
        </section>
        <section id="about" className={styles.slides}>
          <About onLoadImages={handleImageLoaded}></About>
        </section>
        <section id="projects" className={styles.slides}>
          <Projects onLoadImages={handleImageLoaded}></Projects>
        </section>
        <section id="studies" className={styles.slides}>
          <Studies onLoadImages={handleImageLoaded}></Studies>
        </section>
        <section id="experience" className={styles.slides}>
          <Contact onLoadImages={handleImageLoaded}></Contact>
        </section>
      </div>
    </>
  );
};

export default Page;
