import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import LoadingScreen from "./screens/LoadingScreen";
import router from "./lib/router";
import theme from "./lib/theme";
import AuthContext from "./contexts/AuthContext";
import LocalStorage from "./services/localStorage";

function App() {
  const authContext = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedToken = LocalStorage.getItem(LocalStorage.AUTH_TOKEN);

    const [, setAuthToken] = authContext;
    setAuthToken(storedToken);

    setIsLoading(false);
  }, [authContext]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
