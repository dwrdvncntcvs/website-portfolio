import { collection, getDocs } from "firebase/firestore";
// import { axios } from "../api/api";
import axios from "axios";
import { db } from "../firebaseConfig";
import { CONTACT_CONTEXT_VAR } from "../utils/variables";
import createDataContext from "./createDataContext";
import { url } from "../utils/helper";

const contactRef = collection(db, "contact");

const reducer = (state, { type, payload }) => {
  switch (type) {
    case CONTACT_CONTEXT_VAR.GET_CONTACT_EMAIL_RES:
      return { ...state, successMessage: payload, errorMessage: "" };
    case CONTACT_CONTEXT_VAR.GET_CONTACT_EMAIL_ERR:
      return { ...state, errorMessage: payload, successMessage: "" };
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

const sendEmailRequest = (dispatch) => async (data) => {
  try {
    const request = await axios.post(url("/send-mail"), data);
    const response = request.data.message;
    dispatch({
      type: CONTACT_CONTEXT_VAR.GET_CONTACT_EMAIL_RES,
      data: response,
    });
  } catch (err) {
    if (err) {
      const errMessage = err.response.data.message;
      dispatch({
        type: CONTACT_CONTEXT_VAR.GET_CONTACT_EMAIL_ERR,
        payload: errMessage,
      });
    }
  }
};

export const { Context, Provider } = createDataContext(
  reducer,
  { getContactData, sendEmailRequest },
  { contactDetails: {}, successMessage: "", errorMessage: "" }
);
