import { useState } from "react";
import { Send } from "lucide-react";
import { Avatar, AvatarFallback } from "@/shared/shadcn/ui/avatar";
import { Button } from "@/shared/shadcn/ui/button";
import { Card, CardContent } from "@/shared/shadcn/ui/card";
import { Textarea } from "@/shared/shadcn/ui/textarea";
import { useCreatePost } from "../model/use-create-post";

export function CreatePost() {
  const [value, setValue] = useState("");
  const { mutate: createPost, isPending } = useCreatePost();

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const submit = () => {
    if (!value.trim()) return;
    createPost({ content: value.trim() });
    setValue("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit();
  };

  // useful for textarea
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <Card className="w-full border bg-black">
      <CardContent className="py-4">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-3">
            <Avatar>
              <AvatarFallback>H</AvatarFallback>
            </Avatar>
            <div className="relative flex-1">
              <Textarea
                placeholder="Share something..."
                rows={1}
                className="min-h-12 resize-none py-2 pr-24 pl-4"
                value={value}
                onChange={onChange}
                onKeyDown={handleKeyDown}
                disabled={isPending}
              />
              <Button
                type="submit"
                variant="ghost"
                size="icon"
                className="absolute right-2 bottom-2 border"
                disabled={!value.trim() || isPending}
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
