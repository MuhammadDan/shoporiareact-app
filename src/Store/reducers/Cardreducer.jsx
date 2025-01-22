import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products : [],
}
export const CardSlice = createSlice ({
    name: "Cart",
    initialState,
    reducers: {
      getproducts: (state,action)=>{
        state.products = action.payload;
      },
    },
});
export default CardSlice.reducer;
export const {getproducts} = CardSlice.actions;
