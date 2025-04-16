
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
import { Search, Beaker, Workflow, GitMerge, BarChart3, FileVolume, ArrowRight, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Mock chemical tools data
const mockTools = [
  {
    id: 1,
    title: "Molecular Editor",
    type: "Structure",
    description: "Interactive 2D/3D editor for creating and modifying molecular structures with real-time property estimation.",
    features: ["2D/3D Visualization", "Atom-by-atom editing", "Force field optimization", "Export to multiple formats"],
    integration: ["AI Model Library", "Computation Models"],
    image: "molecular-editor.png"
  },
  {
    id: 2,
    title: "Reaction Pathway Predictor",
    type: "Synthesis",
    description: "ML-powered tool to predict synthesis routes and reaction pathways for target molecules.",
    features: ["Multiple pathway suggestions", "Reaction conditions prediction", "Yield estimation", "Literature validation"],
    integration: ["Knowledge Base", "AI Model Library"],
    image: "reaction-predictor.png"
  },
  {
    id: 3,
    title: "Spectral Analyzer",
    type: "Analysis",
    description: "Automated analysis tool for XPS, FTIR, NMR and other spectroscopic data with peak identification.",
    features: ["Multiple spectroscopy types", "Automatic peak detection", "Composition analysis", "Literature comparison"],
    integration: ["Knowledge Base", "Data Repository"],
    image: "spectral-analyzer.png"
  },
  {
    id: 4,
    title: "Material Similarity Search",
    type: "Discovery",
    description: "Find similar materials based on structure, properties, or performance metrics using fingerprinting algorithms.",
    features: ["Multiple similarity metrics", "Structure-based search", "Property-based search", "Interactive visualization"],
    integration: ["Knowledge Base", "AI Model Library"],
    image: "similarity-search.png"
  },
  {
    id: 5,
    title: "Process Optimizer",
    type: "Process",
    description: "Optimize deposition and processing parameters to achieve target material properties using ML algorithms.",
    features: ["Multi-objective optimization", "Process window determination", "Sensitivity analysis", "Interactive visualization"],
    integration: ["Computation Models", "AI Model Library"],
    image: "process-optimizer.png"
  },
  {
    id: 6,
    title: "Structure-Property Mapper",
    type: "Analysis",
    description: "Explore relationships between material structure and properties through ML-driven correlation analysis.",
    features: ["Correlation identification", "Feature importance", "Property prediction", "Visualization tools"],
    integration: ["AI Model Library", "Knowledge Base"],
    image: "structure-property.png"
  }
];

const toolTypes = ["All Types", "Structure", "Synthesis", "Analysis", "Discovery", "Process"];

const ChemicalTools = () => {
  const [search, setSearch] = useState("");
  const [toolType, setToolType] = useState("All Types");
  
  // Get tool icon based on type
  const getToolIcon = (type: string) => {
    switch (type) {
      case "Structure":
        return <Beaker className="h-8 w-8 text-tech-blue-500" />;
      case "Synthesis":
        return <GitMerge className="h-8 w-8 text-tech-blue-500" />;
      case "Analysis":
        return <BarChart3 className="h-8 w-8 text-tech-blue-500" />;
      case "Discovery":
        return <Search className="h-8 w-8 text-tech-blue-500" />;
      case "Process":
        return <Workflow className="h-8 w-8 text-tech-blue-500" />;
      default:
        return <Beaker className="h-8 w-8 text-tech-blue-500" />;
    }
  };
  
  // Filter tools based on search and type
  const filteredTools = mockTools.filter(tool => {
    const matchesSearch = search === "" || 
      tool.title.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.toLowerCase().includes(search.toLowerCase());
    
    const matchesType = toolType === "All Types" || tool.type === toolType;
    
    return matchesSearch && matchesType;
  });
  
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Chemical Tools</h1>
      <p className="text-muted-foreground">
        Access specialized tools for molecular design, synthesis prediction, and data analysis.
      </p>
      
      {/* Filters */}
      <div className="flex space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search tools..."
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="All Types" onValueChange={setToolType} className="w-auto">
          <TabsList>
            {toolTypes.map(type => (
              <TabsTrigger key={type} value={type}>{type}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      
      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredTools.map((tool) => (
          <Card key={tool.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  {tool.type}
                </Badge>
              </div>
              <div className="flex items-center mt-2">
                <div className="mr-4 p-2 rounded-md bg-muted">
                  {getToolIcon(tool.type)}
                </div>
                <div>
                  <CardTitle>{tool.title}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">{tool.description}</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium">Features:</h4>
                  <ul className="text-sm mt-1 space-y-1 list-disc list-inside text-muted-foreground">
                    {tool.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium">Integrates with:</h4>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {tool.integration.map((item, index) => (
                      <Badge key={index} variant="secondary">{item}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4 flex justify-between">
              <Button variant="outline" size="sm">
                Learn More
                <ExternalLink className="h-3 w-3 ml-1" />
              </Button>
              <Button variant="default" size="sm">
                Launch Tool
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {/* Empty state if no tools match */}
      {filteredTools.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Beaker className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium">No matching tools found</h3>
          <p className="text-muted-foreground mt-2">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default ChemicalTools;
