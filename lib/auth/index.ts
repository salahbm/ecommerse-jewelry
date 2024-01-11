"use server";

import { connectDB } from "../database/mongoose";
import User from "../model/user.model";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// User Actions
export async function saveUsers(users: any) {
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
        username: users.name,
        email: users.email,
        password: hashedPassword,
        personalInfo: {
          firstName: undefined,
          lastName: undefined,
          phoneNumber: users.phoneNumber,
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
