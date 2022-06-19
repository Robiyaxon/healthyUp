import axios from "axios";

export const instance = axios.create({
  baseURL: "http://192.168.1.3:8000/",
  headers: {
    "Content-Type":"application/json",
    "Accept":"application/json",
  },
});
