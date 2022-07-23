import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { EXP_CONTEXT_VAR } from "../utils/variables";
import createDataContext from "./createDataContext";

const expRef = collection(db, "experiences");

const reducer = (state, { type, payload }) => {
  switch (type) {
    case EXP_CONTEXT_VAR.GET_EXP_DATA:
      return { ...state, expData: payload };
    default:
      return state;
  }
};

const getExpData = (dispatch) => async () => {
  const response = await getDocs(expRef);
  const data = response.docs.map((doc) => ({
    data: doc.data(),
    id: doc.id,
  }))[0];
  dispatch({ type: EXP_CONTEXT_VAR.GET_EXP_DATA, payload: data });
};

export const { Context, Provider } = createDataContext(
  reducer,
  { getExpData },
  { expData: {} }
);
