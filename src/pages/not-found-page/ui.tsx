import { ArrowLeft, Home, SearchX } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/shared/config/routes";
import { Button } from "@/shared/shadcn/ui/button";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center border p-6">
      <div className="flex max-w-md flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="bg-muted flex size-20 items-center justify-center rounded-full">
            <SearchX className="text-muted-foreground size-9" />
          </div>

          <span className="bg-background text-muted-foreground absolute -right-3 -bottom-2 rounded-full border px-2 py-0.5 text-xs font-semibold shadow-sm">
            404
          </span>
        </div>

        <h1 className="text-2xl font-bold tracking-tight">Page not found</h1>

        <p className="text-muted-foreground mt-2 max-w-sm text-sm">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-6 flex gap-2">
          <Button variant="outline" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 size-4" />
            Go back
          </Button>

          <Button onClick={() => navigate(routes.feed)} className="text-white">
            <Home className="mr-2 size-4" />
            Home
          </Button>
        </div>
      </div>
    </div>
  );
}
