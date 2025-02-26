
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, User, Users, Settings } from "lucide-react";

const ChatRoom = () => {
  const { roomId } = useParams();
  const [message, setMessage] = useState("");

  return (
    <div className="h-full flex flex-col">
      <div className="border-b pb-4 mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Mathematics Study Group</h2>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <Users className="w-4 h-4" />
            15 members online
          </p>
        </div>
        <Button variant="ghost" size="icon">
          <Settings className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-auto mb-4 space-y-4">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className={`flex items-start gap-3 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center flex-shrink-0">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className={`max-w-[70%] ${i % 2 === 0 ? 'bg-muted/30' : 'bg-indigo-100'} p-3 rounded-lg`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium">John Doe</span>
                <span className="text-xs text-muted-foreground">2:30 PM</span>
              </div>
              <p className="text-sm">
                Can someone explain the concept of limits in calculus?
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 pt-4 border-t mt-auto">
        <Input 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..." 
          className="flex-1 border-indigo-200 focus:border-indigo-300"
        />
        <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatRoom;
