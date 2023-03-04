import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducer/cartReducer";
import { otherReducer } from "./reducer/otherReducer";
import { productReducer } from "./reducer/productReducer";
import { userReducer } from "./reducer/userReducer";

export const store = configureStore({
   reducer: {
      user: userReducer,
      other: otherReducer,
      product: productReducer,
      cart: cartReducer,
   },
});

export const server = "https://istore-app-server.onrender.com/api/v1"
