import { HiChatAlt2, HiClock, HiFire, HiSparkles } from "react-icons/hi";
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiAngular,
  SiSequelize,
  SiTypescript,
  SiExpress,
  SiPython,
  SiDjango,
  SiIonic,
  SiFirebase,
  SiPostgresql,
  SiSass,
  SiYarn,
  SiNpm,
  SiCapacitor,
  SiLeaflet,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const API_URL = {
  MAILER: "https://portfolio-mailer-app.herokuapp.com",
  // MAILER: "http://localhost:5000",
};

const AUTH_VARIABLE = {
  SET_ERROR: "setError",
  SET_ACCESS: "setAccess",
};

const SOC_MED = {
  FB: "https://www.facebook.com/DwrdVncntCvs.7",
  TW: "https://twitter.com/dwrdvncntcvs",
  LI: "https://www.linkedin.com/in/edward-vincent-cuevas-5a2485240/",
};

const ACCESS_VAR = {
  PRIVATE: "private",
  PUBLIC: "public",
};

const COLLECTION = {
  HOME: "home",
};

const HOME_CONTEXT_VAR = {
  GET_HOME_DATA: "getHomeData",
};

const SKILLS_CONTEXT_VAR = {
  GET_SKILLS_DATA: "getSkillsData",
};

const PROJECTS_CONTEXT_VAR = {
  GET_PROJECTS_DATA: "getProjectsData",
  GET_PROJECTS_DETAILS_DATA: "getProjectDetailsData",
};

const CONTACT_CONTEXT_VAR = {
  GET_CONTACT_DATA: "getContactData",
  GET_CONTACT_RESPONSE_MSG: "getContactResponseMsg",
};

const ABOUT_ME_CONTEXT_VAR = {
  GET_ABOUT_ME_DATA: "getAboutMeData",
};

const PERSONAL_CONTEXT_VAR = {
  GET_PERSONAL_DATA: "getPersonalData",
};

const SOFT_ICON_VAR = [
  {
    value: HiChatAlt2,
    ref: "message",
  },
  {
    value: HiClock,
    ref: "time",
  },
  {
    value: HiFire,
    ref: "fire",
  },
  {
    value: HiSparkles,
    ref: "sparkles",
  },
];

const TECHNICAL_ICON_VAR = [
  {
    value: SiReact,
    ref: "react",
    color: "#61DAFB",
  },
  {
    value: SiNodedotjs,
    ref: "nodejs",
    color: "#339933",
  },
  {
    value: SiJavascript,
    ref: "javascript",
    color: "#F7DF1E",
  },
  {
    value: SiAngular,
    ref: "angularjs",
    color: "#DD0031",
  },
  {
    value: SiSequelize,
    ref: "sequelize",
    color: "#52B0E7",
  },
  {
    value: SiTypescript,
    ref: "typescript",
    color: "#3178C6",
  },
  {
    value: SiExpress,
    ref: "express",
    color: "#000000",
  },
  {
    value: SiPython,
    ref: "python",
    color: "#3776AB",
  },
  {
    value: SiDjango,
    ref: "django",
    color: "#2ba977",
  },
  {
    value: SiIonic,
    ref: "ionic",
    color: "#3880FF",
  },
  {
    value: SiFirebase,
    ref: "firebase",
    color: "#FFCA28",
  },
  {
    value: SiPostgresql,
    ref: "postgresql",
    color: "#4169E1",
  },
  {
    value: SiSass,
    ref: "sass",
    color: "#CC6699",
  },
  {
    value: SiYarn,
    ref: "yarn",
    color: "#2C8EBB",
  },
  {
    value: SiNpm,
    ref: "npm",
    color: "#CB3837",
  },
  {
    value: SiCapacitor,
    ref: "capacitor",
    color: "#119EFF",
  },
  {
    value: SiLeaflet,
    ref: "leaflet",
    color: "#199900",
  },
  {
    value: SiHtml5,
    ref: "html5",
    color: "#E34F26",
  },
  {
    value: SiCss3,
    ref: "css3",
    color: "#1572B6",
  },
];

const SKILL_TYPE_VAR = {
  SOFT: "soft",
  TECHNICAL: "technical",
};

const RES_STATUS = {
  SUCCESS: "success",
  ERROR: "error",
};

export {
  AUTH_VARIABLE,
  SOC_MED,
  ACCESS_VAR,
  COLLECTION,
  HOME_CONTEXT_VAR,
  SKILLS_CONTEXT_VAR,
  SOFT_ICON_VAR,
  SKILL_TYPE_VAR,
  TECHNICAL_ICON_VAR,
  PROJECTS_CONTEXT_VAR,
  CONTACT_CONTEXT_VAR,
  API_URL,
  ABOUT_ME_CONTEXT_VAR,
  PERSONAL_CONTEXT_VAR,
  RES_STATUS,
};
