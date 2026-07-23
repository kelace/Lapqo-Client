import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/shared/shadcn/ui/button";
import { Textarea } from "@/shared/shadcn/ui/textarea";
import { useUpdatePost } from "../model/use-update-post";

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

  const handleSave = () => {
    const trimmed = content.trim();
    if (!trimmed || trimmed === initialContent) {
      onCancel();
      return;
    }
    updatePost.mutate(
      { id: postId, updates: { content: trimmed } },
      {
        onSuccess,
      },
    );
  };

  return (
    <div className="flex flex-col gap-2">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="min-h-20 resize-none text-sm leading-relaxed"
        autoFocus
        onKeyDown={(e) => {
          if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleSave();
          if (e.key === "Escape") onCancel();
        }}
      />
      <div className="flex justify-end gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7"
          onClick={onCancel}
        >
          <X className="h-3.5 w-3.5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 hover:text-green-500"
          onClick={handleSave}
          disabled={updatePost.isPending}
        >
          <Check className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );
}
