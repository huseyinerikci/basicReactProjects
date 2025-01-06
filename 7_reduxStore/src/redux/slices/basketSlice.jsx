import { createSlice } from "@reduxjs/toolkit";
const getBasketStorage = () => {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  }
  return [];
};

const initialState = {
  products: getBasketStorage(),
  drawer: false,
  totalAmount: 0,
};
const writeBasketStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct =
        state.products &&
        state.products.find((product) => product.id === action.payload.id);
      if (findProduct) {
        const extraProducts = state.products.filter(
          (product) => product.id !== action.payload.id
        );
        findProduct.count += action.payload.count;
        state.products = [...extraProducts, findProduct];
        writeBasketStorage(state.products);
      } else {
        state.products = [...state.products, action.payload];
        writeBasketStorage(state.products);
      }
    },
    deleteBasket: (state, action) => {
      const filtred = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.products = filtred;
      writeBasketStorage(state.products);
    },
    setDrawer: (state) => {
      state.drawer = !state.drawer;
    },
    calculateBasket: (state) => {
      state.totalAmount = 0;
      state.products &&
        state.products.map((product) => {
          state.totalAmount += product.price * product.count;
        });
    },
  },
});
export const { addToBasket, setDrawer, calculateBasket, deleteBasket } =
  basketSlice.actions;
export default basketSlice.reducer;
