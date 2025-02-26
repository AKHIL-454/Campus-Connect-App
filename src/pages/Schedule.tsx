
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, BookOpen } from "lucide-react";

const schedule = [
  {
    id: 1,
    subject: "Advanced Mathematics",
    type: "Lecture",
    time: "09:00 - 10:30",
    room: "Hall 301",
    professor: "Dr. Sarah Johnson"
  },
  {
    id: 2,
    subject: "Computer Science",
    type: "Lab",
    time: "11:00 - 12:30",
    room: "Lab 102",
    professor: "Prof. Michael Chen"
  },
  // Add more schedule items here
];

const Schedule = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="flex items-center space-x-2 mb-6">
          <Calendar className="w-6 h-6" />
          <h1 className="text-2xl font-semibold">Class Schedule</h1>
        </div>
        
        <div className="grid gap-4">
          {schedule.map((item) => (
            <Card key={item.id} className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4" />
                    <h3 className="text-lg font-semibold">{item.subject}</h3>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{item.time}</span>
                    <span>•</span>
                    <span>{item.room}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.professor}</p>
                </div>
                <span className="text-sm font-medium bg-secondary px-2 py-1 rounded">
                  {item.type}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
