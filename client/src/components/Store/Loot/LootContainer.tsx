import { motion } from "framer-motion";
import LootCard from "./LootCard";
import styles from "./LootContainer.module.css";
import wood from "./../../../assets/shop/blocks/wood.svg";
import cobble from "./../../../assets/shop/blocks/cobble.svg";
import ice from "./../../../assets/shop/blocks/ice.svg";
import magma from "./../../../assets/shop/blocks/magma.svg";

const LootContainer = ({ className }: { className: any }) => {
  const lootArray = [
    {
      id: 1,
      title: "100 Pcoins",
      price: 0.25,
      link: import.meta.env.VITE_COINS_100_LINK,
      image: wood,
    },
    {
      id: 2,
      title: "500 Pcoins",
      price: 0.99,
      link: import.meta.env.VITE_COINS_500_LINK,
      image: cobble,
    },
    {
      id: 3,
      title: "1000 Pcoins",
      price: 1.49,
      link: import.meta.env.VITE_COINS_1000_LINK,
      image: ice,
    },
    {
      id: 4,
      title: "2500 Pcoins",
      price: 2.99,
      link: import.meta.env.VITE_COINS_2500_LINK,
      image: magma,
    },
  ];
  return (
    <motion.div className={className} transition={{ duration: 1 }}>
      <div className={styles.container}>
        {lootArray.map((loot) => (
          <LootCard
            key={loot.id}
            title={loot.title}
            price={loot.price}
            link={loot.link}
            image={loot.image}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LootContainer;
