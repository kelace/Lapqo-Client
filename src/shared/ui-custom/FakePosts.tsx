export function FakePosts() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 30 }).map((_, index) => (
        <div key={index} className="px-4 py-10 border shadow-sm rounded-xl">
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
