import { useParams } from "react-router-dom";
import { useAuthStore } from "@/shared/stores/auth";

export function useActiveProfile() {
  const { name } = useParams();
  const currentUser = useAuthStore((store) => store.currentUser);

  const profileUserName = name ?? currentUser?.name;

  const isOwnProfile = Boolean(
    currentUser && profileUserName === currentUser.name,
  );

  return {
    profileUserName,
    isOwnProfile,
    isLoggedIn: Boolean(currentUser),
  };
}
