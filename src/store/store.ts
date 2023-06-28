import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/ProductSlice";
import cartReducer from "./reducers/CartSlice";
import authReducer from "./reducers/AuthSlice";
import notificationsReducer from "./reducers/NotificationSlice";

const rootReducer = combineReducers({
  productReducer,
  cartReducer,
  authReducer,
  notificationsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
