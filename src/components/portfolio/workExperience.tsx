import { useEffect, useRef } from "react";
import { Briefcase, Calendar, Building2, Award } from "lucide-react";

const WorkExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
   <section id="experience" className="py-24 bg-section-alt" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16 scroll-reveal">
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            // professional experience
          </p>

          <h2 className="section-heading text-gradient">
            Work Experience
          </h2>

          <div className="w-24 h-1 bg-primary-gradient mx-auto mt-4 rounded-full" />
        </div>

        {/* Experience Card */}
        <div className="glass-card glow-border p-8 md:p-10 scroll-reveal hover:scale-[1.02] transition-all duration-300">

          {/* Top */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div className="flex items-start gap-5">

              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>

              <div>

                <h3 className="text-2xl font-display font-bold">
                  Full Stack Development Intern
                </h3>

                <div className="flex flex-wrap items-center gap-4 mt-3 text-muted-foreground">

                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span>Tech Volt Software Pvt. Ltd.</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Internship</span>
                  </div>

                </div>

              </div>

            </div>

            <div className="px-5 py-2 rounded-full bg-primary/10 text-primary font-semibold">
              Internship
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-border/40 my-8" />

          {/* Responsibilities */}

          <div className="space-y-6">

            <div className="flex gap-4">
              <Award className="w-5 h-5 text-primary mt-1" />

              <p className="text-muted-foreground leading-relaxed">
                Contributed to full-stack feature development across
                frontend and backend modules as part of an Agile
                development team.
              </p>
            </div>

            <div className="flex gap-4">
              <Award className="w-5 h-5 text-primary mt-1" />

              <p className="text-muted-foreground leading-relaxed">
                Assisted in debugging, testing, and refining
                application code to improve reliability before
                deployment.
              </p>
            </div>

            <div className="flex gap-4">
              <Award className="w-5 h-5 text-primary mt-1" />

              <p className="text-muted-foreground leading-relaxed">
                Collaborated with senior developers to translate
                business requirements into responsive and functional
                web application components.
              </p>
            </div>

          </div>

          {/* Bottom Stats */}

          <div className="mt-10 pt-8 border-t border-border/40 grid grid-cols-1 sm:grid-cols-3 gap-6">

            <div className="glass-card p-5 text-center">
              <h4 className="text-3xl font-bold text-primary">
                Full Stack
              </h4>

              <p className="text-sm text-muted-foreground mt-2">
                Development
              </p>
            </div>

            <div className="glass-card p-5 text-center">
              <h4 className="text-3xl font-bold text-primary">
                Agile
              </h4>

              <p className="text-sm text-muted-foreground mt-2">
                Team Collaboration
              </p>
            </div>

            <div className="glass-card p-5 text-center">
              <h4 className="text-3xl font-bold text-primary">
                Debugging
              </h4>

              <p className="text-sm text-muted-foreground mt-2">
                Testing & Deployment
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WorkExperienceSection;