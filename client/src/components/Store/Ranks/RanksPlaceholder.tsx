import styles from "./RanksCard.module.css";
const RanksPlaceholder = () => {
  const title = "Default";
  const perksArray = [
    "No chat cooldown",
    "Bonus Coins",
    "Friend list size",
    "Crate keys discount",
    "Fly",
    "Respawn",
    "Clear inventory",
    "Custom name",
    "Colored name in chat",
    "Server join alert",
    "Custom Skins",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Rank Title</h1>
        <p className={styles.price}>Price</p>
        <div className={styles.perks}>
          {perksArray?.map((perk, index) => (
            <div className={styles.perk} key={index}>
              {perk}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RanksPlaceholder;
