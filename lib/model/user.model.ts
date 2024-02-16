import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  street: { type: String },
  city: { type: String },
  state: { type: String },
  zipCode: { type: String },
  fullAddress: { type: String },
});

const billingInfoSchema = new mongoose.Schema({
  cardNumber: { type: String },
  cardHolderName: { type: String },
  expirationDate: { type: String },
  cvv: { type: String },
});

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    personalInfo: {
      firstName: { type: String },
      lastName: { type: String },
      phoneNumber: { type: String },
    },
    address: { type: addressSchema },
    billingInfo: { type: billingInfoSchema },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
