
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  MapPin,
  GraduationCap,
  MessageSquare,
  Award,
  Building2,
  Calendar,
  Link as LinkIcon,
  Mail,
  LinkedinIcon
} from "lucide-react";

const AlumniProfile = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <Card className="p-8 border-0 shadow-lg bg-white/80 backdrop-blur">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-6 items-start border-b pb-8 mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white text-2xl font-medium">
              SC
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-indigo-900">Sarah Chen</h1>
                  <p className="text-lg text-muted-foreground">Senior Software Engineer at Google</p>
                </div>
                <div className="flex gap-2">
                  <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                  <Button variant="outline" className="border-indigo-200">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <GraduationCap className="w-4 h-4" />
                  Class of 2020
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Mountain View, CA
                </span>
                <span className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  Computer Science
                </span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              {/* Professional Experience */}
              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-indigo-900">Professional Experience</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-indigo-900">Senior Software Engineer</h3>
                      <p className="text-sm text-muted-foreground">Google • 2020 - Present</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Leading the development of machine learning infrastructure and cloud solutions.
                        Mentoring junior engineers and contributing to architecture decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Expertise & Skills */}
              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-indigo-900">Expertise & Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {["Machine Learning", "Cloud Architecture", "Leadership", "System Design", "Python", "TensorFlow"].map((skill) => (
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

              {/* Achievements */}
              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-indigo-900">Achievements</h2>
                <div className="grid gap-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-violet-100 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-violet-900">Technical Lead</h3>
                      <p className="text-sm text-muted-foreground">
                        Leading a team of 8 engineers in developing next-generation ML infrastructure
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-violet-100 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-violet-900">Patent Holder</h3>
                      <p className="text-sm text-muted-foreground">
                        Co-inventor of a distributed machine learning optimization system
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Mentorship Availability */}
              <Card className="p-4 border-indigo-100">
                <h3 className="font-medium text-indigo-900 mb-3">Mentorship Areas</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Career Development in Tech</p>
                  <p>• Machine Learning Career Path</p>
                  <p>• Interview Preparation</p>
                  <Button className="w-full mt-4" variant="outline">
                    Request Mentorship
                  </Button>
                </div>
              </Card>

              {/* Upcoming Talks */}
              <Card className="p-4 border-indigo-100">
                <h3 className="font-medium text-indigo-900 mb-3">Upcoming Talks</h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <h4 className="font-medium">Breaking into Tech Giants</h4>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      March 15, 2024
                    </p>
                  </div>
                  <Button className="w-full">
                    Register
                  </Button>
                </div>
              </Card>

              {/* Connect */}
              <Card className="p-4 border-indigo-100">
                <h3 className="font-medium text-indigo-900 mb-3">Connect</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    <LinkedinIcon className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" className="w-full">
                    <LinkIcon className="w-4 h-4 mr-2" />
                    Personal Website
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AlumniProfile;
