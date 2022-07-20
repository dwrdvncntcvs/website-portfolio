import { collection, getDocs } from "firebase/firestore";
// import { axios } from "../api/api";
import axios from "axios";
import { db } from "../firebaseConfig";
import { CONTACT_CONTEXT_VAR, RES_STATUS } from "../utils/variables";
import createDataContext from "./createDataContext";
import { url } from "../utils/helper";

const contactRef = collection(db, "contact");

const reducer = (state, { type, payload }) => {
  switch (type) {
    case CONTACT_CONTEXT_VAR.GET_CONTACT_RESPONSE_MSG:
      return { ...state, responseMessage: payload };
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
      type: CONTACT_CONTEXT_VAR.GET_CONTACT_RESPONSE_MSG,
      payload: { msg: response, status: RES_STATUS.SUCCESS },
    });
  } catch (err) {
    if (err) {
      const errMessage = err.response.data.message;
      dispatch({
        type: CONTACT_CONTEXT_VAR.GET_CONTACT_RESPONSE_MSG,
        payload: { msg: errMessage, status: RES_STATUS.ERROR },
      });
    }
  }
};

const setResponseMessage =
  (dispatch) =>
  (msgObj = {}) => {
    dispatch({ type: CONTACT_CONTEXT_VAR.GET_CONTACT_RESPONSE_MSG, payload: msgObj });
  };

export const { Context, Provider } = createDataContext(
  reducer,
  { getContactData, sendEmailRequest, setResponseMessage },
  { contactDetails: {}, responseMessage: {} }
);
