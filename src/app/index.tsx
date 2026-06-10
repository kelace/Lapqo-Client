import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryProvider } from "./providers/query-provider/query-provider.tsx";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./context/ModalProvider/ModalProvider.tsx";
import { SidebarProvider } from "@/shared/shadcn/ui/sidebar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryProvider>
        <BrowserRouter>
          <ModalProvider>
            <Toaster position="top-right" />
            <App />
          </ModalProvider>
        </BrowserRouter>
      </QueryProvider>
    </ThemeProvider>
  </StrictMode>,
);
