import { Home, About, Experience, Projects, Studies } from "../views/index";

import "./Page.css";

const handleScroll = (sectionId) => {
  const section = document.getElementById(sectionId);

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const Page = () => {
  return (
    <div className="page_container">
      <section id="home" className="slides home">
        <Home scrollSection={handleScroll}></Home>
      </section>
      <section id="about" className="slides about">
        <About></About>
      </section>
      <section id="projects" className="slides projects">
        <Projects></Projects>
      </section>
      <section id="studies" className="slides studies">
        <Studies></Studies>
      </section>
      <section id="experience" className="slides experience">
        <Experience></Experience>
      </section>
    </div>
  );
};

export default Page;
