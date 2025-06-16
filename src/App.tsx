
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import Homepage from "./pages/Homepage";
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
          <Route path="/" element={<Homepage />} />
          <Route path="/agent" element={<AppLayout><AgentChat /></AppLayout>} />
          <Route path="/knowledge" element={<AppLayout><KnowledgeBase /></AppLayout>} />
          <Route path="/computation" element={<AppLayout><ComputationModels /></AppLayout>} />
          <Route path="/ai-models" element={<AppLayout><AIModels /></AppLayout>} />
          <Route path="/chemical-tools" element={<AppLayout><ChemicalTools /></AppLayout>} />
          <Route path="/tasks" element={<AppLayout><TasksHistory /></AppLayout>} />
          <Route path="/industry-analysis" element={<AppLayout><div className="p-6"><h1 className="text-2xl font-bold">集成电路材料产业全景分析</h1><p className="mt-4 text-gray-600">产业分析模块正在开发中...</p></div></AppLayout>} />
          <Route path="/design-optimization" element={<AppLayout><div className="p-6"><h1 className="text-2xl font-bold">集成电路材料与工艺设计</h1><p className="mt-4 text-gray-600">设计优化模块正在开发中...</p></div></AppLayout>} />
          <Route path="/reverse-analysis" element={<AppLayout><div className="p-6"><h1 className="text-2xl font-bold">集成电路材料逆向分析</h1><p className="mt-4 text-gray-600">逆向分析模块正在开发中...</p></div></AppLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
