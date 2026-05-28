import { Route, Routes } from "react-router-dom";
import { routes } from "@shared/config/routes";
import { Dashboard } from "@/components/pages/dashboard-page/Dashboard";
// import { HomePage } from "@components/pages/home-page/HomePage";
import { ProtectedRoute } from "@/components/template/ProtectedRoute/ProtectedRouter";
import { LoginPage } from "@/components/pages/login-page/LoginPage";
import { RegisterPage } from "@/components/pages/register-page/RegisterPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.register} element={<RegisterPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path={routes.home} element={<Dashboard />} />
      </Route>

      {/* 404 */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};
