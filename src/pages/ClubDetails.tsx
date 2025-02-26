
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { clubs } from "./Clubs";
import {
  Users,
  Calendar,
  MessagesSquare,
  Bell,
  Settings,
  Plus,
  Send,
  Pin,
  Star,
  MessageCircle,
  Shield,
  UserPlus,
  UserMinus
} from "lucide-react";

const ClubDetails = () => {
  const { clubName } = useParams();
  const club = clubs.find(c => c.name.toLowerCase().replace(/\s+/g, '-') === clubName);

  if (!club) return <div>Club not found</div>;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                {club.name}
              </h1>
              <div className="flex items-center gap-3 mt-1">
                <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200">
                  {club.category}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Coordinator: {club.coordinator}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="border-indigo-200 hover:border-indigo-300">
              <Settings className="w-4 h-4 mr-2" />
              Manage
            </Button>
            <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90">
              <UserPlus className="w-4 h-4 mr-2" />
              Join Club
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          <Card className="p-4 flex items-center gap-3 border-indigo-100">
            <Users className="w-5 h-5 text-indigo-600" />
            <div>
              <div className="text-2xl font-semibold">{club.members}</div>
              <div className="text-sm text-muted-foreground">Members</div>
            </div>
          </Card>
          <Card className="p-4 flex items-center gap-3 border-indigo-100">
            <Calendar className="w-5 h-5 text-violet-600" />
            <div>
              <div className="text-2xl font-semibold">{club.totalEvents}</div>
              <div className="text-sm text-muted-foreground">Events</div>
            </div>
          </Card>
          <Card className="p-4 flex items-center gap-3 border-indigo-100">
            <Star className="w-5 h-5 text-amber-600" />
            <div>
              <div className="text-2xl font-semibold">{club.announcements}</div>
              <div className="text-sm text-muted-foreground">Announcements</div>
            </div>
          </Card>
          <Card className="p-4 flex items-center gap-3 border-indigo-100">
            <MessageCircle className="w-5 h-5 text-emerald-600" />
            <div>
              <div className="text-2xl font-semibold">{club.activeDiscussions}</div>
              <div className="text-sm text-muted-foreground">Discussions</div>
            </div>
          </Card>
        </div>

        <Tabs defaultValue="announcements" className="mt-6">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="chat">Club Chat</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
          </TabsList>

          <TabsContent value="announcements" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Recent Announcements</h3>
              <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90">
                <Plus className="w-4 h-4 mr-2" />
                New Announcement
              </Button>
            </div>
            <Card className="p-6 border-indigo-100">
              <div className="space-y-6">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex items-start gap-4 pb-6 border-b last:border-0 last:pb-0">
                    <Pin className="w-5 h-5 text-indigo-600 mt-1" />
                    <div className="space-y-1 flex-1">
                      <h4 className="font-medium">Important Club Meeting</h4>
                      <p className="text-sm text-muted-foreground">
                        Join us for our monthly meeting to discuss upcoming events and projects.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>March 25, 2024</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="chat">
            <Card className="border-indigo-100">
              <div className="h-[600px] flex flex-col">
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                  {[1, 2, 3, 4].map((_, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        <Users className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">John Doe</span>
                          <span className="text-xs text-muted-foreground">2:30 PM</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Looking forward to our next meeting!
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
          </TabsContent>

          <TabsContent value="members">
            <Card className="border-indigo-100">
              <div className="p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Club Members</h3>
                  <div className="flex items-center gap-2">
                    <Input 
                      placeholder="Search members..." 
                      className="border-indigo-200"
                    />
                    <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Add Member
                    </Button>
                  </div>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((_, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                          <Users className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div>
                          <div className="font-medium">Sarah Johnson</div>
                          <div className="text-sm text-muted-foreground">Computer Science</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="border-indigo-200">Member</Badge>
                        <Button variant="ghost" size="icon" className="text-rose-500 hover:text-rose-600">
                          <UserMinus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="events">
            <Card className="border-indigo-100">
              <div className="p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Upcoming Events</h3>
                  <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Event
                  </Button>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex flex-col items-center justify-center">
                          <span className="text-sm font-semibold">MAR</span>
                          <span className="text-lg font-bold">25</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Tech Workshop</h4>
                          <div className="text-sm text-muted-foreground">2:00 PM - Room 301</div>
                        </div>
                      </div>
                      <Button variant="outline" className="border-indigo-200">
                        <Calendar className="w-4 h-4 mr-2" />
                        RSVP
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ClubDetails;
