import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { signInGoogle } from "../api/commponApi";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  async function handleGoogleLoginSuccess(tokenResponse) {
    setIsLoading(true);
    setError(null);
    const accessToken = tokenResponse.access_token;

    try {
      const response = await signInGoogle(accessToken);

      if (response.statusText === "OK") {
        const { data } = response;
        localStorage.setItem("user", JSON.stringify(data));

        dispatch({ type: "LOGIN", payload: data });
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setError(response.error);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

  return { login, isLoading, error };
};
