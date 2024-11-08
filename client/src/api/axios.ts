import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:3006",
  withCredentials: true,
});
export default instance;
