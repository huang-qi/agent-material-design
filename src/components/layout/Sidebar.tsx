
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  MessageSquare, 
  Book, 
  Calculator, 
  Brain, 
  Beaker, 
  BarChart, 
  User,
  ChevronLeft,
  ChevronRight,
  Home
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";

interface SidebarProps {
  className?: string;
}

const navItems = [
  { 
    icon: Home, 
    label: "首页", 
    path: "/", 
    description: "平台主页" 
  },
  { 
    icon: MessageSquare, 
    label: "ICMAgent", 
    path: "/agent", 
    description: "AI Assistant" 
  },
  { 
    icon: Book, 
    label: "Knowledge Base", 
    path: "/knowledge", 
    description: "Research Materials" 
  },
  { 
    icon: Calculator, 
    label: "Computation Models", 
    path: "/computation", 
    description: "Simulation Tools" 
  },
  { 
    icon: Brain, 
    label: "AI Models", 
    path: "/ai-models", 
    description: "ML/DL Models" 
  },
  { 
    icon: Beaker, 
    label: "Chemical Tools", 
    path: "/chemical-tools", 
    description: "Analysis Tools" 
  },
  { 
    icon: BarChart, 
    label: "Tasks & History", 
    path: "/tasks", 
    description: "Workflows" 
  },
];

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={cn(
      "bg-sidebar relative flex flex-col h-screen border-r border-sidebar-border transition-all duration-300",
      collapsed ? "w-16" : "w-64",
      className
    )}>
      {/* User Profile */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10 bg-sidebar-primary">
            <User className="h-6 w-6 text-white" />
          </Avatar>
          {!collapsed && (
            <div className="text-sidebar-foreground transition-opacity duration-300">
              <div className="font-medium">Researcher</div>
              <div className="text-xs text-sidebar-foreground/70">IC Materials Lab</div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-md transition-colors duration-200",
                  isActive 
                    ? "bg-sidebar-primary text-sidebar-primary-foreground" 
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  collapsed && "justify-center"
                )}
              >
                <item.icon size={20} />
                {!collapsed && (
                  <span className="transition-opacity duration-300">{item.label}</span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Collapse Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 bg-sidebar-primary text-white rounded-full p-1 shadow-md hover:bg-tech-blue-600 transition-colors"
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
    </div>
  );
}
