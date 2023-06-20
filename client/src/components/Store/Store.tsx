import styles from "./Store.module.css";
import img from "../../assets/bg1.png";
import { motion } from "framer-motion";

const Store = () => {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        className={styles.subContainer}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
          duration: 0.5,
        }}
        viewport={{ once: true }}
      >
        <div className={styles.title}>Store</div>
        <div className={styles.text}>
          You can buy ranks and cosmetics from shop. The game is not pay2win so
          the items sold in the store are purely cosmetic and do not give any
          advantage in game. TREBUIE SCHIMBAT TEXTUL AICI
        </div>
        <div className={styles.buttons}>
          <a href="/" className={styles.button}>
            <span className={styles.buttonText}>Buy Now</span>
          </a>
          <a href="/" className={styles.button}>
            <span className={styles.buttonText}>Visit Shop</span>
          </a>
          <div></div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
          duration: 0.5,
        }}
        viewport={{ once: true }}
      >
        <div className={styles.imgContainer}>
          <img src={img} alt="" className={styles.img} />
        </div>
      </motion.div>
    </div>
  );
};

export default Store;
