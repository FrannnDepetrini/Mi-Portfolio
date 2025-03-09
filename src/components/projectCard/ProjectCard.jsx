import { motion } from "framer-motion";

import prueba from "./ProjectCard.module.css";

const Card = ({ card, onClick }) => {
  return (
    <motion.div
      className={prueba.card}
      layoutId={`card-${card.id}`}
      onClick={onClick}
    >
      <motion.img
        src={card.image}
        alt={card.title}
        layoutId={`card-image-${card.id}`}
      />

      <motion.h3 layoutId={`card-title-${card.id}`}>{card.title}</motion.h3>
      <motion.p layoutId={`card-content-${card.id}`}>{card.content}</motion.p>
    </motion.div>
  );
};

export default Card;
