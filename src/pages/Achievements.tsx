
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Trophy, Star, Award, Medal, Crown, Target, Users, Flame, Gift, Rocket, Brain, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Achievements = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("weekly");

  const userStats = {
    level: 12,
    title: "Rising Scholar",
    points: 2850,
    nextLevel: 3000,
    rank: 15,
    streak: 14,
    totalPosts: 45,
    commentsReceived: 128,
    eventsAttended: 8
  };

  const achievements = [
    {
      category: "Academic",
      items: [
        { id: 1, name: "Knowledge Seeker", description: "Complete 10 study sessions", progress: 80, icon: Brain, color: "text-violet-500", earned: true },
        { id: 2, name: "Top Scholar", description: "Achieve highest grade in class", progress: 100, icon: Crown, color: "text-amber-500", earned: true },
        { id: 3, name: "Research Pioneer", description: "Submit original research", progress: 40, icon: Rocket, color: "text-blue-500", earned: false },
      ]
    },
    {
      category: "Community",
      items: [
        { id: 4, name: "Mentor Badge", description: "Help 5 students with queries", progress: 100, icon: Shield, color: "text-emerald-500", earned: true },
        { id: 5, name: "Event Champion", description: "Organize campus event", progress: 60, icon: Trophy, color: "text-orange-500", earned: false },
        { id: 6, name: "Social Star", description: "100+ helpful comments", progress: 90, icon: Star, color: "text-yellow-500", earned: true },
      ]
    }
  ];

  const leaderboards = {
    weekly: [
      { rank: 1, name: "Sarah Chen", points: 450, change: "+2", avatar: "SC" },
      { rank: 2, name: "John Doe", points: 380, change: "-1", avatar: "JD" },
      { rank: 3, name: "Maria Garcia", points: 350, change: "+1", avatar: "MG" },
    ],
    monthly: [
      { rank: 1, name: "Alex Kim", points: 1250, change: "0", avatar: "AK" },
      { rank: 2, name: "Sarah Chen", points: 1180, change: "+3", avatar: "SC" },
      { rank: 3, name: "David Wang", points: 1050, change: "-1", avatar: "DW" },
    ],
    allTime: [
      { rank: 1, name: "Emma Wilson", points: 5450, change: "0", avatar: "EW" },
      { rank: 2, name: "James Chen", points: 5280, change: "0", avatar: "JC" },
      { rank: 3, name: "Sarah Chen", points: 4950, change: "+1", avatar: "SC" },
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8 mt-16">
        {/* User Progress Section */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card className="p-6 bg-gradient-to-br from-violet-500 to-indigo-600 text-white">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{userStats.level}</h3>
                  <p className="text-violet-100">{userStats.title}</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-violet-100">
                  <span>{userStats.points} XP</span>
                  <span>{userStats.nextLevel} XP</span>
                </div>
                <Progress value={(userStats.points / userStats.nextLevel) * 100} className="h-2 bg-white/20" />
              </div>

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="text-center p-2 rounded-lg bg-white/10">
                  <div className="font-bold">{userStats.totalPosts}</div>
                  <div className="text-xs text-violet-100">Posts</div>
                </div>
                <div className="text-center p-2 rounded-lg bg-white/10">
                  <div className="font-bold">{userStats.commentsReceived}</div>
                  <div className="text-xs text-violet-100">Comments</div>
                </div>
                <div className="text-center p-2 rounded-lg bg-white/10">
                  <div className="font-bold">{userStats.eventsAttended}</div>
                  <div className="text-xs text-violet-100">Events</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Achievements Overview */}
          <Card className="p-6 bg-white border-0 shadow-xl shadow-indigo-100">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Recent Achievements</h3>
                <Badge className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white">
                  Level {userStats.level}
                </Badge>
              </div>
              
              <div className="space-y-3">
                {achievements[0].items.slice(0, 3).map((achievement) => (
                  <div 
                    key={achievement.id}
                    className={`p-3 rounded-lg border ${
                      achievement.earned 
                        ? 'bg-gradient-to-r from-violet-50 to-indigo-50 border-indigo-100' 
                        : 'bg-gray-50 border-gray-100'
                    } transition-all hover:shadow-md`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${
                        achievement.earned ? 'bg-gradient-to-r from-violet-500 to-indigo-500' : 'bg-gray-200'
                      } flex items-center justify-center`}>
                        <achievement.icon className={`w-5 h-5 ${achievement.earned ? 'text-white' : 'text-gray-500'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{achievement.name}</div>
                        <div className="text-xs text-gray-500">{achievement.description}</div>
                      </div>
                      <Progress value={achievement.progress} className="w-20 bg-indigo-100" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Leaderboard */}
          <Card className="p-6 bg-white border-0 shadow-xl shadow-indigo-100">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Top Performers</h3>
                <div className="flex gap-2">
                  {["weekly", "monthly", "allTime"].map((period) => (
                    <button
                      key={period}
                      onClick={() => setSelectedPeriod(period)}
                      className={`text-xs px-3 py-1 rounded-full ${
                        selectedPeriod === period
                          ? 'bg-gradient-to-r from-violet-500 to-indigo-500 text-white'
                          : 'text-gray-500 hover:bg-gray-100'
                      }`}
                    >
                      {period.charAt(0).toUpperCase() + period.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {leaderboards[selectedPeriod as keyof typeof leaderboards].map((user, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:shadow-md transition-all animate-fadeIn"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      index === 0 ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white' :
                      index === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-500 text-white' :
                      'bg-gradient-to-r from-orange-400 to-red-400 text-white'
                    }`}>
                      {user.rank}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 text-white flex items-center justify-center text-sm font-medium">
                      {user.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{user.name}</div>
                      <div className="text-xs text-gray-500">{user.points} XP</div>
                    </div>
                    <div className={`text-sm ${
                      user.change.startsWith('+') ? 'text-green-500' :
                      user.change.startsWith('-') ? 'text-red-500' :
                      'text-gray-500'
                    }`}>
                      {user.change}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Detailed Achievements Section */}
        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((category) => (
            <Card key={category.category} className="p-6 bg-white border-0 shadow-xl shadow-indigo-100">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">{category.category} Achievements</h3>
                <div className="grid gap-4">
                  {category.items.map((achievement) => (
                    <div 
                      key={achievement.id}
                      className={`p-4 rounded-lg border ${
                        achievement.earned 
                          ? 'bg-gradient-to-r from-violet-50 to-indigo-50 border-indigo-100' 
                          : 'bg-gray-50 border-gray-100'
                      } transition-all hover:shadow-md`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full ${
                          achievement.earned ? 'bg-gradient-to-r from-violet-500 to-indigo-500' : 'bg-gray-200'
                        } flex items-center justify-center`}>
                          <achievement.icon className={`w-6 h-6 ${achievement.earned ? 'text-white' : 'text-gray-500'}`} />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{achievement.name}</div>
                          <div className="text-sm text-gray-500">{achievement.description}</div>
                          <Progress 
                            value={achievement.progress} 
                            className="mt-2 bg-indigo-100" 
                          />
                        </div>
                        {achievement.earned && (
                          <Gift className="w-5 h-5 text-violet-500 animate-bounce" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
