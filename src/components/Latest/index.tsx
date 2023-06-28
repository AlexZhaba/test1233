import styles from "./Latest.module.scss";

import { LatestProps } from "./types";

import { Card } from "../templates/Card";
import { useMemo } from "react";

export const Latest: React.FC<LatestProps> = ({ items }) => {
  const isEmpty = items.length === 0;
  const cards = useMemo(
    () =>
      items.map((item) => (
        <Card
          key={item.id}
          shopId={item.id}
          title={item.name}
          price={item.price}
          imagePath={item.images[0].photo}
          discount={"0"}
          soldout={false}
        />
      )),
    [items]
  );

  return (
    <section className={styles.latest}>
      <div className={styles.products}>
        {isEmpty ? <h1>There is no items!</h1> : cards}
      </div>
    </section>
  );
};
