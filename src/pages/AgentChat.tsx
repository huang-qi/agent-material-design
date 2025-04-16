
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Send, FileText, Plus, ChevronRight, ChevronDown, ChevronLeft, Brain, Calculator } from "lucide-react";

// Mock conversation history for demonstration
const mockConversations = [
  { id: 1, title: "K-value prediction", date: "Apr 15, 2025" },
  { id: 2, title: "Interface analysis", date: "Apr 14, 2025" },
  { id: 3, title: "Materials comparison", date: "Apr 12, 2025" }
];

// Mock chat messages for demonstration
const mockMessages = [
  { id: 1, role: "user", content: "I need to predict the k-value for a new high-k dielectric material." },
  { id: 2, role: "assistant", content: "I can help with that. Could you provide the chemical composition or structure of the material you're interested in?" },
  { id: 3, role: "user", content: "It's a HfO2-based material with Si doping at 5% concentration." },
  { id: 4, role: "assistant", content: "Thanks for the information. Based on similar materials in our database, I can use our GNN model to predict the k-value. Would you like me to proceed with the prediction?" }
];

const AgentChat = () => {
  const [input, setInput] = useState("");
  const [activeConversation, setActiveConversation] = useState(1);
  const [workflowExpanded, setWorkflowExpanded] = useState(true);
  
  return (
    <div className="h-full flex">
      {/* Left Sidebar - Conversation History */}
      <div className="w-64 border-r border-border bg-card flex flex-col">
        <div className="p-4 border-b border-border">
          <Button className="w-full justify-start" variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            New Conversation
          </Button>
        </div>
        <ScrollArea className="flex-1">
          <div className="p-2">
            {mockConversations.map((conv) => (
              <div 
                key={conv.id} 
                className={`p-3 rounded-md cursor-pointer transition-colors mb-2 ${
                  activeConversation === conv.id 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted"
                }`}
                onClick={() => setActiveConversation(conv.id)}
              >
                <div className="flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4" />
                  <span className="font-medium">{conv.title}</span>
                </div>
                <div className="text-xs mt-1 opacity-80">{conv.date}</div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
      
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <ScrollArea className="flex-1 p-4">
          {mockMessages.map((message) => (
            <div 
              key={message.id} 
              className={`mb-4 max-w-3xl ${message.role === "user" ? "ml-auto" : "mr-auto"}`}
            >
              <Card className={`p-4 ${
                message.role === "user" 
                  ? "bg-accent text-accent-foreground" 
                  : "bg-card"
              }`}>
                <p>{message.content}</p>
              </Card>
            </div>
          ))}
        </ScrollArea>
        
        {/* Input Area */}
        <div className="p-4 border-t border-border">
          <div className="flex space-x-2">
            <Input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something about materials design..."
              className="flex-1"
            />
            <Button size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Right Sidebar - Workflow View */}
      <div className={`border-l border-border bg-card transition-all duration-300 ${
        workflowExpanded ? "w-80" : "w-12"
      }`}>
        <div 
          className="p-3 border-b border-border flex items-center cursor-pointer"
          onClick={() => setWorkflowExpanded(!workflowExpanded)}
        >
          {workflowExpanded ? (
            <>
              <FileText className="h-5 w-5 mr-2" />
              <span className="font-medium">Workflow</span>
              <ChevronRight className="h-4 w-4 ml-auto" />
            </>
          ) : (
            <ChevronLeft className="h-4 w-4 mx-auto" />
          )}
        </div>
        
        {workflowExpanded && (
          <div className="p-4">
            <Tabs defaultValue="steps">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="steps">Task Steps</TabsTrigger>
                <TabsTrigger value="tools">Tools Used</TabsTrigger>
              </TabsList>
              <TabsContent value="steps" className="mt-4">
                <div className="space-y-3">
                  {/* Mock workflow steps */}
                  <div className="border border-border rounded-md p-3">
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs mr-2">1</div>
                      <span className="font-medium">Parse material composition</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Identified HfO2 with 5% Si doping</p>
                  </div>
                  
                  <div className="border border-border rounded-md p-3">
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs mr-2">2</div>
                      <span className="font-medium">Select prediction model</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">GNN model for dielectric constant</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="tools" className="mt-4">
                <div className="space-y-3">
                  {/* Mock tools used */}
                  <div className="border border-border rounded-md p-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-accent/20 rounded-md flex items-center justify-center mr-2">
                        <Brain className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <div className="font-medium">MaterialsGNN</div>
                        <div className="text-xs text-muted-foreground">Property prediction model</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-border rounded-md p-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary/20 rounded-md flex items-center justify-center mr-2">
                        <Calculator className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">DFT Validator</div>
                        <div className="text-xs text-muted-foreground">First-principles validation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentChat;
