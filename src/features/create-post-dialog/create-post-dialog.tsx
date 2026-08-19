import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/shared/shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/shared/shadcn/ui/dialog";
import { CreatePostForm } from "../create-post-form/ui/create-post-form";

export function CreatePostDialog() {
  const [open, onOpenChange] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          className="cursor-pointer rounded-full p-4"
        >
          <Plus className="size-4" />
          Create
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl">
        <CreatePostForm onSuccess={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
}
