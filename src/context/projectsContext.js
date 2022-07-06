import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { PROJECTS_CONTEXT_VAR } from "../utils/variables";
import createDataContext from "./createDataContext";

const projectRef = collection(db, "portfolio");

const reducer = (state, { type, payload }) => {
  switch (type) {
    case PROJECTS_CONTEXT_VAR.GET_PROJECTS_DATA:
      return { ...state, projectData: payload };
    default:
      return state;
  }
};

const getProjectData = (dispatch) => async () => {
  const response = await getDocs(projectRef);
  const data = response.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
  dispatch({ type: PROJECTS_CONTEXT_VAR.GET_PROJECTS_DATA, payload: data[0] });
};

export const { Context, Provider } = createDataContext(
  reducer,
  { getProjectData },
  { projectData: {} }
);
