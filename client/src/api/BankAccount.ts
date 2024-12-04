import axios from "./axios";
import { BankAccounts } from "./types";

export const AccountApi = {
  async create(accountCredentials: BankAccounts) {
    try {
      const response = await axios.post("/bank-acc/create", accountCredentials);
      console.log(response);
      return response;
    } catch {
      return new Error("User did not register");
    }
  },

  //   async delete() {
  //     await axios.post("/auth/logout", {}, { withCredentials: true });
  //   },
};
