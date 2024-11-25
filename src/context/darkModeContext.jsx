import { createContext, useReducer, useState } from "react";
import DarkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
  darkMode: true,
};

export const DarkModeContext = createContext(INITIAL_STATE);

function DarkModeContextProvider({ children }) {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);
  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeContextProvider;
