import { useState } from "react";
import { Loader2, PawPrint, Send } from "lucide-react";
import toast from "react-hot-toast";
import {
  getCounterColor,
  MAX_LENGTH,
  validatePostContent,
} from "@/entities/post/libs/utils";
import { Avatar, AvatarFallback } from "@/shared/shadcn/ui/avatar";
import { Button } from "@/shared/shadcn/ui/button";
import { Card, CardContent } from "@/shared/shadcn/ui/card";
import { Textarea } from "@/shared/shadcn/ui/textarea";
// import { getCounterColor, MAX_LENGTH, validatePostContent } from "../lib/utils";
import { useCreatePost } from "../model/use-create-post";

export function CreatePost() {
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
    const validation = validatePostContent(value);
    if (!validation.valid) {
      setValidationError(validation.error ?? "Invalid content");
      return;
    }
    createPost(
      { content: value.trim() },
      {
        onSuccess: () => {
          setValue("");
          setValidationError(null);
          toast.success("Post created.");
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
  const isValid = validatePostContent(value).valid;
  const canSubmit = isValid && !isPending;

  const displayError =
    validationError ||
    (serverError instanceof Error ? serverError.message : null);

  return (
    <Card className="surface w-full">
      <CardContent className="py-4">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-3">
            <Avatar>
              <AvatarFallback>
                <PawPrint className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="Share something..."
                rows={1}
                maxLength={MAX_LENGTH}
                className={`min-h-12 resize-none p-3 focus-visible:ring-0 focus-visible:ring-offset-0`}
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
      </CardContent>
    </Card>
  );
}
