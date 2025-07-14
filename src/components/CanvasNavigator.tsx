import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Target, User, Newspaper } from 'lucide-react';

interface CanvasNavigatorProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export function CanvasNavigator({ currentView, setCurrentView }: CanvasNavigatorProps) {
  const views = [
    { id: 'brand', label: 'Brand', icon: Target, color: 'bg-primary/20 text-primary border-primary/30' },
    { id: 'personal', label: 'Personal', icon: User, color: 'bg-accent/20 text-accent border-accent/30' },
    { id: 'informative', label: 'Intelligence', icon: Newspaper, color: 'bg-green-500/20 text-green-500 border-green-500/30' }
  ];

  return (
    <div className="fixed top-20 right-6 z-50 bg-background/95 backdrop-blur-sm border border-border/50 rounded-lg p-3 shadow-lg">
      <div className="flex items-center space-x-2">
        <span className="text-xs text-muted-foreground font-medium">VIEW:</span>
        {views.map((view) => (
          <Button
            key={view.id}
            size="sm"
            variant={currentView === view.id ? "default" : "outline"}
            onClick={() => setCurrentView(view.id)}
            className={currentView === view.id ? view.color : ""}
          >
            <view.icon className="w-4 h-4 mr-1" />
            {view.label}
          </Button>
        ))}
      </div>
    </div>
  );
}