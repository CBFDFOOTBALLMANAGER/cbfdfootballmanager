import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import { Sidebar } from "./components/layout/Sidebar";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Teams from "./pages/Teams";
import Competitions from "./pages/Competitions";
import Matches from "./pages/Matches";
import Statistics from "./pages/Statistics";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/*" element={
              <div className="flex">
                <Sidebar />
                <div className="ml-64 flex-1">
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/competitions" element={<Competitions />} />
                    <Route path="/teams" element={<Teams />} />
                    <Route path="/matches" element={<Matches />} />
                    <Route path="/stats" element={<Statistics />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
              </div>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AppProvider>
  </QueryClientProvider>
);

export default App;