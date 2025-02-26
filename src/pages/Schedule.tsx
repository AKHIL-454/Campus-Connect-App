
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, BookOpen, MapPin, User, Bell, Calendar as CalendarIcon, Info } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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
  const [selectedClass, setSelectedClass] = useState<typeof schedule[0] | null>(null);

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
              onClick={() => setSelectedClass(item)}
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

        <Dialog open={!!selectedClass} onOpenChange={() => setSelectedClass(null)}>
          <DialogContent className="max-w-3xl h-[80vh] flex flex-col">
            {selectedClass && (
              <>
                <DialogHeader className="space-y-4">
                  <div className="flex items-start gap-3">
                    <BookOpen className={`w-6 h-6 ${selectedClass.isExam ? 'text-rose-600' : 'text-indigo-600'}`} />
                    <div>
                      <DialogTitle className="text-2xl">
                        {selectedClass.subject}
                      </DialogTitle>
                      <DialogDescription>
                        <div className="flex items-center gap-3 mt-2">
                          <Badge className={typeColors[selectedClass.type as keyof typeof typeColors]}>
                            {selectedClass.type}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {selectedClass.professor}
                          </span>
                        </div>
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>
                
                <div className="flex-1 overflow-y-auto mt-4">
                  <div className="space-y-6">
                    <div className="bg-muted/30 p-6 rounded-lg border border-indigo-100">
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Info className="w-5 h-5 text-indigo-600" />
                        Class Information
                      </h4>
                      <p className="text-foreground leading-relaxed mb-4">
                        {selectedClass.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-indigo-600" />
                            <span className="text-muted-foreground">Time: {selectedClass.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-indigo-600" />
                            <span className="text-muted-foreground">Location: {selectedClass.room}, {selectedClass.building}</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-indigo-600" />
                            <span className="text-muted-foreground">Instructor: {selectedClass.professor}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-indigo-600" />
                            <span className="text-muted-foreground">Materials: {selectedClass.materialRequired}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {selectedClass.isExam ? (
                      <div className="bg-rose-50 p-6 rounded-lg border border-rose-200">
                        <h4 className="font-semibold text-lg mb-3 text-rose-800">Exam Instructions</h4>
                        <ul className="space-y-2">
                          {selectedClass.examDetails?.map((detail, index) => (
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
                          {selectedClass.upcomingTopics?.map((topic, index) => (
                            <li key={index} className="flex items-center gap-2 text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" className="border-indigo-200 hover:border-indigo-300">
                        <Bell className="w-4 h-4 mr-2" />
                        Set Reminder
                      </Button>
                      {!selectedClass.isExam && (
                        <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90">
                          View Course Materials
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Schedule;
