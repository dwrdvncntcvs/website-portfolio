import { useContext } from "react";
import { AuthContext, HomeContext, SkillsContext } from "../context";

const useAuth = () => {
  return useContext(AuthContext);
};

const useHomeContext = () => {
  return useContext(HomeContext);
};

const useSkillsContext = () => {
  return useContext(SkillsContext);
};

export { useAuth, useHomeContext, useSkillsContext };
