import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Users, 
  GraduationCap, 
  Target, 
  Calendar,
  Bot,
  User,
  TrendingUp,
  Clock,
  Award,
  MessageSquare,
  Settings
} from 'lucide-react';

const teamData = {
  aiAgents: [
    {
      name: "Aetheria",
      role: "Strategic AI Partner",
      status: "active",
      specialization: "Market Analysis & Strategic Planning",
      currentTask: "Analyzing Q3 performance data",
      utilization: 87
    },
    {
      name: "DataSage", 
      role: "Analytics AI",
      status: "active",
      specialization: "Predictive Analytics & Reporting",
      currentTask: "Building adherence prediction model",
      utilization: 92
    },
    {
      name: "TaskMaster",
      role: "Workflow AI",
      status: "idle", 
      specialization: "Task Automation & Delegation",
      currentTask: "Awaiting instructions",
      utilization: 23
    }
  ],
  humans: [
    {
      name: "Sarah Chen",
      role: "Brand Manager",
      status: "active",
      specialization: "Campaign Strategy",
      currentTask: "Reviewing Q4 campaign proposals", 
      availability: "Available"
    },
    {
      name: "Dr. Michael Torres",
      role: "Medical Affairs Lead", 
      status: "busy",
      specialization: "Clinical Evidence & MSL Management",
      currentTask: "In HCP advisory meeting",
      availability: "Busy until 4 PM"
    }
  ]
};

const learningModules = [
  {
    title: "Advanced Market Access Strategies",
    progress: 67,
    timeLeft: "2h 15m",
    difficulty: "Advanced",
    aiCoachAvailable: true
  },
  {
    title: "Digital Health Economics",
    progress: 34,
    timeLeft: "4h 30m", 
    difficulty: "Intermediate",
    aiCoachAvailable: true
  },
  {
    title: "Competitive Intelligence Mastery",
    progress: 89,
    timeLeft: "45m",
    difficulty: "Expert",
    aiCoachAvailable: false
  }
];

const okrData = [
  {
    objective: "Increase brand market share to 18%",
    progress: 76,
    keyResults: [
      { description: "NRx growth 15% YoY", progress: 82, status: "on-track" },
      { description: "Adherence rate >80%", progress: 68, status: "at-risk" },
      { description: "HCP engagement +25%", progress: 91, status: "ahead" }
    ]
  },
  {
    objective: "Launch digital patient engagement platform",
    progress: 45,
    keyResults: [
      { description: "Platform development complete", progress: 78, status: "on-track" },
      { description: "Pilot in 3 regions", progress: 23, status: "behind" },
      { description: "Patient enrollment >1000", progress: 34, status: "at-risk" }
    ]
  }
];

