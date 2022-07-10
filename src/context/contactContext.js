import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { CONTACT_CONTEXT_VAR } from "../utils/variables";
import createDataContext from "./createDataContext";

const contactRef = collection(db, "contact");

const reducer = (state, { type, payload }) => {
  switch (type) {
    case CONTACT_CONTEXT_VAR.GET_CONTACT_DATA:
      return { ...state, contactDetails: payload };
    default:
      return state;
  }
};

const getContactData = (dispatch) => async () => {
  const response = await getDocs(contactRef);
  const data = response.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
  dispatch({ type: CONTACT_CONTEXT_VAR.GET_CONTACT_DATA, payload: data[0] });
};

export const { Context, Provider } = createDataContext(
  reducer,
  { getContactData },
  { contactDetails: {} }
);
