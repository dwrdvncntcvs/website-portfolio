import {
  API_URL,
  SKILL_TYPE_VAR,
  SOFT_ICON_VAR,
  TECHNICAL_ICON_VAR,
} from "./variables";

const accessLink = (path = "", user) => {
  return user ? `/admin${path}` : path;
};

const getAuthError = (error = "") => {
  const errorMessage = error.split("Error (").reverse()[0].split(")")[0];

  let message;
  switch (errorMessage) {
    case `auth/invalid-email`:
      message = "Enter a valid email address";
      break;
    case `auth/user-not-found`:
      message = "User does not exist";
      break;
    case "auth/wrong-password":
      message = "Password is incorrect";
      break;
    case "auth/internal-error":
      message = "Please enter a password";
      break;
    default:
      return;
  }

  return message;
};

const checkImageExt = (imageName = "") => {
  return /\.svg|\.jpeg|\.png|\.jpg/g.test(imageName) ? true : false;
};

const checkIfUserActive = (user) => {
  return Object.keys(user).length >= 1;
};

const getIcon = (iconName, type) => {
  let icon = null;

  if (type === SKILL_TYPE_VAR.SOFT)
    icon = SOFT_ICON_VAR.filter((icon) => icon.ref === iconName);

  if (type === SKILL_TYPE_VAR.TECHNICAL)
    icon = TECHNICAL_ICON_VAR.filter((icon) => icon.ref === iconName);

  let iconObj = {};

  if (icon[0]["color" === undefined]) iconObj = { Icon: icon[0].value };
  else iconObj = { Icon: icon[0].value, color: icon[0].color };

  return icon.length > 0 ? iconObj : null;
};

const navigateLink = (link) => {
  window.open(link);
};

const url = (link) => {
  return `${API_URL.MAILER}${link}`;
};

export {
  accessLink,
  getAuthError,
  checkImageExt,
  checkIfUserActive,
  getIcon,
  navigateLink,
  url,
};
