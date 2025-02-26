
import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MessagesSquare, 
  Users, 
  Bot, 
  GraduationCap,
  Search,
  Plus
} from "lucide-react";

const chatRooms = [
  { id: "study-group-1", name: "Mathematics Study Group", type: "study", members: 15, active: true },
  { id: "cs-club", name: "Computer Science Club", type: "club", members: 28, active: true },
  { id: "physics-help", name: "Physics Help Center", type: "study", members: 12, active: false }
];

const qaSessions = [
  { 
    id: "qa-1", 
    subject: "Advanced Calculus",
    professor: "Dr. Smith",
    time: "2:00 PM - 3:00 PM",
    status: "live"
  },
  { 
    id: "qa-2", 
    subject: "Data Structures",
    professor: "Prof. Johnson",
    time: "4:00 PM - 5:00 PM",
    status: "upcoming"
  }
];

const Chat = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const isActive = (path: string) => location.pathname.includes(path);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 h-[calc(100vh-12rem)]">
          {/* Sidebar */}
          <Card className="p-4 lg:col-span-1 overflow-auto border-indigo-100">
            <div className="space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search chats..." 
                  className="pl-10 border-indigo-200 focus:border-indigo-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Study Groups & Clubs</h3>
                  <Button variant="ghost" size="icon">
                    <Plus className="h-4 w-4 text-indigo-600" />
                  </Button>
                </div>
                <div className="space-y-2">
                  {chatRooms.map((room) => (
                    <Button
                      key={room.id}
                      variant={isActive(`/chat/room/${room.id}`) ? "secondary" : "ghost"}
                      className="w-full justify-start group"
                      onClick={() => navigate(`/chat/room/${room.id}`)}
                    >
                      <Users className="mr-2 h-4 w-4 text-indigo-600" />
                      <div className="flex-1 text-left">
                        <div className="flex items-center justify-between">
                          <span>{room.name}</span>
                          {room.active && (
                            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                              Live
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {room.members} members
                        </p>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Q&A Sessions</h3>
                <div className="space-y-2">
                  {qaSessions.map((session) => (
                    <Button
                      key={session.id}
                      variant={isActive(`/chat/qa/${session.id}`) ? "secondary" : "ghost"}
                      className="w-full justify-start group"
                      onClick={() => navigate(`/chat/qa/${session.id}`)}
                    >
                      <GraduationCap className="mr-2 h-4 w-4 text-violet-600" />
                      <div className="flex-1 text-left">
                        <div className="flex items-center justify-between">
                          <span>{session.subject}</span>
                          {session.status === 'live' && (
                            <Badge variant="secondary" className="bg-rose-100 text-rose-800">
                              Live
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {session.professor} • {session.time}
                        </p>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Button
                  variant={isActive("/chat/bot") ? "secondary" : "ghost"}
                  className="w-full justify-start hover:bg-accent"
                  onClick={() => navigate("/chat/bot")}
                >
                  <Bot className="mr-2 h-4 w-4 text-emerald-600" />
                  UniBot Assistant
                </Button>
              </div>
            </div>
          </Card>

          {/* Chat Area */}
          <Card className="p-4 lg:col-span-3 flex flex-col border-indigo-100">
            <Outlet />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chat;
