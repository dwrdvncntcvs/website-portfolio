import { useContext } from "react";
import {
  AuthContext,
  HomeContext,
  ProjectsContext,
  SkillsContext,
} from "../context";

const useAuth = () => {
  return useContext(AuthContext);
};

const useHomeContext = () => {
  return useContext(HomeContext);
};

const useSkillsContext = () => {
  return useContext(SkillsContext);
};

const useProjectsContext = () => {
  return useContext(ProjectsContext);
};

export { useAuth, useHomeContext, useSkillsContext, useProjectsContext };
