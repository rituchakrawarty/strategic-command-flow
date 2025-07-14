
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, Target, AlertCircle, Brain, Zap } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const kpiData = [
  { name: 'Jan', nrx: 2400, scripts: 4800, marketShare: 12.5 },
  { name: 'Feb', nrx: 2800, scripts: 5200, marketShare: 13.2 },
  { name: 'Mar', nrx: 3200, scripts: 5800, marketShare: 14.1 },
  { name: 'Apr', nrx: 2900, scripts: 5400, marketShare: 13.8 },
  { name: 'May', nrx: 3400, scripts: 6200, marketShare: 15.2 },
  { name: 'Jun', nrx: 3800, scripts: 6800, marketShare: 16.5 },
];

const adherenceData = [
  { name: 'Urban', value: 85, color: '#10B981' },
  { name: 'Suburban', value: 72, color: '#F59E0B' },
  { name: 'Rural', value: 78, color: '#3B82F6' },
];

export function CommandCenter() {
  return (
    <div className="p-6 space-y-6">
      {/* Hero Status Panel */}
      <div className="bg-card/50 rounded-xl p-6 border border-primary/20 glow-blue">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Mission Status: Active</h1>
              <p className="text-muted-foreground">AI Strategic Partner monitoring all channels</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-500">All Systems Operational</span>
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">+16.5%</div>
            <div className="text-sm text-muted-foreground">Market Share</div>
            <div className="text-xs text-green-500">↗ Trending up</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">3,800</div>
            <div className="text-sm text-muted-foreground">New Prescriptions</div>
            <div className="text-xs text-green-500">+12% vs last month</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500">78%</div>
            <div className="text-sm text-muted-foreground">Avg Adherence</div>
            <div className="text-xs text-orange-500">⚠ Needs attention</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">94%</div>
            <div className="text-sm text-muted-foreground">HCP Satisfaction</div>
            <div className="text-xs text-green-500">↗ Improving</div>
          </div>
        </div>
      </div>

      {/* Live Charts Grid */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="bg-card/50 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>Performance Trajectory</span>
            </CardTitle>
            <div className="text-sm text-muted-foreground">
              Real-time NRx and market share trends
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={kpiData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Area 
                  type="monotone" 
                  dataKey="nrx" 
                  stroke="hsl(var(--primary))" 
                  fill="hsl(var(--primary))" 
                  fillOpacity={0.2}
                />
                <Area 
                  type="monotone" 
                  dataKey="marketShare" 
                  stroke="hsl(var(--accent))" 
                  fill="hsl(var(--accent))" 
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-accent/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-accent" />
              <span>Adherence by Region</span>
            </CardTitle>
            <div className="text-sm text-muted-foreground">
              Geographic performance breakdown
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={adherenceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  dataKey="value"
                >
                  {adherenceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-6 mt-4">
              {adherenceData.map((item) => (
                <div key={item.name} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm">{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights Stream */}
      <Card className="bg-card/50 border-orange-500/20 glow-orange">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-orange-500" />
            <span>AI Brain Activity</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 slide-in-up">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div>
                <p className="text-sm">
                  <span className="text-primary font-medium">Pattern Recognition:</span> 
                  Suburban adherence drop correlates with new competitor digital app launch
                </p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 slide-in-up">
              <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
              <div>
                <p className="text-sm">
                  <span className="text-accent font-medium">Opportunity Detected:</span> 
                  HCP feedback indicates simplified dosing could improve adherence by 15%
                </p>
                <p className="text-xs text-muted-foreground">5 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 slide-in-up">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm">
                  <span className="text-orange-500 font-medium">Market Intelligence:</span> 
                  Payer sentiment analysis shows formulary tier concerns in 3 major regions
                </p>
                <p className="text-xs text-muted-foreground">8 minutes ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
