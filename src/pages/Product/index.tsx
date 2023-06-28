import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { Page } from "../../components/templates/Page";
import { ProductAdditional } from "../../components/ProductAdditional";
import { Error } from "../Error";
import { useEffect } from "react";
import { fetchProductById } from "../../store/reducers/ProductSlice";

export const Product: React.FC = () => {
  const dispatch = useTypedDispatch();
  const { shopId } = useParams();

  useEffect(() => {
    if (!shopId) return;
    dispatch(fetchProductById(Number(shopId)));
  }, [dispatch, shopId]);

  const product = useTypedSelector(
    (state) => state.productReducer.products
  ).find((product) => product.id === Number(shopId));

  if (!product) {
    return <Error />;
  }

  return (
    <Page>
      <ProductCard product={product} />
      <ProductAdditional
        title={product.name}
        shortDesc={product.short_description}
        reviews={product.reviews}
        specification={product.specification}
      />
    </Page>
  );
};
