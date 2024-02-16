'use client'

import { addToCart, likedProducts } from '@/redux/shop-slicer'
import { ProductTypes } from '@/types/user'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'

const AddProductFooter = ({ product }: { product: ProductTypes }) => {
  const dispatch = useDispatch()

  return (
    <div className="flex flex-wrap items-center -mx-4 ">
      <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
        <button
          onClick={() => {
            dispatch(addToCart(product)),
              toast.success('Added to Cart', {
                position: toast.POSITION.TOP_CENTER,
              })
          }}
          className="flex items-center justify-center w-full p-4 text-orange-500 border border-orange-500 rounded-md dark:text-gray-200 dark:border-orange-600 hover:bg-orange-600 hover:border-orange-600 hover:text-gray-100 dark:bg-orange-600 dark:hover:bg-orange-700 dark:hover:border-orange-700 dark:hover:text-gray-300"
        >
          Add to Cart
        </button>
      </div>
      <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
        <button
          onClick={() => {
            dispatch(likedProducts(product)),
              toast.success('Added to Wishlist', {
                position: toast.POSITION.TOP_CENTER,
              })
          }}
          className="flex items-center justify-center w-full p-4 text-orange-500 border border-orange-500 rounded-md dark:text-gray-200 dark:border-orange-600 hover:bg-orange-600 hover:border-orange-600 hover:text-gray-100 dark:bg-orange-600 dark:hover:bg-orange-700 dark:hover:border-orange-700 dark:hover:text-gray-300"
        >
          Add to wishlist
        </button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default AddProductFooter
