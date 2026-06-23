import { useState } from "react";
import { Check, MoreHorizontal, Pencil, Trash2, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "@/app/store/auth";
import { useDeletePost } from "@/components/features/post-delete/model/useDeletePost";
import { PostLikeButton } from "@/components/features/post-like/ui/PostLikeButton";
import { routes } from "@/shared/config/routes";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shared/shadcn/ui/alert-dialog";
import { Button } from "@/shared/shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/shadcn/ui/dropdown-menu";
import { Textarea } from "@/shared/shadcn/ui/textarea";
import type { Post } from "../types";

type Props = {
  post: Post;
};

type PropsPostActions = {
  onEdit: () => void;
  onDelete: () => void;
};

export function PostActions({ onEdit, onDelete }: PropsPostActions) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  return (
    <>
      {/* Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground h-7 w-7"
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-36">
          <DropdownMenuItem onClick={onEdit}>
            <Pencil className="mr-2 h-3.5 w-3.5" />
            Редагувати
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-destructive focus:text-destructive"
            onClick={() => setDeleteDialogOpen(true)} // <- відкриваємо діалог, не видаляємо
          >
            <Trash2 className="mr-2 h-3.5 w-3.5" />
            Видалити
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* AlertDialog живе поза Dropdown — ключовий момент */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Видалити пост?</AlertDialogTitle>
            <AlertDialogDescription>
              Цю дію не можна скасувати.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Скасувати</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() => {
                onDelete();
                setDeleteDialogOpen(false);
              }}
            >
              Видалити
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

function PostMeta({ post }: Props) {
  const formattedDate = new Date(post.createdAt).toLocaleDateString("uk-UA", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex items-center gap-2">
      <Link
        to={routes.users.detail(post.authorUserName)}
        className="font-semibold hover:underline"
      >
        @{post.authorUserName}
      </Link>
      <time dateTime={post.createdAt} className="text-muted-foreground text-sm">
        {formattedDate}
      </time>
    </div>
  );
}

export function PostItem({ post }: Props) {
  const currentUser = useAuthStore((store) => store.currentUser);
  const onDelete = useDeletePost();
  const isOwner = currentUser?.id === post.authorId;

  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(post.content);
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveEdit = async () => {
    const trimmed = editContent.trim();

    if (!trimmed || trimmed === post.content) {
      setIsEditing(false);
      return;
    }

    try {
      setIsSaving(true);
      setIsEditing(false);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancelEdit = () => {
    setEditContent(post.content);
    setIsEditing(false);
  };

  const handleDelete = (id: string) => {
    onDelete.mutate(id);
    // або openConfirmModal({ onConfirm: () => deletePost(post.id) })
  };

  return (
    <li className="hover:bg-muted/40 border-border-gray rounded-lg border px-5 py-6 transition-colors not-last:mb-4">
      <article className="flex flex-col gap-3">
        <header className="flex items-center justify-between gap-2">
          <PostMeta post={post}></PostMeta>
          {isOwner && (
            <div className="flex items-center gap-1">
              {/* Кнопки збереження під час редагування */}
              {isEditing && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-foreground h-7 w-7"
                    onClick={handleCancelEdit}
                    disabled={isSaving}
                  >
                    <X className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground h-7 w-7 hover:text-green-500"
                    onClick={handleSaveEdit}
                    disabled={isSaving}
                  >
                    <Check className="h-3.5 w-3.5" />
                  </Button>
                </>
              )}

              {!isEditing && (
                <PostActions
                  onEdit={() => setIsEditing(true)}
                  onDelete={() => handleDelete(post.id)}
                ></PostActions>
              )}
            </div>
          )}
        </header>

        {isEditing ? (
          <Textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="min-h-20 resize-none text-sm leading-relaxed"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey))
                handleSaveEdit();
              if (e.key === "Escape") handleCancelEdit();
            }}
          />
        ) : (
          <p className="text-sm leading-relaxed">{post.content}</p>
        )}

        <footer className="text-muted-foreground flex items-center gap-1">
          <PostLikeButton
            postId={post.id}
            liked={post.likedByCurrentUser}
            likesCount={post.likesCount}
          />
        </footer>
      </article>
    </li>
  );
}
