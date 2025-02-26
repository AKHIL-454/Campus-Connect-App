
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Search,
  GraduationCap,
  Briefcase,
  MapPin,
  Calendar,
  Users,
  Building2,
  Star,
  MessageSquare,
  Award,
  Filter
} from "lucide-react";

const alumni = [
  {
    id: "alumni-1",
    name: "Sarah Chen",
    graduationYear: 2020,
    role: "Senior Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    expertise: ["Machine Learning", "Cloud Architecture", "Leadership"],
    achievements: ["Tech Lead", "Patent Holder"],
    available: true
  },
  {
    id: "alumni-2",
    name: "Michael Rodriguez",
    graduationYear: 2018,
    role: "Product Manager",
    company: "Microsoft",
    location: "Seattle, WA",
    expertise: ["Product Strategy", "UX Design", "Agile"],
    achievements: ["PM of the Year"],
    available: true
  }
];

const upcomingTalks = [
  {
    id: "talk-1",
    title: "Breaking into Tech Giants",
    speaker: "Sarah Chen",
    date: "March 15, 2024",
    time: "2:00 PM PST",
    type: "Career Insights",
    mode: "Virtual"
  },
  {
    id: "talk-2",
    title: "Product Management 101",
    speaker: "Michael Rodriguez",
    date: "March 20, 2024",
    time: "3:00 PM PST",
    type: "Industry Talk",
    mode: "Hybrid"
  }
];

const Alumni = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Alumni Network
          </h1>
          <p className="mt-2 text-muted-foreground">
            Connect with alumni, attend industry talks, and grow your professional network
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Button
            variant="outline"
            className="h-auto p-4 border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50"
            onClick={() => navigate("/alumni/mentor")}
          >
            <div className="flex flex-col items-center text-center">
              <MessageSquare className="h-6 w-6 mb-2 text-indigo-600" />
              <span className="font-medium">Connect with Mentors</span>
              <span className="text-sm text-muted-foreground">Get career guidance</span>
            </div>
          </Button>
          <Button
            variant="outline"
            className="h-auto p-4 border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50"
            onClick={() => navigate("/alumni/talks")}
          >
            <div className="flex flex-col items-center text-center">
              <Users className="h-6 w-6 mb-2 text-indigo-600" />
              <span className="font-medium">Industry Talks</span>
              <span className="text-sm text-muted-foreground">Learn from experiences</span>
            </div>
          </Button>
          <Button
            variant="outline"
            className="h-auto p-4 border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50"
            onClick={() => navigate("/career")}
          >
            <div className="flex flex-col items-center text-center">
              <Briefcase className="h-6 w-6 mb-2 text-indigo-600" />
              <span className="font-medium">Job Referrals</span>
              <span className="text-sm text-muted-foreground">Find opportunities</span>
            </div>
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search alumni by name, company, or expertise..." 
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

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Alumni Directory */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-lg font-semibold text-indigo-900 mb-4">Alumni Directory</h2>
            {alumni.map((person) => (
              <Card
                key={person.id}
                className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow bg-white/80 backdrop-blur group"
                onClick={() => navigate(`/alumni/profile/${person.id}`)}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white font-medium">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold group-hover:text-indigo-600 transition-colors">
                          {person.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {person.role} at {person.company}
                        </p>
                      </div>
                      <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                        Class of {person.graduationYear}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {person.location}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {person.expertise.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      {person.achievements.length > 0 && (
                        <div className="flex items-center gap-2 text-sm text-violet-600">
                          <Award className="w-4 h-4" />
                          {person.achievements.join(" • ")}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Upcoming Talks Sidebar */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-indigo-900 mb-4">Upcoming Alumni Talks</h2>
            {upcomingTalks.map((talk) => (
              <Card
                key={talk.id}
                className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow bg-white/80 backdrop-blur group"
                onClick={() => navigate(`/alumni/talks/${talk.id}`)}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="font-medium group-hover:text-indigo-600 transition-colors">
                      {talk.title}
                    </h3>
                    <Badge 
                      variant="secondary"
                      className="bg-violet-100 text-violet-700"
                    >
                      {talk.mode}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {talk.speaker}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {talk.date} • {talk.time}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
            <Button 
              className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90"
              onClick={() => navigate("/alumni/talks")}
            >
              View All Talks
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
