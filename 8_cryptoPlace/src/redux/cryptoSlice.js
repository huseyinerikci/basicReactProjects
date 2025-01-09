import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.coingecko.com/api/v3";

export const fetchAllCoins = createAsyncThunk(
  "crypto/fetchAllCoins",
  async (page) => {
    const response = await axios.get(`${API_URL}/coins/markets`, {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 25,
        page,
      },
    });
    return response.data;
  }
);
export const fetchCoinDetails = createAsyncThunk(
  "crypto/fechCoinDetails",
  async (id) => {
    const response = await axios.get(`${API_URL}/coins/${id}`);
    return response.data;
  }
);
export const fetchCoinHistory = createAsyncThunk(
  "crypto/fetchCoinHistory",
  async ({ id, days }) => {
    const response = await axios.get(`${API_URL}/coins/${id}/market_chart`, {
      params: { vs_currency: "usd", days },
    });
    return response.data;
  }
);

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    allCoins: [],
    selectedCoin: null,
    coinHistory: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCoins.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllCoins.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allCoins = action.payload;
      })
      .addCase(fetchAllCoins.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCoinDetails.fulfilled, (state, action) => {
        state.selectedCoin = action.payload;
      })
      .addCase(fetchCoinHistory.fulfilled, (state, action) => {
        state.coinHistory = action.payload;
      });
  },
});

export default cryptoSlice.reducer;
