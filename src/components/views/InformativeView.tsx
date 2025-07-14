import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Newspaper, 
  TrendingUp, 
  AlertTriangle, 
  Users, 
  ExternalLink,
  Clock,
  Bell,
  Filter,
  Search
} from 'lucide-react';

const newsData = {
  company: [
    {
      title: "Q3 Results Beat Expectations",
      summary: "Portfolio revenue up 12% YoY, driven by key brand performance",
      timestamp: "2 hours ago",
      priority: "high",
      category: "earnings"
    },
    {
      title: "New Partnership with Digital Health Platform",
      summary: "Strategic alliance announced to enhance patient engagement capabilities",
      timestamp: "5 hours ago", 
      priority: "medium",
      category: "partnerships"
    },
    {
      title: "R&D Pipeline Update",
      summary: "Phase III trial results expected Q1 2024 for lead compound",
      timestamp: "1 day ago",
      priority: "medium",
      category: "pipeline"
    }
  ],
  industry: [
    {
      title: "FDA Approves Breakthrough Therapy Designation",
      summary: "Competitor receives BTD for oncology indication, market implications",
      timestamp: "4 hours ago",
      priority: "high",
      category: "regulatory"
    },
    {
      title: "Digital Health Funding Surge",
      summary: "$2.3B invested in patient engagement platforms this quarter",
      timestamp: "8 hours ago",
      priority: "medium", 
      category: "market"
    },
    {
      title: "Payer Access Trends Report",
      summary: "Formulary restrictions increasing across therapeutic areas",
      timestamp: "1 day ago",
      priority: "medium",
      category: "access"
    }
  ],
  executive: [
    {
      title: "CEO Town Hall - Q4 Priorities",
      summary: "Focus on digital transformation and market access initiatives",
      timestamp: "6 hours ago",
      priority: "high",
      category: "leadership"
    },
    {
      title: "Strategy Review Meeting",
      summary: "Brand portfolio realignment discussion scheduled for next week",
      timestamp: "12 hours ago",
      priority: "medium",
      category: "strategy"
    }
  ]
};

const pulseData = [
  {
    metric: "Team Sentiment",
    value: "85%",
    trend: "up",
    change: "+3%",
    insight: "Post-Q3 results boost in confidence"
  },
  {
    metric: "Market Buzz",
    value: "High",
    trend: "stable", 
    change: "0%",
    insight: "Consistent social media mentions"
  },
  {
    metric: "Competitor Activity",
    value: "Elevated",
    trend: "up",
    change: "+12%",
    insight: "Increased digital spend detected"
  }
];

export function InformativeView() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/10 text-red-500 border-red-500/20';
      case 'medium': return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      case 'low': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      default: return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down': return <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />;
      default: return <div className="w-4 h-4 bg-gray-400 rounded-full" />;
    }
  };

  const allNews = [
    ...newsData.company.map(item => ({ ...item, source: 'company' })),
    ...newsData.industry.map(item => ({ ...item, source: 'industry' })),
    ...newsData.executive.map(item => ({ ...item, source: 'executive' }))
  ].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  return (
    <div className="p-6 space-y-6 h-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center space-x-3">
            <Newspaper className="w-8 h-8 text-primary" />
            <span>Information Command Center</span>
          </h1>
          <p className="text-muted-foreground">Real-time intelligence and market pulse</p>
        </div>
        <div className="flex items-center space-x-3">
          <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
            <Bell className="w-3 h-3 mr-1" />
            Live Feed Active
          </Badge>
        </div>
      </div>

      {/* Pulse Dashboard */}
      <Card className="bg-card/50 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-6 h-6 text-primary" />
            <span>Market Pulse</span>
          </CardTitle>
          <p className="text-sm text-muted-foreground">Real-time sentiment and activity indicators</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pulseData.map((pulse, index) => (
              <div key={index} className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-sm">{pulse.metric}</h3>
                  <div className="flex items-center space-x-1">
                    {getTrendIcon(pulse.trend)}
                    <span className="text-xs text-muted-foreground">{pulse.change}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{pulse.value}</div>
                <p className="text-xs text-muted-foreground">{pulse.insight}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Filter Controls */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Filter:</span>
        </div>
        <div className="flex items-center space-x-2">
          {['all', 'company', 'industry', 'executive'].map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* News Feed */}
      <Card className="bg-card/50 border-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Newspaper className="w-6 h-6 text-accent" />
            <span>What's Happening Around Me</span>
          </CardTitle>
          <p className="text-sm text-muted-foreground">AI-summarized headlines and insights</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {allNews
              .filter(item => selectedCategory === 'all' || item.source === selectedCategory)
              .map((item, index) => {
                const itemId = `${item.source}-${index}`;
                const isExpanded = expandedItems.has(itemId);
                
                return (
                  <div key={itemId} className="p-4 bg-accent/5 rounded-lg border border-accent/20 transition-all duration-200 hover:border-accent/40">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold text-base">{item.title}</h3>
                          <Badge className={getPriorityColor(item.priority)}>
                            {item.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{item.summary}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{item.timestamp}</span>
                          </div>
                          <Badge variant="outline" className="text-xs capitalize">
                            {item.source}
                          </Badge>
                          <Badge variant="outline" className="text-xs capitalize">
                            {item.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 mt-3">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => toggleExpanded(itemId)}
                      >
                        {isExpanded ? 'Collapse' : 'Drill In'}
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Source
                      </Button>
                      <Button size="sm" variant="outline">
                        Ask AI
                      </Button>
                    </div>

                    {isExpanded && (
                      <div className="mt-4 p-4 bg-background/50 rounded-lg border animate-fade-in">
                        <h4 className="font-semibold mb-2">AI Deep Dive Analysis</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <p><strong>Market Impact:</strong> This development could affect our competitive positioning in the {item.category} space.</p>
                          <p><strong>Strategic Implications:</strong> Recommend monitoring for potential partnership opportunities or defensive strategies.</p>
                          <p><strong>Timeline:</strong> Key decisions should be made within 2-3 weeks to maintain competitive advantage.</p>
                        </div>
                        <div className="mt-3 flex items-center space-x-2">
                          <Button size="sm" className="bg-primary hover:bg-primary/90">
                            Create Action Item
                          </Button>
                          <Button size="sm" variant="outline">
                            Share with Team
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </CardContent>
      </Card>

      {/* Executive Briefing Summary */}
      <Card className="bg-card/50 border-purple-500/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-6 h-6 text-purple-500" />
            <span>Executive Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-purple-500/5 p-4 rounded-lg border border-purple-500/20">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Key Takeaways:</strong> Market conditions remain favorable with strong Q3 performance across the portfolio. 
              Competitor activity is increasing in digital channels, requiring accelerated response in patient engagement initiatives. 
              Executive leadership is prioritizing digital transformation and market access optimization for Q4. 
              Recommend maintaining current momentum while preparing defensive strategies for competitive pressures.
            </p>
            <div className="mt-3 flex items-center space-x-2">
              <Button size="sm" className="bg-purple-500 hover:bg-purple-600">
                Generate Full Report
              </Button>
              <Button size="sm" variant="outline">
                Schedule Briefing
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}