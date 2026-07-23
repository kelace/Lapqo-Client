import { useQuery } from "@tanstack/react-query";
import { postApi } from "../api/postApi";
import { postsKeys } from "../api/postsKeys";

export const usePostById = (id: string) => {
  return useQuery({
    queryKey: postsKeys.byId(id),
    queryFn: () => postApi.getPostById(id),
    enabled: Boolean(id),
  });
};
