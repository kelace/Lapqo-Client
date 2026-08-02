import { LogIn, PawPrint } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/shared/config/routes";

export function SidebarLogin() {
  const navigate = useNavigate();

  return (
    <aside className="border-border/60 bg-card sticky top-0 flex h-screen w-80 flex-col border">
      <div className="flex flex-1 flex-col items-center justify-start px-8 py-10">
        {/* Логотип */}
        <div className="bg-primary/10 ring-primary/20 mb-8 flex size-24 items-center justify-center rounded-2xl ring-1">
          <PawPrint className="text-primary size-8" strokeWidth={2} />
        </div>

        {/* Текст */}
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <h1 className="text-foreground text-3xl font-bold tracking-tight">
            Lapqo
          </h1>
          <p className="text-muted-foreground max-w-65 text-sm leading-relaxed">
            Ласкаво просимо до Lapqo! <br />
            Раді вітати вас у спільноті.
          </p>
        </div>

        {/* Кнопка */}
        <button
          onClick={() => navigate(routes.login)}
          className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary/50 inline-flex w-full max-w-55 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
        >
          <LogIn className="size-4" />
          Увійти
        </button>
      </div>

      {/* Нижній колонтитул для балансу */}
      <div className="text-muted-foreground/60 py-6 text-center text-xs">
        © {new Date().getFullYear()} Lapqo
      </div>
    </aside>
  );
}
