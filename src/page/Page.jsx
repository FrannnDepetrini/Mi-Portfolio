import { Home, About, Experience, Projects, Studies } from "../views/index";

import styles from "./Page.module.css";

const handleScroll = (sectionId) => {
  const section = document.getElementById(sectionId);

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const Page = () => {
  return (
    <div className={styles.page_container}>
      <section id="home" className={styles.slides}>
        <Home scrollSection={handleScroll}></Home>
      </section>
      <section id="about" className={styles.slides}>
        <About></About>
      </section>
      <section id="projects" className={styles.slides}>
        <Projects></Projects>
      </section>
      <section id="studies" className={styles.slides}>
        <Studies></Studies>
      </section>
      <section id="experience" className={styles.slides}>
        <Experience></Experience>
      </section>
    </div>
  );
};

export default Page;
