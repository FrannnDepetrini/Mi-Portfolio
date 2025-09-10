import classnames from "classnames";
import prueba from "./ProjectCard.module.css";
import { useEffect, useRef, useState } from "react";

const Card = ({ card, theme }) => {
  const [modalExpanded, setModalExpanded] = useState(false);
  const [isAlreadyExpanded, setIsAlreadyExpanded] = useState(false);
  const [animInvisible, setAnimInvisible] = useState(false);
  const [opening, setOpening] = useState(false);
  const [position, setPosition] = useState(null);

  const cardRef = useRef();
  const modalRef = useRef();

  const handleExpand = (e) => {
    e.stopPropagation();

    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    setPosition({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    });

    setOpening(true);
    setAnimInvisible(true);
  };

  useEffect(() => {
    if (opening) {
      const id = requestAnimationFrame(() => {
        setModalExpanded(true);
        setTimeout(() => setIsAlreadyExpanded(true), 800);
      });
      return () => cancelAnimationFrame(id);
    }
  }, [opening]);

  const handleClose = () => {
    setIsAlreadyExpanded(false);
    setModalExpanded(false);
    setTimeout(() => {
      setOpening(false);
      setAnimInvisible(false);
    }, 850);
  };

  const modalCardStyle = position && {
    position: "fixed",
    top: modalExpanded ? "50%" : position.top + "px",
    left: modalExpanded ? "50%" : position.left + "px",
    transform: modalExpanded ? "translate(-50%, -50%)" : "none",
    width: modalExpanded ? "60vw" : position.width + "px",
    height: modalExpanded ? "85vh" : position.height + "px",
    zIndex: 11,
    borderRadius: "8px",
    visibility: opening ? "visible" : "hidden",
    transition:
      "top 0.5s ease, left 0.5s ease, width 0.5s ease, height 0.5s ease, transform 0.5s ease",
    opacity: 1,
    pointerEvents: modalExpanded ? "all" : "none",

    cursor: modalExpanded ? "auto" : "pointer",
    background: theme === "dark" ? "var(--darkGreen)" : "var(--mediumGreen)",
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        modalRef.current.scrollTo({ top: 0, behavior: "smooth" });
        handleClose();
      }
    };
    if (modalExpanded) {
      document.body.style.overflow = "hidden";

      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.body.style.overflow = "auto";

      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalExpanded]);

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
          onClick={handleExpand}
          className={classnames(prueba.card, {
            [prueba.cardInvisible]: animInvisible,
            [prueba.card_dark]: theme === "dark",
          })}
        >
          <img className={prueba.cardImg} src={card.image} alt="" />
          <h3 className={prueba.cardh3}>{card.title}</h3>
        </div>

        {opening && (
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
              {card.contributors1}{" "}
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
        )}
      </div>
    </>
  );
};

export default Card;
