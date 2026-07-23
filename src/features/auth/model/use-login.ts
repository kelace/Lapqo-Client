import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/app/store/auth";
import { authApi } from "@/entities/auth/api/authApi";
import { routes } from "@/shared/config/routes";

export const useLogin = () => {
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authApi.login,

    onSuccess: (data) => {
      const { token } = data;
      setAuth(token);
      navigate(routes.home);
    },

    onError: (error: AxiosError) => {
      if (error.response?.status === 401) {
        toast.error("Invalid email or password");
      } else {
        toast.error("Something went wrong. Please try again later");
      }
    },
  });
};
