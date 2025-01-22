import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative bg-secondary py-20 px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <h1 className="animate-fade-down text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Generative AI for Developers
            </h1>
            <p className="animate-fade-up mt-6 text-lg text-gray-300">
              Master the art of AI-powered development. Learn to leverage tools like GitHub Copilot and ChatGPT to supercharge your coding workflow.
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
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="AI Development Workshop"
              className="animate-fade-up [animation-delay:400ms] rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};