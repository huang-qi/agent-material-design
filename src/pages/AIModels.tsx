
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress"; 
import { 
  Brain, 
  Search, 
  Network, 
  GitBranch, 
  ArrowRight, 
  Download, 
  BarChart, 
  LineChart,
  Layers
} from "lucide-react";

// Mock AI models data
const mockModels = [
  {
    id: 1,
    title: "MatPropGNN",
    type: "Graph Neural Network",
    function: "Property Prediction",
    description: "GNN-based model for predicting thermal, electrical, and mechanical properties of complex materials from structure.",
    accuracy: 0.92,
    r2Score: 0.89,
    explainability: 0.75,
    materialCategories: ["Dielectrics", "Semiconductors", "Interfaces"],
    lastUpdated: "2025-03-10"
  },
  {
    id: 2,
    title: "MaterialTransformer",
    type: "Transformer",
    function: "Structure Generation",
    description: "Transformer-based generative model for designing novel material structures with targeted properties.",
    accuracy: 0.86,
    r2Score: 0.82,
    explainability: 0.65,
    materialCategories: ["All Materials"],
    lastUpdated: "2025-02-15"
  },
  {
    id: 3,
    title: "ProcessOptimizer",
    type: "Random Forest",
    function: "Process Optimization",
    description: "ML ensemble for optimizing deposition parameters to achieve target material characteristics.",
    accuracy: 0.88,
    r2Score: 0.85,
    explainability: 0.92,
    materialCategories: ["Thin Films", "Coatings"],
    lastUpdated: "2025-01-22"
  },
  {
    id: 4,
    title: "InterfaceAnalyzer",
    type: "Hybrid CNN-GNN",
    function: "Structure Analysis",
    description: "Deep learning model for analyzing and predicting material interface properties from microscopy images.",
    accuracy: 0.90,
    r2Score: 0.87,
    explainability: 0.70,
    materialCategories: ["Interfaces", "Multilayers"],
    lastUpdated: "2024-12-05"
  }
];

// Filter options
const materialTypes = [
  "All Materials",
  "Dielectrics",
  "Semiconductors",
  "Interfaces",
  "Thin Films",
  "Multilayers",
  "Coatings"
];

const functionTypes = [
  "All Functions",
  "Property Prediction",
  "Structure Generation",
  "Process Optimization",
  "Structure Analysis",
  "Material Discovery"
];

const modelTypes = [
  "All Models",
  "Graph Neural Network",
  "Transformer",
  "Random Forest",
  "CNN",
  "Hybrid Models"
];

const AIModels = () => {
  const [search, setSearch] = useState("");
  
  // Function to render the model icon based on type
  const renderModelIcon = (type: string) => {
    switch (type) {
      case "Graph Neural Network":
        return <Network className="h-8 w-8 text-tech-blue-500" />;
      case "Transformer":
        return <Brain className="h-8 w-8 text-tech-blue-500" />;
      case "Random Forest":
        return <GitBranch className="h-8 w-8 text-tech-blue-500" />;
      case "Hybrid CNN-GNN":
        return <Layers className="h-8 w-8 text-tech-blue-500" />;
      default:
        return <Brain className="h-8 w-8 text-tech-blue-500" />;
    }
  };

  // Function to get color class based on score
  const getScoreColor = (score: number) => {
    if (score >= 0.9) return "text-green-600";
    if (score >= 0.8) return "text-tech-blue-500";
    if (score >= 0.7) return "text-amber-500";
    return "text-red-500";
  };
  
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">AI Models</h1>
      <p className="text-muted-foreground">
        Access, evaluate, and use AI models for materials design and property prediction.
      </p>
      
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search AI models..."
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <Select defaultValue="All Materials">
          <SelectTrigger>
            <SelectValue placeholder="Material Type" />
          </SelectTrigger>
          <SelectContent>
            {materialTypes.map((type) => (
              <SelectItem key={type} value={type}>{type}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select defaultValue="All Functions">
          <SelectTrigger>
            <SelectValue placeholder="Function" />
          </SelectTrigger>
          <SelectContent>
            {functionTypes.map((func) => (
              <SelectItem key={func} value={func}>{func}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select defaultValue="All Models">
          <SelectTrigger>
            <SelectValue placeholder="Model Type" />
          </SelectTrigger>
          <SelectContent>
            {modelTypes.map((type) => (
              <SelectItem key={type} value={type}>{type}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {/* View Toggle */}
      <Tabs defaultValue="cards">
        <TabsList>
          <TabsTrigger value="cards">Cards</TabsTrigger>
          <TabsTrigger value="table">Table</TabsTrigger>
        </TabsList>
        
        {/* Cards View */}
        <TabsContent value="cards" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockModels.map((model) => (
              <Card key={model.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      {model.type}
                    </Badge>
                    <Badge variant="outline" className="bg-accent/10 text-accent">
                      {model.function}
                    </Badge>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="mr-4 p-2 rounded-md bg-muted">
                      {renderModelIcon(model.type)}
                    </div>
                    <div>
                      <CardTitle>{model.title}</CardTitle>
                      <CardDescription className="mt-1">
                        Updated: {new Date(model.lastUpdated).toLocaleDateString()}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{model.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Accuracy:</span>
                        <span className={getScoreColor(model.accuracy)}>{model.accuracy}</span>
                      </div>
                      <Progress value={model.accuracy * 100} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>R² Score:</span>
                        <span className={getScoreColor(model.r2Score)}>{model.r2Score}</span>
                      </div>
                      <Progress value={model.r2Score * 100} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Explainability:</span>
                        <span className={getScoreColor(model.explainability)}>{model.explainability}</span>
                      </div>
                      <Progress value={model.explainability * 100} className="h-2" />
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Material Categories:</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {model.materialCategories.map((category, index) => (
                          <Badge key={index} variant="secondary">{category}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Code Sample
                  </Button>
                  <Button variant="default" size="sm">
                    Use Model
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        {/* Table View */}
        <TabsContent value="table" className="mt-6">
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left py-3 px-4 font-medium">Model</th>
                  <th className="text-left py-3 px-4 font-medium">Type</th>
                  <th className="text-left py-3 px-4 font-medium">Function</th>
                  <th className="text-left py-3 px-4 font-medium">Accuracy</th>
                  <th className="text-left py-3 px-4 font-medium">R² Score</th>
                  <th className="text-left py-3 px-4 font-medium">Explainability</th>
                  <th className="text-left py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {mockModels.map((model) => (
                  <tr key={model.id} className="hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        {renderModelIcon(model.type)}
                        <span className="ml-2 font-medium">{model.title}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        {model.type}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant="outline" className="bg-accent/10 text-accent">
                        {model.function}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <span className={getScoreColor(model.accuracy)}>{model.accuracy}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={getScoreColor(model.r2Score)}>{model.r2Score}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={getScoreColor(model.explainability)}>{model.explainability}</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <BarChart className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="default" size="sm">
                          Use
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AIModels;
