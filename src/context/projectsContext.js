import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { PROJECTS_CONTEXT_VAR } from "../utils/variables";
import createDataContext from "./createDataContext";

const projectRef = collection(db, "portfolio");
const projectDetailsRef = collection(db, `portfolioDetails`);

const reducer = (state, { type, payload }) => {
  switch (type) {
    case PROJECTS_CONTEXT_VAR.GET_PROJECTS_DATA:
      return { ...state, projectData: payload };
    case PROJECTS_CONTEXT_VAR.GET_PROJECTS_DETAILS_DATA:
      return { ...state, projectDetailsData: payload };
    default:
      return state;
  }
};

const getProjectData = (dispatch) => async () => {
  const response = await getDocs(projectRef);
  const data = response.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
  dispatch({ type: PROJECTS_CONTEXT_VAR.GET_PROJECTS_DATA, payload: data[0] });
};

const getProjectDetailsData = (dispatch) => async (id) => {
  const response = await getDocs(projectDetailsRef);
  const foundData = response.docs.filter((doc) => doc.id === id);
  const data = foundData.map((doc) => ({ data: doc.data(), id: doc.id }));
  dispatch({
    type: PROJECTS_CONTEXT_VAR.GET_PROJECTS_DETAILS_DATA,
    payload: data[0],
  });
};

const setProjectDetails = (dispatch) => () => {
  dispatch({
    type: PROJECTS_CONTEXT_VAR.GET_PROJECTS_DETAILS_DATA,
    payload: {},
  });
};

export const { Context, Provider } = createDataContext(
  reducer,
  { getProjectData, getProjectDetailsData, setProjectDetails },
  { projectData: {}, projectDetailsData: {} }
);
