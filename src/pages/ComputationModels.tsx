
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
import { 
  Calculator, 
  Search, 
  Cpu, 
  Code, 
  Share2, 
  Bookmark, 
  ThumbsUp, 
  FastForward, 
  ArrowRight, 
  Server
} from "lucide-react";

// Mock computation models data
const mockModels = [
  {
    id: 1,
    title: "DFT Predictor for High-k Materials",
    category: "DFT",
    materialType: "High-k Materials",
    description: "Density functional theory modeling for accurate prediction of dielectric properties in high-k materials.",
    inputs: ["Structure (CIF/POSCAR)", "Calculation Parameters"],
    outputs: ["Electronic Structure", "Dielectric Constant", "Band Gap"],
    platform: "AWS EC2",
    likes: 485,
    citations: 132
  },
  {
    id: 2,
    title: "Molecular Dynamics for Interface Stability",
    category: "MD",
    materialType: "Interface Materials",
    description: "LAMMPS-based molecular dynamics simulations to predict stability and adhesion at material interfaces.",
    inputs: ["Material Layers", "Force Field", "Temperature Range"],
    outputs: ["Interface Energy", "Adhesion Metrics", "Thermal Stability"],
    platform: "Local HPC",
    likes: 342,
    citations: 89
  },
  {
    id: 3,
    title: "KMC Simulator for Interconnect Reliability",
    category: "KMC",
    materialType: "Interconnect Materials",
    description: "Kinetic Monte Carlo simulation for predicting electromigration and stress-induced failures in interconnect lines.",
    inputs: ["Geometry", "Current Density", "Temperature"],
    outputs: ["MTTF Prediction", "Void Formation Analysis", "Current Crowding Map"],
    platform: "Google Cloud",
    likes: 267,
    citations: 76
  },
  {
    id: 4,
    title: "Phase Field Model for Thin Film Growth",
    category: "Phase Field",
    materialType: "Thin Films",
    description: "Multi-phase field model for predicting microstructure evolution during thin film deposition and growth.",
    inputs: ["Initial Conditions", "Phase Parameters", "Process Variables"],
    outputs: ["Microstructure Evolution", "Grain Size Distribution", "Defect Analysis"],
    platform: "Azure",
    likes: 198,
    citations: 54
  }
];

// Filter options
const materialTypes = [
  "All Materials",
  "High-k Materials",
  "Interconnect Materials",
  "Interface Materials",
  "Barrier Materials",
  "Thin Films"
];

const simulationMethods = [
  "All Methods",
  "DFT",
  "MD",
  "KMC",
  "Phase Field",
  "TCAD",
  "Other"
];

const ComputationModels = () => {
  const [search, setSearch] = useState("");
  
  // Function to render the model icon based on category
  const renderModelIcon = (category: string) => {
    switch (category) {
      case "DFT":
        return <Cpu className="h-8 w-8 text-tech-blue-500" />;
      case "MD":
        return <FastForward className="h-8 w-8 text-tech-blue-500" />;
      case "KMC":
        return <Calculator className="h-8 w-8 text-tech-blue-500" />;
      case "Phase Field":
        return <Server className="h-8 w-8 text-tech-blue-500" />;
      default:
        return <Calculator className="h-8 w-8 text-tech-blue-500" />;
    }
  };
  
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Computation Models</h1>
      <p className="text-muted-foreground">
        Access and run computational models for material property prediction and process simulation.
      </p>
      
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search models..."
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
        
        <Select defaultValue="All Methods">
          <SelectTrigger>
            <SelectValue placeholder="Simulation Method" />
          </SelectTrigger>
          <SelectContent>
            {simulationMethods.map((method) => (
              <SelectItem key={method} value={method}>{method}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {/* View Toggle */}
      <Tabs defaultValue="grid">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="grid">Grid</TabsTrigger>
            <TabsTrigger value="list">List</TabsTrigger>
          </TabsList>
          
          <Button variant="outline" size="sm">
            <Bookmark className="h-4 w-4 mr-2" />
            Saved Models
          </Button>
        </div>
        
        {/* Grid View */}
        <TabsContent value="grid" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockModels.map((model) => (
              <Card key={model.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      {model.category}
                    </Badge>
                    <Badge variant="outline">{model.materialType}</Badge>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="mr-4 p-2 rounded-md bg-muted">
                      {renderModelIcon(model.category)}
                    </div>
                    <div>
                      <CardTitle>{model.title}</CardTitle>
                      <CardDescription className="mt-1">
                        Platform: {model.platform}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{model.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium">Inputs:</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {model.inputs.map((input, index) => (
                          <Badge key={index} variant="secondary">{input}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium">Outputs:</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {model.outputs.map((output, index) => (
                          <Badge key={index} variant="outline">{output}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span className="mr-3">{model.likes}</span>
                    <Code className="h-4 w-4 mr-1" />
                    <span>{model.citations} citations</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                    <Button variant="default" size="sm">
                      Use
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        {/* List View */}
        <TabsContent value="list" className="mt-6">
          <div className="space-y-4">
            {mockModels.map((model) => (
              <div key={model.id} className="flex border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                <div className="w-16 h-16 flex items-center justify-center bg-muted rounded-lg mr-4">
                  {renderModelIcon(model.category)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-medium">{model.title}</h3>
                        <Badge variant="outline" className="ml-2 bg-primary/10 text-primary">
                          {model.category}
                        </Badge>
                        <Badge variant="outline" className="ml-2">
                          {model.materialType}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Platform: {model.platform}
                      </p>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      <span className="mr-3">{model.likes}</span>
                      <Code className="h-4 w-4 mr-1" />
                      <span>{model.citations} citations</span>
                    </div>
                  </div>
                  <p className="text-sm mt-2">{model.description}</p>
                  <div className="flex justify-end mt-2">
                    <Button variant="ghost" size="sm" className="mr-2">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                    <Button variant="default" size="sm">
                      Use
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ComputationModels;
