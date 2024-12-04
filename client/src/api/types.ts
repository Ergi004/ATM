export interface UserCredentials {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
}
export interface UserLogin {
  email: string;
  password: string;
}

export interface BankAccounts {
  userId: number;
  balance: number;
  accountType: "Deposit" | "Savings";
}
