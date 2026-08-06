export function truncateText(text: string, maxLength = 140) {
  if (text.length <= maxLength) return text;

  const end = text.lastIndexOf(" ", maxLength);

  return text.slice(0, end) + "...";
}
