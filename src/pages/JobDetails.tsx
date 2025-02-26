
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Clock,
  Briefcase,
  GraduationCap,
  BookOpen,
  Send
} from "lucide-react";

const JobDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <Card className="p-8 border-0 shadow-lg bg-white/80 backdrop-blur">
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-4 pb-6 border-b">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h1 className="text-2xl font-bold text-indigo-900">
                    Software Engineer Intern
                  </h1>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      Tech Corp
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      San Francisco, CA
                    </span>
                  </div>
                </div>
                <Badge className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white">
                  Featured
                </Badge>
              </div>

              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                  Internship
                </Badge>
                <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                  $35/hr
                </Badge>
                <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                  <Clock className="w-3 h-3 mr-1" />
                  Posted 2 days ago
                </Badge>
                <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                  <Calendar className="w-3 h-3 mr-1" />
                  Apply by March 30, 2024
                </Badge>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid gap-6">
              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-indigo-900">About the Role</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Join our dynamic team as a Software Engineer Intern and contribute to 
                  building innovative solutions. You'll work alongside experienced developers 
                  and gain hands-on experience with modern technologies.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-indigo-900">Required Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Node.js"].map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary" 
                      className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-indigo-900">Requirements</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-indigo-600" />
                    Currently pursuing a degree in Computer Science or related field
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-indigo-600" />
                    Strong understanding of web development fundamentals
                  </li>
                  <li className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-indigo-600" />
                    Previous internship experience is a plus
                  </li>
                </ul>
              </section>
            </div>

            {/* Apply Button */}
            <div className="pt-6 border-t">
              <Button className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90">
                <Send className="w-4 h-4 mr-2" />
                Apply Now
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default JobDetails;
