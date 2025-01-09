import { ThemeProvider } from "@/components/theme-provider"
import ErrorBoundary from "@/components/ErrorBoundary"

// components
import Header from "./pages/header";
import Main from "./pages/main";
import Projects from "./pages/projects";
import Experience from "./pages/experience";

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Main />
        <Projects />
        <Experience />
      </ThemeProvider>
    </ErrorBoundary>
  );
}