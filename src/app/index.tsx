import { StrictMode } from "react";
import { ThemeProvider } from "next-themes";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { ModalProvider } from "./context/ModalProvider/ModalProvider.tsx";
import { QueryProvider } from "./providers/query-provider/query-provider.tsx";

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
