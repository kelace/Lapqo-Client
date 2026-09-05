import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/shared/stores/auth";
import { authApi } from "@/entities/auth";

export function useLogout() {
  const logout = useAuthStore((state) => state.logout);

  return useMutation({
    mutationFn: authApi.revoke,
    onSettled: () => logout(),
  });
}
