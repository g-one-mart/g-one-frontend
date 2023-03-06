import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthContextProvider } from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthContextProvider>
        <GoogleOAuthProvider clientId="964795636967-ho85cm3ndost06uqq85iehvkhvqrl3j3.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </AuthContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
