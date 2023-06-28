import { Product } from "../../store/reducers/ProductSlice";

export interface FeaturesProps {
  className: string;
  specification: Product["specification"];
}
