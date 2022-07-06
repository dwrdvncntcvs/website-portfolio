import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { SKILLS_CONTEXT_VAR } from "../utils/variables";
import createDataContext from "./createDataContext";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SKILLS_CONTEXT_VAR.GET_SKILLS_DATA:
      return { ...state, skillsData: payload };
    default:
      return state;
  }
};

const skillsRef = collection(db, "skills");

const getSkillsData = (dispatch) => async () => {
  const response = await getDocs(skillsRef);
  const data = response.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
  dispatch({ type: SKILLS_CONTEXT_VAR.GET_SKILLS_DATA, payload: data[0] });
};

export const { Context, Provider } = createDataContext(
  reducer,
  { getSkillsData },
  { skillsData: {} }
);
