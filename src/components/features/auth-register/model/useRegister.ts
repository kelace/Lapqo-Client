import { useAuthStore } from "@/app/store/auth";
import { authApi } from "@/shared/api/auth.api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const setTokens = useAuthStore((state) => state.setTokens);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authApi.register,
    onSuccess: (data) => {
      const { accessToken, refreshToken } = data.data;
      setTokens(accessToken, refreshToken);
      navigate("/login");
    },
  });
};
