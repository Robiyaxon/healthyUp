import axios from "axios";
export const instance = axios.create({
  baseURL: "http://10.10.7.17:8000/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
