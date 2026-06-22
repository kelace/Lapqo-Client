import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/app/store/auth";
import { authApi } from "@/shared/api/auth.api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import type { AxiosError } from "axios";

export const useLogin = () => {
  const setTokens = useAuthStore((state) => state.setTokens);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      const { token, refreshToken } = data.data;
      setTokens(token, refreshToken);
      navigate("/");
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
