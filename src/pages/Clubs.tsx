
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Star } from "lucide-react";

const clubs = [
  {
    id: 1,
    name: "Coding Club",
    description: "A community of programming enthusiasts working on exciting projects.",
    members: 156,
    category: "Technology",
    nextEvent: "Hackathon Workshop - March 20"
  },
  {
    id: 2,
    name: "Photography Society",
    description: "Explore the art of visual storytelling through photography.",
    members: 89,
    category: "Arts",
    nextEvent: "Photo Walk - March 22"
  },
  // Add more clubs here
];

const Clubs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <Users className="w-6 h-6" />
            <h1 className="text-2xl font-semibold">University Clubs</h1>
          </div>
          <Button>Create Club</Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clubs.map((club) => (
            <Card key={club.id} className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{club.name}</h3>
                  <p className="text-sm text-muted-foreground">{club.description}</p>
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{club.members} members</span>
                  </div>
                  <span className="bg-secondary px-2 py-1 rounded">{club.category}</span>
                </div>
                
                {club.nextEvent && (
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{club.nextEvent}</span>
                  </div>
                )}
                
                <Button className="w-full" variant="outline">
                  Join Club
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clubs;
