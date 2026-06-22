import { authApi } from "@/components/entities/auth/api/auth.api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authApi.register,
    onSuccess: () => navigate("/login"),
  });
};
