type Props = {
  error: Error | null;
};

export function PostError({ error }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-10">
      <div className="font-semibold text-red-500">Failed to load posts</div>
      <p className="text-sm text-gray-400">
        {error?.message ?? "Unknow error"}
      </p>
    </div>
  );
}
