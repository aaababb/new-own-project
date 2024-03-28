import { configureStore } from '@reduxjs/toolkit'
import productSlice from './product/productSlice'
import CartSlice from './cart/CartSlice'

const store = configureStore({
  reducer: {
    products: productSlice,
    cart: CartSlice,
  },
})

export default store