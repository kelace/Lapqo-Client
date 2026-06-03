import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/app/store/auth";

export const ProtectedRoute = () => {
  const isAuthenticated = useAuthStore((s) => Boolean(s.accessToken));

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};
