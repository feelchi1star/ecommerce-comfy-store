import React, { createContext, useState } from "react";
export const Comp = createContext();
const Contexts = ({ children }) => {
  const [com, setCom] = useState("Felix On react Hock");
  return <Comp.Provider value={{ com, setCom }}>{children}</Comp.Provider>;
};
export default Contexts;
