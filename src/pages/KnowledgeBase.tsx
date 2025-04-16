
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Calendar, BookOpen, FileText, Network, Star, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock knowledge base data
const mockMaterials = [
  {
    id: 1,
    title: "High-k Dielectric Materials for Advanced CMOS Technology",
    type: "Research Paper",
    source: "IEEE Transactions on Electron Devices",
    date: "2025-03-15",
    tags: ["dielectric", "CMOS", "hafnium oxide"],
    summary: "This paper explores the latest developments in high-k dielectric materials for CMOS technology, with a focus on hafnium-based compounds and their integration challenges."
  },
  {
    id: 2,
    title: "Novel Interconnect Materials for 3nm Technology Node",
    type: "Patent",
    source: "USPTO",
    date: "2025-02-10",
    tags: ["interconnect", "ruthenium", "cobalt"],
    summary: "A patented approach for implementing ruthenium and cobalt-based interconnects for ultra-scaled technology nodes with improved reliability and performance."
  },
  {
    id: 3,
    title: "Interface Engineering for Low-k Dielectrics",
    type: "Experimental Data",
    source: "Internal Lab Results",
    date: "2025-01-25",
    tags: ["low-k", "interface", "porosity"],
    summary: "Comprehensive experimental data on various approaches to interface engineering for improving adhesion and mechanical properties of low-k dielectric materials."
  },
  {
    id: 4,
    title: "Machine Learning for Predicting Thermal Conductivity in 2D Materials",
    type: "Research Paper",
    source: "Nature Materials",
    date: "2024-12-05",
    tags: ["2D materials", "thermal conductivity", "machine learning"],
    summary: "This study demonstrates how machine learning can be used to predict thermal conductivity in various 2D materials with high accuracy, reducing the need for expensive experiments."
  }
];

// Material type options for filtering
const materialTypes = [
  "All Materials",
  "Interconnect Materials",
  "Dielectric Materials",
  "Interface Materials",
  "Barrier Materials",
  "2D Materials"
];

// Document type options for filtering
const documentTypes = [
  "All Types",
  "Research Paper",
  "Patent",
  "Experimental Data",
  "Knowledge Graph"
];

// Source options for filtering
const sources = [
  "All Sources",
  "IEEE",
  "Nature",
  "USPTO",
  "CNKI",
  "Internal Data"
];

const KnowledgeBase = () => {
  const [search, setSearch] = useState("");
  
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Knowledge Base</h1>
      
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search knowledge base..."
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
        
        <Select defaultValue="All Types">
          <SelectTrigger>
            <SelectValue placeholder="Document Type" />
          </SelectTrigger>
          <SelectContent>
            {documentTypes.map((type) => (
              <SelectItem key={type} value={type}>{type}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <div className="flex space-x-2">
          <Select defaultValue="All Sources">
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="Source" />
            </SelectTrigger>
            <SelectContent>
              {sources.map((source) => (
                <SelectItem key={source} value={source}>{source}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Button size="icon" variant="outline">
            <Calendar className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* View Toggle */}
      <Tabs defaultValue="cards">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="list">List</TabsTrigger>
            <TabsTrigger value="graph">Knowledge Graph</TabsTrigger>
          </TabsList>
          
          <div>
            <Button variant="outline" size="sm" className="mr-2">
              <Tag className="h-4 w-4 mr-2" />
              My Tags
            </Button>
            <Button variant="outline" size="sm">
              <Star className="h-4 w-4 mr-2" />
              Favorites
            </Button>
          </div>
        </div>
        
        {/* Cards View */}
        <TabsContent value="cards" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockMaterials.map((material) => (
              <Card key={material.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="bg-gradient-to-r from-tech-blue-600 to-tech-blue-400 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {material.type === "Research Paper" && <BookOpen className="h-5 w-5" />}
                      {material.type === "Patent" && <FileText className="h-5 w-5" />}
                      {material.type === "Experimental Data" && <FileText className="h-5 w-5" />}
                      {material.type === "Knowledge Graph" && <Network className="h-5 w-5" />}
                      <Badge variant="secondary">{material.type}</Badge>
                    </div>
                    <Button variant="ghost" size="icon" className="text-white">
                      <Star className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardTitle className="mt-2 text-lg">{material.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <span>{material.source}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(material.date).toLocaleDateString()}</span>
                  </div>
                  <p className="text-sm">{material.summary}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {material.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-muted">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <Button variant="outline" size="sm">Cite</Button>
                  <Button variant="default" size="sm">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        {/* List View */}
        <TabsContent value="list" className="mt-6">
          <div className="space-y-4">
            {mockMaterials.map((material) => (
              <div key={material.id} className="flex border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                <div className="w-16 h-16 flex items-center justify-center bg-muted rounded-lg mr-4">
                  {material.type === "Research Paper" && <BookOpen className="h-8 w-8 text-tech-blue-500" />}
                  {material.type === "Patent" && <FileText className="h-8 w-8 text-tech-blue-500" />}
                  {material.type === "Experimental Data" && <FileText className="h-8 w-8 text-tech-blue-500" />}
                  {material.type === "Knowledge Graph" && <Network className="h-8 w-8 text-tech-blue-500" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{material.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Badge variant="outline">{material.type}</Badge>
                        <span className="mx-2">•</span>
                        <span>{material.source}</span>
                        <span className="mx-2">•</span>
                        <span>{new Date(material.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Star className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm mt-2">{material.summary}</p>
                  <div className="flex justify-end mt-2">
                    <Button variant="ghost" size="sm">View Details</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        {/* Graph View */}
        <TabsContent value="graph" className="mt-6">
          <div className="flex items-center justify-center h-80 bg-muted/30 rounded-lg border border-dashed">
            <div className="text-center">
              <Network className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium">Knowledge Graph View</h3>
              <p className="text-muted-foreground">Interactive graph visualization would be displayed here</p>
              <Button variant="outline" className="mt-4">Generate Graph</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default KnowledgeBase;
