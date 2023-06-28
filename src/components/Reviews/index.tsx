import cn from "classnames";

import styles from "./Reviews.module.scss";
import { Rating } from "../Rating";
import { ReviewForm } from "../ReviewForm";
import { ReviewsProps } from "./types";

export const Reviews: React.FC<ReviewsProps> = ({
  className,
  reviews,
  title,
}) => {
  return (
    <div className={cn(styles.reviews, className)}>
      <div className={styles.ratings}>
        <h3 className={styles.quantity}>
          {reviews.length} Reviews for {title}
        </h3>
        {reviews.map((review, index) => (
          <div key={index} className={styles.review}>
            <div className={styles.title}>
              <h3>{review.title}</h3>
              {/* <p>{review.date}</p> */}
              <p>sometime</p>
            </div>
            <Rating reviews={reviews} />
            <p className={styles.description}>{review.text}</p>
          </div>
        ))}
      </div>
      <ReviewForm />
    </div>
  );
};
