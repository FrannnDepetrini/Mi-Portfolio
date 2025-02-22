import "./Home.css";

const Home = () => {
  return (
    <div className="home_container">
      <div className="nav_container">
        <div className="logo_container">
          <div className="icon"></div>
        </div>
        <div className="menu_container">
          <div onClick={() => {}} className="about">
            Sobre mi
          </div>
          <div onClick={() => {}} className="about">
            Proyectos
          </div>
          <div onClick={() => {}} className="about">
            Estudios
          </div>
          <div onClick={() => {}} className="about">
            Experiencia
          </div>
        </div>
        <div className="theme_container">
          <button>Es</button>
          <button>Oscuro</button>
        </div>
      </div>
      <div className="main_container">
        <div className="h1_container">
          <h1>
            Hola, soy <br />
            <span>Francisco</span> <br /> <span>Depetrini </span>
            y <br /> este es <br /> mi <br /> portfolio
          </h1>
        </div>
        <div className="image_container">
          <div className="image"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
