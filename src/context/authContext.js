import createDataContext from "./createDataContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const reducer = (state, { type, payload }) => {
  switch (type) {
    default:
      return { ...state };
  }
};

const signInRequest = (dispatch) => async (credentials) => {
  await signInWithEmailAndPassword(
    auth,
    credentials?.email,
    credentials?.password
  );
  console.log("Sign In Successful");
};

export const { Context, Provider } = createDataContext(
  reducer,
  { signInRequest },
  {}
);
