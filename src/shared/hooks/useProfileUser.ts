import { useParams } from "react-router-dom";
import { useCurrentUser } from "./useCurrentUser";

// export function useRequiredParam(param: string) {
//   const params = useParams();
//   const value = params[param];

//   if (!value) {
//     throw new Error(`Missing required route param: ${param}`);
//   }

//   return value;
// }

export function useProfileUser() {
  const { name } = useParams();
  const { userName: me } = useCurrentUser();

  console.log(name);

  const userName = name ?? me;
  const isSelfProfile = userName === me;

  return {
    userName,
    isSelfProfile,
  };
}
