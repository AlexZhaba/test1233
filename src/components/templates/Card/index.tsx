import { Link } from "react-router-dom";

import { CardProps } from "./types";

import styles from "./Card.module.scss";

export const Card: React.FC<CardProps> = ({
  shopId,
  title,
  price,
  imagePath,
  discount,
  soldout,
}) => {
  return (
    <Link to={soldout ? "/shop" : `/shop/${shopId}`} className={styles.card}>
      <img src={imagePath} alt={title} />
      {discount && <span className={styles.discount}>{discount}</span>}
      {soldout && <span className={styles.soldout}>Sold out</span>}
      <p>{title}</p>
      <span>$ {price},00</span>
    </Link>
  );
};
