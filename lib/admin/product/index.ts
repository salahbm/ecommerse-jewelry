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

// fetch all product from DB
export async function getAllProducts() {
  try {
    await connectDB()
    // Find all products
    const products = await Product.find().sort({ createdAt: -1 }).lean()

    if (products.length === 0) {
      return []
    } else {
      const currentTime = new Date()
      return products.map((item) => ({
        ...item,
        quantity: item.quantity || 0,
        last_updated: currentTime,
      }))
    }
  } catch (error: any) {
    console.log(error.message)
    throw new Error(`Failed to get products: ${error.message}`)
  }
}

export async function getProductByID(productId: string) {
  try {
    await connectDB()
    // Find product by ID
    const product: ProductTypes | null = await Product.findById(
      productId
    ).lean()

    if (!product) {
      // If product not found, you can return null or throw an error
      return null
    } else {
      return {
        ...product,
        quantity: product?.quantity || 0,
      }
    }
  } catch (error: any) {
    console.log(error.message)
    throw new Error(`Failed to get product by ID: ${error.message}`)
  }
}

export async function deleteProductByID(productId: string) {
  try {
    await connectDB()
    // Delete product by ID
    const deletedProduct = await Product.findByIdAndDelete(productId)

    if (!deletedProduct) {
      // If product not found, you can return null or throw an error
      return null // or throw new Error('Product not found');
    }

    // Return true to indicate successful deletion
    return true
  } catch (error: any) {
    console.error(error.message)
    throw new Error(`Failed to delete product by ID: ${error.message}`)
  }
}
