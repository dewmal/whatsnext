import { createContext } from "preact";
import { WeekTaskUI } from "./state/WeekTaskUI";

export const globalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const weekTaskUiStore = new WeekTaskUI();

  return (
    <globalContext.Provider value={{ weekTaskUiStore }}>
      {children}
    </globalContext.Provider>
  );
};
