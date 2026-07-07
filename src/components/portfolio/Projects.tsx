import {
  Github,
  Star,
  ExternalLink,
  TrendingUp,
  ShieldCheck,
  Cloud,
  Rocket,
  Code2,
  Gauge,
  Clock,
  Lock,
  Zap,
  Bell,
  FolderKanban,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ebsBackupDiagram from "@/assets/ebs-backup-architecture-new.png";
import cloudwatchSnsDiagram from "@/assets/cloudwatch-sns-new.png";
import s3CrossAccountDiagram from "@/assets/s3-cross-account-diagram.png";
import ec2MonitoringDiagram from "@/assets/ec2-monitoring-diagram.png";

type Stat = {
  icon: LucideIcon;
  value: string;
  label: string;
  color: string;
};

type Project = {
  featured?: boolean;
  level?: "Advanced" | "Intermediate" | "Beginner";
  title: string;
  titleAccent?: string;
  description: string;
  impact?: string;
  impactHighlight?: string;
  tags: string[];
  caseStudy?: string;
  github?: string;
  liveDemo?: string;
  diagram?: string;
  stats?: Stat[];
};

const projects: Project[] = [
  {
    featured: true,
    level: "Advanced",
    title: "AWS Automated EBS Snapshot Backup System",
    titleAccent: "(Serverless)",
    description:
      "Serverless solution to automate EBS snapshot backups using AWS Lambda and EventBridge with lifecycle management.",
    impact:
      "Automated backups with zero manual effort, ensuring data durability and 60% reduction in backup time.",
    impactHighlight: "60% reduction",
    tags: ["AWS Lambda", "EventBridge", "EBS", "S3", "SNS", "IAM"],
    diagram: ebsBackupDiagram,
    liveDemo:
      "https://medium.com/@prajwaljolhe484/automating-ebs-volume-backups-using-aws-serverless-lambda-eventbridge-baefc0f63dc3",
    github: "https://github.com/Prajwaljolhe/Automating-EBS-Volume-Backups-Using-AWS-Serverless-Lambda-EventBridge-",
    stats: [
      { icon: ShieldCheck, value: "60%", label: "Faster Backups", color: "text-emerald-400" },
      { icon: Clock, value: "Zero", label: "Manual Effort", color: "text-cyan-400" },
    ],
  },
  {
    featured: true,
    level: "Intermediate",
    title: "Cross-Account S3 Data Transfer",
    titleAccent: "(UI-Based)",
    description:
      "Web UI to securely transfer files between S3 buckets across AWS accounts using IAM roles and bucket policies.",
    impact:
      "Simplified cross-account data transfer, improved security and saved 80% operational effort.",
    impactHighlight: "80% operational effort",
    tags: ["AWS S3", "IAM", "Bucket Policy", "Cloud Security", "JavaScript", "HTML", "CSS", "Python (Boto3)"],
    diagram: s3CrossAccountDiagram,
    github: "https://github.com/Prajwaljolhe",
    liveDemo:
      "https://medium.com/@prajwaljolhe484/how-to-transfer-data-between-aws-s3-buckets-across-accounts-without-using-cli-step-by-step-guide-d1737b7a7f13",
    stats: [
      { icon: ShieldCheck, value: "80%", label: "Operational Effort Saved", color: "text-emerald-400" },
      { icon: Lock, value: "100%", label: "Secure Transfer", color: "text-amber-400" },
    ],
  },
  {
    featured: true,
    level: "Advanced",
    title: "Real-Time EC2 Monitoring &",
    titleAccent: "Alerting System",
    description:
      "Monitors EC2 instances in real-time using CloudWatch and triggers SNS alerts for CPU, memory and disk threshold breaches.",
    impact:
      "Reduced incident response time by 70% with real-time monitoring and automated alerts.",
    impactHighlight: "70%",
    diagram: ec2MonitoringDiagram,
    tags: ["CloudWatch", "SNS", "EC2", "IAM", "Linux", "Python (Boto3)", "Alarms"],
    github: "https://github.com/Prajwaljolhe",
    liveDemo:
      "https://medium.com/@prajwaljolhe484/real-time-server-monitoring-alert-system-using-cloudwatch-sns-20aff0cf8508",
    stats: [
      { icon: Zap, value: "70%", label: "Faster Response", color: "text-rose-400" },
      { icon: Bell, value: "< 30s", label: "Alert Latency", color: "text-purple-400" },
    ],
  },
];

const levelStyles: Record<string, string> = {
  Advanced: "bg-purple-500/10 text-purple-300 border-purple-500/30",
  Intermediate: "bg-sky-500/10 text-sky-300 border-sky-500/30",
  Beginner: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
};

const features = [
  {
    icon: ShieldCheck,
    title: "Production Ready",
    desc: "Built with best practices and enterprise-grade security.",
    color: "text-emerald-400",
  },
  {
    icon: Cloud,
    title: "AWS Native",
    desc: "Leverages fully managed AWS services.",
    color: "text-cyan-400",
  },
  {
    icon: Rocket,
    title: "Scalable",
    desc: "Designed to scale and handle real-world workloads.",
    color: "text-amber-400",
  },
  {
    icon: Code2,
    title: "Well Documented",
    desc: "Clean code with architecture diagrams and docs.",
    color: "text-purple-400",
  },
];

const highlightImpact = (text: string, highlight?: string) => {
  if (!highlight) return text;
  const idx = text.indexOf(highlight);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <span className="text-emerald-400 font-semibold">{highlight}</span>
      {text.slice(idx + highlight.length)}
    </>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-12 lg:py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-mono mb-4 animate-swipe-up">
            <FolderKanban className="w-4 h-4" />
            MY PROJECTS
          </div>
          <h2 className="text-4xl md:text-6xl font-bold animate-swipe-up">
            Featured{" "}
            <span className="glow-text">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 mt-4 text-base md:text-lg animate-swipe-up">
            Real-world cloud solutions built with AWS and modern technologies.
          </p>
          <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr items-stretch">
          {projects.map((p) => {
            const buttons: Array<{ key: string; href: string; label: string; icon: LucideIcon; variant: "demo" | "github" }> = [];
            if (p.liveDemo) buttons.push({ key: "demo", href: p.liveDemo, label: "Medium Blog", icon: ExternalLink, variant: "demo" });
            if (p.github) buttons.push({ key: "gh", href: p.github, label: "GitHub Repo", icon: Github, variant: "github" });
            const btnClass = (v: "demo" | "github") =>
              v === "demo"
                ? "border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/10"
                : "border-purple-500/40 text-purple-300 hover:bg-purple-500/10";

            return (
              <article
                key={p.title}
                className={`group relative flex flex-col h-full rounded-3xl overflow-hidden border border-white/10 bg-[rgba(10,25,47,0.85)] backdrop-blur-md animate-swipe-up project-card ${p.featured ? "featured-project" : ""}`}
              >
                <div className="flex flex-col flex-1 p-5">
                  {/* Badges */}
                  <div className="flex items-center justify-between mb-4">
                    {p.featured ? (
                      <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/40 font-medium">
                        <Star className="w-3 h-3 fill-amber-300" /> Featured
                      </span>
                    ) : <span />}
                    {p.level && (
                      <span className={`text-xs px-3 py-1 rounded-full border font-medium ${levelStyles[p.level]}`}>
                        {p.level}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white leading-snug mb-3">
                    {p.title}{" "}
                    {p.titleAccent && (
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {p.titleAccent}
                      </span>
                    )}
                  </h3>

                  {/* Description */}
                  {p.description && (
                    <p className="text-white/75 text-sm leading-6 mb-4">
                      {p.description}
                    </p>
                  )}

                  {/* Diagram framed inside card */}
                  {p.diagram && (
                    <div
                      className="relative w-full overflow-hidden rounded-xl border border-cyan-500/20 bg-slate-950/60 mb-4"
                      style={{ boxShadow: "0 0 20px rgba(0,153,255,0.08)" }}
                    >
                      <img
                        src={p.diagram}
                        alt={`${p.title} architecture diagram`}
                        loading="lazy"
                        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  )}

                  {/* Key Impact */}
                  {p.impact && (
                    <div className="mb-4">
                      <div className="flex items-center gap-1.5 text-emerald-400 text-sm font-semibold mb-1.5">
                        <TrendingUp className="w-4 h-4" /> Key Impact
                      </div>
                      <p className="text-slate-300 text-sm leading-6">
                        {highlightImpact(p.impact, p.impactHighlight)}
                      </p>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full text-[12px] bg-blue-500/10 border border-blue-500/25 text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  {buttons.length > 0 && (
                    <div
                      className="grid gap-2 mb-4"
                      style={{ gridTemplateColumns: `repeat(${buttons.length}, minmax(0, 1fr))` }}
                    >
                      {buttons.map((b) => {
                        const Icon = b.icon;
                        return (
                          <a
                            key={b.key}
                            href={b.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center justify-center gap-2 text-xs font-medium border rounded-xl py-2.5 px-2 transition-all bg-slate-900/40 btn-glow ${btnClass(b.variant)}`}
                          >
                            <Icon className="w-3.5 h-3.5" /> {b.label}
                          </a>
                        );
                      })}
                    </div>
                  )}

                  {/* Stats footer */}
                  {p.stats && p.stats.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 mt-auto">
                      {p.stats.map((s) => {
                        const Icon = s.icon;
                        return (
                          <div
                            key={s.label}
                            className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/40 px-3 py-2.5"
                          >
                            <Icon className={`w-5 h-5 ${s.color}`} />
                            <div>
                              <div className={`text-base font-bold ${s.color}`}>{s.value}</div>
                              <div className="text-[10px] text-slate-400 leading-tight">{s.label}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom feature bar */}
        <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-[#071129] p-6 animate-swipe-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex items-start gap-3">
                  <Icon className={`w-6 h-6 ${f.color} shrink-0 mt-0.5`} />
                  <div>
                    <h4 className={`font-semibold ${f.color}`}>{f.title}</h4>
                    <p className="text-slate-400 text-sm leading-6 mt-1">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
