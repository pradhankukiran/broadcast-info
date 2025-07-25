import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Broadcast from "./pages/Broadcast";
import Settings from "./pages/Settings";
import { ThemeProvider } from "./components/theme-provider";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { useBackendStatus } from "@/hooks/use-backend-status";

const queryClient = new QueryClient();

const App = () => {
  const ready = useBackendStatus();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        storageKey="vite-ui-theme"
        enableSystem={false}
      >
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <div className="fixed top-4 left-4 z-50">
            <StatusIndicator ready={ready} />
          </div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/broadcast" element={<Broadcast />} />
              <Route path="/settings" element={<Settings />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
