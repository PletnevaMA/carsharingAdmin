import axios from "axios";
import { url } from "../const";

const api = axios.create({
  baseURL: url,
});

export default api;
