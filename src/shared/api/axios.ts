import { useAuthStore } from "@/app/store/auth";
import { ENV } from "@/shared/config/env/env";
import axios from "axios";

export const api = axios.create({
  baseURL: ENV.API_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;

  // console.log("Requesting with token:", token);

  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});
