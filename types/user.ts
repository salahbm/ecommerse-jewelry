interface Address {
  street?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  fullAddress?: string;
}

interface BillingInfo {
  cardNumber?: string;
  cardHolderName?: string;
  expirationDate?: string;
  cvv?: string;
}

interface PersonalInfo {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}

export interface UserTypes extends Document {
  username: string;
  email: string;
  password: string;
  passwordConfirm?: string;
  personalInfo?: PersonalInfo[];
  address?: Address[];
  billingInfo?: BillingInfo[];
}
