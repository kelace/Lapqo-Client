import { Check } from "lucide-react";
import toast from "react-hot-toast";
import { cn } from "@/shared/shadcn/lib/utils";

export const appToast = {
  success: (title: string, message: string) =>
    toast.custom((t) => (
      <div
        className={cn(
          "bg-card flex w-80 items-start gap-3 overflow-hidden rounded-xl border p-4 shadow-xl",
          "text-card-foreground origin-top",
          "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          t.visible ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0",
        )}
      >
        <div className="bg-primary/10 flex size-8 shrink-0 items-center justify-center rounded-full">
          <Check className="text-primary size-4" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-muted-foreground mt-1 text-xs">{message}</p>
        </div>
      </div>
    )),
};
