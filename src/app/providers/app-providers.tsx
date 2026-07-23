import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { ModalProvider } from "./modal-provider";
import { QueryProvider } from "./query-provider";

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
        </ModalProvider>
      </QueryProvider>
    </ThemeProvider>
  );
};
