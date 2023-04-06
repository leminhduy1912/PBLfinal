import { SET_AUTH_STATE } from "./Constants";

export const initialState = {
  token: "A",
  role: "moderator",
};
export const reducer = (state, action) => {
  switch (action.type) {
    case SET_AUTH_STATE:
      return {
        ...initialState,
        token: action.payload.token,
        role: action.payload.role,
      };
    default:
      throw new Error("Invalid ");
  }
};
