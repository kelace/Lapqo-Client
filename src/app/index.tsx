import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryProvider } from "./providers/query-provider/query-provider.tsx";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryProvider>
        <Toaster position="top-right" />
        <App />
      </QueryProvider>
    </ThemeProvider>
  </StrictMode>,
);
