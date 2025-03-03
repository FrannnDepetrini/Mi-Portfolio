// import styles from "./ProjectCard.module.css";
// import { motion } from "framer-motion";

// const ProjectCard = ({ id, name, imgUrl, handleExpand }) => {
//   return (
//     <motion.div layoutId={`card-${id}`} className={styles.project_card}>
//       <motion.div
//         onClick={handleExpand}
//         className={styles.button}
//         whileHover={{ scale: 1.1 }}
//       >
//         +
//       </motion.div>
//       <motion.div className={styles.box}></motion.div>
//       <motion.img
//         layoutId={`card-image-${id}`}
//         src={imgUrl}
//         className={styles.image}
//       />
//       <motion.h1 layoutId={`card-title-${id}`} className={styles.project_title}>
//         {name}
//       </motion.h1>
//     </motion.div>
//   );
// };

// export default ProjectCard;

import { motion } from "framer-motion";
// import styles from "../projectsList/ProjectsList.module.css";
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
