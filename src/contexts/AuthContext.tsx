import { createContext } from "react";

type AuthContextValue = [
  string | null,
  React.Dispatch<React.SetStateAction<string | null>>,
];

export const AuthContext = createContext<AuthContextValue>([null, () => {}]);

export default AuthContext;
