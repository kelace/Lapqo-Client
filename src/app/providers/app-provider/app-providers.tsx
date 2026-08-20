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
          <Toaster position="top-right" />
          {children}
          <ScrollToTop />
        </ModalProvider>
      </QueryProvider>
    </ThemeProvider>
  );
};
