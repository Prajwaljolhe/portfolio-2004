import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-8 lg:py-10">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div
          className="flex items-center justify-center gap-3 mb-12 animate-swipe-up"
        >
          <User className="w-6 h-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold glow-text">
            About Me
          </h2>
        </div>

        <div
          className="glow-card border border-border rounded-xl p-8 md:p-10 animate-swipe-up"
        >
          {/* Bio paragraphs */}
          <p
            className="text-lg md:text-xl leading-relaxed text-foreground mb-5 animate-swipe-up"
          >
            I build systems that build systems.
          </p>
          <p
            className="text-base md:text-lg leading-relaxed text-muted-foreground mb-5 animate-swipe-up"
          >
            As a DevOps Engineer, I focus on automation, scalability, and
            reliability — turning ideas into production-ready infrastructure.
            From deploying cloud environments to optimizing CI/CD pipelines, I
            make sure everything runs faster, smoother, and smarter.
          </p>
          <p
            className="text-base md:text-lg leading-relaxed text-muted-foreground mb-8 animate-swipe-up"
          >
            Driven by curiosity and powered by code, I'm always pushing to
            improve how software is built and delivered.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;
