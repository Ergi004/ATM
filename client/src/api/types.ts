export interface UserCredentials {
  id: number;
  username: string;
  email: string;
  phoneNumber: number;
  password: string;
  role?: "SimpleUser" | "Admin";
}
