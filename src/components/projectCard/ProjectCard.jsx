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
  const modalRef = useRef();

  const calculatePosition = () => {
    if (cardRef.current && !isAlreadyCalc) {
      const rect = cardRef.current.getBoundingClientRect();
      setPosition({
        top: `${rect.top}px`,
        left: `${rect.left}px`,
      });

      setIsAlreadyCalc(true);
    }
  };

  useEffect(() => {
    if (section == "projects" && prInView) {
      calculatePosition();
    }
  }, [section, prInView]);
  const modalCardStyle = {
    position: "fixed",
    top: modalExpanded ? "50%" : position.top,
    left: modalExpanded ? "50%" : position.left,
    transform: modalExpanded ? "translate(-50%, -50%)" : "none",
    width: modalExpanded ? "60vw" : "250px",
    height: modalExpanded ? "85vh" : "280px",
    zIndex: 11,
    borderRadius: "8px",
    boxShadow: "5px 6px 10px rgba(0, 0, 0, 0.697)",
    visibility: modalExpanded ? "visible" : "hidden",
    transition: "all 0.5s ease-in-out",
    opacity: 1,
    pointerEvents: modalExpanded ? "all" : "none",
    overflowY: "auto",
    cursor: modalExpanded ? "auto" : "pointer",
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        modalRef.current.scrollTo({ top: 0, behavior: "smooth" });
        handleClose();
      }
    };

    if (modalExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalExpanded]);

  const handleExpand = (e) => {
    e.stopPropagation();
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
      ></div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={prueba.cards_container}
      >
        <div
          ref={cardRef}
          onClick={(e) => handleExpand(e)}
          className={classnames(prueba.card, {
            [prueba.cardInvisible]: animInvisible,
            [prueba.card_dark]: theme === "dark",
          })}
        >
          <img className={prueba.cardImg} src={card.image} alt="" />
          <h3 className={prueba.cardh3}>{card.title}</h3>
        </div>
        <div
          ref={modalRef}
          style={modalCardStyle}
          className={classnames(prueba.card, prueba.modal_card, {
            [prueba.modalC_dark]: theme === "dark",
            [prueba.modalC_scroll]: isAlreadyExpanded,
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
          <div
            className={classnames(prueba.link_container, {
              [prueba.expanded_linkC]: isAlreadyExpanded,
            })}
          >
            <a className={prueba.linkCode} href={card.link}>
              Codigo
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
