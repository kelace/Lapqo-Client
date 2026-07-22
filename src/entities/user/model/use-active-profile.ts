import { useParams } from "react-router-dom";
import { useAuthStore } from "@/app/store/auth";

export function useActiveProfile() {
  const { name } = useParams();
  const currentUser = useAuthStore((store) => store.currentUser);

  const profileUserName = name ?? currentUser?.name;
  const isOwnProfile = profileUserName === currentUser?.name;

  return {
    profileUserName,
    isOwnProfile,
  };
}
