import { ArrowLeft, TriangleAlert } from "lucide-react";
import { Button } from "@/shared/shadcn/ui/button";

export function RouteError() {
  return (
    <div className="flex h-full min-h-100 flex-col items-center justify-center p-10 text-center">
      <div className="bg-destructive/10 flex size-16 items-center justify-center rounded-full">
        <TriangleAlert className="text-destructive size-8" />
      </div>

      <div className="mt-5 space-y-2">
        <h2 className="text-xl font-semibold">Page not found</h2>

        <p className="text-muted-foreground max-w-md text-sm">
          We couldn't find the profile you're looking for. It may have been
          removed or the link may be invalid.
        </p>
      </div>

      <Button
        variant="outline"
        className="mt-6"
        onClick={() => window.history.back()}
      >
        <ArrowLeft className="mr-2 size-4" />
        Go back
      </Button>
    </div>
  );
}
