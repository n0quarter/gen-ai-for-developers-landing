import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { CourseBlock } from "@/components/CourseBlock";
import { Button } from "@/components/ui/button";
import { Brain, Users, Code, Clock, RocketIcon, MailIcon, Linkedin } from "lucide-react";

const Index = () => {
  const block1Activities = [
    {
      title: "Modern AI Tools",
      description: "Overview of Copilot, Claude, ChatGPT, and specialized tools",
      duration: "30 minutes",
      icon: <Users className="h-6 w-6 text-primary" />,
    },
    {
      title: "AI Fundamentals",
      description: "Transformer architecture and effective prompting techniques",
      duration: "45 minutes",
      icon: <Brain className="h-6 w-6 text-primary" />,
    },
    {
      title: "Development Workshop",
      description: "Project creation and hands-on AI-assisted development",
      duration: "90 minutes",
      icon: <Code className="h-6 w-6 text-primary" />,
    },
    {
      title: "Conclusions",
      description: "Key learnings review, Q&A session",
      duration: "30 minutes",
      icon: <Clock className="h-6 w-6 text-primary" />,
    },
  ];

  const block2Activities = [
    {
      title: "Advanced Tools",
      description: "Deep dive into enterprise features and team collaboration",
      duration: "30 minutes",
      icon: <Users className="h-6 w-6 text-primary" />,
    },
    {
      title: "AI Integration",
      description: "Multi-step prompting and team workflow patterns",
      duration: "45 minutes",
      icon: <Brain className="h-6 w-6 text-primary" />,
    },
    {
      title: "Project Enhancement",
      description: "Custom tooling and AI-assisted codebase optimization",
      duration: "90 minutes",
      icon: <Code className="h-6 w-6 text-primary" />,
    },
    {
      title: "Workshop Takeaways & Integration",
      description: "Best practices and continued learning roadmap",
      duration: "30 minutes",
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 px-4">
            <CourseBlock
              title="Block 1: AI Tools and Application Development"
              focus="Master modern AI development tools and fundamental concepts through hands-on practice"
              activities={block1Activities}
            />
            <CourseBlock
              title="Block 2: Advanced Applications and Learning"
              focus="Implement sophisticated AI techniques and team collaboration patterns"
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
                src="/viktor.png"
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
                With over <strong>2,800 hours of AI-assisted development</strong>, Viktor combines deep technical expertise with real-world implementation experience. As an AI consultant and former startup CTO, he has architected and deployed AI solutions across various industries. His development workflow is enhanced by custom AI-powered developer tools he created, which streamline common tasks and optimize AI interactions. A regular speaker at Berlin's AI conferences and meetups, Viktor shares insights from his work in both enterprise AI integration and startup innovation.
                </p>
              </div>
              <div className="pt-6 animate-fade-up [animation-delay:600ms]">
                <Button size="lg" variant="secondary"
                onClick={() => window.open("https://www.linkedin.com/in/shcherbanviktor/", "_blank")}>
                  <Linkedin className="mr-2 h-5 w-5" />
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
