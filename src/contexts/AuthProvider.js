import useFirebase from "./../hooks/useFirebase";
import { createContext } from "react";

export const Context = createContext();

const AuthProvider = ({ children }) => {
  const allContext = useFirebase();

  return <Context.Provider value={allContext}>{children}</Context.Provider>;
};

export default AuthProvider;
