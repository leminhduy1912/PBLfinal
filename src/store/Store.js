import { createContext, useReducer } from "react";

const globalState = {
  token: "",
  role: "",
};

export const Context = createContext(globalState);
