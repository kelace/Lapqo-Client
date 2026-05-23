export const routes = {
  home: "/",
  users: {
    base: "/users",
    param: "/users/:id",
    detail: (id: string | number) => `/users/${id}`,
  },
  notFound: "*",
};
