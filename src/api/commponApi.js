import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

// Auth-API
export const signInGoogle = (accessToken) =>
  API.post("/auth/signin", {
    googleAccessToken: accessToken,
  });

// Products-API
export const fetchAllProducts = () => API.get("/products/getall");
