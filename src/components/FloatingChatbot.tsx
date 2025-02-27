
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Bot, X, Send, Trophy, Star, Award, Medal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  
  const userPoints = 150; // This would come from your user state/backend
  const userBadges = [
    { name: "Quick Learner", icon: Star, color: "text-yellow-500" },
    { name: "Helper", icon: Award, color: "text-emerald-500" },
    { name: "Active Participant", icon: Trophy, color: "text-blue-500" }
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-80 h-[500px] flex flex-col shadow-2xl border-indigo-100 animate-fadeIn">
          {/* Header */}
          <div className="p-4 border-b bg-gradient-to-r from-indigo-500 to-violet-500">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">UniBot Assistant</h3>
                  <p className="text-xs text-indigo-100">Online</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Gamification Stats */}
          <div className="bg-gradient-to-r from-indigo-50 to-violet-50 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Medal className="h-5 w-5 text-indigo-600" />
                <span className="text-sm font-medium">{userPoints} XP</span>
              </div>
              <div className="flex gap-1">
                {userBadges.map((badge, index) => (
                  <badge.icon 
                    key={index} 
                    className={`h-5 w-5 ${badge.color}`} 
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-auto p-4 space-y-4 bg-gradient-to-b from-white to-indigo-50/20">
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div className="bg-white p-3 rounded-xl shadow-sm border border-indigo-100 max-w-[80%]">
                <p className="text-sm text-slate-600">
                  Hello! I'm your academic assistant. How can I help you today?
                </p>
              </div>
            </div>
            
            <div className="flex gap-2 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-xl shadow-sm max-w-[80%]">
                <p className="text-sm text-white">
                  Can you help me find study resources for calculus?
                </p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border-indigo-200 focus-visible:ring-indigo-500"
              />
              <Button 
                className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:opacity-90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg hover:shadow-indigo-500/25 transition-all duration-200"
        >
          <Bot className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default FloatingChatbot;
