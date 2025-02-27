
import { Card } from "@/components/ui/card";
import { Trophy, Star, Award, Medal, Crown, Target, Users, Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const GamificationHub = () => {
  const userStats = {
    level: 5,
    points: 850,
    nextLevel: 1000,
    rank: 23,
    streak: 7
  };

  const badges = [
    { id: 1, name: "Problem Solver", icon: Trophy, color: "text-amber-500", earned: true },
    { id: 2, name: "Quick Learner", icon: Flame, color: "text-blue-500", earned: true },
    { id: 3, name: "Top Contributor", icon: Crown, color: "text-violet-500", earned: false },
    { id: 4, name: "Event Master", icon: Star, color: "text-emerald-500", earned: true }
  ];

  const leaderboard = [
    { rank: 1, name: "Sarah Chen", points: 2450, badges: 8 },
    { rank: 2, name: "John Doe", points: 2100, badges: 6 },
    { rank: 3, name: "Maria Garcia", points: 1950, badges: 7 }
  ];

  return (
    <div className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Progress Card */}
      <Card className="p-6 bg-gradient-to-br from-indigo-50 via-white to-violet-50 border-indigo-100">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">Level {userStats.level}</h3>
              <p className="text-sm text-muted-foreground">Active Learner</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{userStats.points} XP</span>
              <span>{userStats.nextLevel} XP</span>
            </div>
            <Progress 
              value={(userStats.points / userStats.nextLevel) * 100} 
              className="bg-indigo-100"
            />
          </div>

          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>Rank #{userStats.rank}</span>
            </div>
            <div className="flex items-center gap-1">
              <Flame className="w-4 h-4 text-orange-500" />
              <span>{userStats.streak} day streak</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Badges Card */}
      <Card className="p-6 bg-gradient-to-br from-indigo-50 via-white to-violet-50 border-indigo-100">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Achievements</h3>
            <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">
              {badges.filter(b => b.earned).length}/{badges.length}
            </Badge>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {badges.map((badge) => (
              <div 
                key={badge.id}
                className={`p-3 rounded-lg border ${
                  badge.earned 
                    ? 'bg-white border-indigo-200' 
                    : 'bg-slate-50 border-slate-200 opacity-50'
                } transition-all hover:shadow-md`}
              >
                <div className="flex items-center gap-2">
                  <badge.icon className={`w-5 h-5 ${badge.color}`} />
                  <span className="text-sm font-medium">{badge.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Leaderboard Card */}
      <Card className="p-6 bg-gradient-to-br from-indigo-50 via-white to-violet-50 border-indigo-100">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Top Contributors</h3>
            <Users className="w-5 h-5 text-indigo-600" />
          </div>

          <div className="space-y-3">
            {leaderboard.map((user) => (
              <div 
                key={user.rank}
                className="flex items-center gap-3 p-3 bg-white rounded-lg border border-indigo-100 hover:shadow-md transition-all"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  user.rank === 1 ? 'bg-amber-100 text-amber-600' :
                  user.rank === 2 ? 'bg-slate-100 text-slate-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  {user.rank}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{user.name}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{user.points} XP</span>
                    <span>•</span>
                    <span>{user.badges} badges</span>
                  </div>
                </div>
                <Crown className={`w-5 h-5 ${
                  user.rank === 1 ? 'text-amber-500' :
                  user.rank === 2 ? 'text-slate-500' :
                  'text-orange-500'
                }`} />
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default GamificationHub;
