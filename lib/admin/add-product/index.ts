'use server'
import { connectDB } from '@/lib/database/mongoose'
import Product from '@/lib/model/product.model'
import { ProductTypes } from '@/types/user'
import { v2 as cloudinary } from 'cloudinary'
export async function storeProduct(productData: ProductTypes) {
  console.log(productData.images)
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  })
  try {
    // Check if productData.images is an array
    if (!Array.isArray(productData.images)) {
      throw new Error('Images should be an array')
    }

    const cloudinaryUploads = await Promise.all(
      productData.images.map(async (imageFile: any) => {
        // Assuming imageFile is the file name, upload the file to Cloudinary
        const response = await cloudinary.uploader.upload(imageFile)
        return response.secure_url
      })
    )
    console.log(`cloudinaryUploads:`, cloudinaryUploads)

    // Update the product data with Cloudinary image URLs
    const productDataWithImages: ProductTypes = {
      ...productData,
      images: cloudinaryUploads,
    }
    console.log(`productDataWithImages:`, productDataWithImages)

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
