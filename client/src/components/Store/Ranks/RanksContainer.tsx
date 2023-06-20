import { motion } from "framer-motion";
import StoreCurrentUser from "../StoreCurrentUser";
import styles from "./RanksContainer.module.css";
import { useNavigate } from "react-router-dom";
import RanksCard from "./RanksCard";
import RanksPlaceholder from "./RanksPlaceholder";

const RanksContainer = ({ className }: { className: any }) => {
  const navigate = useNavigate();
  const ranksArray = [
    {
      id: 1,
      title: "Apprentice",
      price: 0,
      perks: [
        {
          title: "No chat cooldown",
          value: "X",
          active: true,
        },
        {
          title: "Bonus Coins",
          value: "500",
          active: true,
        },
        {
          title: "Friend list size",
          value: "25",
          active: true,
        },
        {
          title: "Crate keys discount",
          value: "5%",
          active: true,
        },
        {
          title: "Fly",
          value: "X",
          active: true,
        },
        {
          title: "Respawn",
          value: "X",
          active: true,
        },
        {
          title: "Clear inventory",
          value: "",
          active: false,
        },
        {
          title: "Custom name",
          value: "",
          active: false,
        },
        {
          title: "Colored name in chat",
          value: "",
          active: false,
        },
        {
          title: "Server join alert",
          value: "",
          active: false,
        },
        {
          title: "Custom Skins",
          value: "",
          active: false,
        },
      ],
    },
    {
      id: 1,
      title: "Wanderer",
      price: 10,
      perks: [
        {
          title: "No chat cooldown",
          value: "X",
          active: true,
        },
        {
          title: "Bonus Coins",
          value: "700",
          active: true,
        },
        {
          title: "Friend list size",
          value: "40",
          active: true,
        },
        {
          title: "Crate keys discount",
          value: "10%",
          active: true,
        },
        {
          title: "Fly",
          value: "X",
          active: true,
        },
        {
          title: "Respawn",
          value: "X",
          active: true,
        },
        {
          title: "Clear inventory",
          value: "X",
          active: true,
        },
        {
          title: "Custom name",
          value: "",
          active: false,
        },
        {
          title: "Colored name in chat",
          value: "",
          active: false,
        },
        {
          title: "Server join alert",
          value: "",
          active: false,
        },
        {
          title: "Custom Skins",
          value: "",
          active: false,
        },
      ],
    },
    {
      id: 2,
      title: "Knight",
      price: 10,
      perks: [
        {
          title: "No chat cooldown",
          value: "X",
          active: true,
        },
        {
          title: "Bonus Coins",
          value: "900",
          active: true,
        },
        {
          title: "Friend list size",
          value: "50",
          active: true,
        },
        {
          title: "Crate keys discount",
          value: "20%",
          active: true,
        },
        {
          title: "Fly",
          value: "X",
          active: true,
        },
        {
          title: "Respawn",
          value: "X",
          active: true,
        },
        {
          title: "Clear inventory",
          value: "X",
          active: true,
        },
        {
          title: "Custom name",
          value: "X",
          active: true,
        },
        {
          title: "Colored name in chat",
          value: "",
          active: false,
        },
        {
          title: "Server join alert",
          value: "",
          active: false,
        },
        {
          title: "Custom Skins",
          value: "",
          active: false,
        },
      ],
    },
    {
      id: 3,
      title: "Wizard",
      price: 10,
      perks: [
        {
          title: "No chat cooldown",
          value: "X",
          active: true,
        },
        {
          title: "Bonus Coins",
          value: "1000",
          active: true,
        },
        {
          title: "Friend list size",
          value: "60",
          active: true,
        },
        {
          title: "Crate keys discount",
          value: "30%",
          active: true,
        },
        {
          title: "Fly",
          value: "X",
          active: true,
        },
        {
          title: "Respawn",
          value: "X",
          active: true,
        },
        {
          title: "Clear inventory",
          value: "X",
          active: true,
        },
        {
          title: "Custom name",
          value: "X",
          active: true,
        },
        {
          title: "Colored name in chat",
          value: "X",
          active: true,
        },
        {
          title: "Server join alert",
          value: "",
          active: false,
        },
        {
          title: "Custom Skins",
          value: "",
          active: false,
        },
      ],
    },
    {
      id: 4,
      title: "Champion",
      price: 10,
      perks: [
        {
          title: "No chat cooldown",
          value: "X",
          active: true,
        },
        {
          title: "Bonus Coins",
          value: "1200",
          active: true,
        },
        {
          title: "Friend list size",
          value: "80",
          active: true,
        },
        {
          title: "Crate keys discount",
          value: "40%",
          active: true,
        },
        {
          title: "Fly",
          value: "X",
          active: true,
        },
        {
          title: "Respawn",
          value: "X",
          active: true,
        },
        {
          title: "Clear inventory",
          value: "X",
          active: true,
        },
        {
          title: "Custom name",
          value: "X",
          active: true,
        },
        {
          title: "Colored name in chat",
          value: "X",
          active: true,
        },
        {
          title: "Server join alert",
          value: "X",
          active: true,
        },
        {
          title: "Custom Skins",
          value: "",
          active: false,
        },
      ],
    },
    {
      id: 5,
      title: "Master",
      price: 10,
      perks: [
        {
          title: "No chat cooldown",
          value: "X",
          active: true,
        },
        {
          title: "Bonus Coins",
          value: "1500",
          active: true,
        },
        {
          title: "Friend list size",
          value: "100",
          active: true,
        },
        {
          title: "Crate keys discount",
          value: "50%",
          active: true,
        },
        {
          title: "Fly",
          value: "X",
          active: true,
        },
        {
          title: "Respawn",
          value: "X",
          active: true,
        },
        {
          title: "Clear inventory",
          value: "X",
          active: true,
        },
        {
          title: "Custom name",
          value: "X",
          active: true,
        },
        {
          title: "Colored name in chat",
          value: "X",
          active: true,
        },
        {
          title: "Server join alert",
          value: "X",
          active: true,
        },
        {
          title: "Custom Skins",
          value: "X",
          active: true,
        },
      ],
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
                <RanksCard
                  id={rank.id}
                  price={rank.price}
                  title={rank.title}
                  perks={rank.perks}
                />
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
