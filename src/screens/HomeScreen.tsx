import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import { RoutePath } from "../lib/router";

function HomeScreen() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate(RoutePath.Login_SCREEN);
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1>Home Screen</h1>
      <Button variant="contained" onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  );
}

export default HomeScreen;
