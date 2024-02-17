import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ProductTypes } from '@/types/user'
import { UserTypes } from '../types/user'

interface ShopState {
  productData: ProductTypes[]
  userInfo: null | UserTypes
  likedItem: ProductTypes[]
  cart: ProductTypes[]
}

const initialState: ShopState = {
  productData: [],
  userInfo: null,
  likedItem: [],
  cart: [],
}

export const shopSlicer = createSlice({
  name: 'shop',
  initialState: initialState,
  reducers: {
    setProductData: (state, action: PayloadAction<ProductTypes[]>) => {
      state.productData = action.payload
    },
    removeProductById: (state, action: PayloadAction<string>) => {
      const productIdToRemove = action.payload
      // Use filter to create a new array excluding the product with the specified ID
      state.productData = state.productData.filter(
        (product) => product._id !== productIdToRemove
      )
    },
    addToCart: (state, action) => {
      // Ensure state.cart is an array
      if (!Array.isArray(state.cart)) {
        state.cart = []
      }

      const item = state.cart.find((item) => item._id === action.payload._id)

      if (item) {
        item.quantity += action.payload.quantity
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
    },

    plusQuantity: (state, action) => {
      const item: any = state.cart.find(
        (item) => item._id === action.payload._id
      )
      if (item) {
        item.quantity++
      }
    },
    minusQuantity: (state, action) => {
      const item: any = state.cart.find(
        (item) => item._id === action.payload._id
      )
      if (item?.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--
      }
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload)
    },
    resetCart: (state) => {
      state.cart = []
    },
    // liked products
    likedProducts: (state, action) => {
      const likedItemExist = state.likedItem.find(
        (item: any) => item._id === action.payload._id
      )

      if (likedItemExist) {
        return
      } else {
        state.likedItem.push(action.payload)
      }
    },
    unlikeItem: (state, action) => {
      state.likedItem = state.likedItem.filter(
        (item: any) => item?._id !== action.payload
      )
    },
  },
})

export const {
  setProductData,
  removeProductById,
  addToCart,
  plusQuantity,
  minusQuantity,
  deleteItem,
  resetCart,
  likedProducts,
  unlikeItem,
} = shopSlicer.actions
export default shopSlicer.reducer
