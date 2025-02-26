
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users,
  Calendar,
  Trophy,
  Clock,
  MapPin,
  Laptop,
  Target,
  CheckCircle,
  UserPlus
} from "lucide-react";

const HackathonDetails = () => {
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
                    University Tech Innovation Challenge
                  </h1>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      Computer Science Department
                    </span>
                    <Badge className="bg-emerald-100 text-emerald-700">
                      Registration Open
                    </Badge>
                  </div>
                </div>
                <Badge className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white">
                  Featured
                </Badge>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-indigo-600">
                  <Trophy className="w-4 h-4" />
                  <span>$10,000 in prizes</span>
                </div>
                <div className="flex items-center gap-2 text-violet-600">
                  <Calendar className="w-4 h-4" />
                  <span>April 5-7, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600">
                  <Users className="w-4 h-4" />
                  <span>250 Participants</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid gap-6">
              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-indigo-900">Event Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Join us for an exciting 48-hour hackathon where you'll work with fellow 
                  students to develop innovative solutions to real-world problems. This hybrid 
                  event offers both in-person and virtual participation options.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-indigo-900">Tracks & Themes</h2>
                <div className="flex flex-wrap gap-2">
                  {["AI/ML", "Web Development", "IoT"].map((track) => (
                    <Badge 
                      key={track}
                      variant="secondary" 
                      className="bg-violet-100 text-violet-700 hover:bg-violet-200"
                    >
                      {track}
                    </Badge>
                  ))}
                </div>
              </section>

              <section className="grid sm:grid-cols-2 gap-4">
                <Card className="p-4 border border-indigo-100">
                  <h3 className="font-medium text-indigo-900 mb-3">Event Schedule</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-indigo-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-indigo-900">Day 1 - April 5</p>
                        <p>Opening Ceremony & Team Formation</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Laptop className="w-4 h-4 text-indigo-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-indigo-900">Day 2 - April 6</p>
                        <p>Development & Mentorship Sessions</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Trophy className="w-4 h-4 text-indigo-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-indigo-900">Day 3 - April 7</p>
                        <p>Project Submission & Awards</p>
                      </div>
                    </li>
                  </ul>
                </Card>

                <Card className="p-4 border border-indigo-100">
                  <h3 className="font-medium text-indigo-900 mb-3">Prize Categories</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-amber-500" />
                      Grand Prize - $5,000
                    </li>
                    <li className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-zinc-400" />
                      Runner Up - $3,000
                    </li>
                    <li className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-amber-700" />
                      Innovation Award - $2,000
                    </li>
                  </ul>
                </Card>
              </section>
            </div>

            {/* Register Button */}
            <div className="pt-6 border-t">
              <Button className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90">
                <UserPlus className="w-4 h-4 mr-2" />
                Register Now
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HackathonDetails;
