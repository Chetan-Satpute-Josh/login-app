import { Navigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";

interface AuthenticatedRouteProps {
  element: React.ReactNode;
}

function AuthenticatedRoute(props: AuthenticatedRouteProps) {
  const {authToken} = useAuth();

  if (authToken === null) {
    return <Navigate to="/login" />;
  }

  return props.element;
}

export default AuthenticatedRoute;
