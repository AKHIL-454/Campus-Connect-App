import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MessagesSquare, 
  Users, 
  Bot, 
  GraduationCap,
  Search,
  Plus,
  Video,
  Mic,
  Hand,
  BookOpen,
  Calendar,
  BrainCircuit,
  Bell
} from "lucide-react";

const chatRooms = [
  { 
    id: "ai-study-group-1", 
    name: "AI-Generated: Mathematics Study Group", 
    type: "study", 
    members: 15, 
    active: true,
    topic: "Calculus II",
    aiSuggested: true 
  },
  { 
    id: "cs-club", 
    name: "Computer Science Club", 
    type: "club", 
    members: 28, 
    active: true,
    topic: "Data Structures" 
  },
  { 
    id: "physics-help", 
    name: "Physics Help Center", 
    type: "study", 
    members: 12, 
    active: false,
    topic: "Quantum Mechanics" 
  }
];

const qaSessions = [
  { 
    id: "qa-1", 
    subject: "Advanced Calculus",
    professor: "Dr. Smith",
    time: "2:00 PM - 3:00 PM",
    status: "live",
    participants: 45,
    handsRaised: 3,
    aiSummaryAvailable: true
  },
  { 
    id: "qa-2", 
    subject: "Data Structures",
    professor: "Prof. Johnson",
    time: "4:00 PM - 5:00 PM",
    status: "upcoming",
    participants: 0,
    handsRaised: 0,
    aiSummaryAvailable: false
  }
];

const aiReminders = [
  {
    id: "reminder-1",
    title: "Database Assignment Due",
    time: "Tomorrow, 11:59 PM",
    priority: "high"
  },
  {
    id: "reminder-2",
    title: "Physics Quiz",
    time: "Wednesday, 2:00 PM",
    priority: "medium"
  }
];

const Chat = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTab, setSelectedTab] = useState("all");

  const isActive = (path: string) => location.pathname.includes(path);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-h-[calc(100vh-8rem)]">
          <Card className="lg:col-span-3 p-4 h-[calc(100vh-8rem)] overflow-y-auto border-slate-200">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input 
                  placeholder="Search or ask AI assistant..." 
                  className="pl-10 bg-slate-50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2 text-sm">
                  <BrainCircuit className="w-4 h-4 text-violet-500" />
                  AI Reminders
                </h3>
                {aiReminders.map((reminder) => (
                  <div 
                    key={reminder.id}
                    className="p-3 rounded-xl bg-gradient-to-r from-violet-50 to-indigo-50 border border-slate-200"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">{reminder.title}</p>
                        <p className="text-xs text-slate-500">{reminder.time}</p>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`
                          ${reminder.priority === 'high' ? 'bg-rose-100 text-rose-700' : 
                            reminder.priority === 'medium' ? 'bg-amber-100 text-amber-700' : 
                            'bg-emerald-100 text-emerald-700'}
                        `}
                      >
                        {reminder.priority}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>

              <Tabs defaultValue="all" className="w-full">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="study">Study</TabsTrigger>
                  <TabsTrigger value="qa">Q&A</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm">Study Groups & Clubs</h3>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Plus className="h-4 w-4 text-violet-600" />
                  </Button>
                </div>
                <div className="space-y-2">
                  {chatRooms.map((room) => (
                    <Button
                      key={room.id}
                      variant={isActive(`/chat/room/${room.id}`) ? "secondary" : "ghost"}
                      className="w-full justify-start p-3 h-auto"
                      onClick={() => navigate(`/chat/room/${room.id}`)}
                    >
                      <Users className="mr-2 h-4 w-4 text-violet-600 flex-shrink-0" />
                      <div className="flex-1 text-left">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{room.name}</span>
                          <div className="flex gap-1">
                            {room.aiSuggested && (
                              <Badge variant="secondary" className="bg-violet-100 text-violet-800">
                                AI
                              </Badge>
                            )}
                            {room.active && (
                              <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                                Live
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                          <span>{room.members} members</span>
                          <span>•</span>
                          <span>{room.topic}</span>
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-sm">Live Q&A Sessions</h3>
                <div className="space-y-2">
                  {qaSessions.map((session) => (
                    <Button
                      key={session.id}
                      variant={isActive(`/chat/qa/${session.id}`) ? "secondary" : "ghost"}
                      className="w-full justify-start p-3 h-auto"
                      onClick={() => navigate(`/chat/qa/${session.id}`)}
                    >
                      <GraduationCap className="mr-2 h-4 w-4 text-violet-600 flex-shrink-0" />
                      <div className="flex-1 text-left">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{session.subject}</span>
                          <div className="flex gap-1">
                            {session.status === 'live' && (
                              <>
                                <Badge variant="secondary" className="bg-rose-100 text-rose-800">
                                  Live
                                </Badge>
                                <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                                  {session.handsRaised} 🤚
                                </Badge>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                          <span>{session.professor}</span>
                          <span>•</span>
                          <span>{session.time}</span>
                          {session.aiSummaryAvailable && (
                            <>
                              <span>•</span>
                              <span className="text-violet-600">AI Summary</span>
                            </>
                          )}
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              <Button
                variant={isActive("/chat/bot") ? "secondary" : "ghost"}
                className="w-full justify-start p-3 h-auto"
                onClick={() => navigate("/chat/bot")}
              >
                <Bot className="mr-2 h-4 w-4 text-emerald-600 flex-shrink-0" />
                <div className="flex-1 text-left">
                  <span className="text-sm font-medium">AI Academic Assistant</span>
                  <div className="text-xs text-slate-500 mt-1">Personal study help & planning</div>
                </div>
              </Button>

              <div className="flex gap-2 pt-4 border-t">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                >
                  <Video className="w-4 h-4 mr-2" />
                  Video
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                >
                  <Mic className="w-4 h-4 mr-2" />
                  Voice
                </Button>
              </div>
            </div>
          </Card>

          <Card className="lg:col-span-9 h-[calc(100vh-8rem)] overflow-hidden border-slate-200">
            <Outlet />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chat;
