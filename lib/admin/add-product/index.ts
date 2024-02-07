'use server'
import { connectDB } from '@/lib/database/mongoose'
import Product from '@/lib/model/product.model'
import { ProductTypes } from '@/types/user'
import { v2 as cloudinary } from 'cloudinary'

export async function storeProduct(productData: ProductTypes) {
  console.log(productData)
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  })
  try {
    const cloudinaryUploads = await Promise.all(
      (productData.images as any).map(async (imageFile: string) => {
        // Use the file instead of imageUrl
        const response = await cloudinary.uploader.upload(imageFile)
        console.log(`response:`, response)
        return response.secure_url
      })
    )
    console.log(`cloudinaryUploads:`, cloudinaryUploads)

    // Update the product data with Cloudinary image URLs
    const productDataWithImages: ProductTypes = {
      ...productData,
      images: cloudinaryUploads,
    }

    await connectDB()
    const newProduct = new Product(productDataWithImages)
    const savedProduct = await newProduct.save()
    console.log('Product saved successfully:', savedProduct)
    return savedProduct
  } catch (error: any) {
    console.error('Error saving product:', error.message)
    throw error
  }
}
