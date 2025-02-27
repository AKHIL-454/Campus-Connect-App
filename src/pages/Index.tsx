
import Navigation from "@/components/Navigation";
import DiscussionForum from "@/components/DiscussionForum";
import FloatingChatbot from "@/components/FloatingChatbot";
import GamificationHub from "@/components/GamificationHub";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <GamificationHub />
      <DiscussionForum />
      <FloatingChatbot />
    </div>
  );
};

export default Index;
