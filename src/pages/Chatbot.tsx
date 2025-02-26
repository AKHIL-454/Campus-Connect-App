
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Bot, User, CalendarDays, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Chatbot = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="h-full flex flex-col">
      <div className="border-b pb-4 mb-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">UniBot Assistant</h2>
          <p className="text-sm text-muted-foreground">Ask me anything about university services</p>
        </div>
      </div>

      <div className="flex-1 overflow-auto mb-4 space-y-6">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div className="bg-muted/30 p-4 rounded-lg max-w-[80%]">
            <p className="text-sm mb-4">
              Hi! I'm UniBot, your university assistant. I can help you with:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: CalendarDays, text: "Class Schedules" },
                { icon: Clock, text: "Office Hours" },
                { icon: MapPin, text: "Campus Navigation" },
                { icon: User, text: "Professor Info" }
              ].map((item, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="flex items-center gap-1 py-1 px-2 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 cursor-pointer"
                >
                  <item.icon className="w-3 h-3" />
                  {item.text}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {[1, 2].map((_, i) => (
          <div key={i} className={`flex items-start gap-3 ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
              i % 2 === 0 
                ? 'bg-indigo-100' 
                : 'bg-gradient-to-br from-emerald-500 to-teal-500'
            }`}>
              {i % 2 === 0 ? (
                <User className="w-4 h-4 text-indigo-600" />
              ) : (
                <Bot className="w-4 h-4 text-white" />
              )}
            </div>
            <div className={`p-3 rounded-lg max-w-[80%] ${
              i % 2 === 0 ? 'bg-indigo-100' : 'bg-muted/30'
            }`}>
              <p className="text-sm">
                {i % 2 === 0 
                  ? "What's the schedule for tomorrow's Advanced Mathematics class?"
                  : "Advanced Mathematics is scheduled for tomorrow at 9:00 AM in Room 301, Science Building. The topic will be Complex Analysis. Don't forget to bring your calculator!"}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 pt-4 border-t mt-auto">
        <Input 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask UniBot..." 
          className="flex-1 border-indigo-200 focus:border-indigo-300"
        />
        <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:opacity-90">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Chatbot;
