type HighlightTextProps = {
  text: string;
  query: string;
  className?: string;
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function HighlightText({ text, query, className }: HighlightTextProps) {
  if (!query.trim()) {
    return <span className={className}>{text}</span>;
  }

  const regex = new RegExp(`(${escapeRegExp(query)})`, "gi");

  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        const isMatch = part.toLowerCase() === query.toLowerCase();

        return isMatch ? (
          <mark
            key={index}
            className="rounded bg-yellow-300 px-0.5 text-inherit dark:bg-yellow-700"
          >
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        );
      })}
    </span>
  );
}
