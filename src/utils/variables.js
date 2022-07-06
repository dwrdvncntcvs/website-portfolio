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
} from "react-icons/si";

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
  },
  {
    value: SiNodedotjs,
    ref: "nodejs",
  },
  {
    value: SiJavascript,
    ref: "javascript",
  },
  {
    value: SiAngular,
    ref: "angularjs",
  },
  {
    value: SiSequelize,
    ref: "sequelize",
  },
  {
    value: SiTypescript,
    ref: "typescript",
  },
  {
    value: SiExpress,
    ref: "express",
  },
  {
    value: SiPython,
    ref: "python",
  },
  {
    value: SiDjango,
    ref: "django",
  },
  {
    value: SiIonic,
    ref: "ionic",
  },
  {
    value: SiFirebase,
    ref: "firebase",
  },
  {
    value: SiPostgresql,
    ref: "postgresql",
  },
];

const SKILL_TYPE_VAR = {
  SOFT: "soft",
  TECHNICAL: "technical",
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
};
