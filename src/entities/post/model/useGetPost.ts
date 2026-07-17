import { useQuery } from "@tanstack/react-query";
import { postApi, postsKeys } from "../api";

export const useGetPost = (id: string) => {
  return useQuery({
    queryKey: postsKeys.byId(id),
    queryFn: () => postApi.getPost(id),
    enabled: Boolean(id),
  });
};
