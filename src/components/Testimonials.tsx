interface TestimonialProps {
  imageSrc: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}

const Testimonial = ({ imageSrc, name, role, company, quote }: TestimonialProps) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg">
    <div className="flex items-center gap-4 mb-6">
      <img
        src={imageSrc}
        alt={name}
        className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
      />
      <div>
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="text-gray-600">
          {role}, {company}
        </p>
      </div>
    </div>
    <blockquote className="text-gray-700 leading-relaxed">
      {quote}
    </blockquote>
  </div>
);

export const Testimonials = () => {
  return (
    <div className="py-6 px-6 sm:px-8 lg:px-12 bg-white mb-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-up">
          What People Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Testimonial
            imageSrc="/jens.png"
            name="Jens Naie"
            role="CTO"
            company="Doodle AG"
            quote="Viktor's generative AI workshop was a resounding success! He skillfully brought our team, with varying levels of experience, to a shared understanding, addressing common AI anxieties with clarity and practical advice. The insights he provided on effective AI usage, and its limitations, were invaluable. The hands-on coding exercises with Cursor, coupled with his demonstration of TDD automated with AI, were incredibly impactful. He empowered us to see AI not as a threat, but as a powerful tool to enhance our development workflow. We left feeling inspired and equipped to integrate generative AI into our projects. Highly recommended!"
          />
          <Testimonial
            imageSrc="/tim.png"
            name="Tim Yevgrashyn"
            role="CTO"
            company="Stepico"
            quote="The practical focus of this workshop was a game-changer for our development team. Instead of just discussing AI tools, our engineers actually learned how to implement them effectively in their day-to-day coding. The hands-on exercises and real-world applications delivered solid value that we're already seeing in our productivity metrics."
          />
        </div>
      </div>
    </div>
  );
};
