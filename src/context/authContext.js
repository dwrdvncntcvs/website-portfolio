import createDataContext from "./createDataContext";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { AUTH_VARIABLE } from "../utils/variables";

const getError = (error = "") => {
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

  console.log(message);
  return message;
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case AUTH_VARIABLE.SET_ERROR:
      return { ...state, errorMessage: payload };
    default:
      return { ...state };
  }
};

const signInRequest = (dispatch) => async (credentials) => {
  try {
    await signInWithEmailAndPassword(
      auth,
      credentials?.email,
      credentials?.password
    );
    console.log("Signed in successfully");
  } catch (err) {
    const errorMessage = getError(err.message);

    dispatch({ type: AUTH_VARIABLE.SET_ERROR, payload: errorMessage });
  }
};

const setErrorMessage = (dispatch) => () => {
  dispatch({ type: AUTH_VARIABLE.SET_ERROR, payload: "" });
};

const signOutRequest = (dispatch) => async () => {
  await signOut(auth);
};

export const { Context, Provider } = createDataContext(
  reducer,
  { signInRequest, setErrorMessage, signOutRequest },
  { errorMessage: "" }
);
