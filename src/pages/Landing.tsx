import { useNavigate } from "react-router-dom";
import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  MessagesSquare, 
  Bell, 
  Calendar, 
  Users, 
  Bot, 
  Briefcase, 
  GraduationCap, 
  Shield,
  ArrowRight,
  Star,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: MessagesSquare,
    title: "Structured Discussion Forum",
    description: "Engage in organized discussions with intelligent threading and reputation system",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: Bell,
    title: "Real-Time Notifications",
    description: "Stay updated with personalized alerts and announcements",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    icon: Calendar,
    title: "Smart Timetables",
    description: "Automated scheduling with smart reminders for classes and exams",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Users,
    title: "Student Clubs Hub",
    description: "Join and manage student organizations with ease",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: Bot,
    title: "AI Assistant & Live Q&A",
    description: "Get instant help and join live sessions with faculty",
    gradient: "from-violet-500 to-fuchsia-500"
  },
  {
    icon: Briefcase,
    title: "Career Portal",
    description: "Access job postings, hackathons, and research opportunities",
    gradient: "from-orange-500 to-pink-500"
  },
  {
    icon: GraduationCap,
    title: "Alumni Network",
    description: "Connect with alumni for mentorship and networking",
    gradient: "from-blue-500 to-violet-500"
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Role-based access control with verified authentication",
    gradient: "from-slate-500 to-gray-500"
  }
];

const stats = [
  { number: "10K+", label: "Active Users" },
  { number: "50+", label: "Partner Universities" },
  { number: "1000+", label: "Daily Discussions" },
  { number: "200+", label: "Career Opportunities" }
];

const testimonials = [
  {
    quote: "This platform has revolutionized how we collaborate and learn together.",
    author: "Sarah Chen",
    role: "Computer Science Student",
    avatar: "SC"
  },
  {
    quote: "The AI assistant and live Q&A features have greatly enhanced student engagement.",
    author: "Dr. James Wilson",
    role: "Professor of Mathematics",
    avatar: "JW"
  },
  {
    quote: "As an alumnus, I've found incredible value in mentoring current students.",
    author: "Michael Rodriguez",
    role: "Software Engineer at Google",
    avatar: "MR"
  }
];

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden px-6 lg:px-8 pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px)] bg-[size:5rem_1px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:1px_5rem]" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <Badge 
            variant="secondary" 
            className="mb-8 animate-fade-in bg-white/50 backdrop-blur-sm border-violet-200 text-violet-800"
          >
            Welcome to the Future of University Collaboration
          </Badge>
          <h1 className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight font-bold animate-fade-in">
            Transform Your University Experience with Smart Collaboration
          </h1>
          <p className="mt-6 text-lg text-slate-600 animate-fade-in delay-100">
            Join thousands of students, faculty, and alumni in a unified platform for discussions,
            career growth, and meaningful connections.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-200">
            <SignInButton mode="modal" afterSignInUrl="/home">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </SignInButton>
            <SignInButton mode="modal" afterSignInUrl="/chat/bot">
              <Button 
                variant="outline" 
                size="lg"
                className="border-indigo-200 hover:border-indigo-400"
              >
                Try AI Assistant
                <Bot className="ml-2 h-4 w-4" />
              </Button>
            </SignInButton>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-20 px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Everything You Need to Succeed
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Powerful features designed to enhance your university journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-white shadow-sm border border-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-200"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="mt-2 text-sm text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Loved by Students and Faculty
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
              See what our community has to say
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-lg font-medium">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-indigo-200">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-indigo-100">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
            Ready to Transform Your University Experience?
          </h2>
          <SignUpButton mode="modal" afterSignUpUrl="/home">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90"
            >
              Join Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </SignUpButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="text-slate-500 hover:text-slate-700">Features</a></li>
                <li><a href="#pricing" className="text-slate-500 hover:text-slate-700">Pricing</a></li>
                <li><a href="#about" className="text-slate-500 hover:text-slate-700">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#help" className="text-slate-500 hover:text-slate-700">Help Center</a></li>
                <li><a href="#contact" className="text-slate-500 hover:text-slate-700">Contact</a></li>
                <li><a href="#status" className="text-slate-500 hover:text-slate-700">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#privacy" className="text-slate-500 hover:text-slate-700">Privacy</a></li>
                <li><a href="#terms" className="text-slate-500 hover:text-slate-700">Terms</a></li>
                <li><a href="#security" className="text-slate-500 hover:text-slate-700">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Social</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#twitter" className="text-slate-500 hover:text-slate-700">Twitter</a></li>
                <li><a href="#linkedin" className="text-slate-500 hover:text-slate-700">LinkedIn</a></li>
                <li><a href="#github" className="text-slate-500 hover:text-slate-700">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
            © 2024 University Discussion Platform. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
