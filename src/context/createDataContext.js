import { createContext, useReducer } from "react";

const createDataContext = (reducer, actions, states) => {
  const Context = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, states);

    const boundActions = {};
    for (let key in actions) boundActions[key] = actions[key](dispatch);

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};

export default createDataContext;
