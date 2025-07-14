import { Button } from '@/components/ui/button';
import { HelpCircle, Lightbulb, Play } from 'lucide-react';

export function PersistentRibbon() {
  return (
    <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-background/95 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2 shadow-lg">
        <div className="flex items-center space-x-4">
          <Button size="sm" variant="ghost" className="text-blue-500 hover:bg-blue-500/10">
            <HelpCircle className="w-4 h-4 mr-1" />
            Why
          </Button>
          <Button size="sm" variant="ghost" className="text-orange-500 hover:bg-orange-500/10">
            <Lightbulb className="w-4 h-4 mr-1" />
            What
          </Button>
          <Button size="sm" variant="ghost" className="text-green-500 hover:bg-green-500/10">
            <Play className="w-4 h-4 mr-1" />
            How
          </Button>
        </div>
      </div>
    </div>
  );
}