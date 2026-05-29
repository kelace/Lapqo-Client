import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/app/store/auth";

export const ProtectedRoute = () => {
  const token = useAuthStore((s) => s.accessToken);

  // const isAuth = false; || isAuthenticated  = !!token

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
