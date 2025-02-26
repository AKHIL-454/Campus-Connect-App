
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Briefcase, 
  Building2, 
  MapPin, 
  Calendar,
  Search,
  Code,
  Users,
  Trophy,
  Laptop,
  GraduationCap,
  Clock,
  Filter
} from "lucide-react";

const jobs = [
  {
    id: "tech-intern-1",
    title: "Software Engineer Intern",
    company: "Tech Corp",
    location: "San Francisco, CA",
    type: "Internship",
    domain: "Software Development",
    posted: "2 days ago",
    deadline: "March 30, 2024",
    salary: "$35/hr",
    skills: ["React", "TypeScript", "Node.js"],
    featured: true
  },
  {
    id: "data-analyst-2",
    title: "Data Analyst",
    company: "Analytics Co",
    location: "Remote",
    type: "Full-time",
    domain: "Data Science",
    posted: "1 week ago",
    deadline: "April 15, 2024",
    salary: "$75,000/year",
    skills: ["Python", "SQL", "Tableau"],
    featured: false
  }
];

const hackathons = [
  {
    id: "hack-1",
    title: "University Tech Innovation Challenge",
    organizer: "Computer Science Department",
    date: "April 5-7, 2024",
    mode: "Hybrid",
    prizes: "$10,000 in prizes",
    participants: 250,
    type: "Hackathon",
    skills: ["AI/ML", "Web Development", "IoT"],
    registration: "Open",
    featured: true
  },
  {
    id: "collab-2",
    title: "Sustainable Solutions Project",
    organizer: "Engineering Club",
    date: "March 25, 2024",
    mode: "In-person",
    type: "Project Collaboration",
    domain: "Environmental Engineering",
    team_size: "3-5 members",
    duration: "6 weeks",
    registration: "Open",
    featured: false
  }
];

const Career = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Career & Opportunities Hub
          </h1>
          <p className="mt-2 text-muted-foreground">
            Discover internships, jobs, hackathons, and collaborative projects
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search opportunities..." 
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
        <Tabs defaultValue="jobs" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 gap-4 bg-transparent h-auto p-0">
            <TabsTrigger 
              value="jobs"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-violet-600 data-[state=active]:text-white h-12"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Jobs & Internships
            </TabsTrigger>
            <TabsTrigger 
              value="hackathons"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-violet-600 data-[state=active]:text-white h-12"
            >
              <Code className="w-4 h-4 mr-2" />
              Hackathons & Projects
            </TabsTrigger>
          </TabsList>

          <TabsContent value="jobs" className="space-y-4">
            {jobs.map((job) => (
              <Card 
                key={job.id}
                className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow bg-white/80 backdrop-blur group"
                onClick={() => navigate(`/career/job/${job.id}`)}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold group-hover:text-indigo-600 transition-colors">
                          {job.title}
                        </h3>
                        {job.featured && (
                          <Badge className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {job.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Posted {job.posted}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <Badge 
                          key={skill}
                          variant="secondary" 
                          className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                      {job.type}
                    </Badge>
                    <span className="text-sm font-medium text-indigo-600">{job.salary}</span>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="hackathons" className="space-y-4">
            {hackathons.map((hackathon) => (
              <Card 
                key={hackathon.id}
                className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow bg-white/80 backdrop-blur group"
                onClick={() => navigate(`/career/hackathon/${hackathon.id}`)}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold group-hover:text-indigo-600 transition-colors">
                          {hackathon.title}
                        </h3>
                        {hackathon.featured && (
                          <Badge className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {hackathon.organizer}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {hackathon.date}
                        </span>
                        <Badge 
                          variant="secondary" 
                          className="bg-emerald-100 text-emerald-700"
                        >
                          {hackathon.registration}
                        </Badge>
                      </div>
                    </div>
                    <Badge 
                      variant="outline" 
                      className="border-indigo-200 text-indigo-700"
                    >
                      {hackathon.type}
                    </Badge>
                  </div>

                  {hackathon.type === "Hackathon" && (
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 text-indigo-600">
                        <Trophy className="w-4 h-4" />
                        <span>{hackathon.prizes}</span>
                      </div>
                      <div className="flex items-center gap-2 text-violet-600">
                        <Users className="w-4 h-4" />
                        <span>{hackathon.participants} Participants</span>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {hackathon.skills?.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary" 
                        className="bg-violet-100 text-violet-700 hover:bg-violet-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Career;
