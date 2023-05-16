import { Link } from "react-router-dom";

import { CardProps } from "./types";

import styles from "./Card.module.scss";

export const Card: React.FC<CardProps> = ({
  title,
  price,
  image,
  discount,
  soldout,
}) => {
  return (
    <Link to="/shop" className={styles.card}>
      <img src={`src/assets/${image}`} alt={title} />
      {discount && <span className={styles.discount}>{discount}</span>}
      {soldout && <span className={styles.soldout}>Sold out</span>}
      <p>{title}</p>
      <span>{price}</span>
    </Link>
  );
};