export function PersonalView() {
  const [activeTab, setActiveTab] = useState('team');
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'busy': return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      case 'idle': return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
      default: return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case 'ahead': return 'text-green-500';
      case 'on-track': return 'text-blue-500';
      case 'at-risk': return 'text-orange-500';
      case 'behind': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="p-6 space-y-6 h-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center space-x-3">
            <User className="w-8 h-8 text-primary" />
            <span>Personal Command Center</span>
          </h1>
          <p className="text-muted-foreground">Team management, learning, and personal objectives</p>
        </div>
        <div className="flex items-center space-x-3">
          <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
            5 Team Members
          </Badge>
          <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
            3 OKRs Active
          </Badge>
        </div>
      </div>

      {/* Personal Dashboard Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1">
        <TabsList className="grid w-full grid-cols-3 bg-muted/30">
          <TabsTrigger value="team" className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>Team & Agents</span>
          </TabsTrigger>
          <TabsTrigger value="learning" className="flex items-center space-x-2">
            <GraduationCap className="w-4 h-4" />
            <span>Training</span>
          </TabsTrigger>
          <TabsTrigger value="objectives" className="flex items-center space-x-2">
            <Target className="w-4 h-4" />
            <span>My OKRs</span>
          </TabsTrigger>
        </TabsList>

        {/* Team & Agent Management */}
        <TabsContent value="team" className="mt-6">
          <div className="space-y-6">
            {/* AI Agents Section */}
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bot className="w-6 h-6 text-primary" />
                  <span>AI Agent Squadron</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {teamData.aiAgents.map((agent, index) => (
                    <div key={index} className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-10 h-10 bg-primary/20">
                            <AvatarFallback className="text-primary font-bold">
                              {agent.name.slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{agent.name}</h3>
                            <p className="text-sm text-muted-foreground">{agent.role}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(agent.status)}>
                            {agent.status}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{agent.utilization}%</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{agent.specialization}</p>
                      <p className="text-sm mb-3"><strong>Current Task:</strong> {agent.currentTask}</p>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          /delegate new task
                        </Button>
                        <Button size="sm" variant="outline">
                          Configure
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Human Team Section */}
            <Card className="bg-card/50 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-6 h-6 text-accent" />
                  <span>Human Collaborators</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {teamData.humans.map((person, index) => (
                    <div key={index} className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-10 h-10 bg-accent/20">
                            <AvatarFallback className="text-accent font-bold">
                              {person.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{person.name}</h3>
                            <p className="text-sm text-muted-foreground">{person.role}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(person.status)}>
                            {person.availability}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{person.specialization}</p>
                      <p className="text-sm mb-3"><strong>Current:</strong> {person.currentTask}</p>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          Send Message
                        </Button>
                        <Button size="sm" variant="outline">
                          Schedule Meeting
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Training & Learning */}
        <TabsContent value="learning" className="mt-6">
          <div className="space-y-6">
            <Card className="bg-card/50 border-green-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="w-6 h-6 text-green-500" />
                  <span>Interactive Learning Modules</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {learningModules.map((module, index) => (
                    <div key={index} className="p-4 bg-green-500/5 rounded-lg border border-green-500/20">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">{module.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {module.difficulty}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-muted-foreground">Progress: {module.progress}%</span>
                        <span className="text-sm text-muted-foreground">{module.timeLeft} remaining</span>
                      </div>
                      <Progress value={module.progress} className="mb-3" />
                      <div className="flex items-center space-x-2">
                        <Button size="sm" className="bg-green-500 hover:bg-green-600">
                          Continue
                        </Button>
                        {module.aiCoachAvailable && (
                          <Button size="sm" variant="outline">
                            <MessageSquare className="w-4 h-4 mr-1" />
                            Ask AI Coach
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills Progress Dashboard */}
            <Card className="bg-card/50 border-blue-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-blue-500" />
                  <span>Skill Progress Dashboard</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-500/5 rounded-lg">
                    <div className="text-2xl font-bold text-blue-500">8</div>
                    <div className="text-sm text-muted-foreground">Modules Completed</div>
                  </div>
                  <div className="text-center p-4 bg-green-500/5 rounded-lg">
                    <div className="text-2xl font-bold text-green-500">92%</div>
                    <div className="text-sm text-muted-foreground">Average Score</div>
                  </div>
                  <div className="text-center p-4 bg-purple-500/5 rounded-lg">
                    <div className="text-2xl font-bold text-purple-500">4</div>
                    <div className="text-sm text-muted-foreground">Certifications</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* OKRs & Objectives */}
        <TabsContent value="objectives" className="mt-6">
          <div className="space-y-6">
            {okrData.map((okr, index) => (
              <Card key={index} className="bg-card/50 border-orange-500/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="w-6 h-6 text-orange-500" />
                      <span>{okr.objective}</span>
                    </CardTitle>
                    <Badge variant="outline" className="text-orange-500 border-orange-500/20">
                      {okr.progress}% Complete
                    </Badge>
                  </div>
                  <Progress value={okr.progress} className="mt-2" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {okr.keyResults.map((kr, krIndex) => (
                      <div key={krIndex} className="p-3 bg-muted/30 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">{kr.description}</span>
                          <Badge variant="outline" className={getProgressColor(kr.status)}>
                            {kr.status}
                          </Badge>
                        </div>
                        <Progress value={kr.progress} className="h-2" />
                        <div className="text-xs text-muted-foreground mt-1">{kr.progress}% complete</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Holiday View */}
            <Card className="bg-card/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-6 h-6 text-purple-500" />
                  <span>Upcoming Time Off & Workload</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-purple-500/5 rounded-lg">
                    <h3 className="font-semibold mb-2">Next Holiday</h3>
                    <p className="text-sm text-muted-foreground mb-2">Thanksgiving Break - Nov 23-24</p>
                    <p className="text-xs text-purple-500">AI suggests completing Q4 planning before break</p>
                  </div>
                  <div className="p-4 bg-purple-500/5 rounded-lg">
                    <h3 className="font-semibold mb-2">Workload Adjustment</h3>
                    <p className="text-sm text-muted-foreground mb-2">Current utilization: 87%</p>
                    <p className="text-xs text-purple-500">Recommend delegating 2 non-critical tasks</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}