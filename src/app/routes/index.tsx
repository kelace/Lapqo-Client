import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "@shared/config/routes";
import { ProtectedRoute } from "@/app/routes/guards/ProtectedRouter";
import { LoginPage } from "@/components/pages/login-page/LoginPage";
import { RegisterPage } from "@/components/pages/register-page/RegisterPage";
import { FeedPage } from "@/components/pages/feed-page/FeedPage";
import { NotFoundPage } from "@/components/pages/not-found-page/NotFoundPage";
import { UserPostsPage } from "@/components/pages/user-posts-page/UserPostsPage";
import { AppLayout } from "../layout/AppLayout";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.register} element={<RegisterPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path={routes.home} element={<AppLayout />}>
          <Route index element={<Navigate to={routes.feed} replace />} />

          <Route path={routes.feed} element={<FeedPage />} />
          <Route path={routes.users.param} element={<UserPostsPage />} />
        </Route>
      </Route>

      <Route path={routes.notFound} element={<NotFoundPage />} />
    </Routes>
  );
};
