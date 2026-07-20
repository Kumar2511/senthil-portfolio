import { useEffect, useRef } from "react";
import { GraduationCap, Target, Zap, Users, Brain, Calendar, RefreshCw } from "lucide-react";

const strengths = [
  {
    icon: RefreshCw,
    title: "Adaptability",
    description: "Quickly adapts to new environments, technologies, and challenges with ease.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Collaborates effectively in teams, contributing both technically and creatively.",
  },
  {
    icon: Zap,
    title: "Problem Solving",
    description: "Approaches complex challenges with analytical thinking and creative solutions.",
  },
  {
    icon: Brain,
    title: "Continuous Learning",
    description: "Always exploring new technologies and improving skills through self-learning.",
  },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".scroll-reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-section-alt" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            // about me
          </p>
          <h2 className="section-heading text-gradient">Who Am I?</h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Education & Objective */}
          <div className="space-y-8">
            {/* Education Card */}
            <div className="scroll-reveal glass-card glow-border p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold">Education</h3>
              </div>

              <div className="relative pl-4 border-l-2 border-primary/30 space-y-6">
                <div className="relative">
                  <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">B.E — Computer Science & Engineering</h4>
                    <p className="text-primary text-sm font-mono mt-0.5">Nandha Engineering College</p>
                    <div className="flex items-center gap-2 mt-1 text-muted-foreground text-sm">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>2023 – 2026</span>
                    </div>
                    <div className="mt-2">
                      </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-accent/60 border-2 border-background" />
                  <div>
                    <h4 className="font-semibold text-foreground">B.Sc — Computer Science</h4>
                    <p className="text-primary text-sm font-mono mt-0.5">E.G.S Pillay Arts & Science College</p>
                    <div className="flex items-center gap-2 mt-1 text-muted-foreground text-sm">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>2020 – 2023</span>
                    </div>
                    <div className="mt-2">
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-emerald-400/60 border-2 border-background" />
                  <div>
                    <h4 className="font-semibold text-foreground">Higher Secondary School</h4>
                                        <p className="text-accent text-sm font-mono mt-0.5">The Merit Higher.Secondary School</p>

                    <div className="flex items-center gap-2 mt-1 text-muted-foreground text-sm">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>2020</span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-orange-400/60 border-2 border-background" />
                  <div>
                    <h4 className="font-semibold text-foreground">Secondary School Leaving Certificate</h4>
                                                            <p className="text-accent text-sm font-mono mt-0.5">The Merit Higher.Secondary School</p>

                    <div className="flex items-center gap-2 mt-1 text-muted-foreground text-sm">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>2018</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Objective */}
            <div className="scroll-reveal glass-card glow-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold">Career Objective</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Passionate Computer Science Engineering student with a strong interest in web development 
                and software engineering. Seeking a challenging internship or entry-level position where 
                I can contribute to innovative projects, build secure, scalable, and user-friendly 
                applications, and grow as a software engineer.
              </p>
            </div>
          </div>

          {/* Right: Strengths + Stats */}
          <div className="space-y-6">
            <div className="scroll-reveal">
              <h3 className="text-xl font-display font-semibold mb-6">Core Strengths</h3>
              <div className="space-y-4">
                {strengths.map((strength, i) => (
                  <div
                    key={strength.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 hover:bg-card transition-all duration-300 group"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <strength.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold font-display mb-1">{strength.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{strength.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="scroll-reveal grid grid-cols-2 gap-4">
              {[
                { value: "3+", label: "Projects Built", suffix: "" },
                { value: "4+", label: "Certifications", suffix: "" },
                { value: "B.E", label: "CSE Student", suffix: "" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card glow-border p-4 text-center hover:scale-105 transition-transform duration-200"
                >
                  <div className="text-3xl font-display font-bold text-gradient">
                    {stat.value}
                    <span className="text-lg text-muted-foreground">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
