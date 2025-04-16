
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Calendar,
  Activity,
  Check,
  X,
  Clock,
  PlayCircle,
  Download,
  Copy,
  MoreVertical,
  MessageSquare,
  BarChart3,
  FileText
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

// Mock task data
const mockTasks = [
  {
    id: 1,
    title: "HfO2 k-value prediction",
    type: "Computation",
    description: "Predict dielectric constant using GNN + DFT verification",
    status: "Completed",
    progress: 100,
    date: "2025-04-14",
    time: "10:25",
    duration: "15m 47s",
    user: "Researcher",
    tools: ["MaterialsGNN", "DFT Validator"],
    results: ["k-value = 19.2", "Band gap = 5.4 eV"]
  },
  {
    id: 2,
    title: "Interface stability analysis",
    type: "Simulation",
    description: "MD simulation of HfO2/Si interface with varying Si doping",
    status: "Running",
    progress: 68,
    date: "2025-04-16",
    time: "09:12",
    duration: "35m 12s (est.)",
    user: "Researcher",
    tools: ["MD Simulator", "Interface Analyzer"],
    results: []
  },
  {
    id: 3,
    title: "Literature review for high-k materials",
    type: "Research",
    description: "Semantic search for recent publications on high-k dielectrics",
    status: "Completed",
    progress: 100,
    date: "2025-04-13",
    time: "14:30",
    duration: "2m 5s",
    user: "Researcher",
    tools: ["Knowledge Base Search"],
    results: ["15 papers identified", "3 patents found"]
  },
  {
    id: 4,
    title: "Aluminum dopant optimization",
    type: "AI Model",
    description: "Optimize aluminum concentration in HfO2 for max k-value",
    status: "Failed",
    progress: 45,
    date: "2025-04-12",
    time: "16:45",
    duration: "6m 32s",
    user: "Researcher",
    tools: ["ProcessOptimizer", "MaterialTransformer"],
    results: ["Error: Convergence failed"]
  },
  {
    id: 5,
    title: "New material structure generation",
    type: "AI Model",
    description: "Generate candidates for new high-k materials based on target properties",
    status: "Queued",
    progress: 0,
    date: "2025-04-16",
    time: "10:30",
    duration: "Pending",
    user: "Researcher",
    tools: ["MaterialTransformer"],
    results: []
  }
];

// Filter options
const statusOptions = ["All Status", "Completed", "Running", "Failed", "Queued"];
const taskTypes = ["All Types", "Computation", "Simulation", "Research", "AI Model"];

const TasksHistory = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [typeFilter, setTypeFilter] = useState("All Types");
  
  // Get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 border-green-300";
      case "Running":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "Failed":
        return "bg-red-100 text-red-800 border-red-300";
      case "Queued":
        return "bg-amber-100 text-amber-800 border-amber-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };
  
  // Get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <Check className="h-4 w-4 text-green-600" />;
      case "Running":
        return <Activity className="h-4 w-4 text-blue-600" />;
      case "Failed":
        return <X className="h-4 w-4 text-red-600" />;
      case "Queued":
        return <Clock className="h-4 w-4 text-amber-600" />;
      default:
        return null;
    }
  };
  
  // Filter tasks based on search, status, and type
  const filteredTasks = mockTasks.filter(task => {
    const matchesSearch = search === "" || 
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());
    
    const matchesStatus = statusFilter === "All Status" || task.status === statusFilter;
    const matchesType = typeFilter === "All Types" || task.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesType;
  });
  
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tasks & History</h1>
      <p className="text-muted-foreground">
        Track, manage, and analyze your computational tasks and workflows.
      </p>
      
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search tasks..."
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <Select defaultValue="All Status" onValueChange={setStatusFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            {statusOptions.map((status) => (
              <SelectItem key={status} value={status}>{status}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select defaultValue="All Types" onValueChange={setTypeFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Task Type" />
          </SelectTrigger>
          <SelectContent>
            {taskTypes.map((type) => (
              <SelectItem key={type} value={type}>{type}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <div className="flex space-x-2">
          <Button variant="outline" className="flex-1">
            <Calendar className="h-4 w-4 mr-2" />
            Date Range
          </Button>
          <Button variant="outline">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* View Tabs */}
      <Tabs defaultValue="list">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="list">List</TabsTrigger>
            <TabsTrigger value="flow">Workflow</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
          </TabsList>
          
          <div>
            <Button variant="outline" size="sm" className="mr-2">
              <Copy className="h-4 w-4 mr-2" />
              Clone Task
            </Button>
            <Button variant="default" size="sm">
              <PlayCircle className="h-4 w-4 mr-2" />
              New Task
            </Button>
          </div>
        </div>
        
        {/* List View */}
        <TabsContent value="list" className="mt-6">
          <div className="space-y-4">
            {filteredTasks.map((task) => (
              <Card key={task.id} className="overflow-hidden hover:shadow-sm transition-shadow">
                <CardHeader className="py-4 px-6">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <Badge variant="outline" className={`mr-2 ${getStatusColor(task.status)}`}>
                        <span className="flex items-center">
                          {getStatusIcon(task.status)}
                          <span className="ml-1">{task.status}</span>
                        </span>
                      </Badge>
                      <Badge variant="outline" className="bg-muted">
                        {task.type}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {task.date} • {task.time}
                    </div>
                  </div>
                  <CardTitle className="text-lg mt-2">{task.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{task.description}</p>
                </CardHeader>
                <CardContent className="pb-4 px-6 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="text-sm font-medium mb-1">Duration</h4>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                        <span className="text-sm">{task.duration}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-1">Tools Used</h4>
                      <div className="flex flex-wrap gap-1">
                        {task.tools.map((tool, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-1">Results</h4>
                      {task.results.length > 0 ? (
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          {task.results.map((result, index) => (
                            <li key={index} className="flex items-center">
                              <span className="w-1 h-1 bg-muted-foreground rounded-full mr-2"></span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <span className="text-sm text-muted-foreground">No results yet</span>
                      )}
                    </div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex justify-end mt-4 space-x-2">
                    <Button variant="ghost" size="sm">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Chat
                    </Button>
                    <Button variant="ghost" size="sm">
                      <BarChart3 className="h-4 w-4 mr-1" />
                      Analyze
                    </Button>
                    {task.status === "Completed" && (
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    )}
                    <Button variant="default" size="sm">
                      <FileText className="h-4 w-4 mr-1" />
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        {/* Workflow View */}
        <TabsContent value="flow" className="mt-6">
          <div className="flex items-center justify-center h-80 bg-muted/30 rounded-lg border border-dashed">
            <div className="text-center">
              <Activity className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium">Workflow Visualization</h3>
              <p className="text-muted-foreground">Interactive workflow diagram would be displayed here</p>
              <Button variant="outline" className="mt-4">Generate Workflow</Button>
            </div>
          </div>
        </TabsContent>
        
        {/* Statistics View */}
        <TabsContent value="stats" className="mt-6">
          <div className="flex items-center justify-center h-80 bg-muted/30 rounded-lg border border-dashed">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium">Task Statistics</h3>
              <p className="text-muted-foreground">Usage trends and performance metrics would be displayed here</p>
              <Button variant="outline" className="mt-4">Generate Report</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TasksHistory;
