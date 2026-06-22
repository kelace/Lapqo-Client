import { useModalStack } from "@/app/context/ModalProvider/useModalStack";
import { useProfileUser } from "../hooks/useProfileUser";
import { UserProfilePanel } from "@/components/widgets/user-profile-panel/UserProfilePanel";

export function FakePosts() {
  const { openModal } = useModalStack();
  const { userName } = useProfileUser();

  const handleOpen = () => {
    openModal(() => <UserProfilePanel userName={userName} />);
  };

  return (
    <div className="space-y-4">
      <button type="button" onClick={() => handleOpen()}>
        Відкрити
      </button>
      {Array.from({ length: 30 }).map((_, index) => (
        <div key={index} className="rounded-xl border px-4 py-10 shadow-sm">
          <h3 className="mb-2 text-lg font-semibold">Post #{index + 1}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            voluptatem.
          </p>
        </div>
      ))}
    </div>
  );
}
