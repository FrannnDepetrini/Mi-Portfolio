import { ReactTyped } from "react-typed";
import { IoMoonOutline } from "../../utils/icons";
import { useState } from "react";
import "./Home.css";

const Home = ({ scrollSection }) => {
  const [activeIndex, setActiveIndex] = useState("home");
  const [visibleImgInf, setVisibleImgInf] = useState(false);
  const [movedImg, setMovedImg] = useState(false);
  const [language, setLanguage] = useState("Es");
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

  return (
    <div className="home_container">
      <div className="nav_container">
        <div className="logo_container">
          <div className="icon"></div>
        </div>
        <div className="menu_container">
          <div
            onClick={() => onScroll("home")}
            className={activeIndex == "home" ? "home_focus" : "home"}
          >
            Inicio
          </div>
          <div
            onClick={() => onScroll("about")}
            className={activeIndex == "about" ? "about_focus" : "about"}
          >
            Sobre mi
          </div>
          <div
            onClick={() => onScroll("projects")}
            className={
              activeIndex == "projects" ? "projects_focus" : "projects"
            }
          >
            Proyectos
          </div>
          <div
            onClick={() => onScroll("studies")}
            className={activeIndex == "studies" ? "studies_focus" : "studies"}
          >
            Estudios
          </div>
          <div
            onClick={() => onScroll("experience")}
            className={
              activeIndex == "experience" ? "experience_focus" : "experience"
            }
          >
            Experiencia
          </div>
        </div>
        <div className="theme_container">
          <button onClick={handleLanguage}>{language}</button>
          <IoMoonOutline />
        </div>
      </div>
      <div className="main_container">
        <div className="h1_container">
          <h1>
            Hola, soy <br />
            <ReactTyped
              typeSpeed={60}
              showCursor={false}
              strings={["Francisco"]}
            />
            {/* <span>Francisco</span> */}
            <br />
            <span>
              <ReactTyped
                typeSpeed={60}
                showCursor={false}
                startDelay={700}
                strings={["Depetrini"]}
              />
            </span>
            <br />y este es <br /> mi <br /> portfolio
          </h1>
        </div>
        <div className="image_container">
          <div
            onClick={showImgInf}
            className={`image ${movedImg ? "moved" : ""}`}
          ></div>
        </div>
      </div>
      <h1 className={`imgInf ${visibleImgInf ? "visible" : ""}`}>
        &quot; Modelo low-poly de mi habitacion <br />
        hecho en 3d por mi &quot;
      </h1>
    </div>
  );
};

export default Home;
