import { useEffect, useRef } from "react";
import { Award, BookOpen, Trophy, Star, Download, Eye } from "lucide-react";

const certifications = [
  {
    title: "API Developer",
    issuer: "Professional Certification",
    icon: Award,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    badge: "Development",
    pdf: "/certificates/API_Developer.pdf",
  },
  {
    title: "Angular Web Development",
    issuer: "Web Development Course",
    icon: BookOpen,
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
    badge: "Web",
    pdf: "/certificates/Angular_Web_Developer.pdf",
  },
  {
    title: "Cyber Security",
    issuer: "Security Certification",
    icon: Award,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    badge: "Security",
    pdf: null,
  },
  {
    title: "Front-End Developer",
    issuer: "Front-End Certification",
    icon: BookOpen,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
    badge: "Front-End",
    pdf: null,
  },
];

const achievements = [
  {
    icon: Trophy,
    title: "District-Level Cricket",
    description: "Participated in district-level cricket tournament representing the college team.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: Star,
    title: "College Gully Cricket — 3rd Prize",
    description: "Won 3rd prize in the inter-department gully cricket competition.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Trophy,
    title: "Technical & Non-Technical Events",
    description: "Participated in various technical and non-technical events at CIT, Coimbatore.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

const CertificationsSection = () => {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" className="py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">// credentials</p>
          <h2 className="section-heading text-gradient">Certifications & Achievements</h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto mt-4 rounded-full" />
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-display font-semibold text-muted-foreground mb-6 scroll-reveal flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" /> Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <div key={cert.title} className="scroll-reveal glass-card glow-border p-5 hover:scale-[1.02] transition-all duration-300 group" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-lg ${cert.bg} border ${cert.border} flex items-center justify-center flex-shrink-0`}>
                    <cert.icon className={`w-4 h-4 ${cert.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="badge-tech text-[10px]">{cert.badge}</span>
                    </div>
                    <h4 className="font-semibold text-sm leading-snug mb-1">{cert.title}</h4>
                    <p className={`text-xs font-mono ${cert.color}`}>{cert.issuer}</p>
                    {cert.pdf && (
                      <div className="flex gap-2 mt-2">
                        <a href={cert.pdf} download className={`inline-flex items-center gap-1 text-[10px] font-mono ${cert.color} hover:underline`}>
                          <Download className="w-3 h-3" /> Download
                        </a>
                        <a href={cert.pdf} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 text-[10px] font-mono ${cert.color} hover:underline`}>
                          <Eye className="w-3 h-3" /> View
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-display font-semibold text-muted-foreground mb-6 scroll-reveal flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-400" /> Achievements & Activities
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, i) => (
              <div key={achievement.title} className="scroll-reveal flex items-start gap-4 p-5 rounded-xl bg-muted/40 border border-border hover:border-primary/30 hover:bg-card transition-all duration-300" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className={`w-10 h-10 rounded-xl ${achievement.bg} flex items-center justify-center flex-shrink-0`}>
                  <achievement.icon className={`w-5 h-5 ${achievement.color}`} />
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-1">{achievement.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
