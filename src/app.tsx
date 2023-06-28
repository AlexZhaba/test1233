import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Product } from "./pages/Product";
import { Account } from "./pages/Account";
import { useTypedDispatch } from "./hooks/redux";
import { getMe } from "./store/reducers/AuthSlice";
import { useNotifications } from "./hooks/useNotifications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/shop/:shopId",
    element: <Product />,
  },
  {
    path: "/account",
    element: <Account />,
  },
]);

export const App: React.FC = () => {
  const dispatch = useTypedDispatch();
  const { news } = useNotifications();

  useEffect(() => {
    console.log("news", news);
  }, [news]);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return <RouterProvider router={router} />;
};
