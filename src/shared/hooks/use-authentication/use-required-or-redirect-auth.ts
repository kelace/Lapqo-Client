import { useNavigate } from "react-router-dom";
import { routes } from "@/shared/config/routes";
import { useIsUserAuthenticated } from "./use-is-user-authenticated";

//deprecated
export function useRequireOrRedirectToAuth() {
  const isAuthenticated = useIsUserAuthenticated();
  const navigate = useNavigate();

  return () => {
    if (!isAuthenticated) {
      navigate(routes.login);
      return true;
    }

    return false;
  };
}
