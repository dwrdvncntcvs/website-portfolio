import createDataContext from "./createDataContext";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { AUTH_VARIABLE } from "../utils/variables";
import { getAuthError } from "../utils/helper";

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
    const errorMessage = getAuthError(err.message);

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
