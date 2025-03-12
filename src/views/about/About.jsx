import styles from "./about.module.css";
import UseTranslation from "../../customHooks/useTranslation/useTranslation";

const About = ({ onLoadImages }) => {
  const translate = UseTranslation();
  return (
    <div className={styles.about_container}>
      <div className={styles.h1_container}>
        <h1>
          {translate("about")} <span> {translate("me")} </span>
        </h1>
      </div>
      <div className={styles.info_container}>
        <div className={styles.text_container}>
          <p>
            {translate("p1_first")}{" "}
            <span className={styles.span_underlined}>Francisco Depetrini</span>,{" "}
            {translate("p1_second")}
          </p>
          <p>
            {translate("p2_first")}{" "}
            <span className={styles.span_underlined}>
              {translate("p2_second")}
            </span>{" "}
            {translate("p2_third")}.
          </p>
          <p>
            {translate("p3_first")}{" "}
            <span className={styles.span_underlined}>
              {translate("p3_second")}
            </span>{" "}
            ,{translate("p3_third")}.
          </p>
          <p>
            {translate("p4_first")}{" "}
            <span className={styles.span_underlined}>
              {translate("p4_second")}
            </span>
            . {translate("p4_third")}{" "}
            <span className={styles.span_underlined}>
              {translate("p4_fourth")}
            </span>
            , {translate("but")}{" "}
            <span className={styles.span_underlined}>
              {translate("responsible")}
            </span>
            , {translate("p4_fifth")}.
          </p>
        </div>
        <div className={styles.image_container}></div>
      </div>
    </div>
  );
};

export default About;
