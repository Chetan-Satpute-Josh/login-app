import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import { RoutePath } from "../lib/router";

function LoginScreen() {
  const navigate = useNavigate();
  const {login} = useAuth();

  const handleLogin = () => {
    login('token');
    navigate(RoutePath.HOME_SCREEN);
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1>Login Screen</h1>

      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
}

export default LoginScreen;
