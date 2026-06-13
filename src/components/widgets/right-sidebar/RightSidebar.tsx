import { useProfileUser } from "@/shared/hooks/useProfileUser";
import { UserProfilePanel } from "../user-profile-panel/UserProfilePanel";

export function RightSidebar() {
  const { userName } = useProfileUser();
  return (
    <div className="hidden w-75 shrink-0 lg:block">
      <UserProfilePanel userName={userName} />
    </div>
  );
}
