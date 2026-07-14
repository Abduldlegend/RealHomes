import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Toaster } from "sonner"
import { ThemeProvider } from "./providers/theme-provider"
import { AppRouter } from "./routes"
import "./styles/globals.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AppRouter />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            borderRadius: "12px",
            border: "1px solid var(--color-border)",
            background: "var(--color-card)",
            color: "var(--color-heading)",
          },
        }}
      />
    </ThemeProvider>
  </StrictMode>,
)
