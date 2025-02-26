
import { MessageCircle, User, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categories = [
  { name: 'Academics', count: 156 },
  { name: 'Campus Life', count: 89 },
  { name: 'Career', count: 124 },
  { name: 'Events', count: 45 },
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
  },
  {
    id: 2,
    title: 'Upcoming Hackathon: Team Formation',
    author: 'James Wilson',
    category: 'Events',
    replies: 18,
    likes: 32,
    timeAgo: '4h ago',
  },
  {
    id: 3,
    title: 'Summer Internship Opportunities 2024',
    author: 'Emily Chen',
    category: 'Career',
    replies: 56,
    likes: 89,
    timeAgo: '6h ago',
  },
];

const DiscussionForum = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="space-y-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="w-full flex items-center justify-between p-2 rounded-md hover:bg-accent transition-colors"
                >
                  <span className="text-sm font-medium">{category.name}</span>
                  <Badge variant="secondary">{category.count}</Badge>
                </button>
              ))}
            </div>
          </Card>
        </div>

        {/* Discussion List */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Recent Discussions</h2>
            <Button>New Discussion</Button>
          </div>

          {discussions.map((discussion) => (
            <Card key={discussion.id} className="p-6 animate-fadeIn hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
                      {discussion.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <User size={14} />
                      <span>{discussion.author}</span>
                      <span>•</span>
                      <span>{discussion.timeAgo}</span>
                    </div>
                  </div>
                  <Badge>{discussion.category}</Badge>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <MessageCircle size={14} />
                    <span>{discussion.replies}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ThumbsUp size={14} />
                    <span>{discussion.likes}</span>
                  </div>
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
