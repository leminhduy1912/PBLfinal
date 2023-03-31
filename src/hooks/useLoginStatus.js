import { useContext } from "react";
import { StoreContext } from "../store";

export const useLoginStatus = (role) => {
  const [state, dispatch] = useContext(StoreContext);
  if (state.role !== role || !state.token) {
    return { isLogged: false, role: "" };
  }
  return { isLogged: true, role: role };
};
