
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Bell, Pin } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "Final Exam Schedule Released",
    content: "The final examination schedule for Fall 2024 is now available. Please check your student portal for detailed timings.",
    date: "2024-03-15",
    isPinned: true,
    category: "Academic"
  },
  {
    id: 2,
    title: "Campus Career Fair Next Week",
    content: "Don't miss the opportunity to meet with top employers at our annual career fair.",
    date: "2024-03-14",
    isPinned: false,
    category: "Career"
  },
  // Add more announcements here
];

const Announcements = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="flex items-center space-x-2 mb-6">
          <Bell className="w-6 h-6" />
          <h1 className="text-2xl font-semibold">Announcements</h1>
        </div>
        
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <Card key={announcement.id} className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    {announcement.isPinned && (
                      <Pin className="w-4 h-4 text-primary" />
                    )}
                    <h3 className="text-lg font-semibold">{announcement.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{announcement.content}</p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span>{announcement.category}</span>
                    <span>•</span>
                    <span>{announcement.date}</span>
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
