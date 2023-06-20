import styles from "./Minigames.module.css";

interface MinigameProps {
  name: string;
  image: string;
}

const Minigame = ({ name, image }: MinigameProps) => {
  return (
    <div className={styles.gridItem}>
      <img src={image} alt={name} className={styles.gridItemImage} />
      <p className={styles.gridItemText}>{name}</p>
    </div>
  );
};

export default Minigame;
