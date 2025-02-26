
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Career from "@/pages/Career";
import JobDetails from "@/pages/JobDetails";
import HackathonDetails from "@/pages/HackathonDetails";
import Alumni from "@/pages/Alumni";
import AlumniProfile from "@/pages/AlumniProfile";
import AlumniTalks from "@/pages/AlumniTalks";
import TalkDetails from "@/pages/TalkDetails";
import MentorConnect from "@/pages/MentorConnect";
import Schedule from "@/pages/Schedule";
import Clubs from "@/pages/Clubs";
import Chat from "@/pages/Chat";
import ChatRoom from "@/pages/ChatRoom";
import QASession from "@/pages/QASession";
import Chatbot from "@/pages/Chatbot";
import Announcements from "@/pages/Announcements";
import ClubDetails from "@/pages/ClubDetails";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/career" element={<Career />} />
        <Route path="/career/job/:id" element={<JobDetails />} />
        <Route path="/career/hackathon/:id" element={<HackathonDetails />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/alumni/profile/:id" element={<AlumniProfile />} />
        <Route path="/alumni/talks" element={<AlumniTalks />} />
        <Route path="/alumni/talks/:id" element={<TalkDetails />} />
        <Route path="/alumni/mentor" element={<MentorConnect />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/club/:clubName" element={<ClubDetails />} />
        <Route path="/chat" element={<Chat />}>
          <Route path="room/:roomId" element={<ChatRoom />} />
          <Route path="qa/:sessionId" element={<QASession />} />
          <Route path="bot" element={<Chatbot />} />
        </Route>
        <Route path="/announcements" element={<Announcements />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
