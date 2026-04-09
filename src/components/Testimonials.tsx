import { Linkedin } from "lucide-react";

interface TestimonialProps {
  imageSrc: string;
  name: string;
  linkedin: string;
  role: string;
  company: string;
  quote: string;
}

const Testimonial = ({ imageSrc, name, linkedin, role, company, quote }: TestimonialProps) => (
  <div className="rounded-xl border border-gray-200 p-6">
    <blockquote className="text-gray-600 text-sm leading-relaxed mb-4">
      "{quote}"
    </blockquote>
    <div className="flex items-center gap-3">
      <img
        src={imageSrc}
        alt={name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-medium text-sm transition-colors hover:text-primary"
          aria-label={`${name} on LinkedIn`}
        >
          {name}
          <Linkedin className="h-3.5 w-3.5 text-primary/70" />
        </a>
        <p className="text-xs text-gray-500">
          {role}, {company}
        </p>
      </div>
    </div>
  </div>
);

export const Testimonials = () => {
  return (
    <div className="py-6 px-6 sm:px-8 lg:px-12 bg-white mb-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-up">
          What People Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <Testimonial
            imageSrc="/luca.jpeg"
            name="Luca Criscuolo"
            linkedin="https://www.linkedin.com/in/lucacriscuolo/"
            role="CPO"
            company="Bettermile"
            quote="Viktor ran an AI workshop for technical and non-technical people at Bettermile, guiding our large and diverse group through building their first prototypes with Claude. He stayed calm and adaptable when things didn't go as planned, maintained positive energy, and received very good participant feedback. Deep expertise and a great person, Viktor is a highly recommended coach."
          />
          <Testimonial
            imageSrc="/jens.png"
            name="Jens Naie"
            linkedin="https://www.linkedin.com/in/jens-naie/"
            role="CTO"
            company="Doodle AG"
            quote="Viktor's generative AI workshop was a resounding success! He skillfully brought our team, with varying levels of experience, to a shared understanding, addressing common AI anxieties with clarity and practical advice. The insights he provided on effective AI usage, and its limitations, were invaluable. The hands-on coding exercises with Cursor, coupled with his demonstration of TDD automated with AI, were incredibly impactful. He empowered us to see AI not as a threat, but as a powerful tool to enhance our development workflow. We left feeling inspired and equipped to integrate generative AI into our projects. Highly recommended!"
          />
          <Testimonial
            imageSrc="/tim.png"
            name="Tim Yevgrashyn"
            linkedin="https://www.linkedin.com/in/yevgrashyn/"
            role="CTO"
            company="Stepico"
            quote="The practical focus of this workshop was a game-changer for our development team. Instead of just discussing AI tools, our engineers actually learned how to implement them effectively in their day-to-day coding. The hands-on exercises and real-world applications delivered solid value that we're already seeing in our productivity metrics."
          />
          <Testimonial
            imageSrc="/julio.jpeg"
            name="Julio"
            linkedin="https://www.linkedin.com/in/jcfausto/"
            role="Head of Engineering"
            company="Empion"
            quote="The workshop was very insightful and gave us valuable hands-on experience. While the first day covered some familiar ground, we found the deep dive into Cursor, prompt techniques, and best practices especially useful. Day two was the highlight, with hands-on exercises that helped us explore Cursor in depth and apply what we've learned while building an app. Overall, it was an engaging and valuable experience. I'd recommend it if you're willing to know more about AI and how to use it more efficiently in our teams or daily workflows."
          />
        </div>
      </div>
    </div>
  );
};
