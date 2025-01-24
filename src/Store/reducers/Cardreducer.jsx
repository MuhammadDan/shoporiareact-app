import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [], // Fetched products
  products: [], // Cart items
};

export const CardSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const exists = state.products.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.products.push(action.payload);
      }
    },
    remove: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload);
    },
    getproducts: (state, action) => {
      state.allProducts = action.payload; // Only update fetched products
    },
  },
});

export default CardSlice.reducer;
export const { getproducts, add, remove } = CardSlice.actions;
