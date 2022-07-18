import { useContext } from "react";
import {
  AboutMeContext,
  AuthContext,
  ContactContext,
  HomeContext,
  PersonalContext,
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

const useAboutMeContext = () => {
  return useContext(AboutMeContext);
};

const usePersonalContext = () => {
  return useContext(PersonalContext);
};

export {
  useAuth,
  useHomeContext,
  useSkillsContext,
  useProjectsContext,
  useContactContext,
  useAboutMeContext,
  usePersonalContext,
};
