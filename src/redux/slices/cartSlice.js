import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
      cartItems: JSON.parse(localStorage.getItem("cart")) || [],
    value: 0,
  },
  reducers: {
    addToCartItem: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        alert("Item is already in the cart...")
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      state.value += 1;
    },
    decrementValue: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);

      if (item) {
        item.quantity -= 1;
        state.value -= 1;

        if (item.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (i) => i.id !== action.payload,
          );
        }
      }
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export const { decrementValue, addToCartItem, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
