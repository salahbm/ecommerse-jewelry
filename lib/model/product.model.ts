import mongoose from 'mongoose'

// Define Mongoose schema
const productSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3 },
  oldPrice: { type: Number },
  newPrice: { type: Number },
  description: { type: String, minlength: 10 },
  images: {
    type: [String],
  },
  category: { type: String },
  material: { type: String },
  store: { type: String },
  color: { type: String },
  size: { type: String },
})

// Create the Mongoose model
const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema)

export default Product
