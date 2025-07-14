
import { useState, useEffect } from 'react';
import { CommandCenter } from '@/components/CommandCenter';
import { BrandPerformanceSnapshot } from '@/components/BrandPerformanceSnapshot';
import { StrategicBriefing } from '@/components/StrategicBriefing';
import { ActionHub } from '@/components/ActionHub';
import { CommandBar } from '@/components/CommandBar';
import { IncidentConsole } from '@/components/IncidentConsole';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';

const Index = () => {
  const [currentView, setCurrentView] = useState('overview');
  const [aiMessage, setAiMessage] = useState('');
  const [showIncident, setShowIncident] = useState(false);

  // Simulate AI typing effect
  useEffect(() => {
    const messages = [
      "Analyzing brand performance metrics...",
      "Your NRx performance shows strong momentum, but I'm detecting concerning patterns in refill adherence.",
      "Suburban markets showing 8% drop in adherence rates. Investigating root causes..."
    ];
    
    let messageIndex = 0;
    const typeMessage = () => {
      if (messageIndex < messages.length) {
        setAiMessage(messages[messageIndex]);
        messageIndex++;
        setTimeout(typeMessage, 3000);
      }
    };
    
    setTimeout(typeMessage, 1000);
  }, []);

  // Simulate incident alert
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIncident(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background command-grid">
        <AppSidebar currentView={currentView} setCurrentView={setCurrentView} />
        
        <main className="flex-1 relative overflow-hidden">
          {/* Header with AI Status */}
          <div className="h-16 border-b border-border/50 flex items-center justify-between px-6 bg-background/80 backdrop-blur-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">AI Strategic Partner Online</span>
              </div>
              {aiMessage && (
                <div className="text-sm text-primary typing-effect px-3 py-1 bg-primary/10 rounded-lg">
                  {aiMessage}
                </div>
              )}
            </div>
            <div className="text-xs text-muted-foreground">
              Command Centre • Real-time Analytics • AI Insights
            </div>
          </div>

          {/* Main Content Area */}
          <div className="h-[calc(100vh-4rem)] overflow-y-auto">
            {currentView === 'overview' && <CommandCenter />}
            {currentView === 'performance' && <BrandPerformanceSnapshot />}
            {currentView === 'briefing' && <StrategicBriefing />}
            {currentView === 'actions' && <ActionHub />}
          </div>

          {/* Command Bar */}
          <CommandBar />

          {/* Incident Console */}
          {showIncident && (
            <IncidentConsole 
              onClose={() => setShowIncident(false)}
              onAccept={() => {
                setShowIncident(false);
                setCurrentView('actions');
              }}
            />
          )}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
