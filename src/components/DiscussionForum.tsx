
import { MessageCircle, User, ThumbsUp, TrendingUp, Activity, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

const categories = [
  { name: 'Academics', count: 156, color: 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200' },
  { name: 'Campus Life', count: 89, color: 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200' },
  { name: 'Career', count: 124, color: 'bg-violet-100 text-violet-800 hover:bg-violet-200' },
  { name: 'Events', count: 45, color: 'bg-amber-100 text-amber-800 hover:bg-amber-200' },
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
    description: 'Looking for guidance on selecting a final year project? Here are some key factors to consider: industry relevance, technical complexity, and supervisor expertise. Share your thoughts and experiences!',
    comments: [
      { id: 1, author: 'John Doe', text: 'Great insights! I found working with AI particularly rewarding.', likes: 12 },
      { id: 2, author: 'Alice Smith', text: 'Consider choosing a project that aligns with your career goals.', likes: 8 }
    ]
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
    description: 'Join us for the annual university hackathon! Looking for team members with experience in web development, machine learning, and UI/UX design.',
    comments: [
      { id: 1, author: 'Mary Johnson', text: 'Interested! I have experience in frontend development.', likes: 5 }
    ]
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
    description: 'List of companies offering summer internships for 2024. Including positions in software development, data science, and product management.',
    comments: [
      { id: 1, author: 'David Lee', text: 'Google applications are now open!', likes: 15 },
      { id: 2, author: 'Sarah Wong', text: 'Microsoft deadline is next week.', likes: 10 }
    ]
  },
];

const DiscussionForum = () => {
  const [selectedDiscussion, setSelectedDiscussion] = useState<typeof discussions[0] | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-4">
          Campus Discussions
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join the conversation with your fellow students and share your thoughts on various topics
        </p>
      </div>

      <div className="mb-8 max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search discussions..." 
            className="pl-10 py-6 text-lg bg-background/50 hover:bg-background/80 transition-all duration-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <Card className="p-6 bg-background/50 backdrop-blur-sm border border-indigo-100">
            <div className="flex items-center space-x-2 mb-4">
              <Activity className="w-5 h-5 text-indigo-600" />
              <h3 className="text-lg font-semibold text-foreground">Categories</h3>
            </div>
            <div className="space-y-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`w-full flex items-center justify-between p-3 rounded-md transition-all duration-200 ${category.color}`}
                >
                  <span className="text-sm font-medium">{category.name}</span>
                  <Badge variant="secondary" className="bg-white/90">{category.count}</Badge>
                </button>
              ))}
            </div>
          </Card>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-semibold text-foreground">Recent Discussions</h2>
            </div>
            <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90">
              New Discussion
            </Button>
          </div>

          {discussions.map((discussion) => (
            <Card 
              key={discussion.id} 
              className="p-6 hover:shadow-lg transition-all duration-300 border-indigo-100 cursor-pointer"
              onClick={() => setSelectedDiscussion(discussion)}
            >
              <div className="flex items-start justify-between">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      {discussion.trending && (
                        <TrendingUp className="w-4 h-4 text-rose-500" />
                      )}
                      <h3 className="text-lg font-semibold hover:text-indigo-600 transition-colors">
                        {discussion.title}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <User size={14} className="text-indigo-600" />
                      <span>{discussion.author}</span>
                      <span>•</span>
                      <span>{discussion.timeAgo}</span>
                    </div>
                  </div>
                  <Badge className={
                    discussion.category === 'Academics' ? 'bg-indigo-100 text-indigo-800' :
                    discussion.category === 'Events' ? 'bg-amber-100 text-amber-800' :
                    'bg-violet-100 text-violet-800'
                  }>
                    {discussion.category}
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <button className="flex items-center space-x-1 text-muted-foreground hover:text-indigo-600 transition-colors">
                    <MessageCircle size={14} />
                    <span>{discussion.replies}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-muted-foreground hover:text-indigo-600 transition-colors">
                    <ThumbsUp size={14} />
                    <span>{discussion.likes}</span>
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedDiscussion} onOpenChange={() => setSelectedDiscussion(null)}>
        <DialogContent className="sm:max-w-[600px]">
          {selectedDiscussion && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold">{selectedDiscussion.title}</DialogTitle>
                <DialogDescription>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-2">
                    <User size={14} className="text-indigo-600" />
                    <span>{selectedDiscussion.author}</span>
                    <span>•</span>
                    <span>{selectedDiscussion.timeAgo}</span>
                  </div>
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 space-y-6">
                <p className="text-foreground">{selectedDiscussion.description}</p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Comments</h4>
                  {selectedDiscussion.comments.map((comment) => (
                    <div key={comment.id} className="bg-muted/50 rounded-lg p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{comment.author}</span>
                        <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-indigo-600">
                          <ThumbsUp size={14} />
                          <span>{comment.likes}</span>
                        </button>
                      </div>
                      <p className="text-sm text-muted-foreground">{comment.text}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-2">
                  <Input placeholder="Add a comment..." className="flex-1" />
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    Comment
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DiscussionForum;
