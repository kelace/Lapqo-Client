import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "@/app/routes/guards/ProtectedRouter";
import { LoginPage, RegisterPage } from "@/pages/auth";
import { FeedPostsPage } from "@/pages/feed-posts-page/ui";
import { NotFoundPage } from "@/pages/not-found-page/ui";
import { PostDetailPage } from "@/pages/post-detail-page/ui";
import { UserPostsPage } from "@/pages/user-posts-page/ui";
import { routes } from "@/shared/config/routes";
import { RootLayout } from "../layout/root-layout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.register} element={<RegisterPage />} />

        <Route path={routes.home} element={<RootLayout />}>
          <Route index element={<Navigate to={routes.feed} replace />} />
          <Route path={routes.feed} element={<FeedPostsPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path={routes.users.param} element={<UserPostsPage />} />
            <Route path={routes.posts.param} element={<PostDetailPage />} />
          </Route>
        </Route>

        <Route path={routes.notFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
