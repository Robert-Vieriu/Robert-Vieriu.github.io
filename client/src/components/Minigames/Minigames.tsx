import Minigame from "./Minigame";
import styles from "./Minigames.module.css";
import survival from "../../assets/minigames/survival-min.png";
import skywars from "../../assets/minigames/skywars-min.png";
import bedwars from "../../assets/minigames/bedwars-min.png";
import oneblock from "../../assets/minigames/oneblock-min.png";
import skyblock from "../../assets/minigames/skyblock-min.png";
import tntrun from "../../assets/minigames/TNTrun-min.png";
import { motion } from "framer-motion";

const Minigames = () => {
  const minigames = [
    { name: "Survival", image: survival },
    { name: "Sky Wars", image: skywars },
    { name: "Bed Wars", image: bedwars },
    { name: "One Block", image: oneblock },
    { name: "Sky Block", image: skyblock },
    { name: "TNT Run", image: tntrun },
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
