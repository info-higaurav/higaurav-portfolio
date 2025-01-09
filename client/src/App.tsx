import { ThemeProvider } from "@/components/theme-provider"
import ErrorBoundary from "@/components/ErrorBoundary"

// components
import Header from "./pages/header";
import Main from "./pages/main";
import Projects from "./pages/projects";

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Main />
        <Projects />
      </ThemeProvider>
    </ErrorBoundary>
  );
}