import { api } from "@/shared/api/axios";
import type { LoginData, RegistenData } from "../types/auth.types";

export const authApi = {
  register: (data: RegistenData) => {
    return api.post("/auth/register", data);
  },
  login: (data: LoginData) => {
    return api.post("/auth/login", data);
  },
};

// revoke: (refreshToken: string) => {
//   return api.post("/auth/revoke", { refreshToken });
// },
// refresh: (refreshToken: string) => {
//   return api.post("/auth/refresh", { refreshToken });
// },
