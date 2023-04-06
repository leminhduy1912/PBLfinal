import { createContext } from "react";
import { initialState } from "./Reducer";

const globalState = {
  token: "",
  role: "mod",
};

export const Context = createContext(initialState);
