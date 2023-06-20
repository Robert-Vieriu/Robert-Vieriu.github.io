import { motion } from "framer-motion";
import Card from "../UI/Card";
import styles from "./News.module.css";

const News = () => {
  return (
    <div className={styles.news} id="news">
      <div className={styles.overlay}></div>
      <div className={styles.newsContainer}>
        <Card />
        <Card />
        <Card />
      </div>
      <motion.div
        className={styles.btnContainer}
        initial={{ x: 500, opacity: 0 }}
        animate={{
          x: 0,
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <button className={styles.newsButton}>{"All News >"}</button>
      </motion.div>
    </div>
  );
};

export default News;
