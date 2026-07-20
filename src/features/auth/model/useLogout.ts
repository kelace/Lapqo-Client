import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/app/store/auth";
import { authApi } from "@/entities/auth/api/auth.api";

export function useLogout() {
  const logout = useAuthStore((state) => state.logout);

  return useMutation({
    mutationFn: authApi.revoke,
    onSettled: () => logout(),
  });
}
