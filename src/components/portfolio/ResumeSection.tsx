import { useEffect, useRef } from "react";
import { Download, FileText, Eye } from "lucide-react";

const ResumeSection = () => {
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
    <section id="resume" className="py-24 bg-section-alt" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-reveal">
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">// my cv</p>
          <h2 className="section-heading text-gradient">Resume</h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto mt-4 rounded-full" />
        </div>

        <div className="scroll-reveal glass-card glow-border p-8 md:p-12 text-center">
          <div className="relative inline-flex items-center justify-center w-32 h-32 mb-8">
            <div className="absolute inset-0 rounded-2xl bg-primary/10 border-2 border-primary/20 animate-pulse-glow" />
            <FileText className="w-16 h-16 text-primary relative z-10" />
          </div>

          <h3 className="text-2xl font-display font-bold mb-3">Senthilkumar S — Resume</h3>
          <p className="text-muted-foreground mb-2 max-w-md mx-auto">
            My complete professional resume including education, skills, projects, and certifications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/Senthilkumar.pdf" download className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-primary/30 pulse-glow">
              <Download className="w-5 h-5" /> Download Resume (PDF)
            </a>
            <a href="/Senthilkumar.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-primary/40 text-foreground font-semibold text-lg hover:border-primary hover:bg-primary/10 hover:scale-105 transition-all duration-200">
              <Eye className="w-5 h-5" /> Preview Online
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-border/50 grid grid-cols-3 gap-4 text-sm">
            {[
              { label: "Format", value: "PDF" },
              { label: "Pages", value: "3 Pages" },
              { label: "Size", value: "< 1 MB" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="font-mono font-bold text-primary">{item.value}</div>
                <div className="text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
