import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import searchSlice from "./slices/searchSlice";
import activeTab from "./slices/ActiveTab";
import cartSlice from "./slices/cartSlice";


const store = configureStore({
  reducer: {
    products: productReducer,
    searching: searchSlice,
    categoryTab: activeTab,
    cart: cartSlice,
   
  },
});

export default store;
