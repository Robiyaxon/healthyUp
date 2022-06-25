import axios from "axios";

export const instance = axios.create({
  baseURL: "http://ehealthuz.pythonanywhere.com/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
