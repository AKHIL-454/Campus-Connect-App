
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, User, Users, Settings } from "lucide-react";

const ChatRoom = () => {
  const { roomId } = useParams();
  const [message, setMessage] = useState("");

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col max-w-5xl mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-lg h-full flex flex-col">
        <div className="border-b p-4 flex items-center justify-between bg-gradient-to-r from-indigo-50 to-violet-50">
          <div>
            <h2 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Mathematics Study Group
            </h2>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Users className="w-4 h-4 text-indigo-600" />
              15 members online
            </p>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-indigo-50"
          >
            <Settings className="w-4 h-4 text-indigo-600" />
          </Button>
        </div>

        <div className="flex-1 overflow-auto p-4 space-y-4 bg-gradient-to-b from-white to-indigo-50/20">
          {[1, 2, 3].map((_, i) => (
            <div 
              key={i} 
              className={`flex items-start gap-3 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fadeIn`}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-md">
                <User className="w-4 h-4 text-white" />
              </div>
              <div 
                className={`max-w-[70%] ${
                  i % 2 === 0 
                    ? 'bg-white shadow-md' 
                    : 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white'
                } p-4 rounded-2xl`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`font-medium ${i % 2 === 1 ? 'text-white' : 'text-gray-900'}`}>
                    John Doe
                  </span>
                  <span className={`text-xs ${i % 2 === 1 ? 'text-indigo-100' : 'text-muted-foreground'}`}>
                    2:30 PM
                  </span>
                </div>
                <p className={`text-sm ${i % 2 === 1 ? 'text-indigo-50' : 'text-gray-600'}`}>
                  Can someone explain the concept of limits in calculus?
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-gradient-to-r from-indigo-50 to-violet-50">
          <div className="flex gap-2 backdrop-blur-xl bg-white/80 p-2 rounded-xl shadow-lg">
            <Input 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..." 
              className="flex-1 border-indigo-200 focus-visible:ring-indigo-500 bg-transparent"
            />
            <Button 
              className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90 shadow-lg transition-all duration-200 hover:shadow-indigo-500/25"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
