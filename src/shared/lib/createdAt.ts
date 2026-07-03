import { format, formatDistanceToNowStrict } from "date-fns";

export function formatCommentDate(date: string) {
  return formatDistanceToNowStrict(new Date(date), {
    addSuffix: true,
  });
}

export function formatPostDate(date: string) {
  return format(new Date(date), "d MMM, HH:mm");
}
