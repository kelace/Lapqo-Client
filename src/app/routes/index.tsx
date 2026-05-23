import { Route, Routes } from "react-router-dom";
import { routes } from "@shared/config/routes";
import { Layout } from "@components/template/Layout/Layout";
import { HomePage } from "@components/pages/home-page/HomePage";
import { UsersPage } from "@components/pages/users-page/UsersPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={routes.users.base} element={<UsersPage />} />
        {/* <Route path={routes.notFound} element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  );
};
