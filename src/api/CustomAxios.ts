import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "./const";

export const apiInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});
