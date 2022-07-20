import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { getResponseObj } from "../utils/helper";
import { PERSONAL_CONTEXT_VAR } from "../utils/variables";
import createDataContext from "./createDataContext";

const personalRef = collection(db, "personal");

const reducer = (state, { type, payload }) => {
  switch (type) {
    case PERSONAL_CONTEXT_VAR.GET_PERSONAL_DATA:
      return { ...state, personalData: payload };
    default:
      return state;
  }
};

const getPersonalData = (dispatch) => async () => {
  const response = await getDocs(personalRef);
  const data = getResponseObj(response)[0];
  dispatch({ type: PERSONAL_CONTEXT_VAR.GET_PERSONAL_DATA, payload: data });
};

export const { Context, Provider } = createDataContext(
  reducer,
  { getPersonalData },
  { personalData: {} }
);
