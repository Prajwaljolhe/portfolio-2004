import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    date: "Jan 2026",
    title: "DevOps Training",
    org: "Fortune Cloud",
    description:
      "Training covering Linux, Git, GitHub, Jenkins, Docker, Kubernetes, Terraform, Ansible, AWS, and CI/CD pipelines.",
  },
  {
    date: "Aug 2025",
    title: "AWS Cloud Training",
    org: "Fortune Cloud",
    description:
      "Training covering EC2, VPC, IAM, Load Balancing, and Auto Scaling.",
  },
];

const education = [
  {
    date: "2022 - 2025",
    title: "BCA - Bachelor of Computer Applications",
    org: "Vidya Bharti Mahavidyalaya, Amravati",
    description: "Graduated with CGPA: 6.78.",
  },
];

type TimelineItem = {
  date: string;
  title: string;
  org: string;
  description: string;
};

const Timeline = ({
  items,
  startSide = "left",
}: {
  items: TimelineItem[];
  startSide?: "left" | "right";
}) => (
  <div className="relative">
    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

    <div className="space-y-10">
      {items.map((item, idx) => {
        const isLeft =
          startSide === "left" ? idx % 2 === 0 : idx % 2 !== 0;
        return (
          <div
            key={idx}
            className="relative md:grid md:grid-cols-2 md:gap-8 items-center"
          >
            <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full border border-primary bg-background md:-translate-x-1/2 z-10" />
            <div
              className={`pl-10 md:pl-0 animate-swipe-up ${
                isLeft ? "md:pr-10 md:text-left" : "md:col-start-2 md:pl-10"
              }`}
            >
              <div className="glow-card border border-border rounded-xl p-5 md:p-6">
                <p className="text-xs font-medium text-primary mb-2">
                  {item.date}
                </p>
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-primary/80 mb-2">{item.org}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-8 lg:py-10">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Professional Experience */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-12 animate-swipe-up">
            <Briefcase className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold glow-text">
              Professional Experience
            </h2>
          </div>
          <Timeline items={experience} />
        </div>

        {/* Education */}
        <div>
          <div
            className="flex items-center justify-center gap-3 mb-12 animate-swipe-up"
          >
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold glow-text">
              Education
            </h2>
          </div>
          <Timeline items={education} startSide="right" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
