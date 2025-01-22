import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { CourseBlock } from "@/components/CourseBlock";
import { ContactForm } from "@/components/ContactForm";
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
      title: "Modern AI Tools",
      description: "Overview of Copilot, Claude, ChatGPT, and specialized tools",
      duration: "45 minutes",
      icon: <Users className="h-6 w-6 text-primary" />,
    },
    {
      title: "AI Fundamentals",
      description: "Transformer architecture and effective prompting techniques",
      duration: "60 minutes",
      icon: <Brain className="h-6 w-6 text-primary" />,
    },
    {
      title: "Development Workshop",
      description: "Project creation and hands-on AI-assisted development",
      duration: "105 minutes",
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
      duration: "45 minutes",
      icon: <Users className="h-6 w-6 text-primary" />,
    },
    {
      title: "AI Integration",
      description: "Multi-step prompting and team workflow patterns",
      duration: "60 minutes",
      icon: <Brain className="h-6 w-6 text-primary" />,
    },
    {
      title: "Project Enhancement",
      description: "Custom tooling and AI-assisted codebase optimization",
      duration: "105 minutes",
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
      <Hero onContactClick={scrollToContact} />
      <Benefits />
      <div className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">Workshop Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 px-4">
            <CourseBlock
              title="Block 1: AI Tools and Application Development"
              focus="Master modern AI development tools and fundamental concepts through hands-on practice - 4 hours"
              activities={block1Activities}
            />
            <CourseBlock
              title="Block 2: Advanced Applications and Learning"
              focus="Implement sophisticated AI techniques and team collaboration patterns - 4 hours"
              activities={block2Activities}
            />
          </div>
        </div>
      </div>

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
                    <p className="text-gray-300 mt-1">Book Block 1 to master the fundamentals of AI-assisted development</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">Advanced Skills</span>
                    <p className="text-gray-300 mt-1">Book Block 2 to elevate your existing AI development practices</p>
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
                  Viktor Shcherban is an experienced AI developer and enthusiast who has been at the forefront of AI-powered development since 2021. As an early adopter of AI development tools, he has extensive experience with GitHub Copilot, ChatGPT, Claude, and other AI assistants since their technical preview phases.
                </p>
                <p className="text-lg text-gray-600 animate-fade-up [animation-delay:400ms] leading-relaxed">
                  With over <span className="text-primary font-semibold">2,800 hours of AI-assisted development</span>, Viktor combines deep technical expertise with real-world implementation experience. As an AI consultant and former startup CTO, he has architected and deployed AI solutions across various industries. His development workflow is enhanced by custom AI-powered developer tools he created, which streamline common tasks and optimize AI interactions. A regular speaker at Berlin's AI conferences and meetups, Viktor shares insights from his work in both enterprise AI integration and startup innovation.
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
