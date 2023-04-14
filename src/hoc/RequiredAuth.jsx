import { useContext } from "react";
import { StoreContext } from "~store";
import { Navigate, Outlet } from "react-router-dom";

export const RequireAuth = (props) => {
  const { roles } = props;
  const [state] = useContext(StoreContext);
  const content = roles.includes(state.role) ? (
    <Outlet />
  ) : (
    <Navigate to="/404" state={{ from: location }} replace />
  );
  return content;
};
