import axios from "./axios";
import { BankAccounts } from "./types";

export const AccountApi = {
  async create(accountCredentials: BankAccounts) {
    try {
      const response = await axios.post("/bank-acc/create", accountCredentials);
      return response;
    } catch {
      return new Error("Bank account creation failed");
    }
  },
  async getUserAccounts(userId: number) {
    try {
      const response = await axios.get(
        `/bank-acc/getAccountsByUserId/${userId}`
      );
      return response.data;
    } catch {
      return new Error("Cannot get bank accounts");
    }
  },
};
