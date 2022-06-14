import axios from "axios";
export const instance = axios.create({
  baseURL: "http://10.10.8.46:8000/",
  headers: {
    "Content-Type":"application/json",
    "Accept":"application/json"
  },
});
