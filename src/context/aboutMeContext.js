import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { ABOUT_ME_CONTEXT_VAR } from "../utils/variables";
import createDataContext from "./createDataContext";

const aboutMeRef = collection(db, "aboutMe");

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ABOUT_ME_CONTEXT_VAR.GET_ABOUT_ME_DATA:
      return { ...state, aboutMeData: payload };
    default:
      return state;
  }
};

const getAboutMeData = (dispatch) => async () => {
  const response = await getDocs(aboutMeRef);
  const data = response.docs.map((doc) => ({
    data: doc.data(),
    id: doc.id,
  }))[0];
  dispatch({ type: ABOUT_ME_CONTEXT_VAR.GET_ABOUT_ME_DATA, payload: data });
};

export const { Context, Provider } = createDataContext(
  reducer,
  { getAboutMeData },
  { aboutMeData: {} }
);
