import { createContext, useState } from "react";

export const ProgramContext = createContext();

export const ProgramSetContext = createContext();

export const ProgramProvider = ({ children }) => {
  const [program, setProgram] = useState([]);

  return (
    <ProgramContext.Provider value={program}>
      <ProgramSetContext.Provider value={setProgram}>{children}</ProgramSetContext.Provider>
    </ProgramContext.Provider>
  );
};
