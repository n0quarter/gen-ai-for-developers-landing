import { Header } from "@/components/Header";
import { Benefits } from "@/components/Benefits";
import { CourseBlock } from "@/components/CourseBlock";
import { ContactForm } from "@/components/ContactForm";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Brain, Users, Code, Clock, Linkedin } from "lucide-react";
import { useRef } from "react";

const Index = () => {
  const contactFormRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const block1Activities = [
    {
      title: "Part 1: Introduction and Fundamentals",
      description: "AI landscape, coding agents, core concepts, and interactive AI interviews",
      duration: "80 minutes",
      icon: <Brain className="h-6 w-6 text-primary" />,
    },
    {
      title: "Part 2: Core Concepts - hands on",
      description: "Using advanced prompting techniques, Cursor Rules configuration and AI assisted project planning",
      duration: "80 minutes",
      icon: <Code className="h-6 w-6 text-primary" />,
    },
    {
      title: "Part 3: Practice and Wrap-up",
      description: "AI assisted development workflows and building apps with coding agents and agentic AI techniques",
      duration: "60 minutes",
      icon: <Users className="h-6 w-6 text-primary" />,
    },
  ];

  const block2Activities = [
    {
      title: "Part 1: Recap and Coding",
      description: "Block 1 recap and advanced Cursor Rules/Claude Code skills and sub-agents exploration",
      duration: "80 minutes",
      icon: <Brain className="h-6 w-6 text-primary" />,
    },
    {
      title: "Part 2: Advanced AI-augmented Development",
      description: "Building enterprise-grade apps with Cursor and Claude Code coding agents, and designing Claude Code skills/commands and sub-agents",
      duration: "80 minutes",
      icon: <Code className="h-6 w-6 text-primary" />,
    },
    {
      title: "Part 3: Practice and patterns",
      description: "TDD practice, project iteration, patterns and anti-patterns discussion",
      duration: "60 minutes",
      icon: <Users className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header onContactClick={scrollToContact} />
      <Benefits />
      <div className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">Workshop Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 px-4">
            <CourseBlock
              title="Block 1: AI Tools, Coding Agents, and AI Assisted Coding"
              focus="4 hours"
              activities={block1Activities}
            />
            <CourseBlock
              title="Block 2: Advanced Agentic Development and Team Workflows"
              focus="4 hours"
              activities={block2Activities}
            />
          </div>
        </div>
      </div>

      <Testimonials />

      {/* CTA Section */}
      <div className="bg-secondary py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-secondary/50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white text-center mb-10 animate-fade-up">
                Choose Your Learning Path
              </h2>

              <div className="space-y-6 mb-12 animate-fade-up [animation-delay:200ms]">
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">Start Your AI Journey</span>
                    <p className="text-gray-300 mt-1">Book Block 1 to master the fundamentals of AI assisted development, coding agents, and agentic AI coding</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">Advanced Skills</span>
                    <p className="text-gray-300 mt-1">Book Block 2 to master advanced Cursor Rules and Claude Code skills and sub-agents for enterprise codebases</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">Complete Journey</span>
                    <p className="text-gray-300 mt-1">Book both blocks for comprehensive training from basics to advanced practices</p>
                  </div>
                </div>
              </div>

            </div>

            <div ref={contactFormRef} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white text-center mb-8 animate-fade-up">
                Get in Touch
              </h2>
              <div className="animate-fade-up [animation-delay:200ms]">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Author Section */}
      <div className="py-24 px-6 sm:px-8 lg:px-12 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 animate-fade-up">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-lg" />
                <img
                  src="/viktor.png"
                  alt="Viktor Shcherban"
                  className="relative rounded-lg shadow-xl w-full max-w-md mx-auto"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-4xl font-bold animate-fade-up">About the Author</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 animate-fade-up [animation-delay:200ms] leading-relaxed">
                  Viktor Shcherban is an experienced AI developer and enthusiast at the forefront of agentic AI development since 2021. As an early adopter of coding agents and thinking models, he has extensive hands-on experience with Claude Code, Cursor, ChatGPT, Gemini, and Sonnet 4.5 since their early preview phases.
                </p>
                <p className="text-lg text-gray-600 animate-fade-up [animation-delay:400ms] leading-relaxed">
                  With over <span className="text-primary font-semibold">3,500 hours of AI assisted development</span>, Viktor combines deep technical expertise with real-world implementation experience. As an AI consultant and former startup CTO, he has architected and deployed AI solutions across various industries, with a strong focus on coding agents in enterprise codebases. His workflow is enhanced by custom AI-powered developer tools and agentic patterns he created, including Cursor Rules and Claude.md files that streamline common tasks and optimize AI interactions. A regular speaker at Berlin's AI conferences and meetups, Viktor shares insights from his work in both enterprise AI integration and startup innovation.
                </p>
              </div>
              <div className="pt-4 animate-fade-up [animation-delay:600ms]">
                <Button size="lg" variant="secondary" className="px-8"
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
