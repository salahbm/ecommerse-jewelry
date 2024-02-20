'use server'
import { connectDB } from '@/lib/database/mongoose'
import User from '@/lib/model/user.model'

export async function getAllUsers() {
  try {
    await connectDB()
    // Find all products
    const users = await User.find().sort({ createdAt: -1 }).lean()

    if (users.length === 0) {
      return []
    } else {
      return users
    }
  } catch (error: any) {
    console.log(error.message)
    throw new Error(`Failed to get users: ${error.message}`)
  }
}
