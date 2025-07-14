
import { BarChart3, Brain, Target, TrendingUp, AlertTriangle, Zap } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

interface AppSidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

const navigationItems = [
  { 
    id: 'overview', 
    title: 'Command Centre', 
    icon: Zap,
    description: 'Mission Control'
  },
  { 
    id: 'performance', 
    title: 'Performance', 
    icon: TrendingUp,
    description: 'Live Metrics'
  },
  { 
    id: 'briefing', 
    title: 'AI Briefing', 
    icon: Brain,
    description: 'Strategic Analysis'
  },
  { 
    id: 'actions', 
    title: 'Action Hub', 
    icon: Target,
    description: 'Execute Plans'
  },
];

export function AppSidebar({ currentView, setCurrentView }: AppSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar className={`${collapsed ? 'w-16' : 'w-64'} border-r border-border/50 bg-sidebar`}>
      <SidebarContent>
        <div className="p-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="font-bold text-lg">AI Strategic</h2>
                <p className="text-xs text-muted-foreground">Command Centre</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? 'sr-only' : ''}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setCurrentView(item.id)}
                    className={`${
                      currentView === item.id 
                        ? 'bg-primary/20 text-primary border-l-2 border-primary' 
                        : 'hover:bg-sidebar-accent'
                    } transition-all duration-200`}
                  >
                    <item.icon className="w-5 h-5" />
                    {!collapsed && (
                      <div className="flex flex-col">
                        <span className="font-medium">{item.title}</span>
                        <span className="text-xs text-muted-foreground">{item.description}</span>
                      </div>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* AI Status Panel */}
        <div className={`mt-auto p-4 ${collapsed ? 'hidden' : 'block'}`}>
          <div className="bg-primary/5 rounded-lg p-3 space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium">AI Analysis Active</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Processing 12,847 data points
            </div>
            <div className="w-full bg-primary/20 rounded-full h-1">
              <div className="bg-primary h-1 rounded-full w-3/4 animate-pulse"></div>
            </div>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
