import { useState } from "react";
import { Button } from "@/shared/shadcn/ui/button";
import { Textarea } from "@/shared/shadcn/ui/textarea";
import { useCreateComment } from "../model/useCreateComment";

type CommentFormProps = {
  postId: string;
};

export function CommentForm({ postId }: CommentFormProps) {
  const [value, setValue] = useState("");
  const { mutate: createComment } = useCreateComment();

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createComment({ postId, content: value });
    setValue("");
  };

  return (
    <form className="space-y-2 px-0.5" onSubmit={handleSubmit}>
      <Textarea
        placeholder="Add a comment..."
        className="min-h-10 resize-none border-b-2"
        value={value}
        onChange={onChange}
      />

      <div className="flex justify-end gap-2">
        <Button variant="ghost" type="reset">
          Cancel
        </Button>

        <Button type="submit">Comment</Button>
      </div>
    </form>
  );
}
