import { createContext } from "react";

export const ProgramContext = createContext();
const myGlobalValue = {
  band: "BAND NAME",
  nr: 202020,
};

export const ProgramProvider = ({ children }) => {
  return <ProgramContext.Provider value={myGlobalValue}>{children}</ProgramContext.Provider>;
};
