
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessagesSquare, Send, Bot } from "lucide-react";

const Chat = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 h-[calc(100vh-12rem)]">
          {/* Sidebar */}
          <Card className="p-4 lg:col-span-1 overflow-auto">
            <div className="space-y-4">
              <h2 className="font-semibold">Chat Rooms</h2>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <MessagesSquare className="mr-2 h-4 w-4" />
                  General Discussion
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Bot className="mr-2 h-4 w-4" />
                  AI Assistant
                </Button>
              </div>
            </div>
          </Card>

          {/* Chat Area */}
          <Card className="p-4 lg:col-span-3 flex flex-col">
            <div className="flex-1 overflow-auto mb-4">
              {/* Chat messages will go here */}
              <div className="text-center text-muted-foreground">
                No messages yet
              </div>
            </div>
            
            <div className="flex gap-2">
              <Input placeholder="Type your message..." className="flex-1" />
              <Button>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chat;
