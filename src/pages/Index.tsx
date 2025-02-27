
import Navigation from "@/components/Navigation";
import DiscussionForum from "@/components/DiscussionForum";
import FloatingChatbot from "@/components/FloatingChatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <DiscussionForum />
      <FloatingChatbot />
    </div>
  );
};

export default Index;
