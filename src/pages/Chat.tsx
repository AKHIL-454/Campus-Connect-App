
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-violet-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 h-[calc(100vh-12rem)]">
          {/* Sidebar */}
          <Card className="p-6 lg:col-span-1 overflow-auto border-0 shadow-lg bg-white/80 backdrop-blur">
            <div className="space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400 w-4 h-4" />
                <Input 
                  placeholder="Search chats..." 
                  className="pl-10 bg-white border-indigo-200 focus:border-indigo-400 transition-colors"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-indigo-900">Study Groups & Clubs</h3>
                  <Button variant="ghost" size="icon" className="hover:bg-indigo-50">
                    <Plus className="h-4 w-4 text-indigo-600" />
                  </Button>
                </div>
                <div className="space-y-2">
                  {chatRooms.map((room) => (
                    <Button
                      key={room.id}
                      variant={isActive(`/chat/room/${room.id}`) ? "secondary" : "ghost"}
                      className={`w-full justify-start group transition-all duration-200 ${
                        isActive(`/chat/room/${room.id}`)
                          ? 'bg-indigo-100 text-indigo-900'
                          : 'hover:bg-indigo-50 hover:text-indigo-900'
                      }`}
                      onClick={() => navigate(`/chat/room/${room.id}`)}
                    >
                      <Users className="mr-2 h-4 w-4 text-indigo-600" />
                      <div className="flex-1 text-left">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{room.name}</span>
                          {room.active && (
                            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                              Live
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-indigo-600/75 group-hover:text-indigo-700">
                          {room.members} members
                        </p>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-indigo-900">Q&A Sessions</h3>
                <div className="space-y-2">
                  {qaSessions.map((session) => (
                    <Button
                      key={session.id}
                      variant={isActive(`/chat/qa/${session.id}`) ? "secondary" : "ghost"}
                      className={`w-full justify-start group transition-all duration-200 ${
                        isActive(`/chat/qa/${session.id}`)
                          ? 'bg-violet-100 text-violet-900'
                          : 'hover:bg-violet-50 hover:text-violet-900'
                      }`}
                      onClick={() => navigate(`/chat/qa/${session.id}`)}
                    >
                      <GraduationCap className="mr-2 h-4 w-4 text-violet-600" />
                      <div className="flex-1 text-left">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{session.subject}</span>
                          {session.status === 'live' && (
                            <Badge variant="secondary" className="bg-rose-100 text-rose-800 hover:bg-rose-200">
                              Live
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-violet-600/75 group-hover:text-violet-700">
                          {session.professor} • {session.time}
                        </p>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              <Button
                variant={isActive("/chat/bot") ? "secondary" : "ghost"}
                className={`w-full justify-start transition-all duration-200 ${
                  isActive("/chat/bot")
                    ? 'bg-emerald-100 text-emerald-900'
                    : 'hover:bg-emerald-50 hover:text-emerald-900'
                }`}
                onClick={() => navigate("/chat/bot")}
              >
                <Bot className="mr-2 h-4 w-4 text-emerald-600" />
                <span className="font-medium">UniBot Assistant</span>
              </Button>
            </div>
          </Card>

          {/* Chat Area */}
          <Card className="p-6 lg:col-span-3 flex flex-col border-0 shadow-lg bg-white/80 backdrop-blur">
            <Outlet />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chat;
