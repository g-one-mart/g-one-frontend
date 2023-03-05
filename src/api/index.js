import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user_info")) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem("user_info").token
    )}`;
  }

  return req;
});

export const signInGoogle = (accessToken) =>
  API.post("/auth/signin", {
    googleAccessToken: accessToken,
  });

export const fetchAllProducts = () => API.get("/products/getall");
