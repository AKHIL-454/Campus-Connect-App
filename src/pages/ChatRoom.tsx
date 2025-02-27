
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, User, Users, Settings, Image, Paperclip, Smile } from "lucide-react";

const ChatRoom = () => {
  const { roomId } = useParams();
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="border-b bg-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Mathematics Study Group
              </h2>
              <p className="text-sm text-slate-500 flex items-center gap-2">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  15 online
                </span>
                • Room #{roomId}
              </p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-slate-100 text-slate-600"
          >
            <Settings className="w-5 h-5" />
          </Button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 h-[calc(100vh-16rem)] overflow-auto px-6 py-4 bg-gradient-to-b from-white to-slate-50/50 space-y-6">
          {[1, 2, 3].map((_, i) => (
            <div 
              key={i} 
              className={`flex items-start gap-4 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fadeIn`}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col gap-1 max-w-[70%]">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-slate-900">
                    {i % 2 === 0 ? 'John Doe' : 'You'}
                  </span>
                  <span className="text-xs text-slate-400">
                    2:30 PM
                  </span>
                </div>
                <div 
                  className={`p-4 rounded-2xl ${
                    i % 2 === 0 
                      ? 'bg-white shadow-sm border border-slate-200' 
                      : 'bg-gradient-to-r from-blue-500 to-violet-500 text-white'
                  }`}
                >
                  <p className={`text-sm ${i % 2 === 0 ? 'text-slate-600' : 'text-white'}`}>
                    Can someone explain the concept of limits in calculus? I'm having trouble understanding how to approach problems involving infinity.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="border-t bg-white px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-slate-100 text-slate-600"
              >
                <Image className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-slate-100 text-slate-600"
              >
                <Paperclip className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-slate-100 text-slate-600"
              >
                <Smile className="w-5 h-5" />
              </Button>
            </div>
            <div className="flex-1 flex gap-2">
              <Input 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..." 
                className="flex-1 border-slate-200 focus-visible:ring-blue-500 bg-slate-50"
              />
              <Button 
                className="bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:opacity-90 px-6"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
