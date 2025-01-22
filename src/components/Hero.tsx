import { Button } from "@/components/ui/button";
import { RocketIcon, UserIcon } from "lucide-react";

const heroContent = {
  author: {
    name: "Viktor Shcherban",
    role: "Workshop by",
  },
  title: "Generative AI for Developers",
  description: "Increase your productivity by mastering modern AI tools like Cursor, GitHub Copilot, ChatGPT, Claude, and Gemini. Learn advanced prompting techniques, IDE integrations, and best practices for AI-powered development workflows.",
  cta: {
    text: "Join Workshop",
  },
  image: {
    src: "/start.jpeg",
    alt: "ai development",
  },
};

export const Hero = () => {
  return (
    <div className="relative bg-secondary py-20 px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <div className="flex items-center space-x-2 mb-6 justify-center lg:justify-start animate-fade-down">
              <UserIcon className="h-5 w-5 text-primary" />
              <p className="text-sm text-primary font-medium">{heroContent.author.role} {heroContent.author.name}</p>
            </div>
            <h1 className="animate-fade-down text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              {heroContent.title}
            </h1>
            <p className="animate-fade-up mt-6 text-lg text-gray-300">
              {heroContent.description}
            </p>
            <div className="mt-8 sm:mb-8 sm:flex sm:justify-center lg:justify-start">
              <Button size="lg" className="animate-fade-up [animation-delay:200ms] w-full sm:w-auto">
                <RocketIcon className="mr-2 h-5 w-5" />
                {heroContent.cta.text}
              </Button>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
            <img
              src={heroContent.image.src}
              alt={heroContent.image.alt}
              className="animate-fade-up [animation-delay:400ms] rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
