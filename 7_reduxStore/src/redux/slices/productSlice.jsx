import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  products: [],
  selectedProduct: [],
  loading: false,
  searchQuery: "",
};
const BASE_URL = "https://fakestoreapi.com";
export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  }
);
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    //veriler gelirken loading göster
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    //ürünleri  göster
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
  },
});
export const { setSelectedProduct, setSearchQuery } = productSlice.actions;
export default productSlice.reducer;
