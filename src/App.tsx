
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Career from "@/pages/Career";
import Schedule from "@/pages/Schedule";
import ScheduleDetails from "@/pages/ScheduleDetails";
import Clubs from "@/pages/Clubs";
import Chat from "@/pages/Chat";
import Announcements from "@/pages/Announcements";
import AnnouncementDetails from "@/pages/AnnouncementDetails";
import ClubDetails from "@/pages/ClubDetails";
import DiscussionForum from "@/pages/DiscussionForum";
import DiscussionDetails from "@/pages/DiscussionDetails";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/career" element={<Career />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/schedule/:id" element={<ScheduleDetails />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/club/:clubName" element={<ClubDetails />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/announcements/:id" element={<AnnouncementDetails />} />
        <Route path="/discussions" element={<DiscussionForum />} />
        <Route path="/discussions/:id" element={<DiscussionDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
