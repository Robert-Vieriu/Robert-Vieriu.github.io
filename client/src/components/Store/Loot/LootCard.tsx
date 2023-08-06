import styles from "./LootCard.module.css";

interface Chests {
  title: string;
  price: number;
  link: string;
  image: string;
}

const LootCard = ({ title, price, link, image }: Chests) => {
  return (
    <div
      className={styles.container}
      // onClick={() => (window.location.href = `${link}`)}
    >
      <div className={styles.card}>
        <img src={image} alt={image} className={styles.lootImage} />

        {/* <div className={styles.overlay}>
          <p className={styles.overlayText}>Buy</p>
        </div> */}
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default LootCard;
