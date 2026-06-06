import { Route, Routes } from "react-router-dom";
import { routes } from "@shared/config/routes";
import { AppLayout } from "@/components/template/AppLayout/AppLayout";
import { ProtectedRoute } from "@/app/routes/guards/ProtectedRouter";
import { LoginPage } from "@/components/pages/login-page/LoginPage";
import { RegisterPage } from "@/components/pages/register-page/RegisterPage";
import { FeedPage } from "@/components/pages/feed-page/FeedPage";
import { NotFoundPage } from "@/components/pages/not-found-page/NotFoundPage";
import { FakePosts } from "@/shared/ui/FakePosts";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.register} element={<RegisterPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path={routes.home} element={<AppLayout />}>
          <Route path="/feed" element={<FeedPage />} />
          <Route path={routes.users.param} element={<FakePosts />} />
          <Route index element={<FakePosts />} />
        </Route>
      </Route>

      <Route path={routes.notFound} element={<NotFoundPage />} />
    </Routes>
  );
};
