import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Clock, 
  MapPin, 
  User, 
  Calendar,
  Info,
  MessagesSquare,
  Send,
  Bell
} from "lucide-react";

const schedule = [
  {
    id: "1",
    subject: "Advanced Mathematics",
    type: "Lecture",
    time: "09:00 - 10:30",
    room: "Hall 301",
    professor: "Dr. Sarah Johnson",
    building: "Science Building",
    description: "Complex analysis and differential equations for senior year students.",
    materialRequired: "Textbook, Scientific Calculator",
    upcomingTopics: ["Complex Integration", "Residue Theory", "Conformal Mapping"],
    isExam: false
  },
  {
    id: "2",
    subject: "Computer Science",
    type: "Lab",
    time: "11:00 - 12:30",
    room: "Lab 102",
    professor: "Prof. Michael Chen",
    building: "Technology Center",
    description: "Practical implementation of data structures and algorithms.",
    materialRequired: "Laptop, Lab Manual",
    upcomingTopics: ["Binary Trees", "Graph Algorithms", "Dynamic Programming"],
    isExam: false
  },
  {
    id: "3",
    subject: "Midterm Examination",
    type: "Exam",
    time: "14:00 - 16:00",
    room: "Exam Hall A",
    professor: "Multiple Invigilators",
    building: "Main Building",
    description: "Comprehensive examination covering all topics from weeks 1-7.",
    materialRequired: "Student ID, Blue/Black Pens, Calculator",
    examDetails: ["No electronic devices allowed", "Bring student ID", "Arrive 15 minutes early"],
    isExam: true
  },
  {
    id: "4",
    subject: "Research Methodology",
    type: "Seminar",
    time: "16:30 - 18:00",
    room: "Conference Room 2",
    professor: "Dr. Emily Torres",
    building: "Research Center",
    description: "Advanced research methods and thesis preparation guidance.",
    materialRequired: "Research Proposal Draft",
    upcomingTopics: ["Literature Review", "Research Design", "Data Analysis"],
    isExam: false
  }
];

const typeColors = {
  Lecture: "bg-indigo-100 text-indigo-800 border-indigo-200",
  Lab: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Exam: "bg-rose-100 text-rose-800 border-rose-200",
  Seminar: "bg-violet-100 text-violet-800 border-violet-200"
};

const ScheduleDetails = () => {
  const { id } = useParams();
  const item = schedule.find(s => s.id === id);

  if (!item) return <div>Schedule not found</div>;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="grid grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="col-span-2 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  {item.subject}
                </h1>
                <div className="flex items-center gap-3 mt-2">
                  <Badge className={typeColors[item.type as keyof typeof typeColors]}>
                    {item.type}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    with {item.professor}
                  </span>
                </div>
              </div>
            </div>

            <Card className="border-indigo-100">
              <div className="p-6 space-y-6">
                <div className="bg-muted/30 p-6 rounded-lg border border-indigo-100">
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Info className="w-5 h-5 text-indigo-600" />
                    Class Information
                  </h4>
                  <p className="text-foreground leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-indigo-600" />
                        <span className="text-muted-foreground">Time: {item.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-indigo-600" />
                        <span className="text-muted-foreground">Location: {item.room}, {item.building}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-indigo-600" />
                        <span className="text-muted-foreground">Instructor: {item.professor}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-indigo-600" />
                        <span className="text-muted-foreground">Materials: {item.materialRequired}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {item.isExam ? (
                  <div className="bg-rose-50 p-6 rounded-lg border border-rose-200">
                    <h4 className="font-semibold text-lg mb-3 text-rose-800">Exam Instructions</h4>
                    <ul className="space-y-2">
                      {item.examDetails?.map((detail, index) => (
                        <li key={index} className="flex items-center gap-2 text-rose-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="bg-muted/30 p-6 rounded-lg border border-indigo-100">
                    <h4 className="font-semibold text-lg mb-3">Upcoming Topics</h4>
                    <ul className="space-y-2">
                      {item.upcomingTopics?.map((topic, index) => (
                        <li key={index} className="flex items-center gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <Button variant="outline" className="border-indigo-200 hover:border-indigo-300">
                    <Bell className="w-4 h-4 mr-2" />
                    Set Reminder
                  </Button>
                  {!item.isExam && (
                    <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90">
                      View Course Materials
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </div>

          {/* Chat Section */}
          <div className="col-span-1">
            <Card className="border-indigo-100">
              <div className="h-[calc(100vh-12rem)] flex flex-col">
                <div className="p-4 border-b bg-muted/30">
                  <h3 className="font-semibold flex items-center gap-2">
                    <MessagesSquare className="w-4 h-4 text-indigo-600" />
                    Class Discussion
                  </h3>
                </div>
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        <User className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Student Name</span>
                          <span className="text-xs text-muted-foreground">2:30 PM</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Question about today's topic...
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t bg-muted/30">
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Type your message..." 
                      className="flex-1 border-indigo-200 focus:border-indigo-300"
                    />
                    <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDetails;
