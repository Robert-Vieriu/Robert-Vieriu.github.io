import styles from "./RanksCard.module.css";
// import knight from "./../../../assets/shop/ranks/knight.svg";
// import wizard from "./../../../assets/shop/ranks/wizard.svg";
// import master from "./../../../assets/shop/ranks/master.svg";

interface Rank {
  id: number | string;
  title: string;
  price: number;
  // link: string;
  perks: Perk[];
  pattern: string;
}

interface Perk {
  title: string;
  value: any;
  active: boolean;
}
const RanksCard = ({ id, price, title, perks, pattern }: Rank) => {
  return (
    <div className={styles.container}>
      <div
        className={
          pattern === "dirt"
            ? `${styles.card} ${styles.dirt}`
            : pattern === "stone"
            ? `${styles.card} ${styles.stone}`
            : `${styles.card} ${styles.wood}`
        }
      >
        <div className={styles.cardContainer}>
          {/* <div
            className={styles.overlay}
            onClick={() => {
              window.location.href = `${link}`;
            }}
          >
            <p className={styles.overlayText}>Buy Now</p>
            <img
              className={styles.overlayImage}
              src={
                pattern === "dirt"
                  ? knight
                  : pattern === "stone"
                  ? wizard
                  : master
              }
              alt=""
            />
          </div> */}
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.price}>${price}</p>
          <div className={styles.perks}>
            {perks?.map((perk) => (
              <div className={styles.perk} key={`${id}-${perk.title}`}>
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
    </div>
  );
};

export default RanksCard;
