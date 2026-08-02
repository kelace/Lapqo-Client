import { CircleHelp } from "lucide-react";

interface ConfirmModalProps {
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  variant?: "danger" | "primary";
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmModal({
  title,
  description,
  confirmText = "Ok",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  return (
    <div className="bg-background w-160 overflow-hidden rounded-2xl border shadow-2xl">
      <div className="flex gap-5 p-8">
        <div className="border-muted-foreground flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2">
          <CircleHelp className="text-muted-foreground h-8 w-8" />
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-semibold">{title}</h2>

          {description && (
            <p className="text-muted-foreground mt-3 text-sm">{description}</p>
          )}
        </div>
      </div>

      <div className="flex border-t">
        <button
          onClick={onConfirm}
          className="hover:bg-silver-500 flex-1 cursor-pointer bg-red-700 py-4 text-sm font-medium transition-colors"
        >
          {confirmText}
        </button>
        <button
          onClick={onCancel}
          className="hover:bg-muted flex-1 cursor-pointer border-r py-4 text-sm font-medium transition-colors"
        >
          {cancelText}
        </button>
      </div>
    </div>
  );
}
