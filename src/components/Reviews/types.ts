import { Review } from "../../store/reducers/ProductSlice";

export interface ReviewsProps {
  className: string;
  reviews: Review[];
  title: string;
}
