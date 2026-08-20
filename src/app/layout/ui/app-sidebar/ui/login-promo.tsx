import { LogIn, PawPrint } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/shared/config/routes";

export function LoginPromo() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full flex-col items-center px-8 py-10 text-center">
      <div className="bg-primary/10 ring-primary/20 mb-8 flex size-30 items-center justify-center rounded-2xl ring-1">
        <PawPrint className="text-primary size-8" />
      </div>
      <h2 className="text-foreground text-2xl font-bold tracking-tight">
        Lapqo
      </h2>

      <p className="text-muted-foreground mt-3 mb-4 max-w-56 text-sm leading-relaxed">
        Welcome to Lapqo!
        <br />
        We are glad to see you in our community
      </p>

      <button
        onClick={() => navigate(routes.login)}
        className="bg-primary hover:bg-primary/90 focus-visible:ring-primary/50 inline-flex w-full max-w-55 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-colors focus-visible:ring-2 focus-visible:outline-none"
      >
        <LogIn className="size-4" />
        LogIn
      </button>
    </div>
  );
}
