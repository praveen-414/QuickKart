import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsData = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      return res.data;
    } catch (error) {
      throw error;
    }
  },
);
const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: undefined,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsData.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(getProductsData.fulfilled, (state, action) => {
        ((state.status = "Succeeded"), (state.items = action.payload));
      })
      .addCase(getProductsData.rejected, (state) => {
        state.status = "Failed";
      });
  },
});
export default productSlice.reducer;
