import { useAuthStore } from "@/app/store/auth";
import { authApi } from "@/shared/api/auth.api";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () => {
  const setTokens = useAuthStore((state) => state.setTokens);

  return useMutation({
    mutationFn: authApi.register,
    onSuccess: (data) => {
      const { accessToken, refreshToken } = data.data;
      setTokens(accessToken, refreshToken);
    },
  });
};
