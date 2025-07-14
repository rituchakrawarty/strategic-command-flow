
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, X, Play, Clock, DollarSign } from 'lucide-react';

interface IncidentConsoleProps {
  onClose: () => void;
  onAccept: () => void;
}

export function IncidentConsole({ onClose, onAccept }: IncidentConsoleProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl bg-card border-red-500/50 glow-orange slide-in-right">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-500 animate-pulse" />
              </div>
              <div>
                <span className="text-red-500">Critical Alert Detected</span>
                <div className="text-sm text-muted-foreground font-normal">
                  AI Strategic Partner requires immediate attention
                </div>
              </div>
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Alert Details */}
          <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
            <div className="flex items-start space-x-3">
              <DollarSign className="w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-500 mb-2">Revenue Risk Alert</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  I've detected a 15% rebate clawback risk across Q2 contracts. Three major payers 
                  are flagging adherence metrics below contractual thresholds. This could trigger 
                  automatic penalty clauses worth approximately $2.3M.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-red-500">$2.3M</div>
                    <div className="text-xs text-muted-foreground">At Risk</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-orange-500">72 hrs</div>
                    <div className="text-xs text-muted-foreground">To Respond</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-red-500">3</div>
                    <div className="text-xs text-muted-foreground">Payers Affected</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Actions */}
          <div className="space-y-3">
            <h4 className="font-semibold flex items-center space-x-2">
              <Play className="w-4 h-4 text-primary" />
              <span>Countermeasure Playbook Ready</span>
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-primary/5 rounded border border-primary/20">
                <div>
                  <span className="font-medium">Emergency Adherence Outreach</span>
                  <p className="text-sm text-muted-foreground">Contact at-risk patients immediately</p>
                </div>
                <Badge variant="outline" className="border-green-500 text-green-500">
                  90% Success Rate
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-primary/5 rounded border border-primary/20">
                <div>
                  <span className="font-medium">Payer Documentation Package</span>
                  <p className="text-sm text-muted-foreground">Prepare mitigation evidence for payers</p>
                </div>
                <Badge variant="outline" className="border-orange-500 text-orange-500">
                  48hr Timeline
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-primary/5 rounded border border-primary/20">
                <div>
                  <span className="font-medium">Accelerated Digital Intervention</span>
                  <p className="text-sm text-muted-foreground">Deploy emergency refill reminders</p>
                </div>
                <Badge variant="outline" className="border-primary text-primary">
                  Immediate Deploy
                </Badge>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3 pt-4 border-t border-border/50">
            <Button 
              className="flex-1 bg-red-500 hover:bg-red-600"
              onClick={onAccept}
            >
              <Play className="w-4 h-4 mr-2" />
              Execute Countermeasures
            </Button>
            <Button variant="outline" onClick={onClose}>
              <Clock className="w-4 h-4 mr-2" />
              Snooze 30 min
            </Button>
          </div>

          {/* AI Confidence */}
          <div className="text-center pt-2 border-t border-border/50">
            <p className="text-xs text-muted-foreground">
              AI Confidence: <span className="font-medium text-primary">92%</span> • 
              Risk Level: <span className="font-medium text-red-500">Critical</span> • 
              Response Time: <span className="font-medium text-orange-500">Urgent</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
