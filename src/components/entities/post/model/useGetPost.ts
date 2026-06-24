import { useQuery } from "@tanstack/react-query";
import { postApi } from "../api/postApi";
import { postsKeys } from "../keys/postsKeys";

export const useGetPost = (id: string) => {
  return useQuery({
    queryKey: postsKeys.byId(id),
    queryFn: () => postApi.getPost(id),
    enabled: Boolean(id),
  });
};
