import { useContext } from "react";
import { AuthContext, HomeContext } from "../context";

const useAuth = () => {
  return useContext(AuthContext);
};

const useHomeContext = () => {
  return useContext(HomeContext);
};

export { useAuth, useHomeContext };
