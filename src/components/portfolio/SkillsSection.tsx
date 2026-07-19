import { useEffect, useRef, useState } from "react";
import { Code, Globe, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    color: "text-primary",
    borderColor: "border-primary/20",
    bgColor: "bg-primary/5",
    skills: [
      { name: "Java", level: 75 },
      { name: "Python", level: 65 },
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    color: "text-accent",
    borderColor: "border-accent/20",
    bgColor: "bg-accent/5",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React.js", level: 75 },
      { name: "Node.js", level: 70 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    color: "text-orange-400",
    borderColor: "border-orange-400/20",
    bgColor: "bg-orange-400/5",
    skills: [
      { name: "GitHub", level: 80 },
      { name: "Figma", level: 70 },
      { name: "Android Studio", level: 60 },
      {name: "Visual Studio code", level: 80},
    ],
  },
];

const techBadges = [
  "HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Java", "Python",
  "GitHub", "Figma", "Android Studio", "REST APIs", "MongoDB",
];

interface SkillBarProps {
  name: string;
  level: number;
  animate: boolean;
  color?: string;
}

const SkillBar = ({ name, level, animate, color }: SkillBarProps) => (
  <div className="space-y-1.5">
    <div className="flex justify-between items-center">
      <span className="text-sm font-medium text-foreground">{name}</span>
      <span className="text-xs font-mono text-muted-foreground">{level}%</span>
    </div>
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <div
        className="h-full skill-bar-fill rounded-full"
        style={{
          width: animate ? `${level}%` : "0%",
          background: color
            ? `hsl(var(--primary))`
            : "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))",
        }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            entry.target.querySelectorAll(".scroll-reveal").forEach((el) => {
              el.classList.add("revealed");
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            // technical skills
          </p>
          <h2 className="section-heading text-gradient">My Toolkit</h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A curated set of technologies I work with to build performant and scalable applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, i) => (
            <div
              key={category.title}
              className="scroll-reveal glass-card glow-border p-6 hover:scale-[1.01] transition-all duration-300"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl ${category.bgColor} border ${category.borderColor} flex items-center justify-center`}>
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                </div>
                <h3 className="font-display font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} animate={animate} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="scroll-reveal">
          <h3 className="text-center text-lg font-display font-semibold text-muted-foreground mb-6">
            Also familiar with
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {techBadges.map((tech) => (
              <span key={tech} className="badge-tech hover:bg-primary/20 hover:border-primary/40 transition-all duration-200 cursor-default hover:scale-105">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
