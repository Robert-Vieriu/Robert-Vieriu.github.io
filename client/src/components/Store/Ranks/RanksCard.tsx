import styles from "./RanksCard.module.css";

interface Rank {
  id: number;
  title: string;
  price: number;
  perks: Perk[];
}

interface Perk {
  title: string;
  value: any;
  active: boolean;
}
const RanksCard = ({ id, price, title, perks }: Rank) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div
          className={styles.overlay}
          onClick={() => {
            // Navigate to the payment page
          }}
        >
          <p className={styles.overlayText}>Buy Now</p>
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.price}>${price}</p>
        <div className={styles.perks}>
          {perks?.map((perk) => (
            <div className={styles.perk} key={id}>
              {perk.active === true ? (
                <p className={styles.perkTrue}>{perk.value}</p>
              ) : (
                <p className={styles.perkFalse}>-</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RanksCard;
