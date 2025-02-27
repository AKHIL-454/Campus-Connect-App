
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Send, 
  User, 
  GraduationCap, 
  MessageSquare, 
  ThumbsUp,
  HandRaised,
  Mic,
  Video,
  BrainCircuit,
  Languages,
  MessagesSquare,
  Volume2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const QASession = () => {
  const { sessionId } = useParams();
  const [question, setQuestion] = useState("");
  const [handRaised, setHandRaised] = useState(false);
  const [activeTab, setActiveTab] = useState("discussion");

  return (
    <div className="h-full flex flex-col">
      {/* Enhanced Header */}
      <div className="border-b pb-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold">Advanced Calculus Q&A</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
              <Badge className="bg-rose-100 text-rose-800">Live</Badge>
              <span>•</span>
              <span>45 Participants</span>
              <span>•</span>
              <span>3 Questions in Queue</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Volume2 className="w-4 h-4" />
              AI Summary
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Languages className="w-4 h-4" />
              Translate
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-medium text-foreground">Dr. Sarah Johnson</p>
            <p className="text-sm text-muted-foreground">Mathematics Department • Live until 3:00 PM</p>
          </div>
        </div>
      </div>

      {/* Session Controls */}
      <div className="flex items-center justify-between mb-4 p-3 bg-gradient-to-r from-violet-50 to-indigo-50 rounded-lg border border-indigo-100">
        <div className="flex gap-2">
          <Button 
            variant={handRaised ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setHandRaised(!handRaised)}
            className="gap-2"
          >
            <HandRaised className="w-4 h-4" />
            {handRaised ? 'Hand Raised' : 'Raise Hand'}
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Mic className="w-4 h-4" />
            Voice
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Video className="w-4 h-4" />
            Video
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="gap-2">
            <MessagesSquare className="w-4 h-4" />
            Whisper Chat
          </Button>
        </div>
      </div>

      {/* Tabs for Different Views */}
      <Tabs defaultValue="discussion" className="flex-1">
        <TabsList className="w-full mb-4">
          <TabsTrigger value="discussion" onClick={() => setActiveTab("discussion")}>Discussion</TabsTrigger>
          <TabsTrigger value="queue" onClick={() => setActiveTab("queue")}>Question Queue (3)</TabsTrigger>
          <TabsTrigger value="summary" onClick={() => setActiveTab("summary")}>AI Summary</TabsTrigger>
        </TabsList>

        <TabsContent value="discussion" className="flex-1 overflow-auto space-y-6">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <User className="w-4 h-4 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-medium">Student Name</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        Can you explain the practical applications of differential equations in real-world scenarios?
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pl-11">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 bg-gradient-to-r from-violet-50 to-indigo-50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">Dr. Sarah Johnson</span>
                    <span className="text-xs text-muted-foreground">2:35 PM</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Differential equations are extensively used in various fields. In physics, they model motion and forces. In biology, they describe population growth. In engineering, they're used for designing electrical circuits and mechanical systems...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="queue">
          <div className="space-y-4">
            {[1, 2, 3].map((num) => (
              <Card key={num} className="p-4 border-indigo-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center">
                    <span className="font-medium text-violet-600">#{num}</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Student Name</div>
                    <div className="text-sm text-muted-foreground">Waiting to ask about integration techniques</div>
                  </div>
                  <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                    In Queue
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="summary">
          <Card className="p-4 border-indigo-100 bg-gradient-to-r from-violet-50 to-indigo-50">
            <div className="flex items-center gap-2 mb-4">
              <BrainCircuit className="w-5 h-5 text-violet-600" />
              <h3 className="font-semibold">AI-Generated Summary</h3>
            </div>
            <div className="space-y-4 text-sm">
              <p>Key Topics Discussed:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Introduction to differential equations and their real-world applications</li>
                <li>Practical examples in physics, biology, and engineering</li>
                <li>Problem-solving techniques for complex equations</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Summary is updated in real-time as the session progresses...
              </p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Enhanced Input Area */}
      <div className="flex gap-2 pt-4 border-t mt-auto">
        <Input 
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask your question..." 
          className="flex-1 border-indigo-200 focus:border-indigo-300"
        />
        <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90">
          <MessageSquare className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default QASession;
