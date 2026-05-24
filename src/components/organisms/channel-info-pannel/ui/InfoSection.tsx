export function InfoSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="px-3 py-2.5 border-b border-neutral-100">
      <p className="text-[10px] font-medium text-neutral-400 uppercase tracking-wider mb-2">
        {title}
      </p>
      {children}
    </div>
  );
}
