import { Navigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";

interface UnAuthenticatedRouteProps {
  element: React.ReactNode;
}

function UnAuthenticatedRoute(props: UnAuthenticatedRouteProps) {
  const {authToken} = useAuth();

  if (authToken) {
    return <Navigate to="/" />;
  }

  return props.element;
}

export default UnAuthenticatedRoute;
