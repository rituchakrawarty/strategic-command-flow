
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Target, Play, BarChart3, CheckCircle, Clock, AlertCircle, Zap } from 'lucide-react';
import { useState } from 'react';

const hypotheses = [
  {
    id: 1,
    title: "Simplify Titration Messaging",
    description: "Redesign HCP materials to reduce complexity in dosing instructions",
    priority: "High",
    status: "ready",
    expectedImpact: {
      adherence: "+12-15%",
      timeline: "30-45 days",
      confidence: 85
    },
    tactics: [
      "Create visual dosing guides",
      "Develop patient-friendly titration calendar", 
      "Train MSLs on simplified messaging"
    ]
  },
  {
    id: 2,
    title: "Digital Refill Reminder Pilot",
    description: "Launch SMS/app-based refill reminder system in Suburban East region",
    priority: "High",
    status: "ready",
    expectedImpact: {
      adherence: "+8-10%",
      timeline: "60-90 days",
      confidence: 78
    },
    tactics: [
      "Partner with digital health platform",
      "Design patient engagement journey",
      "Implement tracking and analytics"
    ]
  },
  {
    id: 3,
    title: "Payer Formulary Optimization",
    description: "Engage payer relations team to maintain Tier-2 access",
    priority: "Medium",
    status: "in-progress",
    expectedImpact: {
      adherence: "Maintain current",
      timeline: "90-120 days", 
      confidence: 72
    },
    tactics: [
      "Prepare health economics dossier",
      "Schedule payer advisory meetings",
      "Develop value-based care proposals"
    ]
  },
  {
    id: 4,
    title: "Competitive Response Strategy",
    description: "Counter competitor's digital advantage with differentiated approach",
    priority: "Medium",
    status: "simulation",
    expectedImpact: {
      adherence: "+5-8%",
      timeline: "120-150 days",
      confidence: 65
    },
    tactics: [
      "Analyze competitor weaknesses",
      "Develop unique value proposition",
      "Create go-to-market strategy"
    ]
  }
];

const simulations = {
  1: {
    scenarios: [
      { name: "Conservative", impact: "+12%", revenue: "+$2.8M", probability: "85%" },
      { name: "Optimistic", impact: "+18%", revenue: "+$4.2M", probability: "45%" },
      { name: "Pessimistic", impact: "+8%", revenue: "+$1.9M", probability: "95%" }
    ]
  },
  2: {
    scenarios: [
      { name: "Conservative", impact: "+8%", revenue: "+$1.9M", probability: "80%" },
      { name: "Optimistic", impact: "+15%", revenue: "+$3.5M", probability: "35%" },
      { name: "Pessimistic", impact: "+5%", revenue: "+$1.2M", probability: "90%" }
    ]
  }
};

