import {
  Boxes,
  Cloud,
  Container,
  GitBranch,
  Github,
  LineChart,
  Server,
  Settings,
  Terminal,
  Workflow,
} from "lucide-react";

const tech = [
  { name: "Linux", icon: Terminal },
  { name: "Docker", icon: Container },
  { name: "Kubernetes", icon: Boxes },
  { name: "AWS", icon: Cloud },
  { name: "Terraform", icon: Server },
  { name: "Ansible", icon: Settings },
  { name: "Jenkins", icon: Workflow },
  { name: "GitHub Actions", icon: Github },
  { name: "Prometheus", icon: LineChart },
  { name: "Grafana", icon: GitBranch },
];

const TechStack = () => {
  return (
    <section id="stack" className="py-8 lg:py-10 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-14">
          <p
            className="text-primary font-mono text-sm mb-3 animate-swipe-up"
          >
            tech stack
          </p>
          <h2
            className="text-4xl md:text-5xl animate-swipe-up"
          >
            Tools I <span className="glow-text">work with</span>
          </h2>
          <p
            className="text-muted-foreground mt-4 max-w-xl mx-auto animate-swipe-up"
          >
            Battle-tested tools across the entire DevOps lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {tech.map((t) => (
            <div
              key={t.name}
              className="glow-card border border-border rounded-xl p-6 flex flex-col items-center gap-3 group cursor-default animate-swipe-up"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                <t.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-medium text-sm">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
