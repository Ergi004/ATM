import axios from "./axios";
import { UserCredentials, UserLogin } from "./types";

export const Auth = {
  async register(userCredentials: UserCredentials) {
    try {
      const response = await axios.post("/auth/register", userCredentials);
      return response;
    } catch {
      return new Error("User did not register");
    }
  },

  async login(userCredentials: UserLogin) {
    try {
      const response = await axios.post("/auth/login", userCredentials);
      console.log("arditi", userCredentials);
      return response;
    } catch {
      return new Error("Login failed");
    }
  },

  async checkAuth() {
    try {
      return await axios.get("/auth/check-auth");
    } catch {
      return false;
    }
  },

  async logout() {
    await axios.post("/auth/logout", {}, { withCredentials: true });
  },
};
