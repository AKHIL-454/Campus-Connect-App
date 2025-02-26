
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Users,
  Building2,
  BookOpen,
  GraduationCap,
  MessageSquare,
  Filter,
  Coffee,
  Calendar,
  Clock
} from "lucide-react";

const mentors = [
  {
    id: "mentor-1",
    name: "Sarah Chen",
    role: "Senior Software Engineer",
    company: "Google",
    experience: "6+ years",
    expertise: ["Technical Career Growth", "Interview Prep", "Machine Learning"],
    availability: "2-3 hours/week",
    rating: 4.9,
    reviews: 24,
    image: "SC"
  },
  {
    id: "mentor-2",
    name: "Michael Rodriguez",
    role: "Product Manager",
    company: "Microsoft",
    experience: "8+ years",
    expertise: ["Product Management", "Career Transition", "Leadership"],
    availability: "1-2 hours/week",
    rating: 4.8,
    reviews: 18,
    image: "MR"
  }
];

const MentorConnect = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Connect with Alumni Mentors
          </h1>
          <p className="mt-2 text-muted-foreground">
            Get personalized guidance from experienced professionals
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search mentors by name, expertise, or company..." 
              className="pl-10 border-indigo-200 focus:border-indigo-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" className="border-indigo-200 hover:border-indigo-400">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Mentors Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {mentors.map((mentor) => (
            <Card
              key={mentor.id}
              className="p-6 hover:shadow-lg transition-all duration-300 border-0 shadow bg-white/80 backdrop-blur"
            >
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white text-xl font-medium">
                  {mentor.image}
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-indigo-900">
                      {mentor.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {mentor.role} at {mentor.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm space-y-1">
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <BookOpen className="w-4 h-4" />
                        {mentor.experience} experience
                      </p>
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        Available {mentor.availability}
                      </p>
                    </div>
                    <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90">
                      <Coffee className="w-4 h-4 mr-2" />
                      Connect
                    </Button>
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

export default MentorConnect;
