import { useProfileUser } from "@/shared/hooks/useProfileUser";
import { UserProfilePanel } from "../user-profile-panel/UserProfilePanel";

export function RightSidebar() {
  const { userName } = useProfileUser();
  return <UserProfilePanel userName={userName} />;
}
