import cn from "classnames";

import styles from "./Features.module.scss";
import { FeaturesProps } from "./types";

export const Features: React.FC<FeaturesProps> = ({
  className,
  specification,
  ...props
}) => {
  return (
    <div className={cn(styles.features, className)} {...props}>
      {specification.map(({ name, value }) => (
        <div>
          <span>{name}</span>
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
};
