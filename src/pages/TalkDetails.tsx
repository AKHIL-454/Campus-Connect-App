
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  Users,
  PlayCircle,
  MessageSquare,
  Share2,
  Download,
  GraduationCap
} from "lucide-react";

const TalkDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <Card className="p-8 border-0 shadow-lg bg-white/80 backdrop-blur">
          {/* Header */}
          <div className="space-y-6 pb-6 border-b">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h1 className="text-2xl font-bold text-indigo-900">
                  Breaking into Tech Giants
                </h1>
                <p className="text-muted-foreground">
                  Learn about the interview process and career growth at top tech companies
                </p>
              </div>
              <Badge 
                variant="secondary"
                className="bg-emerald-100 text-emerald-700"
              >
                Virtual
              </Badge>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-indigo-600" />
                <div>
                  <p className="font-medium">Sarah Chen</p>
                  <p className="text-muted-foreground">Senior Software Engineer at Google</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="flex items-center gap-2 text-indigo-600">
                  <Calendar className="w-4 h-4" />
                  March 15, 2024
                </p>
                <p className="flex items-center gap-2 text-indigo-600">
                  <Clock className="w-4 h-4" />
                  2:00 PM PST
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8 py-8">
            <div className="md:col-span-2 space-y-6">
              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-indigo-900">About this Talk</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Join Sarah Chen as she shares her journey from university to becoming a Senior 
                  Software Engineer at Google. Learn about the interview preparation strategies, 
                  the career growth opportunities, and what it's like working at a tech giant.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-indigo-900">What You'll Learn</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-indigo-600" />
                    Interview preparation strategies
                  </li>
                  <li className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-indigo-600" />
                    Career growth opportunities in tech
                  </li>
                  <li className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-indigo-600" />
                    Day-to-day life at a tech company
                  </li>
                </ul>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Button className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90">
                <PlayCircle className="w-4 h-4 mr-2" />
                Register Now
              </Button>

              <Card className="p-4 border-indigo-100">
                <h3 className="font-medium text-indigo-900 mb-3">Event Details</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Duration</span>
                    <span>1 hour</span>
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Format</span>
                    <span>Live Webinar</span>
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Q&A Session</span>
                    <span>Yes</span>
                  </div>
                </div>
              </Card>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" className="flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TalkDetails;
