
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare,
  Send,
  User,
  ThumbsUp,
  Reply,
  MessagesSquare
} from "lucide-react";

const DiscussionDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="grid grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="col-span-2 space-y-6">
            <Card className="border-indigo-100">
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Tips for Advanced Mathematics Final</h1>
                    <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200">
                      Academic
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        <User className="w-4 h-4 text-indigo-600" />
                      </div>
                      <span className="font-medium">Sarah Johnson</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Posted 2 hours ago</span>
                  </div>
                  <div className="prose prose-indigo max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      Hey everyone! With finals approaching, I thought it would be helpful to create a thread where we can share study tips and resources for the Advanced Mathematics exam. What strategies have worked for you in past exams?
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" className="border-indigo-200">
                      <ThumbsUp className="w-4 h-4 mr-2" />
                      15 Likes
                    </Button>
                    <Button variant="outline" size="sm" className="border-indigo-200">
                      <Reply className="w-4 h-4 mr-2" />
                      Reply
                    </Button>
                  </div>
                </div>

                <div className="space-y-6">
                  {[1, 2].map((_, i) => (
                    <div key={i} className="flex gap-4 pt-6 border-t">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        <User className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">Michael Chen</h3>
                          <span className="text-sm text-muted-foreground">1 hour ago</span>
                        </div>
                        <p className="text-muted-foreground mb-3">
                          I found creating mind maps really helpful for understanding complex topics. It helps visualize the connections between different concepts.
                        </p>
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm">
                            <ThumbsUp className="w-4 h-4 mr-2" />
                            8 Likes
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Reply className="w-4 h-4 mr-2" />
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Chat Section */}
          <div className="col-span-1">
            <Card className="border-indigo-100">
              <div className="h-[calc(100vh-12rem)] flex flex-col">
                <div className="p-4 border-b bg-muted/30">
                  <h3 className="font-semibold flex items-center gap-2">
                    <MessagesSquare className="w-4 h-4 text-indigo-600" />
                    Live Discussion
                  </h3>
                </div>
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        <User className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Student Name</span>
                          <span className="text-xs text-muted-foreground">2:30 PM</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Anyone want to form a study group?
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t bg-muted/30">
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Type your message..." 
                      className="flex-1 border-indigo-200 focus:border-indigo-300"
                    />
                    <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionDetails;
