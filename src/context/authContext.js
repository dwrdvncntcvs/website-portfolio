import createDataContext from "./createDataContext";

const reducer = (state, { type, payload }) => {
  switch (type) {
    default:
      return { ...state };
  }
};

const signInRequest = (dispatch) => (credentials) => {
  console.log(credentials);
};

export const { Context, Provider } = createDataContext(
  reducer,
  { signInRequest },
  {}
);
