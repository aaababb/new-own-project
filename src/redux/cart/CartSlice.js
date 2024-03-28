import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        carts: [],
        
    },
    reducers: {
        addToCart: (state,action) => {
            console.log(action)
            const id = action.payload.id;
        },

    }
})
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;