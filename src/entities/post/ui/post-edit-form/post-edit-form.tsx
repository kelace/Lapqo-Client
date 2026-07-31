import { useState } from "react";
import { Check, X } from "lucide-react";
import { useUpdatePost } from "@/entities/post/model/use-update-post";
import { Button } from "@/shared/shadcn/ui/button";
import { Textarea } from "@/shared/shadcn/ui/textarea";
import {
  getCounterColor,
  MAX_LENGTH,
  validatePostContent,
} from "../../libs/utils";

export interface PostEditFormProps {
  initialContent: string;
  postId: string;
  onCancel: () => void;
  onSuccess: () => void;
}

export function PostEditForm({
  initialContent,
  postId,
  onCancel,
  onSuccess,
}: PostEditFormProps) {
  const [content, setContent] = useState(initialContent);
  const [validationError, setValidationError] = useState<string | null>(null);

  const updatePost = useUpdatePost();
  const isPending = updatePost.isPending;

  const trimmedContent = content.trim();
  const length = trimmedContent.length;
  const hasChanges =
    trimmedContent.length > 0 && trimmedContent !== initialContent.trim();
  const isSaveDisabled = !hasChanges || isPending;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    if (validationError) setValidationError(null);
  };

  const handleSave = async () => {
    if (!hasChanges) {
      onCancel();
      return;
    }

    const text = trimmedContent.slice(0, MAX_LENGTH);
    const validation = validatePostContent(text);

    if (!validation.valid) {
      setValidationError(validation.error ?? "Invalid content");
      return;
    }

    try {
      await updatePost.mutateAsync({ id: postId, content: text });
      setValidationError(null);
      onSuccess();
    } catch (error) {
      console.error("Failed to update post:", error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onCancel();
      return;
    }

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!isSaveDisabled) {
        handleSave();
      }
    }
  };

  const serverErrorMessage =
    updatePost.error instanceof Error ? updatePost.error.message : null;
  const displayError = validationError ?? serverErrorMessage;

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <Textarea
          id="post-edit-content"
          name="post-edit-content"
          disabled={isPending}
          value={content}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={`min-h-12 resize-none p-3 pb-10 focus-visible:ring-0 focus-visible:ring-offset-0`}
          autoFocus
          maxLength={MAX_LENGTH}
          aria-label="Edit post content"
          aria-describedby={displayError ? "post-edit-error" : "char-counter"}
          aria-invalid={!!displayError}
        />

        <div className="absolute right-2 bottom-1 flex items-center gap-2">
          <span
            id="char-counter"
            className={`text-xs font-medium tabular-nums transition-colors ${getCounterColor(length)}`}
          >
            {length}/{MAX_LENGTH}
          </span>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-7 w-7 cursor-pointer rounded-full hover:bg-red-500/20 hover:text-red-500"
            onClick={onCancel}
            disabled={isPending}
            aria-label="Cancel editing"
          >
            <X className="h-4 w-4" />
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-7 w-7 cursor-pointer rounded-full hover:bg-green-500/20 hover:text-green-500"
            onClick={handleSave}
            disabled={isSaveDisabled}
            aria-label="Save changes"
          >
            {isPending ? (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : (
              <Check className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {displayError && (
        <p id="post-edit-error" className="text-sm text-red-500" role="alert">
          {displayError}
        </p>
      )}
    </div>
  );
}
