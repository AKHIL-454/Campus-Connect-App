
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, User, GraduationCap, MessageSquare, ThumbsUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const QASession = () => {
  const { sessionId } = useParams();
  const [question, setQuestion] = useState("");

  return (
    <div className="h-full flex flex-col">
      <div className="border-b pb-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Advanced Calculus Q&A</h2>
          <Badge className="bg-rose-100 text-rose-800">Live</Badge>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="font-medium text-foreground">Dr. Sarah Johnson</p>
            <p>Mathematics Department • Live until 3:00 PM</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto mb-4 space-y-6">
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
              <div className="flex-1 bg-muted/30 p-3 rounded-lg">
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
      </div>

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
