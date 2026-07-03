import { useQuery } from "@tanstack/react-query";
import { commentApi } from "@/entities/comment";

export function useGetComments(id: string) {
  return useQuery({
    queryKey: ["comments", id],
    queryFn: () => commentApi.getComments(id),
    enabled: Boolean(id),
  });
}
