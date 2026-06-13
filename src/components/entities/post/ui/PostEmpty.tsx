export function PostEmpty() {
  return (
    <div className="flex flex-col items-center justify-center p-10 text-center">
      <div className="text-lg font-semibold">No posts yet</div>
      <p className="text-sm text-gray-400">
        This user hasn’t published anything yet.
      </p>
    </div>
  );
}
