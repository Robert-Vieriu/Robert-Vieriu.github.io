import Minigame from "./Minigame";
import styles from "./Minigames.module.css";
import img from "../../assets/bg1.png";
import { motion } from "framer-motion";

const Minigames = () => {
  const minigames = [
    { name: "Hunger Games", image: img },
    { name: "Hunger Games", image: img },
    { name: "Hunger Games", image: img },
    { name: "Hunger Games", image: img },
    { name: "Hunger Games", image: img },
    { name: "Hunger Games", image: img },
  ];
  return (
    <div className={styles.grid} id="minigames">
      {minigames.map((minigame, index) => (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            delay: index * 0.2,
            duration: 0.5,
          }}
          viewport={{ once: true }}
        >
          <Minigame key={index} name={minigame.name} image={minigame.image} />
        </motion.div>
      ))}
    </div>
  );
};

export default Minigames;
