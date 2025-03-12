import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "../projectCard/ProjectCard";
import styles from "./ProjectsList.module.css";

const ProjectsList = ({ cardData }) => {
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
                    {/* <motion.h1 layoutId={`card-title-${card.id}`}>
                      {card.title}
                    </motion.h1> */}

                    <motion.h1 layoutId={`card-title-${card.id}`}>
                      {card.title}
                    </motion.h1>

                    <div className={styles.expanded_text}>
                      {card.extraInfo1} <br /> {card.extraInfo2}
                      <br /> {card.extraInfo3}
                    </div>
                    <div className={styles.expanded_foot}>
                      {card.contributors1} {"  "}
                      <span className={styles.spanCard}>{card.lang}</span>
                      {"  "}
                      {card.contributors2a}
                      <br />
                      {card.date}
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