export function ActionHub() {
  const [selectedHypothesis, setSelectedHypothesis] = useState<number | null>(null);
  const [showSimulation, setShowSimulation] = useState<number | null>(null);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ready': return <Play className="w-4 h-4 text-green-500" />;
      case 'in-progress': return <Clock className="w-4 h-4 text-orange-500" />;
      case 'simulation': return <BarChart3 className="w-4 h-4 text-purple-500" />;
      default: return <CheckCircle className="w-4 h-4 text-blue-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready': return 'border-green-500/20 bg-green-500/5';
      case 'in-progress': return 'border-orange-500/20 bg-orange-500/5';
      case 'simulation': return 'border-purple-500/20 bg-purple-500/5';
      default: return 'border-blue-500/20 bg-blue-500/5';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center space-x-3">
            <Target className="w-8 h-8 text-primary" />
            <span>Action Hub</span>
          </h1>
          <p className="text-muted-foreground">AI-generated hypotheses ready for execution</p>
        </div>
        <div className="flex items-center space-x-3">
          <Badge variant="secondary" className="bg-green-500/20 text-green-500">
            4 Actions Ready
          </Badge>
          <Badge variant="secondary" className="bg-orange-500/20 text-orange-500">
            1 In Progress
          </Badge>
        </div>
      </div>

      {/* Hypothesis Cards */}
      <div className="grid gap-6">
        {hypotheses.map((hypothesis) => (
          <Card 
            key={hypothesis.id} 
            className={`${getStatusColor(hypothesis.status)} border transition-all duration-200 cursor-pointer hover:scale-[1.01]`}
            onClick={() => setSelectedHypothesis(selectedHypothesis === hypothesis.id ? null : hypothesis.id)}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-3">
                  {getStatusIcon(hypothesis.status)}
                  <span>{hypothesis.title}</span>
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge 
                    variant="outline"
                    className={
                      hypothesis.priority === 'High' 
                        ? 'border-red-500 text-red-500' 
                        : 'border-orange-500 text-orange-500'
                    }
                  >
                    {hypothesis.priority} Priority
                  </Badge>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <span>Confidence:</span>
                    <span className="font-medium">{hypothesis.expectedImpact.confidence}%</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">{hypothesis.description}</p>
            </CardHeader>

            <CardContent>
              {/* Impact Summary */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{hypothesis.expectedImpact.adherence}</div>
                  <div className="text-sm text-muted-foreground">Adherence Lift</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{hypothesis.expectedImpact.timeline}</div>
                  <div className="text-sm text-muted-foreground">Timeline</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">{hypothesis.expectedImpact.confidence}%</div>
                  <div className="text-sm text-muted-foreground">Confidence</div>
                </div>
              </div>

              {/* Confidence Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Success Probability</span>
                  <span className="text-sm text-muted-foreground">{hypothesis.expectedImpact.confidence}%</span>
                </div>
                <Progress value={hypothesis.expectedImpact.confidence} className="h-2" />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                {hypothesis.status === 'ready' && (
                  <Button className="bg-green-500 hover:bg-green-600">
                    <Play className="w-4 h-4 mr-2" />
                    Execute Action
                  </Button>
                )}
                {hypothesis.status === 'in-progress' && (
                  <Button variant="outline" className="border-orange-500 text-orange-500">
                    <Clock className="w-4 h-4 mr-2" />
                    View Progress
                  </Button>
                )}
                <Button 
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowSimulation(showSimulation === hypothesis.id ? null : hypothesis.id);
                  }}
                  disabled={!simulations[hypothesis.id as keyof typeof simulations]}
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Simulate Impact
                </Button>
              </div>

              {/* Expanded Details */}
              {selectedHypothesis === hypothesis.id && (
                <div className="mt-6 slide-in-up">
                  <h4 className="font-semibold mb-3">Tactical Implementation</h4>
                  <div className="space-y-2">
                    {hypothesis.tactics.map((tactic, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">{tactic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Simulation Results */}
              {showSimulation === hypothesis.id && simulations[hypothesis.id as keyof typeof simulations] && (
                <div className="mt-6 slide-in-up">
                  <h4 className="font-semibold mb-3 flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-purple-500" />
                    <span>AI Impact Simulation</span>
                  </h4>
                  <div className="grid gap-3">
                    {simulations[hypothesis.id as keyof typeof simulations].scenarios.map((scenario, index) => (
                      <div key={index} className="bg-card/50 p-3 rounded-lg border border-border/50">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-medium">{scenario.name} Scenario</span>
                            <div className="text-sm text-muted-foreground">
                              {scenario.impact} adherence • {scenario.revenue} revenue
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {scenario.probability} likely
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Recommendation Panel */}
      <Card className="bg-primary/5 border-primary/20 glow-blue">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertCircle className="w-6 h-6 text-primary" />
            <span>AI Recommendation</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Based on current market conditions and success probabilities, I recommend prioritizing 
            <span className="font-semibold text-primary"> "Simplify Titration Messaging" </span>
            and <span className="font-semibold text-primary"> "Digital Refill Reminder Pilot" </span>
            for immediate execution. These actions have the highest confidence scores and can be implemented 
            in parallel for maximum impact.
          </p>
          <Button className="bg-primary hover:bg-primary/90">
            <Target className="w-4 h-4 mr-2" />
            Execute Recommended Actions
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
