import { createBrowserRouter } from "react-router-dom";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import AuthenticatedRoute from "../components/AuthenticatedRoute";
import UnAuthenticatedRoute from "../components/UnAuthenticatedRoute";

export enum RoutePath {
  HOME_SCREEN = '/',
  Login_SCREEN = '/login',
}

const router = createBrowserRouter([
  {
    path: RoutePath.HOME_SCREEN,
    element: <AuthenticatedRoute element={<HomeScreen />} />,
  },
  {
    path: RoutePath.Login_SCREEN,
    element: <UnAuthenticatedRoute element={<LoginScreen />} />,
  },
]);

export default router;
