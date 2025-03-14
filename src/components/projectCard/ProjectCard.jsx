import classnames from "classnames";
import prueba from "./ProjectCard.module.css";
import { useEffect, useRef, useState } from "react";

const Card = ({ card }) => {
  const [modalExpanded, setModalExpanded] = useState(false);
  const [isAlreadyExpanded, setIsAlreadyExpanded] = useState(false);
  const [position, setPosition] = useState({ top: "0px", left: "0px" }); // Inicialización segura
  const [animInvisible, setAnimInvisible] = useState(false);

  const cardRef = useRef();

  useEffect(() => {
    const calculatePosition = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setPosition({
          top: `${rect.top}px`,
          left: `${rect.left}px`,
        });
      }
    };

    // Ejecutar una vez que el componente se haya montado
    calculatePosition();

    // Agregar event listeners para recalcular la posición al cambiar el tamaño de la ventana o al hacer scroll

    window.addEventListener("scroll", calculatePosition);

    // Limpiar los listeners cuando el componente se desmonte
    return () => {
      console.log("Projects desmontado ❌");
      window.removeEventListener("scroll", calculatePosition);
    };
  }, []); // Solo ejecutar una vez al montar el componente

  const modalCardStyle = {
    position: "fixed",
    top: modalExpanded ? "50%" : position.top,
    left: modalExpanded ? "50%" : position.left,
    transform: modalExpanded ? "translate(-50%, -50%)" : "none",
    width: modalExpanded ? "60vw" : "250px",
    height: modalExpanded ? "90vh" : "280px",
    background: "var(--darkGreen)",
    zIndex: 11,
    borderRadius: "8px",
    boxShadow: "5px 6px 10px rgba(0, 0, 0, 0.697)",
    transition: "all 0.5s ease-in-out",
    opacity: 1,
    pointerEvents: modalExpanded ? "all" : "none",
    visibility: modalExpanded ? "visible" : "hidden",
    overflowY: "auto",
  };

  const handleExpand = () => {
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
          })}
        >
          <img className={prueba.cardImg} src={card.image} alt="" />
          <h3 className={prueba.cardh3}>{card.title}</h3>
        </div>
        <div
          style={modalCardStyle}
          className={classnames(prueba.card, prueba.modalCard, {
            [prueba.expanded]: modalExpanded,
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
