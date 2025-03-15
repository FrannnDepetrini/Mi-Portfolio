import classnames from "classnames";
import prueba from "./ProjectCard.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import { SectionContext } from "../../services/sectionContext/sectionContext";

const Card = ({ card, theme }) => {
  const [modalExpanded, setModalExpanded] = useState(false);
  const [isAlreadyCalc, setIsAlreadyCalc] = useState(false);
  const [isAlreadyExpanded, setIsAlreadyExpanded] = useState(false);
  const [position, setPosition] = useState({});
  const [animInvisible, setAnimInvisible] = useState(false);
  const { section, prInView } = useContext(SectionContext);
  const cardRef = useRef();

  const calculatePosition = () => {
    if (cardRef.current && !isAlreadyCalc) {
      console.log("me calcule otra vez");
      const rect = cardRef.current.getBoundingClientRect();
      setPosition({
        top: `${rect.top}px`,
        left: `${rect.left}px`,
      });
      console.log(`${rect.top}px`);
      console.log(`${rect.left}px`);
      setIsAlreadyCalc(true);
    }
  };

  useEffect(() => {
    if (section == "projects" && prInView) {
      console.log("me voy a calcular");

      calculatePosition();
    }
  }, [section, prInView]);
  const modalCardStyle = {
    position: "fixed",
    top: modalExpanded ? "50%" : position.top,
    left: modalExpanded ? "50%" : position.left,
    transform: modalExpanded ? "translate(-50%, -50%)" : "none",
    width: modalExpanded ? "60vw" : "250px",
    height: modalExpanded ? "90vh" : "280px",
    zIndex: 11,
    borderRadius: "8px",
    boxShadow: "5px 6px 10px rgba(0, 0, 0, 0.697)",
    transition: "all 0.5s ease-in-out",
    opacity: 1,
    visibility: modalExpanded ? "visible" : "hidden",
    pointerEvents: modalExpanded ? "none" : "all",
  };

  const handleExpand = () => {
    console.log(position);
    setModalExpanded(true);
    setAnimInvisible(true);
    setTimeout(() => {
      setIsAlreadyExpanded(true);
    }, 800);
  };

  const handleClose = () => {
    setIsAlreadyExpanded(false);
    setTimeout(() => {
      setModalExpanded(false);
    }, 400);
    setTimeout(() => {
      setAnimInvisible(false);
    }, 850);
  };

  return (
    <>
      <div
        className={classnames(prueba.overlay, {
          [prueba.visible]: modalExpanded,
        })}
        onClick={handleClose}
      ></div>
      <div className={prueba.cards_container}>
        <div
          ref={cardRef}
          onClick={handleExpand}
          className={classnames(prueba.card, {
            [prueba.cardInvisible]: animInvisible,
            [prueba.card_dark]: theme === "dark",
          })}
        >
          <img className={prueba.cardImg} src={card.image} alt="" />
          <h3 className={prueba.cardh3}>{card.title}</h3>
        </div>
        <div
          style={modalCardStyle}
          className={classnames(prueba.card, prueba.modalCard, {
            [prueba.modalC_dark]: theme === "dark",
          })}
        >
          <img
            className={classnames(prueba.cardImg, {
              [prueba.imgExpanded]: modalExpanded,
            })}
            src={card.image}
            alt=""
          />
          <h3
            className={classnames(prueba.cardh3, {
              [prueba.h3Expanded]: modalExpanded,
            })}
          >
            {card.title}
          </h3>

          <div
            className={classnames(prueba.text, {
              [prueba.expanded_text]: isAlreadyExpanded,
            })}
          >
            {card.extraInfo1} <br /> {card.extraInfo2}
            <br /> {card.extraInfo3}
          </div>
          <div
            className={classnames(prueba.foot, {
              [prueba.expanded_foot]: isAlreadyExpanded,
            })}
          >
            {card.contributors1} {"  "}
            <span className={prueba.spanCard}>{card.lang}</span>
            {"  "}
            {card.contributors2a}
            <br />
            {card.date}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
