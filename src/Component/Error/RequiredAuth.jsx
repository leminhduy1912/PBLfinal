import { useLoginStatus } from "./../../hooks/useLoginStatus";
import { ErrorComponent } from "./ErrorComponent";
export const RequireAuth = ({ children, role }) => {
  console.log(role);
  const { isLogged } = useLoginStatus(role);
  if (!isLogged) {
    return <ErrorComponent />;
  } else return children;
};
