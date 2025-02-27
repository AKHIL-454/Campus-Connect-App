import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Landing from "@/pages/Landing";
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
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import Profile from "@/pages/Profile";
import Achievements from "@/pages/Achievements";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/achievements" element={<Achievements />} />
        
        {/* Protected routes */}
        <Route
          path="/home"
          element={
            <>
              <SignedIn>
                <Index />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        
        <Route
          path="/career/*"
          element={
            <>
              <SignedIn>
                <Routes>
                  <Route path="/" element={<Career />} />
                  <Route path="job/:id" element={<JobDetails />} />
                  <Route path="hackathon/:id" element={<HackathonDetails />} />
                </Routes>
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        
        <Route
          path="/alumni/*"
          element={
            <>
              <SignedIn>
                <Routes>
                  <Route path="/" element={<Alumni />} />
                  <Route path="profile/:id" element={<AlumniProfile />} />
                  <Route path="talks" element={<AlumniTalks />} />
                  <Route path="talks/:id" element={<TalkDetails />} />
                  <Route path="mentor" element={<MentorConnect />} />
                </Routes>
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        <Route
          path="/schedule"
          element={
            <>
              <SignedIn>
                <Schedule />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        
        <Route
          path="/clubs/*"
          element={
            <>
              <SignedIn>
                <Routes>
                  <Route path="/" element={<Clubs />} />
                  <Route path=":clubName" element={<ClubDetails />} />
                </Routes>
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        <Route
          path="/chat/*"
          element={
            <>
              <SignedIn>
                <Routes>
                  <Route path="/" element={<Chat />} />
                  <Route path="room/:roomId" element={<ChatRoom />} />
                  <Route path="qa/:sessionId" element={<QASession />} />
                  <Route path="bot" element={<Chatbot />} />
                </Routes>
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
