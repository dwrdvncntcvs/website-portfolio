import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { CERT_CONTEXT_VAR } from "../utils/variables";
import createDataContext from "./createDataContext";

const certRef = collection(db, "certificates");

const reducer = (state, { type, payload }) => {
  switch (type) {
    case CERT_CONTEXT_VAR.GET_CERT_DATA:
      return { ...state, certificateData: payload };
    default:
      return state;
  }
};

const getCertData = (dispatch) => async () => {
  const response = await getDocs(certRef);
  const data = response.docs.map((doc) => ({
    data: doc.data(),
    id: doc.id,
  }))[0];
  dispatch({ type: CERT_CONTEXT_VAR.GET_CERT_DATA, payload: data });
};

export const { Context, Provider } = createDataContext(
  reducer,
  { getCertData },
  { certificateData: {} }
);
