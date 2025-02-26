
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Building2, MapPin, Calendar } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Tech Corp",
    location: "San Francisco, CA",
    type: "Internship",
    posted: "2 days ago",
    deadline: "March 30, 2024"
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "Analytics Co",
    location: "Remote",
    type: "Full-time",
    posted: "1 week ago",
    deadline: "April 15, 2024"
  },
  // Add more job listings here
];

const Career = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <Briefcase className="w-6 h-6" />
            <h1 className="text-2xl font-semibold">Career Opportunities</h1>
          </div>
          <Button>Post Job</Button>
        </div>
        
        <div className="space-y-4">
          {jobs.map((job) => (
            <Card key={job.id} className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    <span>{job.company}</span>
                    <span>•</span>
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Posted {job.posted}</span>
                    <span>•</span>
                    <span>Deadline: {job.deadline}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium bg-secondary px-2 py-1 rounded">
                    {job.type}
                  </span>
                  <Button variant="outline">Apply</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
