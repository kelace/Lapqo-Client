export function PostLoading() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-10">
      <Spinner />
      <p className="text-gray-500">Loading posts...</p>
    </div>
  );
}

function Spinner() {
  return (
    <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-gray-800" />
  );
}
