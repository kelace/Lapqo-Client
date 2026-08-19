import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import toast from "react-hot-toast";
import {
  getCounterColor,
  MAX_LENGTH,
  validatePostContent,
} from "@/entities/post/libs/utils";
import { Button } from "@/shared/shadcn/ui/button";
import { Textarea } from "@/shared/shadcn/ui/textarea";
import { appToast } from "@/shared/ui/toast-custom/toast-custom";
import { useCreatePost } from "../model/use-create-post";

type Props = {
  onSuccess?: () => void;
};

export function CreatePostForm({ onSuccess }: Props) {
  const [value, setValue] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);
  const {
    mutate: createPost,
    isPending,
    error: serverError,
    reset: resetMutation,
  } = useCreatePost();

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value.slice(0, MAX_LENGTH);

    setValue(text);
    setValidationError(null);
    if (serverError) resetMutation();
  };

  const submit = () => {
    const content = value.trim();

    const validation = validatePostContent(content);
    if (!validation.valid) {
      setValidationError(validation.error ?? "Invalid content");
      return;
    }
    createPost(
      { content },
      {
        onSuccess: () => {
          setValue("");
          setValidationError(null);
          appToast.success("Post created", "Your post was published");

          onSuccess?.();
        },
        onError: () => {
          toast.error("Failed to create post.");
        },
      },
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  const length = value.length;
  const validation = validatePostContent(value);
  const canSubmit = validation.valid && !isPending;

  const displayError =
    validationError ||
    (serverError instanceof Error ? serverError.message : null);

  return (
    <form onSubmit={handleSubmit} className="px-2 py-10">
      <div className="flex gap-3">
        <div className="flex-1">
          <Textarea
            placeholder="Share something..."
            rows={1}
            maxLength={MAX_LENGTH}
            className={`min-h-20 resize-none p-3 focus-visible:ring-0 focus-visible:ring-offset-0`}
            value={value}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            disabled={isPending}
            aria-label="Post content"
            aria-describedby="char-counter"
          />

          <div className="flex items-center justify-end gap-2 pt-3">
            <span
              id="char-counter"
              className={`text-xs font-medium tabular-nums transition-colors ${getCounterColor(length)}`}
              aria-live="polite"
            >
              {length}/{MAX_LENGTH}
            </span>

            <Button
              type="submit"
              size="sm"
              disabled={!canSubmit}
              className="h-8 cursor-pointer gap-2 text-white"
              aria-label="Send post"
            >
              {isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Post</span>
                </>
              )}
            </Button>
          </div>

          {displayError && (
            <p className="text-sm text-red-500">{displayError}</p>
          )}
        </div>
      </div>
    </form>
  );
}
