import styles from "./about.module.css";
import UseTranslation from "../../customHooks/useTranslation/useTranslation";
import classNames from "classnames";

const About = ({ onLoadImages, theme }) => {
  const translate = UseTranslation();
  return (
    <div className={styles.about_container}>
      <div
        className={classNames(styles.h1_container, {
          [styles.h1C_dark]: theme === "dark",
        })}
      >
        <h1>
          {translate("about")}{" "}
          <span
            className={classNames(styles.spanGeneric, {
              [styles.spanG_dark]: theme === "dark",
            })}
          >
            {" "}
            {translate("me")}{" "}
          </span>
        </h1>
      </div>
      <div className={styles.info_container}>
        <div
          className={classNames(styles.text_container, {
            [styles.textC_dark]: theme === "dark",
          })}
        >
          <p>
            {translate("p1_first")}{" "}
            <span
              className={classNames(styles.span_underlined, {
                [styles.spanU_dark]: theme === "dark",
              })}
            >
              Francisco Depetrini
            </span>
            , {translate("p1_second")}
          </p>
          <p>
            {translate("p2_first")}{" "}
            <span
              className={classNames(styles.span_underlined, {
                [styles.spanU_dark]: theme === "dark",
              })}
            >
              {translate("p2_second")}
            </span>{" "}
            {translate("p2_third")}.
          </p>
          <p>
            {translate("p3_first")}{" "}
            <span
              className={classNames(styles.span_underlined, {
                [styles.spanU_dark]: theme === "dark",
              })}
            >
              {translate("p3_second")}
            </span>{" "}
            ,{translate("p3_third")}.
          </p>
          <p>
            {translate("p4_first")}{" "}
            <span
              className={classNames(styles.span_underlined, {
                [styles.spanU_dark]: theme === "dark",
              })}
            >
              {translate("p4_second")}
            </span>
            . {translate("p4_third")}{" "}
            <span
              className={classNames(styles.span_underlined, {
                [styles.spanU_dark]: theme === "dark",
              })}
            >
              {translate("p4_fourth")}
            </span>
            , {translate("but")}{" "}
            <span
              className={classNames(styles.span_underlined, {
                [styles.spanU_dark]: theme === "dark",
              })}
            >
              {translate("responsible")}
            </span>
            , {translate("p4_fifth")}.
          </p>
        </div>
        <div
          className={classNames(styles.image_container, {
            [styles.imgCont_dark]: theme === "dark",
          })}
        ></div>
      </div>
    </div>
  );
};

export default About;
