import { z } from 'zod'

export const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(50, { message: 'Name cannot exceed 50 characters.' }),
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters.' }),
  passwordConfirm: z.string(),
})

export const formSchemaSignIn = z.object({
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters.' }),
})

// account info

export const PersonalInfoForm = z.object({
  firstName: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters long' })
    .max(50, { message: 'First name cannot be longer than 50 characters' }),
  lastName: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters long' })
    .max(50, { message: 'Last name cannot be longer than 50 characters' }),
  phoneNumber: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 characters long' })
    .max(15, { message: 'Phone number cannot be longer than 15 characters' }),
})

export const BillingInfoForm = z.object({
  cardNumber: z
    .string()
    .min(16, { message: 'Card number must be at least 16 characters long' })
    .max(16, { message: 'Card number must be at most 16 characters long' }),
  cardHolderName: z
    .string()
    .min(4, { message: 'Last name must be at least 4 characters long' })
    .max(50, { message: 'Last name cannot be longer than 50 characters' }),
  expirationDate: z
    .string()
    .min(2, { message: 'Expiration date must be at least 2 characters long' })
    .max(50, {
      message: 'Expiration date cannot be longer than 50 characters',
    }),
  cvv: z
    .string()
    .min(3, { message: 'CVV must be at least 3 characters long' })
    .max(4, { message: 'CVV must be at most 4 characters long' }),
})
export const ShippingInfoForm = z.object({
  street: z
    .string()
    .min(2, { message: 'Street must be at least 2 characters long' }),
  city: z
    .string()
    .min(2, { message: 'City must be at least 2 characters long' }),
  state: z
    .string()
    .min(2, { message: 'State must be at least 2 characters long' }),
  zipCode: z
    .string()
    .min(5, { message: 'Zip code must be at least 5 characters long' }),
  fullAddress: z
    .string()
    .min(5, { message: 'Zip code must be at least 5 characters long' }),
})

// admin
export const productSchema = z.object({
  title: z.string().min(3),
  oldPrice: z.string(),
  newPrice: z.string(),
  description: z.string().min(10),
  images: z.array(z.string()).refine((val) => val.length <= 5, {
    message: 'You can upload up to 5 images.',
  }),
  category: z.string(),
  material: z.string(),
  stone: z.string(),
  color: z.string(),
  size: z.string(),
})
