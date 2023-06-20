import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  discount?: string;
  soldout?: boolean;
  description: string;
  sku: number;
  categories: string[];
  full_description: string;
  weight: number;
  dimensions: { height: number; width: number; depth: number };
  colors: string[];
  material: string;
  reviews: Review[];
}

interface Review {
  title: string;
  date: string;
  rating: number;
  description: string;
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [
    {
      id: 1,
      title: "Lira Earrings",
      price: 20,
      image: "product-item-1.jpg",
      discount: "- %21",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.",
      sku: 12,
      categories: ["Fashion", "Style"],
      full_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
      weight: 0.3,
      dimensions: {
        height: 15,
        width: 10,
        depth: 1,
      },
      colors: ["Black", "Brown", "White"],
      material: "Metal",
      reviews: [
        {
          title: "Scarlet withch",
          date: "6 May, 2020",
          rating: 3,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
        },
      ],
    },
    {
      id: 2,
      title: "Hal Earrings",
      price: 25,
      image: "product-item-2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.",
      sku: 12,
      categories: ["Fashion", "Style"],
      full_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
      weight: 0.3,
      dimensions: {
        height: 15,
        width: 10,
        depth: 1,
      },
      colors: ["Black", "Brown", "White"],
      material: "Gold",
      reviews: [
        {
          title: "Scarlet withch",
          date: "6 May, 2020",
          rating: 3,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
        },
      ],
    },
    {
      id: 3,
      title: "Kaede Hair Pin Set Of 3",
      price: 30,
      image: "product-item-3.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.",
      sku: 12,
      categories: ["Fashion", "Style"],
      full_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
      weight: 0.3,
      dimensions: {
        height: 15,
        width: 10,
        depth: 1,
      },
      colors: ["Black", "Brown", "White"],
      material: "Gold",
      reviews: [
        {
          title: "Scarlet withch",
          date: "6 May, 2020",
          rating: 3,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
        },
      ],
    },
    {
      id: 4,
      title: "Hair Pin Set of 3",
      price: 30,
      image: "product-item-4.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.",
      sku: 12,
      categories: ["Fashion", "Style"],
      full_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
      weight: 0.3,
      dimensions: {
        height: 15,
        width: 10,
        depth: 1,
      },
      colors: ["Black", "Brown", "White"],
      material: "Plastic",
      reviews: [
        {
          title: "Scarlet withch",
          date: "6 May, 2020",
          rating: 3,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
        },
      ],
    },
    {
      id: 5,
      title: "Plaine Necklace",
      price: 19,
      image: "product-item-5.jpg",
      soldout: true,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.",
      sku: 12,
      categories: ["Fashion", "Style"],
      full_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
      weight: 0.3,
      dimensions: {
        height: 15,
        width: 10,
        depth: 1,
      },
      colors: ["Black", "Brown", "White"],
      material: "Gold",
      reviews: [
        {
          title: "Scarlet withch",
          date: "6 May, 2020",
          rating: 3,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
        },
      ],
    },
    {
      id: 6,
      title: "Yuki Hair Pin Set of 3",
      price: 29,
      image: "product-item-6.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.",
      sku: 12,
      categories: ["Fashion", "Style"],
      full_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
      weight: 0.3,
      dimensions: {
        height: 15,
        width: 10,
        depth: 1,
      },
      colors: ["Black", "Brown", "White"],
      material: "Plastic",
      reviews: [
        {
          title: "Scarlet withch",
          date: "6 May, 2020",
          rating: 3,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
        },
      ],
    },
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
