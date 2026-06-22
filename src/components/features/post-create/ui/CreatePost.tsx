import { useState } from "react";
import { ImagePlus, Send } from "lucide-react";

import { Avatar, AvatarFallback } from "@/shared/shadcn/ui/avatar";
import { Button } from "@/shared/shadcn/ui/button";
import { Card, CardContent } from "@/shared/shadcn/ui/card";
import { Textarea } from "@/shared/shadcn/ui/textarea";
import { useCreatePost } from "../model/useCreatePost";

export function CreatePost() {
  const [value, setValue] = useState("");
  const onCreatePost = useCreatePost();

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>,
  ) => {
    setValue(e.target.value);
  };

  const handleCreate = () => {
    onCreatePost.mutate({ content: value.trim() });
  };

  return (
    <Card className="w-full border">
      <CardContent className="pt-0">
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
            />

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 bottom-2 border"
              onClick={handleCreate}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
