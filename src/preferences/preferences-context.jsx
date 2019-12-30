import React, { useReducer } from "react";
import { childrenPropTypes, childrenDefaultProps } from "../shared-prop-types";

const UPDATE_PREFERENCES = "UPDATE_PREFERENCES";

const initialState = JSON.parse(localStorage.getItem("preferences")) || {
  minutes: "",
  seconds: "",
  day: "",
  month: "",
  year: "",
  units: "km"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PREFERENCES":
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};

const PreferencesContext = React.createContext(initialState);

const PreferencesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PreferencesContext.Provider value={{ state, dispatch }}>
      {children}
    </PreferencesContext.Provider>
  );
};

PreferencesProvider.propTypes = {
  ...childrenPropTypes
};

PreferencesProvider.defaultProps = {
  ...childrenDefaultProps
};

export { PreferencesContext, PreferencesProvider, UPDATE_PREFERENCES };
