
import { MessageCircle, User, ThumbsUp, TrendingUp, Activity, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const categories = [
  { name: 'Academics', count: 156, color: 'bg-blue-100 text-blue-800 hover:bg-blue-200' },
  { name: 'Campus Life', count: 89, color: 'bg-green-100 text-green-800 hover:bg-green-200' },
  { name: 'Career', count: 124, color: 'bg-purple-100 text-purple-800 hover:bg-purple-200' },
  { name: 'Events', count: 45, color: 'bg-orange-100 text-orange-800 hover:bg-orange-200' },
];

const discussions = [
  {
    id: 1,
    title: 'Tips for Final Year Project Selection',
    author: 'Sarah Mitchell',
    category: 'Academics',
    replies: 23,
    likes: 45,
    timeAgo: '2h ago',
    trending: true,
  },
  {
    id: 2,
    title: 'Upcoming Hackathon: Team Formation',
    author: 'James Wilson',
    category: 'Events',
    replies: 18,
    likes: 32,
    timeAgo: '4h ago',
    trending: false,
  },
  {
    id: 3,
    title: 'Summer Internship Opportunities 2024',
    author: 'Emily Chen',
    category: 'Career',
    replies: 56,
    likes: 89,
    timeAgo: '6h ago',
    trending: true,
  },
];

const DiscussionForum = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
      {/* Search Bar */}
      <div className="mb-8 max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search discussions..." 
            className="pl-10 py-6 text-lg bg-secondary/50 hover:bg-secondary/80 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <Card className="p-6 backdrop-blur-xl bg-gradient-to-br from-background to-secondary/30">
            <div className="flex items-center space-x-2 mb-4">
              <Activity className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Categories</h3>
            </div>
            <div className="space-y-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`w-full flex items-center justify-between p-3 rounded-md transition-all duration-200 transform hover:scale-102 ${category.color}`}
                >
                  <span className="text-sm font-medium">{category.name}</span>
                  <Badge variant="secondary" className="bg-white/80">{category.count}</Badge>
                </button>
              ))}
            </div>
          </Card>
        </div>

        {/* Discussion List */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Recent Discussions</h2>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-200">
              New Discussion
            </Button>
          </div>

          {discussions.map((discussion, index) => (
            <Card 
              key={discussion.id} 
              className="p-6 hover:shadow-xl transition-all duration-300 animate-fadeIn"
              style={{ 
                animationDelay: `${index * 150}ms`,
                background: "linear-gradient(to right, hsl(var(--card)) 0%, hsl(var(--accent))/0.1 100%)"
              }}
            >
              <div className="flex items-start justify-between">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      {discussion.trending && (
                        <TrendingUp className="w-4 h-4 text-rose-500" />
                      )}
                      <h3 className="text-lg font-semibold hover:text-primary cursor-pointer transition-colors">
                        {discussion.title}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <User size={14} className="text-primary" />
                      <span>{discussion.author}</span>
                      <span>•</span>
                      <span>{discussion.timeAgo}</span>
                    </div>
                  </div>
                  <Badge className={
                    discussion.category === 'Academics' ? 'bg-blue-100 text-blue-800' :
                    discussion.category === 'Events' ? 'bg-orange-100 text-orange-800' :
                    'bg-purple-100 text-purple-800'
                  }>
                    {discussion.category}
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                    <MessageCircle size={14} />
                    <span>{discussion.replies}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                    <ThumbsUp size={14} />
                    <span>{discussion.likes}</span>
                  </button>
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
