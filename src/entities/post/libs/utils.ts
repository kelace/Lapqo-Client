export const MAX_LENGTH = 400;
export const MIN_LENGTH = 5;

export function getCounterColor(length: number): string {
  if (length === 0) return "text-gray-500";
  if (length < MIN_LENGTH) return "text-orange-500";
  if (length >= MAX_LENGTH) return "text-red-500";
  if (length >= MAX_LENGTH - 25) return "text-yellow-500";
  return "text-muted-foreground";
}

export function validatePostContent(content: string): {
  valid: boolean;
  error?: string;
} {
  const trimmed = content.trim();

  if (trimmed.length < MIN_LENGTH) {
    return { valid: false, error: "Minimum 5 characters" };
  }

  if (trimmed.length > MAX_LENGTH) {
    return {
      valid: false,
      error: `Post must not exceed ${MAX_LENGTH} characters`,
    };
  }

  return { valid: true };
}
