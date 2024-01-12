"use server";

import { connectDB } from "../database/mongoose";
import User from "../model/user.model";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { UserTypes } from "@/types/user";
import mongoose from "mongoose";

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
  firstName: string,
  lastName: string,
  phoneNumber: string
) {
  try {
    await connectDB();

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          "personalInfo.firstName": firstName,
          "personalInfo.lastName": lastName,
          "personalInfo.phoneNumber": phoneNumber,
        },
      },
      { new: true }
    );

    return updatedUser;
  } catch (error: any) {
    throw new Error(`Failed to update personal information: ${error.message}`);
  }
}

// Update billing information
export async function updateBillingInfo(
  userId: string,
  cardNumber: string,
  cardHolderName: string,
  expirationDate: string,
  cvv: string
) {
  try {
    await connectDB();

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          "billingInfo.cardNumber": cardNumber,
          "billingInfo.cardHolderName": cardHolderName,
          "billingInfo.expirationDate": expirationDate,
          "billingInfo.cvv": cvv,
        },
      },
      { new: true }
    );

    return updatedUser;
  } catch (error: any) {
    throw new Error(`Failed to update billing information: ${error.message}`);
  }
}

// Update shipping information
export async function updateShippingInfo(
  userId: string,
  street: string,
  city: string,
  state: string,
  zipCode: string,
  fullAddress: string
) {
  try {
    await connectDB();

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          "address.street": street,
          "address.city": city,
          "address.state": state,
          "address.zipCode": zipCode,
          "address.fullAddress": fullAddress,
        },
      },
      { new: true }
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
    const user = await User.findOne({ email });

    if (!user) return null;

    return user;
  } catch (error: any) {
    console.log("Can't find user by email", error.message);
    throw new Error("Error finding user by email");
  }
}
