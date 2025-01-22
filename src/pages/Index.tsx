import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { CourseBlock } from "@/components/CourseBlock";
import { Button } from "@/components/ui/button";
import { Brain, Users, Code, Clock, RocketIcon, MailIcon } from "lucide-react";

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

      {/* CTA Section */}
      <div className="bg-secondary py-16 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6 animate-fade-up">Ready to Transform Your Development Workflow?</h2>
          <p className="text-lg text-gray-300 mb-8 animate-fade-up [animation-delay:200ms] max-w-2xl mx-auto">
            Join the workshop to master AI-powered development tools and techniques that will revolutionize your coding experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up [animation-delay:400ms]">
            <Button size="lg" className="w-full sm:w-auto">
              <RocketIcon className="mr-2 h-5 w-5" />
              Register Now
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-white hover:bg-white/10">
              <MailIcon className="mr-2 h-5 w-5" />
              Contact for Team Pricing
            </Button>
          </div>
        </div>
      </div>

      {/* About Author Section */}
      <div className="py-16 px-6 sm:px-8 lg:px-12 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                alt="Viktor Shcherban"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold animate-fade-up">About the Author</h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 animate-fade-up [animation-delay:200ms]">
                  Viktor Shcherban is an experienced AI developer and enthusiast who has been at the forefront of AI-powered development since 2021. As an early adopter of AI development tools, he has extensive experience with GitHub Copilot, ChatGPT, Claude, and other AI assistants since their technical preview phases.
                </p>
                <p className="text-lg text-gray-600 animate-fade-up [animation-delay:400ms]">
                  His unique perspective combines deep technical knowledge with practical experience in implementing AI tools in real-world development workflows. Viktor's workshops are known for their hands-on approach and focus on practical applications of AI in software development.
                </p>
              </div>
              <div className="pt-6 animate-fade-up [animation-delay:600ms]">
                <Button size="lg" variant="secondary">
                  Learn More About Viktor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;