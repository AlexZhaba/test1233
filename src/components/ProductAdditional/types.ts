import { Product, Review } from "../../store/reducers/ProductSlice";

export interface ProductAdditionalProps {
  title: string;
  shortDesc: string;
  reviews: Review[];
  specification: Product["specification"];
}
