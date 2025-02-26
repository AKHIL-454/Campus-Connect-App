import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, BookOpen, MapPin, User, Bell, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const schedule = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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

const Schedule = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Calendar className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Class Schedule
            </h1>
          </div>
          <Button
            variant="outline"
            className="flex items-center gap-2 border-indigo-200 hover:border-indigo-300"
          >
            <Bell className="w-4 h-4 text-indigo-600" />
            Set Reminders
          </Button>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <CalendarIcon className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-semibold">Today's Schedule</h2>
          </div>
          <Badge variant="outline" className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Spring Semester 2024
          </Badge>
        </div>
        
        <div className="grid gap-4">
          {schedule.map((item) => (
            <Card 
              key={item.id} 
              className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg border-l-4 ${
                item.isExam ? 'border-l-rose-500' : 'border-l-indigo-500'
              }`}
              onClick={() => navigate(`/schedule/${item.id}`)}
            >
              <div className="flex items-start justify-between">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <BookOpen className={`w-5 h-5 ${item.isExam ? 'text-rose-600' : 'text-indigo-600'}`} />
                      <h3 className="text-lg font-semibold">{item.subject}</h3>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{item.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>{item.room}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="w-4 h-4" />
                        <span>{item.professor}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className={typeColors[item.type as keyof typeof typeColors]}>
                    {item.type}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
