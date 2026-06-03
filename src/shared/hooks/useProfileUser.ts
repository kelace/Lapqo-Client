import { useParams } from "react-router-dom";
import { useCurrentUser } from "./useCurrentUser";

export function useProfileUser() {
  const { name } = useParams();
  const { userName: me } = useCurrentUser();

  const userName = name ?? me;
  const isSelfProfile = userName === me;

  return {
    userName,
    isSelfProfile,
  };
}
