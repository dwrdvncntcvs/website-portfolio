import createDataContext from "./createDataContext";
import { getDocs, collection, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebaseConfig";
import { COLLECTION, HOME_CONTEXT_VAR } from "../utils/variables";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const homeRef = collection(db, COLLECTION.HOME);

// const homeData = {
//   greetings: "",
//   name: "",
//   description: "",
//   image: "",
//   resume: "",
// };

const getData = async () => {
  const response = await getDocs(homeRef);
  return response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0];
};

const uploadImageFile = async (imageFile) => {
  const storageRef = ref(
    storage,
    `images/${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}-${
      imageFile.name
    }`
  );
  const file = await uploadBytes(storageRef, imageFile);
  return await getDownloadURL(file.ref);
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case HOME_CONTEXT_VAR.GET_HOME_DATA:
      return { ...state, data: payload };
    default:
      return state;
  }
};

const getHomeData = (dispatch) => async () => {
  const data = await getData();
  if (data !== undefined)
    dispatch({ type: HOME_CONTEXT_VAR.GET_HOME_DATA, payload: data });
};

const addHomeDetail = (dispatch) => async (value, key, docId) => {
  const docRef = doc(db, "home", docId);

  if (key === "greetings") {
    await updateDoc(docRef, { greetings: value });
  }
  if (key === "name") {
    await updateDoc(docRef, { name: value });
  }
  if (key === "description") {
    await updateDoc(docRef, { description: value });
  }
  if (key === "image") {
    const imageUrl = await uploadImageFile(value);
    await updateDoc(docRef, { image: imageUrl });
  }

  let data = await getData();
  dispatch({ type: HOME_CONTEXT_VAR.GET_HOME_DATA, payload: data });
};

export const { Context, Provider } = createDataContext(
  reducer,
  { getHomeData, addHomeDetail },
  { data: {} }
);
