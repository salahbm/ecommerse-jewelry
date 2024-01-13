"use server";

import { connectDB } from "../database/mongoose";
import User from "../model/user.model";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { UserTypes } from "@/types/user";

// User Actions
export async function saveUsers(users: UserTypes) {
  if (!users) return;

  try {
    await connectDB();

    const existingUser = await User.findOne({ email: users.email });

    if (existingUser) {
      console.log("User exists", existingUser);
      // Handle existing user logic (e.g., redirect)
      return new NextResponse("Email is in use, choose another one", {
        status: 400,
      });
    } else {
      // Create a new user with limited information
      const hashedPassword = await bcrypt.hash(users.password, 5);
      const newUser = new User({
        username: users.username,
        email: users.email,
        password: hashedPassword,
        personalInfo: {
          firstName: undefined,
          lastName: undefined,
          phoneNumber: undefined,
        },
        address: {
          street: undefined,
          city: undefined,
          state: undefined,
          zipCode: undefined,
          fullAddress: undefined,
        },
        billingInfo: {
          cardNumber: undefined,
          cardHolderName: undefined,
          expirationDate: undefined,
          cvv: undefined,
        },
      });

      // Save the user to the database
      await newUser.save();
      console.log("User created successfully");

      return newUser;
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}

// Update personal information
export async function updatePersonalInfo(
  userId: string,
  personalInfo: { firstName: string; lastName: string; phoneNumber: string }
) {
  console.log(`personalInfo:`, personalInfo);
  try {
    await connectDB();

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          "personalInfo.firstName": personalInfo.firstName,
          "personalInfo.lastName": personalInfo.lastName,
          "personalInfo.phoneNumber": personalInfo.phoneNumber,
        },
      },
      { new: true, lean: true }
    );

    return updatedUser;
  } catch (error: any) {
    throw new Error(`Failed to update personal information: ${error}`);
  }
}

// Update billing information
export async function updateBillingInfo(
  userId: string,
  cardInfo: {
    cardNumber: string;
    cardHolderName: string;
    expirationDate: string;
    cvv: string;
  }
) {
  try {
    await connectDB();

    const cvvHash = await bcrypt.hash(cardInfo.cvv, 5);
    const cardNumberHash = await bcrypt.hash(cardInfo.cardNumber, 5);
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          "billingInfo.cardNumber": cardNumberHash,
          "billingInfo.cardHolderName": cardInfo.cardHolderName,
          "billingInfo.expirationDate": cardInfo.expirationDate,
          "billingInfo.cvv": cvvHash,
        },
      },
      { new: true, lean: true }
    );

    return updatedUser;
  } catch (error: any) {
    throw new Error(`Failed to update billing information: ${error.message}`);
  }
}

// Update shipping information
export async function updateShippingInfo(
  userId: string,
user:{
  street: string,
  city: string,
  state: string,
  zipCode: string,
  fullAddress: string
}
) {
  try {
    await connectDB();

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          "address.street": user.street,
          "address.city": user.city,
          "address.state": user.state,
          "address.zipCode": user.zipCode,
          "address.fullAddress": user.fullAddress,
        },
      },
      { new: true, lean: true }
    );

    return updatedUser;
  } catch (error: any) {
    throw new Error(`Failed to update shipping information: ${error.message}`);
  }
}

// get current user
export async function getUserByEmail(email: string) {
  try {
    await connectDB();
    const user: UserTypes | null = await User.findOne({ email }).lean();

    if (!user) return null;
    const userData = {
      _id: user._id !== undefined ? user._id.toString() : "",
      username: user.username,
      email: user.email,
      password: user.password,
      personalInfo: user.personalInfo,
      address: user.address,
      billingInfo: user.billingInfo,
    };
    return userData;
  } catch (error: any) {
    console.log("Can't find user by email", error.message);
    throw new Error("Error finding user by email");
  }
}
