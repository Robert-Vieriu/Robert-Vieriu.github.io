import { motion } from "framer-motion";
import LootCard from "./LootCard";
import styles from "./LootContainer.module.css";

const LootContainer = ({ className }: { className: any }) => {
  const lootArray = [
    {
      id: 1,
      title: "Chest 1",
    },
    {
      id: 2,
      title: "Chest 2",
    },
    {
      id: 3,
      title: "Chest 3",
    },
  ];
  return (
    <motion.div className={className} transition={{ duration: 1 }}>
      <div className={styles.container}>
        {lootArray.map((loot) => (
          <LootCard id={loot.id} title={loot.title} />
        ))}
      </div>
    </motion.div>
  );
};

export default LootContainer;
