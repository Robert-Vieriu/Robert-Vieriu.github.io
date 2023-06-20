import styles from "./StoreCategory.module.css";

interface StoreCategoryProps {
  name: string;
  description: string;
  image: string;
  onClick: any;
}
const StoreCategory = ({
  name,
  description,
  image,
  onClick,
}: StoreCategoryProps) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.overlay}></div>
      <h1 className={styles.shopName}>{name}</h1>
      <p className={styles.shopDescription}>{description}</p>
      <img className={styles.shopImage} src={image} alt={name} />
    </div>
  );
};

export default StoreCategory;
