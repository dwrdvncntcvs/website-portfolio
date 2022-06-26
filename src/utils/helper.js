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

export { accessLink, getAuthError };
