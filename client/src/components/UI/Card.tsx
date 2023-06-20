import styles from "./Card.module.css";

import bg from "../../assets/bg1.png";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
      }}
      viewport={{ once: true }}
    >
      <div className={styles.cardImage}>
        <img src={bg} alt="Card Image" />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.overlay}></div>
        <h2 className={styles.cardTitle}>Card Title</h2>
        <p className={styles.cardText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quae.
        </p>
        <button className={styles.cardButton}>Read More</button>
      </div>
    </motion.div>
  );
};

export default Card;
