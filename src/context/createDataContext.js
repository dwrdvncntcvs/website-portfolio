import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useReducer, useState } from "react";
import { auth } from "../firebaseConfig";

const createDataContext = (reducer, actions, states) => {
  const Context = createContext();

  const Provider = ({ children }) => {
    const [user, setUser] = useState({});
    const [state, dispatch] = useReducer(reducer, states);

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        setUser(user);
      });
    }, []);

    const boundActions = {};
    for (let key in actions) boundActions[key] = actions[key](dispatch);

    return (
      <Context.Provider value={{ state: { ...state, user }, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};

export default createDataContext;
