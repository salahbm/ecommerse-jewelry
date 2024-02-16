'use server'
import { ProductTypes } from '@/types/user'
import { getAllProducts } from '../admin/add-product'

export const checkTheTimeAndFetch = async (productData: ProductTypes[]) => {
  try {
    // If the length of productData is less than 2 or last_updated is undefined, fetch new data
    if (productData.length === 0 || productData[0].last_updated === undefined) {
      console.log('first time data fetching')

      const products = await getAllProducts()

      return products
    }

    // If the length of productData is at least 2, check the last updated time
    const lastUpdatedString = productData[0].last_updated
    const getTime = new Date(lastUpdatedString).getTime()

    if (Date.now() - getTime > 5 * 60 * 1000) {
      console.log('Fetching updated product data')

      const updatedCoins = await getAllProducts()
      return updatedCoins
    } else {
      console.log('returning same product data')

      return productData
    }
  } catch (error) {
    console.log(error)
  }
}
