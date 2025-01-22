import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Tool, Brain, Rocket } from "lucide-react";

const benefits = [
  {
    title: "Accelerated Development",
    description: "Learn to use AI tools to write code faster and more efficiently",
    icon: <Zap className="h-6 w-6 text-primary" />,
  },
  {
    title: "Real-world Applications",
    description: "Practice with actual development scenarios and challenges",
    icon: <Tool className="h-6 w-6 text-primary" />,
  },
  {
    title: "AI-Powered Problem Solving",
    description: "Master AI-assisted debugging and testing techniques",
    icon: <Brain className="h-6 w-6 text-primary" />,
  },
  {
    title: "Future-Ready Skills",
    description: "Stay ahead with cutting-edge AI development practices",
    icon: <Rocket className="h-6 w-6 text-primary" />,
  },
];

export const Benefits = () => {
  return (
    <div className="py-16 px-6 sm:px-8 lg:px-12 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-12">Workshop Benefits</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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