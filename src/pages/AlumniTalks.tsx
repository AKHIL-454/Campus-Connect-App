
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
  Calendar,
  Clock,
  MapPin,
  Filter,
  PlayCircle,
  Book,
  GraduationCap
} from "lucide-react";

const talks = [
  {
    id: "talk-1",
    title: "Breaking into Tech Giants",
    speaker: "Sarah Chen",
    role: "Senior Software Engineer at Google",
    date: "March 15, 2024",
    time: "2:00 PM PST",
    type: "Career Insights",
    mode: "Virtual",
    description: "Learn about the interview process and career growth at top tech companies.",
    topics: ["Interview Prep", "Career Growth", "Tech Industry"],
    upcoming: true
  },
  {
    id: "talk-2",
    title: "Product Management 101",
    speaker: "Michael Rodriguez",
    role: "Product Manager at Microsoft",
    date: "March 20, 2024",
    time: "3:00 PM PST",
    type: "Industry Talk",
    mode: "Hybrid",
    description: "Introduction to product management roles and responsibilities.",
    topics: ["Product Management", "Leadership", "Tech Strategy"],
    upcoming: true
  }
];

const AlumniTalks = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Alumni Talks & Webinars
          </h1>
          <p className="mt-2 text-muted-foreground">
            Learn from industry experts and gain valuable insights
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search talks by title, speaker, or topic..." 
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

        {/* Talks Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {talks.map((talk) => (
            <Card
              key={talk.id}
              className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow bg-white/80 backdrop-blur group"
              onClick={() => navigate(`/alumni/talks/${talk.id}`)}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold group-hover:text-indigo-600 transition-colors">
                      {talk.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{talk.description}</p>
                  </div>
                  <Badge 
                    variant="secondary"
                    className={talk.mode === "Virtual" ? 
                      "bg-emerald-100 text-emerald-700" : 
                      "bg-violet-100 text-violet-700"}
                  >
                    {talk.mode}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-2">
                  {talk.topics.map((topic) => (
                    <Badge
                      key={topic}
                      variant="secondary"
                      className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <div>
                      <p className="font-medium text-indigo-900">{talk.speaker}</p>
                      <p className="text-xs">{talk.role}</p>
                    </div>
                  </div>
                  <div className="text-sm text-right text-muted-foreground">
                    <p className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {talk.date}
                    </p>
                    <p className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {talk.time}
                    </p>
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

export default AlumniTalks;
