import { api } from "@/shared/api/axios";
import type { LoginData, RegistenData } from "../types/auth.types";

export const authApi = {
  register: (credentials: RegistenData) => {
    return api.post("/auth/register", credentials);
  },
  login: (credentials: LoginData) => {
    return api.post("/auth/login", credentials);
  },
};

// revoke: (refreshToken: string) => {
//   return api.post("/auth/revoke", { refreshToken });
// },
// refresh: (refreshToken: string) => {
//   return api.post("/auth/refresh", { refreshToken });
// },
