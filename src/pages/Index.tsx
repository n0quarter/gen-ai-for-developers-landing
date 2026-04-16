import { ContactForm } from "@/components/ContactForm";
import { CourseBlock } from "@/components/CourseBlock";
import { Header } from "@/components/Header";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Brain, Code, Linkedin, Users } from "lucide-react";
import { useRef } from "react";

const Index = () => {
  const contactFormRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const block1Activities = [
    {
      title: "Introduction and Fundamentals",
      duration: "60 minutes",
      icon: <Brain className="h-6 w-6 text-primary" />,
      topics: [
        "Quick Survey, aligning expectations and gen AI fundamentals",
        "Coding tools landscape: CLI coding agents vs AI IDEs",
        "Core concepts of agentic coding",
      ],
      handsOn: "Interactive AI interviews (project specification, reducing ambiguity)",
    },
    {
      title: "Agentic Coding Core Concepts",
      duration: "60 minutes",
      icon: <Code className="h-6 w-6 text-primary" />,
      topics: [
        "Advanced prompting techniques",
        "Project memory/rules (AGENTS.md/CLAUDE.md, Cursor Rules)",
        "Planning-first workflows (repo exploration, task breakdown, acceptance criteria)",
      ],
      handsOn: "PoC with Claude Code/Codex/Cursor",
    },
    {
      title: "Coding Agents for Enterprise Codebases",
      duration: "60 minutes",
      icon: <Users className="h-6 w-6 text-primary" />,
      topics: [
        "Scalable agent instruction hierarchy",
        "Practical patterns and common pitfalls",
        "Wrap-up discussion and Q&A",
      ],
      handsOn: "Building an app with coding agents",
    },
  ];

  const block2Activities = [
    {
      title: "Recap and Coding",
      duration: "60 minutes",
      icon: <Brain className="h-6 w-6 text-primary" />,
      topics: [
        "Block 1 recap and key agentic coding principles",
        "Advanced Claude Code workflows (skills, memory, session management)",
        "Subagents and focused task delegation (research, debugging, review)",
      ],
      handsOn: "Using Claude Code with skills and sub-agents",
    },
    {
      title: "Part 2: Advanced AI-augmented Development",
      duration: "60 minutes",
      icon: <Code className="h-6 w-6 text-primary" />,
      topics: [
        "Spec-driven development with coding agents",
        "Reusable workflows (skills, commands, prompts, team conventions)",
        "Hooks, tools, and MCP-style integrations",
      ],
      handsOn: "Designing supervised multi-agent workflows and building custom tools for AI development",
    },
    {
      title: "Practice and Patterns",
      duration: "60 minutes",
      icon: <Users className="h-6 w-6 text-primary" />,
      topics: [
        "AI Code Reviews and Debugging",
        "Patterns and anti-patterns in agentic coding",
        "Enterprise team workflows",
      ],
      handsOn: "TDD practice with coding agents",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header onContactClick={scrollToContact} />
      {/* <Benefits /> */}
      <div className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">Workshop Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 px-4">
            <CourseBlock
              title="Block 1: AI Tools, Coding Agents, and Agentic Coding Foundations"
              focus="3 hours"
              activities={block1Activities}
            />
            <CourseBlock
              title="Block 2: Advanced Agentic Development and Team Workflows"
              focus="3 hours"
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
                    <p className="text-gray-300 mt-1">Book Block 1 to master strong fundamentals of AI-assisted development and coding agents</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">Advanced Skills</span>
                    <p className="text-gray-300 mt-1">Book Block 2 to master advanced and scalable Claude Code workflows, skills, and sub-agents for enterprise codebases</p>
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
                Viktor Shcherban is an AI engineer and former startup CTO specializing in agentic AI systems and developer workflows. Working with coding agents and reasoning models since 2021, he has extensive hands-on experience with Claude Code, Codex, OpenAI, Gemini, and modern AI development stacks from early preview stages.
                With over <span className="text-primary font-semibold">4,500 hours of AI-assisted development</span>, he focuses on building production-grade systems using RAG pipelines, multi-modal agents (text and voice), MCP-based integrations, and evaluation-driven workflows.
                </p>
                <p className="text-lg text-gray-600 animate-fade-up [animation-delay:400ms] leading-relaxed">
                As a consultant, Viktor helps teams design fast yet robust MVPs and scale AI solutions in real-world environments, with a strong focus on coding agents in enterprise codebases. He teaches directly from daily hands-on experience building and using these systems, not theory — sharing practical workflows, reusable agent patterns, Claude Code skills, and custom AI developer tooling that improve reliability and speed. A regular speaker at Berlin AI meetups and conferences, he shares applied insights from building and deploying agentic systems in both startups and enterprise contexts.
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
