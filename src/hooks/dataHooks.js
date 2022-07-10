import { useContext } from "react";
import {
  AuthContext,
  ContactContext,
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

const useContactContext = () => {
  return useContext(ContactContext);
};

export {
  useAuth,
  useHomeContext,
  useSkillsContext,
  useProjectsContext,
  useContactContext,
};
