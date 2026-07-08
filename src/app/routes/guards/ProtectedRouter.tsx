import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/app/store/auth";
import { routes } from "@/shared/config/routes";

export const ProtectedRoute = () => {
  const isAuthenticated = useAuthStore((s) => Boolean(s.accessToken));
  if (!isAuthenticated) return <Navigate to={routes.login} replace />;

  return <Outlet />;
};
