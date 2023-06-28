/* eslint-disable no-prototype-builtins */
import { useEffect, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { FilterParams } from "./types";
import type { Product } from "../../store/reducers/ProductSlice";

import styles from "./Shop.module.scss";

import { Filters } from "../../components/Filters";
import { Latest } from "../../components/Latest";
import { Page } from "../../components/templates/Page";
import { fetchProducts } from "../../store/reducers/ProductSlice";

export const Shop: React.FC = () => {
  const { products } = useTypedSelector((state) => state.productReducer);
  const dispatch = useTypedDispatch();

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([
    ...products,
  ]);

  const [filterParams, setFilterParams] = useState<FilterParams>({
    search: "",
    min: 0,
    max: 180,
    sale: true,
    stock: true,
    material: "",
    sort: "",
  });

  const searchHandler = (inputValue: string) => {
    setFilterParams({ ...filterParams, search: inputValue });
  };

  const saleHandler = (onSale: boolean) => {
    setFilterParams({ ...filterParams, sale: onSale });
  };

  const stockHandler = (inStock: boolean) => {
    setFilterParams({ ...filterParams, stock: inStock });
  };

  const rangeHandler = (min: number, max: number) => {
    setFilterParams({ ...filterParams, min: min, max: max });
  };

  const shopSelectHandler = (material: string) => {
    setFilterParams({ ...filterParams, material: material });
  };

  const sortSelectHandler = (order: string) => {
    setFilterParams({ ...filterParams, sort: order });
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts([...products]);

    setFilteredProducts((items) =>
      items.filter((item: Product) =>
        item.name.toLowerCase().includes(filterParams.search.toLowerCase())
      )
    );

    if (!filterParams.sale) {
      setFilteredProducts((items) =>
        items.filter((item: Product) => item.hasOwnProperty("discount"))
      );
    }

    if (!filterParams.stock) {
      setFilteredProducts((items) =>
        items.filter((item: Product) => !item.hasOwnProperty("soldout"))
      );
    }

    if (filterParams.sort) {
      if (filterParams.sort === "Ascending price") {
        setFilteredProducts((items) =>
          items.sort((a: Product, b: Product) => a.price - b.price)
        );
      } else {
        setFilteredProducts((items) =>
          items.sort((a: Product, b: Product) => b.price - a.price)
        );
      }
    }

    setFilteredProducts((items) =>
      items.filter(
        (item: Product) =>
          item.price >= filterParams.min && item.price <= filterParams.max
      )
    );
  }, [filterParams, products]);

  return (
    <Page className={styles.shop}>
      <h2>Shop The Latest</h2>
      <div className={styles.wrapper}>
        <Filters
          onChange={searchHandler}
          onSaleChange={saleHandler}
          onStockChange={stockHandler}
          onRangeClick={rangeHandler}
          onShopChange={shopSelectHandler}
          onSortChange={sortSelectHandler}
        />
        <Latest items={filteredProducts} />
      </div>
    </Page>
  );
};
