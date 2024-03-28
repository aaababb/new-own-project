import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        getProductStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        getProductSucces: (state,action) => {
            state.loading = false;
            state.items = action.payload;
        },
        getProductError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const {getProductStart,getProductSucces,getProductError} = productSlice.actions
export default productSlice.reducer