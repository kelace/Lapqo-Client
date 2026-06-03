import { Route, Routes } from "react-router-dom";
import { routes } from "@shared/config/routes";
import { AppLayout } from "@/components/template/AppLayout/AppLayout";
import { ProtectedRoute } from "@/app/routes/guards/ProtectedRouter";
import { LoginPage } from "@/components/pages/login-page/LoginPage";
import { RegisterPage } from "@/components/pages/register-page/RegisterPage";
import { FeedPage } from "@/components/pages/feed-page/FeedPage";
// import { UserPage } from "@/components/pages/user-profile-panel/UserProfilePanel";

function BPage() {
  return <div>This is name B PAGE</div>;
}

function NotFoundPage() {
  return <div> Not FOUND PAGE</div>;
}

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.register} element={<RegisterPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path={routes.home} element={<AppLayout />}>
          <Route index element={<FeedPage />} />
          <Route path={routes.users.param} element={<BPage />} />
          <Route path="/b" element={<BPage />} />
        </Route>
      </Route>

      {/* 404 */}
      <Route path={routes.notFound} element={<NotFoundPage />} />
    </Routes>
  );
};
