import { PropsWithChildren, createContext, useEffect } from "react";

type AuthData = {};

const AuthContext = createContext<AuthData>({});

export default function AuthProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    console.log("Auth provider is mou8nted");
  }, []);
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
