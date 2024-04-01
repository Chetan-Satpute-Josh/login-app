import { useContext } from "react";

import AuthContext from "../contexts/AuthContext";
import LocalStorage from "../services/localStorage";

function useAuth() {
  const [authToken, setAuthToken] = useContext(AuthContext);

  const login = (token: string) => {
    LocalStorage.setItem("auth-token", token);
    setAuthToken(token);
  };

  const logout = () => {
    LocalStorage.removeItem("auth-token");
    setAuthToken(null);
  };

  return { authToken, login, logout };
}

export default useAuth;
