import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Bell, Pin, Megaphone, Calendar, Info, BookOpen, Award, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const announcements = [
  {
    id: "1",
    title: "Final Exam Schedule Released",
    content: "The final examination schedule for Fall 2024 is now available. Please review carefully and note your exam dates and locations. Make sure to check room assignments and bring necessary identification. Contact your academic advisor if you have any scheduling conflicts.",
    date: "2024-03-15",
    isPinned: true,
    category: "Academic",
    icon: BookOpen,
    author: "Academic Affairs Office",
    urgency: "High",
    detailedInfo: [
      "Exam Period: April 15-30, 2024",
      "Room assignments are final",
      "Bring student ID and necessary materials",
      "Special arrangements must be requested by March 30"
    ]
  },
  {
    id: "2",
    title: "Campus Career Fair Next Week",
    content: "Don't miss the opportunity to meet with top employers at our annual career fair. Over 50 companies will be present, offering internships and full-time positions across various industries.",
    date: "2024-03-14",
    isPinned: false,
    category: "Career",
    icon: Briefcase,
    author: "Career Development Center",
    urgency: "Medium",
    detailedInfo: [
      "Date: March 21, 2024",
      "Location: University Center",
      "Time: 10:00 AM - 4:00 PM",
      "Bring multiple copies of your resume"
    ]
  },
  {
    id: "3",
    title: "Academic Excellence Awards Ceremony",
    content: "Join us in celebrating student achievements at the annual Academic Excellence Awards ceremony. Outstanding students from each department will be recognized for their exceptional performance.",
    date: "2024-03-20",
    isPinned: true,
    category: "Events",
    icon: Award,
    author: "Student Affairs",
    urgency: "Medium",
    detailedInfo: [
      "Date: March 25, 2024",
      "Location: Main Auditorium",
      "Time: 2:00 PM",
      "Reception to follow"
    ]
  }
];

const categoryColors = {
  Academic: "bg-indigo-100 text-indigo-800 border-indigo-200",
  Career: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Events: "bg-violet-100 text-violet-800 border-violet-200",
  General: "bg-blue-100 text-blue-800 border-blue-200"
};

const urgencyColors = {
  High: "text-rose-600",
  Medium: "text-amber-600",
  Low: "text-emerald-600"
};

const Announcements = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Megaphone className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              University Announcements
            </h1>
          </div>
          <Badge variant="outline" className="flex items-center gap-1 py-1.5">
            <Bell className="w-4 h-4" />
            Notifications Active
          </Badge>
        </div>
        
        <div className="grid gap-4">
          {announcements.map((announcement) => (
            <Card 
              key={announcement.id} 
              className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg border-l-4 ${
                announcement.urgency === 'High' ? 'border-l-rose-500' :
                announcement.urgency === 'Medium' ? 'border-l-amber-500' :
                'border-l-emerald-500'
              }`}
              onClick={() => navigate(`/announcements/${announcement.id}`)}
            >
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-3 flex-1">
                  <div className="flex items-start gap-3">
                    <announcement.icon className={`w-5 h-5 mt-1 ${
                      announcement.category === 'Academic' ? 'text-indigo-600' :
                      announcement.category === 'Career' ? 'text-emerald-600' :
                      'text-violet-600'
                    }`} />
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        {announcement.isPinned && (
                          <Pin className="w-4 h-4 text-indigo-600" />
                        )}
                        <h3 className="text-lg font-semibold">{announcement.title}</h3>
                      </div>
                      <p className="text-muted-foreground line-clamp-2">{announcement.content}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={categoryColors[announcement.category as keyof typeof categoryColors]}>
                      {announcement.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Posted by {announcement.author}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {announcement.date}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;
