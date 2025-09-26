import { createContext, useReducer, useEffect } from "react";

export const ThemeContext = createContext();
const INITIAL_STATE = { darkmode: true };
const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { darkMode: !state.darkMode };
    case "SET_THEME":
      return { darkMode: action.payload };
    default:
      return state;
  }
};
export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("darkMode");
    if (storedTheme !== null) {
      return { darkMode: storedTheme === "true" };
    }
    return INITIAL_STATE;
  };
  const [state, dispatch] = useReducer(
    themeReducer,
    INITIAL_STATE,
    getInitialTheme
  );

  useEffect(() => {
    if (state.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", state.darkMode);
  }, [state.darkMode]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
