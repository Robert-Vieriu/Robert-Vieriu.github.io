import styles from "./LootCard.module.css";

interface Chests {
  id: number;
  title: string;
}

const LootCard = ({ id, title }: Chests) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.overlay}>
          <p className={styles.overlayText}>Buy</p>
        </div>
        <div>{id}</div>
        <div>{title}</div>
      </div>
    </div>
  );
};

export default LootCard;
