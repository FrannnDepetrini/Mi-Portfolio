import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "../projectCard/ProjectCard";
import styles from "./ProjectsList.module.css";

const cardData = [
  {
    id: 1,
    title: "DreamAir",
    image:
      "https://res.cloudinary.com/ded9gllk0/image/upload/v1740783289/DreamAir_zycyyt.png",
  },
  {
    id: 2,
    title: "DreamAirAPI",
    image:
      "https://res.cloudinary.com/ded9gllk0/image/upload/v1740783290/DreamAirAPI_ww3jnn.png",
  },
  {
    id: 3,
    title: "Truco.py",
    image:
      "https://res.cloudinary.com/ded9gllk0/image/upload/v1740783291/Trucopy_raboyr.png",
  },
];

const ProjectsList = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.card_container}>
        {cardData.map((card) => (
          <ProjectCard
            key={card.id}
            card={card}
            onClick={() => setSelectedId(card.id)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className={styles.overlay}
            onClick={() => setSelectedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.expanded_card}
              layoutId={`card-${selectedId}`}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const card = cardData.find((c) => c.id === selectedId);
                return (
                  <>
                    <motion.img
                      src={card.image}
                      alt={card.title}
                      layoutId={`card-image-${card.id}`}
                    />
                    <motion.h1 layoutId={`card-title-${card.id}`}>
                      {card.title}
                    </motion.h1>
                    <motion.p layoutId={`card-content-${card.id}`}>
                      {card.content}
                    </motion.p>
                    <div className={styles.expanded_text}>
                      DreamAir es el front-end de un sistema de gestion de
                      compra y venta de vuelos. <br /> Deja atrás el concepto de
                      paginas cuyo fin es buscar muchas opciones y re-dirigir al
                      usuario.
                      <br /> En esta pagina hay una relacion directa entre
                      cliente-aerolinea.
                    </div>
                    <div className={styles.expanded_foot}>
                      Este proyecto fue realizado con Joaquin Tanlongo y Maximo
                      Martin en {"  "}
                      <span className={styles.spanCard}>ReactJS</span>
                      {"  "}
                      a modo de proyecto final en una de las materias de la
                      carrera. <br />( 2024 )
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsList;
