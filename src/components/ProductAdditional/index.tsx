import { useState } from "react";
import cn from "classnames";

import { ProductAdditionalProps } from "./types";

import styles from "./ProductAdditional.module.scss";

import { Reviews } from "../Reviews";
import { Features } from "../Features";

export const ProductAdditional: React.FC<ProductAdditionalProps> = ({
  title,
  shortDesc,
  reviews,
  specification,
}) => {
  const [activeSection, setActiveSection] = useState("description");

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <section className={styles.additional}>
      <div className={styles.sections}>
        <button
          className={activeSection === "description" ? `${styles.active}` : ""}
          onClick={() => handleSectionClick("description")}
        >
          Description
        </button>
        <button
          className={activeSection === "additional" ? `${styles.active}` : ""}
          onClick={() => handleSectionClick("additional")}
        >
          Additional information
        </button>
        <button
          className={activeSection === "reviews" ? `${styles.active}` : ""}
          onClick={() => handleSectionClick("reviews")}
        >
          Reviews({reviews.length})
        </button>
      </div>
      {activeSection === "description" && (
        <p className={cn(styles.section, styles.description)}>{shortDesc}</p>
      )}
      {activeSection === "additional" && (
        <Features className={styles.section} specification={specification} />
      )}
      {activeSection === "reviews" && (
        <Reviews className={styles.section} reviews={reviews} title={title} />
      )}
    </section>
  );
};
