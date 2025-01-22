import { Button } from "@/components/ui/button";
import { RocketIcon, UserIcon } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative bg-secondary py-20 px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <div className="flex items-center space-x-2 mb-6 justify-center lg:justify-start animate-fade-down">
              <UserIcon className="h-5 w-5 text-primary" />
              <p className="text-sm text-primary font-medium">Workshop by Viktor Shcherban</p>
            </div>
            <h1 className="animate-fade-down text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Generative AI for Developers
            </h1>
            <p className="animate-fade-up mt-4 text-sm text-gray-400 italic">
              "As an AI developer and enthusiast since mid-2021, I've been at the forefront of AI-powered development, working with tools like GitHub Copilot and various AI assistants since their technical preview phases."
            </p>
            <p className="animate-fade-up mt-6 text-lg text-gray-300">
              Master cutting-edge AI tools like GitHub Copilot, ChatGPT, Claude, and Gemini. Learn advanced prompting techniques, IDE integrations, and best practices for AI-powered development workflows.
            </p>
            <div className="mt-8 sm:mb-8 sm:flex sm:justify-center lg:justify-start">
              <Button size="lg" className="animate-fade-up [animation-delay:200ms] w-full sm:w-auto">
                <RocketIcon className="mr-2 h-5 w-5" />
                Join Workshop
              </Button>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
              alt="AI Development Workshop"
              className="animate-fade-up [animation-delay:400ms] rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};