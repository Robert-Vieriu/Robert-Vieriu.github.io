import { motion } from "framer-motion";
import StoreCurrentUser from "../StoreCurrentUser";
import styles from "./RanksContainer.module.css";
// import { useNavigate } from "react-router-dom";
import RanksCard from "./RanksCard";
import RanksPlaceholder from "./RanksPlaceholder";

const RanksContainer = ({ className }: { className: any }) => {
  const ranksArray = [
    {
      id: 1,
      title: "Knight",
      price: 2.49,
      link: import.meta.env.VITE_RANKS_KNIGHT_LINK,
      perks: [
        {
          title: "No chat cooldown",
          value: "X",
          active: true,
        },
        {
          title: "Private messages",
          value: "X",
          active: true,
        },
        {
          title: "Random teleport (survival)",
          value: "X",
          active: true,
        },
        {
          title: "Sethome (survival)",
          value: "X",
          active: true,
        },
        {
          title: "Warp command",
          value: "",
          active: false,
        },
        {
          title: "Clear inventory",
          value: "",
          active: false,
        },
        {
          title: "Colored name",
          value: "",
          active: false,
        },
        {
          title: "Heal (survival)",
          value: "",
          active: false,
        },
        {
          title: "Gsit animations",
          value: "",
          active: false,
        },
        {
          title: "Priority queue",
          value: "",
          active: false,
        },
      ],
      pattern: "dirt",
    },
    {
      id: 2,
      title: "Wizard",
      price: 3.75,
      link: import.meta.env.VITE_RANKS_WIZARD_LINK,
      perks: [
        {
          title: "No chat cooldown",
          value: "X",
          active: true,
        },
        {
          title: "Private messages",
          value: "X",
          active: true,
        },
        {
          title: "Random teleport (survival)",
          value: "X",
          active: true,
        },
        {
          title: "Sethome (survival)",
          value: "X",
          active: true,
        },
        {
          title: "Warp command",
          value: "X",
          active: true,
        },
        {
          title: "Clear inventory",
          value: "X",
          active: true,
        },
        {
          title: "Colored name",
          value: "X",
          active: true,
        },
        {
          title: "Heal (survival)",
          value: "",
          active: false,
        },
        {
          title: "Gsit animations",
          value: "",
          active: false,
        },
        {
          title: "Priority queue",
          value: "",
          active: false,
        },
      ],
      pattern: "stone",
    },
    {
      id: 3,
      title: "Master",
      price: 4.99,
      link: import.meta.env.VITE_RANKS_MASTER_LINK,
      perks: [
        {
          title: "No chat cooldown",
          value: "X",
          active: true,
        },
        {
          title: "Private messages",
          value: "X",
          active: true,
        },
        {
          title: "Random teleport (survival)",
          value: "X",
          active: true,
        },
        {
          title: "Sethome (survival)",
          value: "X",
          active: true,
        },
        {
          title: "Warp command",
          value: "X",
          active: true,
        },
        {
          title: "Clear inventory",
          value: "X",
          active: true,
        },
        {
          title: "Colored name",
          value: "X",
          active: true,
        },
        {
          title: "Heal (survival)",
          value: "X",
          active: true,
        },
        {
          title: "Gsit animations",
          value: "X",
          active: true,
        },
        {
          title: "Priority queue",
          value: "X",
          active: true,
        },
      ],
      pattern: "wood",
    },
  ];

  return (
    <motion.div className={className} transition={{ duration: 1 }}>
      <div className={styles.container}>
        {localStorage.getItem("username") ? (
          <div className={styles.ranks}>
            <div className={styles.ranksContainer}>
              <RanksPlaceholder />
              {ranksArray.map((rank) => (
                <RanksCard key={`${rank.id}-${rank.title}`} {...rank} />
              ))}
            </div>
          </div>
        ) : (
          <StoreCurrentUser />
        )}
      </div>
    </motion.div>
  );
};

export default RanksContainer;
