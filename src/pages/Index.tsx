import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { CourseBlock } from "@/components/CourseBlock";
import { Brain, Users, Code, Clock } from "lucide-react";

const Index = () => {
  const block1Activities = [
    {
      title: "Connection",
      description: "Interactive Miro brainstorming and group discussions",
      duration: "30 minutes",
      icon: <Users className="h-6 w-6 text-primary" />,
    },
    {
      title: "Concepts",
      description: "Interactive presentation on AI in development",
      duration: "45 minutes",
      icon: <Brain className="h-6 w-6 text-primary" />,
    },
    {
      title: "Concrete Practices",
      description: "Hands-on tool walkthrough and pair programming",
      duration: "90 minutes",
      icon: <Code className="h-6 w-6 text-primary" />,
    },
  ];

  const block2Activities = [
    {
      title: "Connection",
      description: "Think-Pair-Share and interactive quiz",
      duration: "20 minutes",
      icon: <Users className="h-6 w-6 text-primary" />,
    },
    {
      title: "Real-World Application",
      description: "Case study analysis and group discussions",
      duration: "40 minutes",
      icon: <Brain className="h-6 w-6 text-primary" />,
    },
    {
      title: "Practical Challenges",
      description: "Debugging and test writing with AI tools",
      duration: "120 minutes",
      icon: <Clock className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Benefits />
      <div className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">Workshop Structure</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <CourseBlock
              title="Block 1: Understanding AI in Software Development"
              focus="Foundations, Tools Familiarization, and AI-Developer Collaboration"
              activities={block1Activities}
            />
            <CourseBlock
              title="Block 2: AI-Powered Development in Practice"
              focus="Applying Skills in Debugging, Testing, and Real-World Scenarios"
              activities={block2Activities}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;