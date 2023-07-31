import styles from "./RanksCard.module.css";
const RanksPlaceholder = () => {
  const perksArray = [
    "No chat cooldown",
    "Private messages",
    "Random teleport (survival)",
    "Sethome (survival)",
    "Warp command",
    "Clear inventory",
    "Colored name",
    "Heal (survival)",
    "Gsit animations",
    "Priority queue",
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
