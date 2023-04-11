import { useAuth } from "../hooks/useLoginStatus";
import { ErrorComponent } from "../components/Error/ErrorComponent";
export const RequireAuth = ({ children, role }) => {
  const { isLogged } = useAuth(role);
  if (!isLogged) {
    // return <ErrorComponent />;
    return <></>;
  } else return children;
};
