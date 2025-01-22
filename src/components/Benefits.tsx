import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Brain, Rocket, Code, Terminal, Sparkles } from "lucide-react";

const benefits = [
  {
    title: "Modern AI Development Stack",
    description: "Deep dive into GitHub Copilot, ChatGPT-4, Claude, Gemini, and more cutting-edge AI development tools",
    icon: <Zap className="h-6 w-6 text-primary" />,
  },
  {
    title: "Advanced Prompting Techniques",
    description: "Master Chain-of-Thought, Tree-of-Thought, and reflection-based prompting strategies",
    icon: <Brain className="h-6 w-6 text-primary" />,
  },
  {
    title: "IDE Mastery",
    description: "Learn to leverage AI in Cursor, VSCode, JetBrains Suite with custom tools and integrations",
    icon: <Code className="h-6 w-6 text-primary" />,
  },
  {
    title: "Best Practices & Anti-patterns",
    description: "Understand context optimization, fine-tuning, and how to avoid common AI development pitfalls",
    icon: <Terminal className="h-6 w-6 text-primary" />,
  },
  {
    title: "Custom Tools Development",
    description: "Create and implement your own AI-powered development tools and workflows",
    icon: <Sparkles className="h-6 w-6 text-primary" />,
  },
  {
    title: "Future-Ready Skills",
    description: "Techniques for AI-assisted technology learning and maintaining best practices in your development workflow",
    icon: <Rocket className="h-6 w-6 text-primary" />,
  },
];

export const Benefits = () => {
  return (
    <div className="py-16 px-6 sm:px-8 lg:px-12 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-12">You will learn</h2>
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
