import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// {
//   "id": 1,
//   "category": {
//     "id": 1,
//     "name": "Айфоны"
//   },
//   "name": "Айфон 11",
//   "reviews": [
//     {
//       "user": {
//         "email": "",
//         "id": 3,
//         "username": "alexzhaba"
//       },
//       "title": "Govno",
//       "text": "Не очень телефон",
//       "rate": 5
//     },

//   ],
//   "specification": [
//     {
//       "value": "Миллион",
//       "name": "Количество"
//     }
//   ],
//   "short_description": "",
//   "description": "2023-06-27 20:47:11.404317+00:00",
//   "images": [
//     {
//       "id": 1,
//       "photo": "http://0.0.0.0:1337/media/products/025.jpg",
//       "description": "Ну вы поняли кароче",
//       "product": 1
//     }
//   ]
// }

export interface Product {
  id: number;
  category: {
    id: number;
    name: string;
  };
  name: string;
  price: number;
  images: [
    {
      id: number;
      photo: string;
      description: string;
      product: number;
    }
  ];
  description: string;
  short_description: string;
  specification: [
    {
      name: string;
      value: string;
    }
  ];
  reviews: Review[];
}

export interface Review {
  user: {
    email: string;
    id: number;
    username: string;
  };
  title: string;
  text: string;
  rate: number;
}

interface ProductState {
  products: Product[];
}

export const fetchProducts = createAsyncThunk("products/get", () => {
  return fetch("http://0.0.0.0:1337/products/").then((result) => result.json());
});

export const fetchProductById = createAsyncThunk<Product, number>(
  "products/getById",
  (productId) =>
    fetch(`http://0.0.0.0:1337/products/${productId}`).then((result) =>
      result.json()
    )
);

const initialState: ProductState = {
  products: [
    // {
    //   id: 1,
    //   title: "Lira Earrings",
    //   price: 20,
    //   image: "product-item-1.jpg",
    //   discount: "- %21",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.",
    //   sku: 12,
    //   categories: ["Fashion", "Style"],
    //   full_description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
    //   weight: 0.3,
    //   dimensions: {
    //     height: 15,
    //     width: 10,
    //     depth: 1,
    //   },
    //   colors: ["Black", "Brown", "White"],
    //   material: "Metal",
    //   reviews: [
    //     {
    //       title: "Scarlet withch",
    //       date: "6 May, 2020",
    //       rating: 3,
    //       description:
    //         "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
    //     },
    //   ],
    // },
    // {
    //   id: 2,
    //   title: "Hal Earrings",
    //   price: 25,
    //   image: "product-item-2.jpg",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.",
    //   sku: 12,
    //   categories: ["Fashion", "Style"],
    //   full_description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
    //   weight: 0.3,
    //   dimensions: {
    //     height: 15,
    //     width: 10,
    //     depth: 1,
    //   },
    //   colors: ["Black", "Brown", "White"],
    //   material: "Gold",
    //   reviews: [
    //     {
    //       title: "Scarlet withch",
    //       date: "6 May, 2020",
    //       rating: 3,
    //       description:
    //         "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
    //     },
    //   ],
    // },
    // {
    //   id: 3,
    //   title: "Kaede Hair Pin Set Of 3",
    //   price: 30,
    //   image: "product-item-3.jpg",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.",
    //   sku: 12,
    //   categories: ["Fashion", "Style"],
    //   full_description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
    //   weight: 0.3,
    //   dimensions: {
    //     height: 15,
    //     width: 10,
    //     depth: 1,
    //   },
    //   colors: ["Black", "Brown", "White"],
    //   material: "Gold",
    //   reviews: [
    //     {
    //       title: "Scarlet withch",
    //       date: "6 May, 2020",
    //       rating: 3,
    //       description:
    //         "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
    //     },
    //   ],
    // },
    // {
    //   id: 4,
    //   title: "Hair Pin Set of 3",
    //   price: 30,
    //   image: "product-item-4.jpg",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.",
    //   sku: 12,
    //   categories: ["Fashion", "Style"],
    //   full_description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
    //   weight: 0.3,
    //   dimensions: {
    //     height: 15,
    //     width: 10,
    //     depth: 1,
    //   },
    //   colors: ["Black", "Brown", "White"],
    //   material: "Plastic",
    //   reviews: [
    //     {
    //       title: "Scarlet withch",
    //       date: "6 May, 2020",
    //       rating: 3,
    //       description:
    //         "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
    //     },
    //   ],
    // },
    // {
    //   id: 5,
    //   title: "Plaine Necklace",
    //   price: 19,
    //   image: "product-item-5.jpg",
    //   soldout: true,
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.",
    //   sku: 12,
    //   categories: ["Fashion", "Style"],
    //   full_description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
    //   weight: 0.3,
    //   dimensions: {
    //     height: 15,
    //     width: 10,
    //     depth: 1,
    //   },
    //   colors: ["Black", "Brown", "White"],
    //   material: "Gold",
    //   reviews: [
    //     {
    //       title: "Scarlet withch",
    //       date: "6 May, 2020",
    //       rating: 3,
    //       description:
    //         "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
    //     },
    //   ],
    // },
    // {
    //   id: 6,
    //   title: "Yuki Hair Pin Set of 3",
    //   price: 29,
    //   image: "product-item-6.jpg",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.",
    //   sku: 12,
    //   categories: ["Fashion", "Style"],
    //   full_description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
    //   weight: 0.3,
    //   dimensions: {
    //     height: 15,
    //     width: 10,
    //     depth: 1,
    //   },
    //   colors: ["Black", "Brown", "White"],
    //   material: "Plastic",
    //   reviews: [
    //     {
    //       title: "Scarlet withch",
    //       date: "6 May, 2020",
    //       rating: 3,
    //       description:
    //         "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
    //     },
    //   ],
    // },
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
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });

    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      // should i use set ?
      const isExist = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (!isExist) state.products.push(action.payload);
    });
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
