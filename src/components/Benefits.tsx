import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Brain, Rocket, Code, Terminal, Sparkles } from "lucide-react";

const benefits = [
  {
    title: "Advanced Prompting Techniques",
    description: "Learn the difference between vibe coding (bad) and AI assisted coding (good). Master Chain-of-Thought, Tree-of-Thought, and reflection-based prompting",
    icon: <Brain className="h-6 w-6 text-primary" />,
  },
  {
    title: "Context Engineering",
    description: "Master techniques for steering coding agents and thinking models. Deep dive into Claude Code, Cursor coding agents, GPT-5.1, Gemini, Sonnet 4.5, and cutting-edge agentic AI development tools",
    icon: <Zap className="h-6 w-6 text-primary" />,
  },
  {
    title: "IDE Mastery",
    description: "Master advanced Cursor Rules and Claude.md files, plus AI assisted development in Claude Code/Cursor/JetBrains IDEs",
    icon: <Code className="h-6 w-6 text-primary" />,
  },
  {
    title: "Best Practices & Anti-patterns",
    description: "Understand context engineering, guardrails for coding agents, and how to avoid common AI development pitfalls",
    icon: <Terminal className="h-6 w-6 text-primary" />,
  },
  {
    title: "Custom Tools Development",
    description: "During workshop we will implement custom tools for AI assisted development",
    icon: <Sparkles className="h-6 w-6 text-primary" />,
  },
  {
    title: "Future-Ready Skills",
    description: "Stay up to date with emerging AI development patterns and evolving best practices for sustainable AI-enhanced workflows",
    icon: <Rocket className="h-6 w-6 text-primary" />,
  },
];

export const Benefits = () => {
  return (
    <div className="py-16 px-6 sm:px-8 lg:px-12 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-12">You will learn:</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="animate-fade-up [animation-delay:200ms] hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{benefit.icon}</div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
