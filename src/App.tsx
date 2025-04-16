
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import AgentChat from "./pages/AgentChat";
import KnowledgeBase from "./pages/KnowledgeBase";
import ComputationModels from "./pages/ComputationModels";
import AIModels from "./pages/AIModels";
import ChemicalTools from "./pages/ChemicalTools";
import TasksHistory from "./pages/TasksHistory";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout><AgentChat /></AppLayout>} />
          <Route path="/knowledge" element={<AppLayout><KnowledgeBase /></AppLayout>} />
          <Route path="/computation" element={<AppLayout><ComputationModels /></AppLayout>} />
          <Route path="/ai-models" element={<AppLayout><AIModels /></AppLayout>} />
          <Route path="/chemical-tools" element={<AppLayout><ChemicalTools /></AppLayout>} />
          <Route path="/tasks" element={<AppLayout><TasksHistory /></AppLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
