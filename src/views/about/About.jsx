import styles from "./about.module.css";

const About = ({ onLoadImages }) => {
  return (
    <div className={styles.about_container}>
      <div className={styles.h1_container}>
        <h1>
          Sobre <span>mi</span>
        </h1>
      </div>
      <div className={styles.info_container}>
        <div className={styles.text_container}>
          <p>
            Hola, mi nombres es{" "}
            <span className={styles.span_underlined}>Francisco Depetrini</span>,
            y uso Depeex como mi apodo en las redes sociales.
          </p>
          <p>
            Soy un adolescente de 20 años que está cursando la carrera{" "}
            <span className={styles.span_underlined}>
              “Tecnicatura en programacion”
            </span>{" "}
            en la Universidad Tecnologica Nacional de Rosario ( UTN ).
          </p>
          <p>
            Cuento con nociones artisticas, ya que no solo estoy interesado en
            la programacion, tambien tengo una pasion por la{" "}
            <span className={styles.span_underlined}>edicion de video</span> ,
            la cual me llevo a hacer diversos videos para otras personas.
          </p>
          <p>
            Me considero una persona creativa, tanto en lo artístico como en la{" "}
            <span className={styles.span_underlined}>
              solucion de problemas
            </span>
            . Además dispongo de un{" "}
            <span className={styles.span_underlined}>carácter firme</span>, pero{" "}
            <span className={styles.span_underlined}>responsable</span>, hasta
            lograr lo que se requiere.
          </p>
        </div>
        <div className={styles.image_container}></div>
      </div>
    </div>
  );
};

export default About;
