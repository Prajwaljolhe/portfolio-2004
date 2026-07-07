import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Cloud, Server, Code2, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import portrait from "@/assets/prajwal-portrait.png";
import InteractiveBackground from "./InteractiveBackground";

const Hero = () => {
  const portraitRef = useRef<HTMLDivElement>(null);

  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = portraitRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.02)`;
  };
  const resetTilt = () => {
    const el = portraitRef.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <InteractiveBackground />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left - Text */}
        <div className="space-y-7 animate-fade-up order-last lg:order-first">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for new opportunities
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="glow-text">Prajwal Jolhe</span>
            <br />
            <span className="text-muted-foreground text-3xl md:text-4xl lg:text-5xl font-semibold">
              DevOps Engineer
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            I design and maintain{" "}
            <span className="text-foreground font-medium">resilient, scalable infrastructure</span>{" "}
            with a focus on automation, observability, and reliability.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild variant="hero" size="lg">
              <Link to="/projects">
                View Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outlineGlow" size="lg">
              <Link to="/contact">
                <Mail className="w-4 h-4" /> Contact Me
              </Link>
            </Button>
          </div>
        </div>

        {/* Right - Portrait */}
        <div className="relative flex items-center justify-center order-first lg:order-last animate-fade-up">
          <div
            ref={portraitRef}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
            className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] transition-transform duration-200 ease-out will-change-transform"
          >
            {/* Soft outer glow halo */}
            <div className="absolute -inset-10 bg-primary/25 blur-3xl rounded-full animate-pulse-glow" />

            {/* Rotating conic gradient ring */}
            <div
              className="absolute -inset-2 rounded-full opacity-90"
              style={{
                background:
                  "conic-gradient(from 0deg, hsl(199 89% 56%) 0deg, hsl(217 91% 60%) 90deg, transparent 180deg, hsl(199 89% 65%) 270deg, hsl(199 89% 56%) 360deg)",
                animation: "spin 12s linear infinite",
                filter: "blur(2px)",
              }}
            />

            {/* Inner static gradient ring (sharp edge) */}
            <div
              className="absolute inset-0 rounded-full p-[3px]"
              style={{
                background:
                  "linear-gradient(135deg, hsl(199 89% 56%), hsl(217 91% 60%) 50%, hsl(199 89% 65%))",
                boxShadow:
                  "0 0 60px hsl(199 89% 56% / 0.45), inset 0 0 30px hsl(199 89% 56% / 0.25)",
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-card relative">
                <img
                  src={portrait}
                  alt="Portrait of Prajwal Jolhe — DevOps Engineer"
                  loading="eager"
                  className="w-full h-full object-cover object-[35%_15%] scale-110"
                  style={{
                    filter:
                      "contrast(1.08) saturate(0.92) brightness(1.03) hue-rotate(-6deg)",
                  }}
                />
                {/* Vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, transparent 55%, hsl(var(--background) / 0.55) 100%)",
                  }}
                />
                {/* Subtle blue tint to neutralize warm tones */}
                <div className="absolute inset-0 bg-primary/5 mix-blend-overlay pointer-events-none" />
              </div>
            </div>

            {/* Orbiting tech badges */}
            {[
              { Icon: Cloud, label: "AWS", className: "top-2 -left-3 sm:-left-6", delay: "0s" },
              { Icon: Server, label: "Linux", className: "top-6 -right-3 sm:-right-6", delay: "1s" },
              { Icon: Activity, label: "Monitor", className: "bottom-10 -right-4 sm:-right-8", delay: "2s" },
              { Icon: Code2, label: "IaC", className: "bottom-2 -left-4 sm:-left-8", delay: "1.5s" },
            ].map(({ Icon, label, className, delay }) => (
              <div
                key={label}
                className={`absolute ${className} w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-card/90 backdrop-blur-md border border-primary/30 flex items-center justify-center shadow-[0_0_25px_hsl(var(--primary)/0.35)] animate-float`}
                style={{ animationDelay: delay }}
                aria-label={label}
                title={label}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
            ))}

            {/* Status chip */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 bg-background/85 backdrop-blur-md text-[11px] font-mono text-primary shadow-[0_0_20px_hsl(var(--primary)/0.4)] whitespace-nowrap">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
              </span>
              status: online · Pune, India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
