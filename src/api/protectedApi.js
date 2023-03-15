import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

//checks for jwt token in localstorage
// if found adds in req.authorization header
API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  }
  return req;
});

// User-API
export const fetchProfile = () => API.get("/users/profile");
