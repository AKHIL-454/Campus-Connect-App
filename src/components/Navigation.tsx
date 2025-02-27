
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Bell, 
  MessageSquare, 
  Calendar, 
  Users,
  Megaphone,
  Briefcase,
  MessagesSquare,
  GraduationCap,
  LogIn,
  Trophy
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut } = useClerk();

  const navItems = [
    { name: 'Discussions', icon: MessageSquare, href: '/' },
    { name: 'Announcements', icon: Megaphone, href: '/announcements' },
    { name: 'Schedule', icon: Calendar, href: '/schedule' },
    { name: 'Clubs', icon: Users, href: '/clubs' },
    { name: 'Career', icon: Briefcase, href: '/career' },
    { name: 'Alumni', icon: GraduationCap, href: '/alumni' },
    { name: 'Chat', icon: MessagesSquare, href: '/chat' },
    { name: 'Achievements', icon: Trophy, href: '/achievements' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold">UniConnect</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-2 text-sm font-medium transition-colors
                  ${isActive(item.href) 
                    ? 'text-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <SignedIn>
              <Button variant="ghost" size="icon">
                <Bell size={20} />
              </Button>
              <UserButton 
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-8 h-8",
                  }
                }}
                afterSignOutUrl="/"
              />
            </SignedIn>
            <SignedOut>
              <Button 
                variant="default" 
                className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90"
                onClick={() => navigate('/sign-in')}
              >
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </SignedOut>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium 
                  ${isActive(item.href)
                    ? 'text-foreground bg-accent'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  } transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </Link>
            ))}
            <SignedOut>
              <Button 
                variant="default" 
                className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90"
                onClick={() => navigate('/sign-in')}
              >
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </SignedOut>
            <SignedIn>
              <div className="pt-4 flex items-center justify-between px-3">
                <UserButton 
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-8 h-8",
                    }
                  }}
                  afterSignOutUrl="/"
                />
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
