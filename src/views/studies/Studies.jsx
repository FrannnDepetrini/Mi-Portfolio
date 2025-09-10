import styles from "./Studies.module.css";
import { useEffect, useState } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import UseTranslation from "../../customHooks/useTranslation/useTranslation";
import classNames from "classnames";

const Studies = ({ onLoadImages, theme }) => {
  const [loadedImages, setLoadedImages] = useState(0);
  const translate = UseTranslation();
  const studiesImgs = [
    "https://res.cloudinary.com/ded9gllk0/image/upload/v1740988772/Titulo_Arg.Programa_bzu8ez.png",
    "https://res.cloudinary.com/ded9gllk0/image/upload/v1740988776/Titulo_Coder_House_sgrlle.png",
  ];

  const amountImgs = studiesImgs.length;

  useEffect(() => {
    studiesImgs.forEach((src) => {
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
    <div className={styles.studies_container}>
      <div
        className={classNames(styles.h1_container, {
          [styles.h1C_dark]: theme === "dark",
        })}
      >
        <h1>
          {translate("myPlural")}{" "}
          <span
            className={classNames(styles.spanGeneric, {
              [styles.spanG_dark]: theme === "dark",
            })}
          >
            {translate("studies")}
          </span>
        </h1>
      </div>
      <div className={styles.scroll_container}>
        <div className={styles.timelineContainer}>
          <VerticalTimeline
            lineColor={theme === "dark" ? "#518267" : "#27372e"}
            className={styles.timeLine}
          >
            <VerticalTimelineElement
              iconClassName={styles.icon}
              iconStyle={{
                background: theme === "dark" ? "#518267" : "#27372e",
                transform: "scale(0.25,0.25)",
              }}
              className={styles.timeline_element}
              date={translate("courseOfArg")}
              dateClassName={styles.date}
              contentStyle={{
                background: "none",
                border: `1px solid ${theme === "dark" ? "white" : "#27372e"}`,
                color: "black",
                borderRadius: "10px",
                boxShadow: "none",
              }}
            >
              <div className={styles.elements_container}>
                <img className={styles.timeline_img} src={studiesImgs[0]}></img>

                <h1 className={styles.timeline_h1}>
                  Primeros pasos de <br /> desarrollo frontend
                </h1>
                <h3 className={styles.timeline_h3}>(2023)</h3>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconClassName={styles.icon}
              iconStyle={{
                background: theme === "dark" ? "#518267" : "#27372e",
                transform: "scale(0.25,0.25)",
              }}
              className={styles.timeline_element}
              date={translate("courseOfCoder")}
              dateClassName={styles.date}
              contentStyle={{
                background: "none",
                border: `1px solid ${theme === "dark" ? "white" : "#27372e"}`,
                color: "black",
                borderRadius: "10px",
                boxShadow: "none",
              }}
            >
              <img className={styles.timeline_img} src={studiesImgs[1]}></img>

              <h1 className={styles.timeline_h1}>Desarrollo de aplicaciones</h1>
              <h3 className={styles.timeline_h3}>(2023)</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconClassName={styles.icon}
              iconStyle={{
                background: theme === "dark" ? "#518267" : "#27372e",
                transform: "scale(0.25,0.25)",
              }}
              className={styles.timeline_element}
              date={translate("career")}
              dateClassName={styles.date}
              contentStyle={{
                background: "none",
                border: `1px solid ${theme === "dark" ? "white" : "#27372e"}`,
                color: "black",
                borderRadius: "10px",
                boxShadow: "none",
              }}
            >
              <div className={styles.elements_container}>
                <h1 className={styles.timeline_h1}>
                  Tecnicatura en programacion
                </h1>
                <h3 className={styles.timeline_h3}>
                  En la Universidad <br /> Tecnologica Nacional <br />
                  de rosario
                </h3>
                <h3 className={styles.timeline_h3}>(2023 - 2025)</h3>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Studies;
