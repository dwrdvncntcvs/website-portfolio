import { useContext } from "react";
import {
  AboutMeContext,
  AuthContext,
  CertificateContext,
  ContactContext,
  ExperiencesContext,
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

const useCertificateContext = () => {
  return useContext(CertificateContext);
};

const useExperiencesContext = () => {
  return useContext(ExperiencesContext);
};

export {
  useAuth,
  useHomeContext,
  useSkillsContext,
  useProjectsContext,
  useContactContext,
  useAboutMeContext,
  usePersonalContext,
  useCertificateContext,
  useExperiencesContext,
};
