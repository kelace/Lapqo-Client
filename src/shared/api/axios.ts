import axios from "axios";
import { useAuthStore } from "@/app/store/auth";
import { ENV } from "@/shared/config/env/env";

export const api = axios.create({
  baseURL: ENV.API_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});
