import { AnimatePresence, motion } from "framer-motion";
import Navigation from "../../components/Navigation/Navigation";
import StoreCategory from "../../components/Store/StoreCategory";
import StoreCurrentUser from "../../components/Store/StoreCurrentUser";
import styles from "./StorePage.module.css";

import image1 from "../../assets/shop/1.jpg";
import image2 from "../../assets/shop/2.jpg";
import image3 from "../../assets/shop/3.jpg";
import image4 from "../../assets/shop/4.jpg";
import image5 from "../../assets/shop/5.jpg";
import { useNavigate } from "react-router-dom";
import RanksContainer from "../../components/Store/Ranks/RanksContainer";
import { useState } from "react";
import LootContainer from "../../components/Store/Loot/LootContainer";

const StorePage = () => {
  const navigate = useNavigate();
  const shopArray = [
    {
      id: 1,
      name: "Ranks",
      description: "",
      image: image1,
      active: true,
    },
    {
      id: 2,
      name: "PCoins",
      description: "",
      image: image2,
      active: false,
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Navigation isHome={false} />
        <div className={styles.container}>
          {/* {localStorage.getItem("username") ? (
            <p className={styles.currentUser}>
              Hello, {localStorage.getItem("username")}
              <button
                className={styles.notYou}
                onClick={() => {
                  localStorage.removeItem("username");
                  navigate("/");
                }}
              >
                Not you?
              </button>
            </p>
          ) : (
            <></>
          )} */}
          {/* {localStorage.getItem("username") ? ( */}
          <>
            <p className={styles.donationText}>
              To donate please contact {import.meta.env.VITE_DISCORD_DONATION}{" "}
              on our{" "}
              <span className={styles.donationDiscordText}>
                <a href={import.meta.env.VITE_DISCORD_LINK}>discord server</a>
              </span>
              .
            </p>
            <p className={styles.legalNotice}>
              Pixelpeak server is in no way affiliated with Mojang Studios,
              Minecraft or Microsoft, nor should it be considered a company
              endorsed by Mojang Studios, Minecraft or Microsoft. Any
              contributions or purchases made on this store goes to the
              Pixelpeak team.
            </p>

            {shopArray.map((shop) => {
              const [active, setActive] = useState(false);
              return (
                <>
                  <StoreCategory // Hyper trash approach. Should be changed in the future. Console error key prop
                    key={Math.random() * 1000}
                    name={shop.name}
                    description={shop.description}
                    image={shop.image}
                    onClick={() => setActive(!active)}
                  />
                  {shop.name === "Ranks" && active === true ? (
                    <RanksContainer className={styles.comp} />
                  ) : (
                    <></>
                  )}
                  {shop.name === "PCoins" && active === true ? (
                    <LootContainer className={styles.comp} />
                  ) : (
                    <></>
                  )}
                </>
              );
            })}
          </>
          {/* ) : (
             <StoreCurrentUser />
           )} */}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StorePage;
