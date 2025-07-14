import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Target, 
  Lightbulb, 
  Settings, 
  Play, 
  TrendingUp, 
  Users, 
  MessageSquare,
  Zap,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const brandSections = {
  strategize: {
    title: "Strategic Assessment",
    tools: [
      {
        name: "Market Opportunity Scanner",
        description: "AI-powered analysis of untapped market segments",
        status: "ready",
        impact: "High"
      },
      {
        name: "Competitive Intelligence Hub",
        description: "Real-time competitor monitoring and analysis", 
        status: "active",
        impact: "Medium"
      }
    ]
  },
  plan: {
    title: "Campaign Planning",
    tools: [
      {
        name: "Hypothesis Generator",
        description: "AI-generated testable marketing hypotheses",
        status: "ready", 
        impact: "High"
      },
      {
        name: "Resource Allocation Optimizer",
        description: "Smart budget and resource distribution",
        status: "simulation",
        impact: "Medium"
      }
    ]
  },
  execute: {
    title: "Execution Control",
    tools: [
      {
        name: "Task Orchestrator",
        description: "Automated workflow management and delegation",
        status: "active",
        impact: "Critical"
      },
      {
        name: "Performance Tracker",
        description: "Real-time campaign performance monitoring",
        status: "active",
        impact: "High"
      }
    ]
  },
  operate: {
    title: "Operations Monitor",
    tools: [
      {
        name: "Alert Management System",
        description: "Intelligent incident detection and response",
        status: "active",
        impact: "Critical"
      },
      {
        name: "Stakeholder Communication Hub",
        description: "Automated reporting and stakeholder updates",
        status: "ready",
        impact: "Medium"
      }
    ]
  }
};

const aetheriaInsights = [
  "Your Q3 campaigns show 23% higher engagement when launched between 10-11 AM EST",
  "Competitor X just reduced their digital spend by 15% - opportunity window opening",
  "HCP sentiment analysis suggests focusing on efficacy messaging over safety in Q4"
];

export function BrandView() {
  const [activeSection, setActiveSection] = useState('strategize');
  const [commandInput, setCommandInput] = useState('');
  const [showAetheria, setShowAetheria] = useState(true);

  const handleSlashCommand = (command: string) => {
    if (command.startsWith('/why')) {
      setShowAetheria(true);
      // Simulate AI response
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <Play className="w-4 h-4 text-green-500" />;
      case 'ready': return <CheckCircle className="w-4 h-4 text-blue-500" />;
      case 'simulation': return <Zap className="w-4 h-4 text-purple-500" />;
      default: return <AlertTriangle className="w-4 h-4 text-orange-500" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Critical': return 'bg-red-500/10 text-red-500 border-red-500/20';
      case 'High': return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      case 'Medium': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      default: return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  return (
    <div className="p-6 space-y-6 h-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center space-x-3">
            <Target className="w-8 h-8 text-primary" />
            <span>Brand Command Center</span>
          </h1>
          <p className="text-muted-foreground">Strategic brand management and execution control</p>
        </div>
        <div className="flex items-center space-x-3">
          <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
            Mission Control Active
          </Badge>
        </div>
      </div>

      {/* Aetheria Insights */}
      {showAetheria && (
        <Card className="bg-primary/5 border-primary/20 animate-fade-in">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center space-x-2">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-primary">Notes from Aetheria</span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowAetheria(false)}
                className="ml-auto h-6 w-6 p-0"
              >
                ×
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
              <p className="text-sm font-medium text-primary mb-2">
                {aetheriaInsights[Math.floor(Math.random() * aetheriaInsights.length)]}
              </p>
              <div className="flex items-center space-x-2 mt-3">
                <Input
                  placeholder="/why are refill rates down?"
                  value={commandInput}
                  onChange={(e) => setCommandInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && commandInput.startsWith('/')) {
                      handleSlashCommand(commandInput);
                      setCommandInput('');
                    }
                  }}
                  className="bg-background/50 border-primary/30 text-sm"
                />
                <Button size="sm" variant="outline" className="border-primary/30">
                  Ask AI
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Brand Operations Tabs */}
      <Tabs value={activeSection} onValueChange={setActiveSection} className="flex-1">
        <TabsList className="grid w-full grid-cols-4 bg-muted/30">
          <TabsTrigger value="strategize" className="flex items-center space-x-2">
            <Lightbulb className="w-4 h-4" />
            <span>Strategize</span>
          </TabsTrigger>
          <TabsTrigger value="plan" className="flex items-center space-x-2">
            <Target className="w-4 h-4" />
            <span>Plan</span>
          </TabsTrigger>
          <TabsTrigger value="execute" className="flex items-center space-x-2">
            <Play className="w-4 h-4" />
            <span>Execute</span>
          </TabsTrigger>
          <TabsTrigger value="operate" className="flex items-center space-x-2">
            <Settings className="w-4 h-4" />
            <span>Operate</span>
          </TabsTrigger>
        </TabsList>

        {Object.entries(brandSections).map(([key, section]) => (
          <TabsContent key={key} value={key} className="mt-6">
            <div className="grid gap-6">
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                <p className="text-muted-foreground">AI-driven tools for {key} operations</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.tools.map((tool, index) => (
                  <Card key={index} className="bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-200 cursor-pointer hover:scale-[1.02]">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base flex items-center space-x-2">
                          {getStatusIcon(tool.status)}
                          <span>{tool.name}</span>
                        </CardTitle>
                        <Badge className={getImpactColor(tool.impact)}>
                          {tool.impact}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          Launch Tool
                        </Button>
                        <Button size="sm" variant="outline">
                          Configure
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Section-specific actions */}
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-accent">Quick Actions</h3>
                      <p className="text-sm text-muted-foreground">Common {key} tasks</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        /delegate {key} review
                      </Button>
                      <Button variant="outline" size="sm">
                        /why {key} metrics down?
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}