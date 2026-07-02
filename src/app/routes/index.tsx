import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "@/app/routes/guards/ProtectedRouter";
import { FeedPage } from "@/pages/feed-page/ui";
import { LoginPage } from "@/pages/login-page/ui";
import { NotFoundPage } from "@/pages/not-found-page/ui";
import { PostDetailPage } from "@/pages/post-detail-page/ui";
import { RegisterPage } from "@/pages/register-page/ui";
import { UserPostsPage } from "@/pages/user-posts-page/ui";
import { routes } from "@/shared/config/routes";
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
          <Route path={routes.posts.param} element={<PostDetailPage />} />
        </Route>
      </Route>

      <Route path={routes.notFound} element={<NotFoundPage />} />
    </Routes>
  );
};
