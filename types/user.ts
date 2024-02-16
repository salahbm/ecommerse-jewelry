interface Address {
  street?: string
  city?: string
  state?: string
  zipCode?: string
  fullAddress?: string
}

interface BillingInfo {
  cardNumber?: string
  cardHolderName?: string
  expirationDate?: string
  cvv?: string
}

interface PersonalInfo {
  firstName?: string
  lastName?: string
  phoneNumber?: string
}

export interface UserTypes extends Document {
  _id?: string | undefined
  username: string
  email: string
  password: string
  passwordConfirm?: string
  personalInfo?: PersonalInfo
  address?: Address
  billingInfo?: BillingInfo
}

export type ProductTypes = {
  _id?: string
  title: string
  oldPrice: string
  newPrice: string
  description: string
  images?: any | undefined
  category: string
  material: string
  stone: string
  color: string
  size: string
  last_updated?: string
  quantity?: number
}
