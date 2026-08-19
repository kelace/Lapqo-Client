import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { ScrollToTop } from "@/shared/ui/scroll-to-top/ScrollToTop";
import { ModalProvider } from "../modal-provider/modal-provider";
import { QueryProvider } from "../query-provider/query-provider";

type Props = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryProvider>
        <ModalProvider>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,

              className:
                "border! border-border! bg-card! text-card-foreground! rounded-xl! shadow-xl! px-4! py-3! text-sm!",

              success: {
                className:
                  "border! border-primary/20! bg-card! text-card-foreground! rounded-xl! shadow-xl! px-4! py-3! text-sm! font-medium!",

                iconTheme: {
                  primary: "var(--primary)",
                  secondary: "var(--primary-foreground)",
                },
              },

              error: {
                className:
                  "border! border-destructive/20! bg-card! text-card-foreground! rounded-xl! shadow-xl! px-4! py-3! text-sm! font-medium!",
              },
            }}
          />
          <ScrollToTop />
          {children}
        </ModalProvider>
      </QueryProvider>
    </ThemeProvider>
  );
};
