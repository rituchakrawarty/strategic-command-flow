
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, AlertCircle, Info } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const nrxData = [
  { month: 'Jan', value: 2400, trend: 'up', aiNote: 'Q1 field campaigns driving uptick' },
  { month: 'Feb', value: 2800, trend: 'up', aiNote: 'Momentum building from HCP education' },
  { month: 'Mar', value: 3200, trend: 'up', aiNote: 'Peak performance month' },
  { month: 'Apr', value: 2900, trend: 'down', aiNote: 'Seasonal dip expected' },
  { month: 'May', value: 3400, trend: 'up', aiNote: 'Strong recovery, MSL impact visible' },
  { month: 'Jun', value: 3800, trend: 'up', aiNote: 'Record month, digital strategy paying off' },
];

const marketShareData = [
  { competitor: 'Our Brand', share: 16.5, change: '+2.3%', color: '#3B82F6' },
  { competitor: 'Competitor A', share: 24.8, change: '-1.2%', color: '#EF4444' },
  { competitor: 'Competitor B', share: 18.9, change: '+0.5%', color: '#F59E0B' },
  { competitor: 'Competitor C', share: 15.2, change: '-0.8%', color: '#8B5CF6' },
  { competitor: 'Others', share: 24.6, change: '-0.8%', color: '#6B7280' },
];

const adherenceData = [
  { region: 'Northeast', current: 85, previous: 87, aiNote: 'Strong performance, maintain current strategy' },
  { region: 'Southeast', current: 82, previous: 84, aiNote: 'Minor decline, monitor closely' },
  { region: 'Midwest', current: 78, previous: 83, aiNote: 'Concerning drop, investigate causes' },
  { region: 'West', current: 72, previous: 80, aiNote: 'Significant decline, immediate action needed' },
  { region: 'Southwest', current: 79, previous: 81, aiNote: 'Stable but below target' },
];

export function BrandPerformanceSnapshot() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Brand Performance Snapshot</h1>
          <p className="text-muted-foreground">Real-time metrics with AI insights</p>
        </div>
        <Badge variant="secondary" className="bg-primary/20 text-primary">
          Live Data • Updated 2 min ago
        </Badge>
      </div>

      {/* NRx Performance */}
      <Card className="bg-card/50 border-primary/20 glow-blue">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>New Prescriptions (NRx) Trend</span>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <span className="text-green-500 font-medium">+58% vs Q1</span>
            </div>
          </CardTitle>
          <div className="bg-primary/10 p-3 rounded-lg border-l-4 border-primary">
            <div className="flex items-start space-x-2">
              <Info className="w-4 h-4 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-medium text-primary">Notes from AI Brain</p>
                <p className="text-sm text-muted-foreground">
                  Strong NRx momentum driven by Q2 field campaigns, but watch for seasonal patterns in Q3. 
                  Digital engagement programs showing 23% higher conversion rates.
                </p>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={nrxData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-card p-3 rounded-lg border border-border shadow-lg">
                        <p className="font-medium">{label}</p>
                        <p className="text-primary">NRx: {payload[0].value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{data.aiNote}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="hsl(var(--primary))" 
                fill="hsl(var(--primary))" 
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-6">
        {/* Market Share */}
        <Card className="bg-card/50 border-accent/20">
          <CardHeader>
            <CardTitle>Market Share Analysis</CardTitle>
            <div className="bg-accent/10 p-3 rounded-lg border-l-4 border-accent">
              <div className="flex items-start space-x-2">
                <Info className="w-4 h-4 text-accent mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-accent">AI Analysis</p>
                  <p className="text-sm text-muted-foreground">
                    Market share gains accelerating. Competitor A losing ground due to supply issues. 
                    Opportunity to capture additional 3-4% share in Q3.
                  </p>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={marketShareData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                <YAxis dataKey="competitor" type="category" stroke="hsl(var(--muted-foreground))" />
                <Tooltip />
                <Bar dataKey="share" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Adherence Regional Breakdown */}
        <Card className="bg-card/50 border-orange-500/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span>Adherence by Region</span>
              <AlertCircle className="w-5 h-5 text-orange-500" />
            </CardTitle>
            <div className="bg-orange-500/10 p-3 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-orange-500">Critical Insight</p>
                  <p className="text-sm text-muted-foreground">
                    West region showing 8% adherence drop. Correlates with competitor's digital adherence app launch. 
                    Recommend immediate intervention.
                  </p>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {adherenceData.map((region) => (
                <div key={region.region} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{region.region}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold">{region.current}%</span>
                      {region.current >= region.previous ? (
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${region.current}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground">{region.aiNote}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
