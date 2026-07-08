import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/app/store/auth";
import { routes } from "@/shared/config/routes";

//256
export const useRequireAuth = () => {
  const isAuthenticated = useAuthStore((s) => Boolean(s.accessToken));
  const navigate = useNavigate();

  const requireAuth = (action: () => void) => {
    if (!isAuthenticated) {
      navigate(routes.login);
      return;
    }
    action();
  };

  return { requireAuth, isAuthenticated };
};
