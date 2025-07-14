
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Users, TrendingDown, AlertTriangle, Lightbulb, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const insights = {
  diagnosis: {
    title: "Current Situation Analysis",
    content: "Your NRx performance demonstrates strong momentum with 16.5% market share growth, driven primarily by successful Q2 field campaigns and enhanced HCP engagement programs. However, I'm detecting a concerning pattern in patient adherence, particularly in suburban and western markets where rates have declined 8% over the past 60 days.",
    severity: "medium"
  },
  voices: [
    {
      source: "HCP Feedback",
      insight: "Titration schedule perceived as too complex by 67% of surveyed physicians",
      impact: "Contributing to patient dropout and suboptimal adherence",
      icon: Users
    },
    {
      source: "Competitor Intelligence",
      insight: "Rival brand launched comprehensive digital adherence platform with gamification",
      impact: "Capturing 12% of our market share in key demographics",
      icon: TrendingDown
    },
    {
      source: "Payer Analysis",
      insight: "Formulary access tightening in Tier-2 channels across 3 major regions",
      impact: "Potential 15% revenue impact if not addressed proactively",
      icon: AlertTriangle
    }
  ],
  recommendations: [
    {
      priority: "High",
      action: "Simplify titration messaging in HCP materials",
      rationale: "Address primary physician concern and improve patient onboarding success",
      expectedImpact: "12-15% improvement in adherence rates"
    },
    {
      priority: "High", 
      action: "Launch digital refill reminder pilot in Suburban East region",
      rationale: "Counter competitor advantage and recapture lost market share",
      expectedImpact: "8-10% increase in refill rates within 90 days"
    },
    {
      priority: "Medium",
      action: "Engage payer relations team for formulary optimization",
      rationale: "Protect revenue base and maintain access advantage",
      expectedImpact: "Prevent $2.3M potential revenue loss"
    }
  ]
};

export function StrategicBriefing() {
  const [selectedVoice, setSelectedVoice] = useState<number | null>(null);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center space-x-3">
            <Brain className="w-8 h-8 text-primary" />
            <span>Strategic Briefing</span>
          </h1>
          <p className="text-muted-foreground">AI-powered situation analysis and recommendations</p>
        </div>
        <Badge variant="secondary" className="bg-primary/20 text-primary">
          Strategic Priority: Medium-High
        </Badge>
      </div>

      {/* AI Diagnosis */}
      <Card className="bg-card/50 border-primary/20 glow-blue">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="w-6 h-6 text-primary" />
            <span>AI Strategic Diagnosis</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
            <h3 className="font-semibold text-lg mb-3">{insights.diagnosis.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-base">
              {insights.diagnosis.content}
            </p>
            <div className="mt-4 flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-sm text-orange-500 font-medium">Requires Strategic Attention</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* External Voices */}
      <Card className="bg-card/50 border-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageSquare className="w-6 h-6 text-accent" />
            <span>Market Intelligence & External Voices</span>
          </CardTitle>
          <p className="text-muted-foreground">Key insights from stakeholders and competitive landscape</p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {insights.voices.map((voice, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                  selectedVoice === index 
                    ? 'border-accent bg-accent/10' 
                    : 'border-border/50 bg-card/30 hover:border-accent/50'
                }`}
                onClick={() => setSelectedVoice(selectedVoice === index ? null : index)}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <voice.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-accent">{voice.source}</h4>
                      <Badge variant="outline" className="text-xs">
                        {selectedVoice === index ? 'Click to collapse' : 'Click to expand'}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{voice.insight}</p>
                    {selectedVoice === index && (
                      <div className="slide-in-up">
                        <div className="bg-accent/5 p-3 rounded border-l-2 border-accent">
                          <p className="text-sm font-medium text-accent">Business Impact:</p>
                          <p className="text-sm text-muted-foreground">{voice.impact}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Strategic Recommendations */}
      <Card className="bg-card/50 border-green-500/20 glow-green">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Lightbulb className="w-6 h-6 text-green-500" />
            <span>What We Should Do Next</span>
          </CardTitle>
          <p className="text-muted-foreground">AI-generated action plan with impact projections</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.recommendations.map((rec, index) => (
              <div key={index} className="bg-green-500/5 p-4 rounded-lg border border-green-500/20">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-lg">{rec.action}</h4>
                  <Badge 
                    variant="outline" 
                    className={
                      rec.priority === 'High' 
                        ? 'border-red-500 text-red-500' 
                        : 'border-orange-500 text-orange-500'
                    }
                  >
                    {rec.priority} Priority
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{rec.rationale}</p>
                <div className="bg-green-500/10 p-3 rounded border-l-2 border-green-500">
                  <p className="text-sm font-medium text-green-500">Projected Impact:</p>
                  <p className="text-sm text-muted-foreground">{rec.expectedImpact}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Narrative Summary */}
      <Card className="bg-card/50 border-purple-500/20">
        <CardHeader>
          <CardTitle className="text-purple-500">Executive Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-purple-500/5 p-6 rounded-lg border border-purple-500/20">
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold">Bottom Line:</span> We're winning the NRx battle but losing the adherence war. 
              Our strong physician engagement is generating prescriptions, but patient dropout is costing us sustainable market share. 
              The competitor's digital-first approach is particularly effective in suburban demographics where our traditional 
              strategies show diminishing returns. Immediate action on titration simplification and digital engagement 
              will determine whether we capitalize on our current momentum or watch competitors erode our gains.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
