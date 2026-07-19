import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Download, Eye } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const roles = [
  
  "Full Stack Developer",
  "Web Developer",
  
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < current.length) {
            setDisplayText(current.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(current.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 60 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg grid-bg"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/8 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Floating code elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {["<html>", "const dev = () =>", "import React", "{}", "npm start", "git push", "// TODO:", "async/await"].map(
          (text, i) => (
            <div
              key={i}
              className="absolute font-mono text-xs text-primary/15 select-none"
              style={{
                left: `${10 + (i * 11) % 80}%`,
                top: `${15 + (i * 13) % 70}%`,
                animationDelay: `${i * 0.5}s`,
                animation: `floating ${4 + (i % 3)}s ease-in-out infinite`,
              }}
            >
              {text}
            </div>
          )
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for opportunities
            </div>

            <div>
              <p className="text-muted-foreground font-mono text-sm mb-2 tracking-widest uppercase">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                <span className="text-gradient">Senthilkumar</span>
                <br />
              </h1>
            </div>

            <div className="h-8 flex items-center justify-center lg:justify-start">
              <span className="text-xl md:text-2xl text-muted-foreground font-display">
                {displayText}
                <span className="inline-block w-0.5 h-6 bg-primary ml-0.5 animate-[blink_1s_step-end_infinite]" />
              </span>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
             Full Stack Web Developer with hands-on experience building responsive, secure web applications using React, Node.js,
JavaScript, MongoDB
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("projects")}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 pulse-glow"
              >
                <Eye className="w-4 h-4" />
                View Projects
              </button>
              <a
                href="/Senthilkumar.pdf"
                download
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-transparent border border-primary/40 text-foreground font-semibold transition-all duration-200 hover:border-primary hover:bg-primary/10 hover:scale-105"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-secondary text-foreground font-semibold transition-all duration-200 hover:bg-muted hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start pt-2">
              <a
                href="https://github.com/Kumar2511"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200 hover:bg-primary/10"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/senthil-kumar-b14b01290/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200 hover:bg-primary/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:senthil.s111002@gmail.com"
                className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200 hover:bg-primary/10"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs text-muted-foreground font-mono">senthilkumar.s</span>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" style={{ margin: "-16px" }} />
              <div className="absolute inset-0 rounded-full border border-accent/20" style={{ margin: "-32px" }} />
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-110 animate-pulse-glow" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 animate-floating">
                <img
                  src={profilePhoto}
                  alt="Senthilkumar S - Computer Science Engineering Student"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              <div className="absolute -left-4 top-8 glass-card glow-border px-3 py-2 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <div className="text-xl font-bold font-display text-primary">5+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              <div className="absolute -right-4 bottom-12 glass-card glow-border px-3 py-2 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                <div className="text-xl font-bold font-display text-accent">4+</div>
                <div className="text-xs text-muted-foreground">Certifications</div>
              </div>
              <div className="absolute -bottom-2 left-8 glass-card glow-border px-3 py-2 animate-fade-in-up" style={{ animationDelay: "1.1s" }}>
                <div className="text-xl font-bold font-display text-foreground">B.E</div>
                <div className="text-xs text-muted-foreground">CSE Student</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="text-xs font-mono">scroll down</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
