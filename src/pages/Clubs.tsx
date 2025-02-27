
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  Calendar, 
  Star,
  Search,
  Plus,
  Settings,
  Shield,
  MessagesSquare
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

export const clubs = [
  {
    id: 1,
    name: "Coding Club",
    description: "A community of programming enthusiasts working on exciting projects.",
    members: 156,
    category: "Technology",
    nextEvent: "Hackathon Workshop - March 20",
    coordinator: "Dr. Alan Smith",
    status: "Active",
    image: "/placeholder.svg",
    tags: ["Programming", "Web Dev", "AI"],
    membershipStatus: "Open",
    totalEvents: 24,
    announcements: 12,
    activeDiscussions: 8
  },
  {
    id: 2,
    name: "Photography Society",
    description: "Explore the art of visual storytelling through photography.",
    members: 89,
    category: "Arts",
    nextEvent: "Photo Walk - March 22",
    coordinator: "Prof. Sarah Chen",
    status: "Active",
    image: "/placeholder.svg",
    tags: ["Photography", "Digital Art"],
    membershipStatus: "Approval Required",
    totalEvents: 18,
    announcements: 6,
    activeDiscussions: 5
  },
  {
    id: 3,
    name: "Debate Club",
    description: "Fostering critical thinking and public speaking skills through competitive debate.",
    members: 75,
    category: "Academic",
    nextEvent: "Inter-University Debate - March 25",
    coordinator: "Dr. Michael Brooks",
    status: "Active",
    image: "/placeholder.svg",
    tags: ["Public Speaking", "Critical Thinking"],
    membershipStatus: "Open",
    totalEvents: 15,
    announcements: 8,
    activeDiscussions: 12
  }
];

const categoryColors = {
  Technology: "bg-indigo-100 text-indigo-800 border-indigo-200",
  Arts: "bg-violet-100 text-violet-800 border-violet-200",
  Academic: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Sports: "bg-amber-100 text-amber-800 border-amber-200"
};

const membershipStatusColors = {
  "Open": "text-emerald-600 bg-emerald-50",
  "Approval Required": "text-amber-600 bg-amber-50",
  "Closed": "text-rose-600 bg-rose-50"
};

const Clubs = () => {
  const navigate = useNavigate();
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClubs = clubs.filter(club => 
    club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    club.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    club.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <Users className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              University Clubs
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="border-indigo-200 hover:border-indigo-300">
              <Shield className="w-4 h-4 mr-2" />
              Admin Panel
            </Button>
            <Button 
              className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90"
              onClick={() => setCreateDialogOpen(true)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Club
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search clubs..."
              className="pl-10 border-indigo-200 focus:border-indigo-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredClubs.map((club) => (
            <Card 
              key={club.id} 
              className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-indigo-100 hover:border-indigo-200"
              onClick={() => navigate(`/clubs/${club.name.toLowerCase().replace(/\s+/g, '-')}`)}
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold">{club.name}</h3>
                    <Badge className={membershipStatusColors[club.membershipStatus as keyof typeof membershipStatusColors]}>
                      {club.membershipStatus}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{club.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {club.tags.map((tag, index) => (
                    <Badge 
                      key={index}
                      variant="outline" 
                      className="border-indigo-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{club.members} members</span>
                  </div>
                  <Badge className={categoryColors[club.category as keyof typeof categoryColors]}>
                    {club.category}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{club.totalEvents}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4" />
                    <span>{club.announcements}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessagesSquare className="w-4 h-4" />
                    <span>{club.activeDiscussions}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90">
                  Join Club
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Create New Club</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Club Name</label>
                <Input placeholder="Enter club name" className="border-indigo-200" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <Input placeholder="Enter club description" className="border-indigo-200" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Input placeholder="Select category" className="border-indigo-200" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Club Coordinator</label>
                <Input placeholder="Select coordinator" className="border-indigo-200" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90">
                Create Club
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Clubs;
