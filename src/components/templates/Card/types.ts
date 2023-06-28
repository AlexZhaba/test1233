export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  shopId: number;
  title: string;
  price: number;
  imagePath: string;
  discount?: string;
  soldout?: boolean;
}
