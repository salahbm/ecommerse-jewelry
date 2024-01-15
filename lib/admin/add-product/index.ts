import Product from '@/lib/model/product.model'
import { ProductTypes } from '@/types/user'

export async function storeProduct(productData: ProductTypes) {
  try {
    const newProduct = new Product(productData)
    const savedProduct = await newProduct.save()
    console.log('Product saved successfully:', savedProduct)
    return savedProduct
  } catch (error: any) {
    console.error('Error saving product:', error.message)
    throw error
  }
}
