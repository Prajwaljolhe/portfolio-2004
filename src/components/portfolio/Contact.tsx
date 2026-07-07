import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Download, Github, BookOpen, ExternalLink } from "lucide-react";
import resumePdf from "@/assets/prajwal-resume.pdf.asset.json";

const EMAIL = "prajwaljolhe484@gmail.com";
const GITHUB = "https://github.com/Prajwaljolhe";
const LINKEDIN = "https://www.linkedin.com/in/prajwal-jolhe-3b3576284/";
const MEDIUM = "https://medium.com/@prajwaljolhe484";

const details = [
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: MapPin, label: "Location", value: "Pune, India", href: "#" },
];

const socials = [
  { icon: Github, label: "GitHub", href: GITHUB },
  { icon: Linkedin, label: "LinkedIn", href: LINKEDIN },
  { icon: BookOpen, label: "Medium", href: MEDIUM },
];

const Contact = () => {
  return (
    <section id="contact" className="py-8 lg:py-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="glow-card border border-border rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[hsl(217_91%_60%)]/20 rounded-full blur-3xl" />

          <div className="relative z-10 text-center mb-12">
            <p
              className="text-primary font-mono text-sm mb-3 animate-swipe-up"
            >
              contact
            </p>
            <h2
              className="text-4xl md:text-5xl mb-4 animate-swipe-up"
            >
              Let's <span className="glow-text">Work Together</span>
            </h2>
            <p
              className="text-muted-foreground max-w-xl mx-auto animate-swipe-up"
            >
              Have a project in mind or want to connect? I'm always open to
              discussing DevOps, cloud infrastructure, and automation opportunities.
            </p>
          </div>

          {/* Contact details */}
          <div className="relative z-10 grid sm:grid-cols-2 gap-4 mb-8">
            {details.map((i) => (
              <a
                key={i.label}
                href={i.href}
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-secondary/40 hover:bg-secondary hover:border-primary/40 transition-all group animate-swipe-up"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <i.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">{i.label}</div>
                  <div className="font-medium truncate">{i.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Social links - horizontal */}
          <div className="relative z-10 flex flex-wrap justify-center gap-4 mb-10">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                onClick={(e) => {
                  // Fallback for sandboxed iframes (e.g. Lovable preview) where
                  // target="_blank" can be blocked. Force-open the URL.
                  const win = window.open(s.href, "_blank", "noopener,noreferrer");
                  if (!win) {
                    e.preventDefault();
                    window.location.href = s.href;
                  }
                }}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-secondary/40 hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_20px_hsl(199_89%_56%/0.35)] transition-all duration-300 animate-swipe-up"
              >
                <s.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                  {s.label}
                </span>
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="relative z-10 flex flex-wrap justify-center gap-4">
            <div className="animate-swipe-up">
              <Button asChild variant="hero" size="lg">
                <a href={`mailto:${EMAIL}`}>
                  <Mail className="w-4 h-4" /> Contact Me
                </a>
              </Button>
            </div>
            <div className="animate-swipe-up">
              <Button asChild variant="outlineGlow" size="lg">
                <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" /> View GitHub
                </a>
              </Button>
            </div>
            <div className="animate-swipe-up">
              <Button asChild variant="outlineGlow" size="lg">
                <a href={MEDIUM} target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-4 h-4" /> Read Blogs
                </a>
              </Button>
            </div>
            <div className="animate-swipe-up">
              <Button asChild variant="outlineGlow" size="lg">
                <a href={resumePdf.url} target="_blank" rel="noopener noreferrer" download="Prajwal_Jolhe_Resume.pdf">
                  <Download className="w-4 h-4" /> Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>

        <footer className="text-center text-sm text-muted-foreground mt-12">
          © {new Date().getFullYear()} Prajwal Jolhe · DevOps Engineer · Built with care, deployed with confidence.
        </footer>
      </div>
    </section>
  );
};

export default Contact;
