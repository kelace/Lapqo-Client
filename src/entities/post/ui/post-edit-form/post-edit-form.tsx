import { useState } from "react";
import { Check, X } from "lucide-react";
import { useUpdatePost } from "@/entities/post/model/use-update-post";
import { Button } from "@/shared/shadcn/ui/button";
import { Textarea } from "@/shared/shadcn/ui/textarea";

interface PropsEditForm {
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
}: PropsEditForm) {
  const [content, setContent] = useState(initialContent);

  const updatePost = useUpdatePost();

  const trimmedContent = content.trim();
  const canSave =
    trimmedContent.length > 0 && trimmedContent !== initialContent;

  const handleSave = async () => {
    if (!canSave) {
      onCancel();
      return;
    }

    try {
      await updatePost.mutateAsync({
        id: postId,
        content: trimmedContent,
      });
      onSuccess();
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Escape") {
      onCancel();
      return;
    }

    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      void handleSave();
    }
  };

  return (
    <div className="relative flex flex-col gap-2">
      <Textarea
        disabled={updatePost.isPending}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="relative min-h-20 resize-none pr-24 pb-12 text-sm leading-relaxed"
        autoFocus
        onKeyDown={handleKeyDown}
      />
      <div className="absolute right-2 bottom-2 flex gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 cursor-pointer rounded-full hover:bg-red-500/20 hover:text-red-500"
          onClick={onCancel}
          disabled={updatePost.isPending}
        >
          <X className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 cursor-pointer rounded-full hover:bg-green-500/20 hover:text-green-500"
          onClick={handleSave}
          disabled={!canSave || updatePost.isPending}
        >
          <Check className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
