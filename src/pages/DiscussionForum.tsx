
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Search, Plus, Users, MessagesSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const discussions = [
  {
    id: "1",
    title: "Tips for Advanced Mathematics Final",
    author: "Sarah Johnson",
    category: "Academic",
    replies: 15,
    views: 234,
    lastActivity: "2 hours ago",
    tags: ["Mathematics", "Finals", "Study Tips"]
  },
  {
    id: "2",
    title: "Computer Science Project Collaboration",
    author: "Michael Chen",
    category: "Projects",
    replies: 8,
    views: 156,
    lastActivity: "5 hours ago",
    tags: ["Programming", "Group Work", "CS"]
  }
];

const categoryColors = {
  Academic: "bg-indigo-100 text-indigo-800 border-indigo-200",
  Projects: "bg-violet-100 text-violet-800 border-violet-200",
  Events: "bg-emerald-100 text-emerald-800 border-emerald-200",
  General: "bg-amber-100 text-amber-800 border-amber-200"
};

const DiscussionForum = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <MessageSquare className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Discussion Forum
            </h1>
          </div>
          <Button 
            className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Discussion
          </Button>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search discussions..."
              className="pl-10 border-indigo-200 focus:border-indigo-300"
            />
          </div>
        </div>

        <div className="space-y-4">
          {discussions.map((discussion) => (
            <Card 
              key={discussion.id}
              className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-indigo-100"
              onClick={() => navigate(`/discussions/${discussion.id}`)}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{discussion.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {discussion.tags.map((tag, index) => (
                        <Badge 
                          key={index}
                          variant="outline" 
                          className="border-indigo-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Badge className={categoryColors[discussion.category as keyof typeof categoryColors]}>
                    {discussion.category}
                  </Badge>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>By {discussion.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessagesSquare className="w-4 h-4" />
                      <span>{discussion.replies} replies</span>
                    </div>
                  </div>
                  <span>{discussion.lastActivity}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscussionForum;
