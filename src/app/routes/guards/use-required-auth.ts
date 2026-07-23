import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/app/store/auth";
import { routes } from "@/shared/config/routes";

export function useRequireAuth() {
  const isAuthenticated = useAuthStore((s) => Boolean(s.accessToken));
  const navigate = useNavigate();

  return () => {
    if (!isAuthenticated) {
      navigate(routes.login);
      return true; // block action
    }

    return false; // allow action
  };
}
