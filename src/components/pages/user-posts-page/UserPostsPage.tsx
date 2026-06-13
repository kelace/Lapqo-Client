import { UserPosts } from "@/components/widgets/user-post/ui/UserPosts";

// export function UserPostsPage() {
//   const { isSelfProfile } = useProfileUser();

//   return (
//     <>
//       {isSelfProfile && <CreatePostForm />}
//       <UserPosts />
//     </>
//   );
// }

export function UserPostsPage() {
  return <UserPosts />;
}
