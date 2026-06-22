import { useParams } from "react-router-dom";
import { useAuthStore } from "@/app/store/auth";

export function useProfileOwner() {
  const { name } = useParams();
  const currentUser = useAuthStore((store) => store.currentUser);

  const userName = name ?? currentUser?.name;
  const isSelfProfile = userName === currentUser?.name;

  return {
    userName,
    isSelfProfile,
  };
}
