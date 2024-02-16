import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ProductTypes } from '@/types/user'
import { UserTypes } from '../types/user'

interface ShopState {
  productData: ProductTypes[]
  userInfo: null | UserTypes
  likedItem: ProductTypes[]
}

const initialState: ShopState = {
  productData: [],
  userInfo: null,
  likedItem: [],
}

export const shopSlicer = createSlice({
  name: 'shop',
  initialState: initialState,
  reducers: {
    setProductData: (state, action: PayloadAction<ProductTypes[]>) => {
      state.productData = action.payload
    },
    // addToCart: (state, action) => {
    //   const item = state.productData.find(
    //     (item: any) => item._id === action.payload._id
    //   )

    //   if (item) {
    //     item.quantity += action.payload.quantity
    //   } else {
    //     state.productData.push(action.payload)
    //   }
    // },
    // plusQuantity: (state, action) => {
    //   const item = state.productData.find(
    //     (item: any) => item._id === action.payload._id
    //   )
    //   if (item) {
    //     item.quantity++
    //   }
    // },
    // minusQuantity: (state, action) => {
    //   const item = state.productData.find(
    //     (item: any) => item._id === action.payload._id
    //   )
    //   if (item?.quantity === 1) {
    //     item.quantity = 1
    //   } else {
    //     item!.quantity--
    //   }
    // },
    // deleteItem: (state, action) => {
    //   state.productData = state.productData.filter(
    //     (item) => item._id !== action.payload
    //   )
    // },

    resetCart: (state) => {
      state.productData = []
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
  //   addToCart,
  //   plusQuantity,
  //   minusQuantity,
  //   deleteItem,
  resetCart,
  likedProducts,
  unlikeItem,
} = shopSlicer.actions
export default shopSlicer.reducer
