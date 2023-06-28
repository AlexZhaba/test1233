import { ProductProps } from "./types";

import { Button } from "../templates/Button";
import { Rating } from "../Rating";

import styles from "./ProductCard.module.scss";

import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as MailIcon } from "../../assets/icons/mail.svg";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import { useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { cartSlice } from "../../store/reducers/CartSlice";

export const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useTypedDispatch();

  const { cartItems } = useTypedSelector((state) => state.cartReducer);
  const cartQuantity = cartItems.find(
    (item) => item.id === product.id
  )?.quantity;

  const [quantity, setQuantity] = useState(cartQuantity || 1);

  const onDecreaseQuanity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };
  const onIncreaseQuanity = () => {
    if (quantity < 9) setQuantity((prev) => prev + 1);
  };

  const onAddToCart = () => {
    dispatch(
      cartSlice.actions.addCartItem({
        id: product.id,
        title: product.name,
        quantity,
        price: product.price,
        image: product.images[0].photo,
      })
    );
  };

  return (
    <section className={styles.productCard}>
      <div className={styles.photos}>
        <div>
          {[...Array(4)].map((_, i) => (
            <img key={i} src={product.images[0].photo} alt={product.name} />
          ))}
        </div>
        <img src={product.images[0].photo} alt={product.name} />
      </div>
      <div className={styles.description}>
        <h3>{product.name}</h3>
        <span className={styles.price}>$ {product.price},00</span>
        <div className={styles.reviews}>
          <Rating reviews={product.reviews} />
          <p>{product.reviews.length} customer review</p>
        </div>
        <p className={styles.shortDesc}>{product.description}</p>
        <div className={styles.buttons}>
          <div>
            <button onClick={onDecreaseQuanity}>-</button>
            <span>{quantity}</span>
            <button onClick={onIncreaseQuanity}>+</button>
          </div>
          <Button
            type="button"
            className={styles.cartButton}
            color="white"
            onClick={onAddToCart}
          >
            Add to cart
          </Button>
        </div>
        <div className={styles.logos}>
          <HeartIcon />
          <svg
            width="1"
            height="17"
            viewBox="0 0 1 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="-2.18557e-08"
              x2="0.500001"
              y2="17"
              stroke="#D8D8D8"
            />
          </svg>
          <div className={styles.medias}>
            <MailIcon />
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>
      </div>
      <div className={styles.type}>
        <span>Category:</span>
        <div className={styles.categories}>
          <p>{product.category.name}</p>
        </div>
      </div>
    </section>
  );
};
