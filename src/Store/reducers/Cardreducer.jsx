import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products : [],
}
export const CardSlice = createSlice ({
    name: "Cart",
    initialState,
    reducers: {

    }
})
export default CardSlice.reducer;
