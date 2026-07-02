import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { authApi } from "@/entities/auth/api/auth.api";
import { routes } from "@/shared/config/routes";

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authApi.register,
    onSuccess: () => navigate(routes.login),
  });
};
