import styles from "./LootChests.module.css";

interface Chest {
  id: number;
  number: number;
  price: number;
}

const LootChests = ({ id, number, price }: Chest) => {
  return (
    <div className={styles.container}>
      <div>{id}</div>
      <div>{number}</div>
      <div>{price}</div>
    </div>
  );
};

export default LootChests;
