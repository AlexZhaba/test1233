import { ComponentProps } from "react";
import { Product } from "../../store/reducers/ProductSlice";

export interface LatestProps extends ComponentProps<"div"> {
  items: Product[];
}
