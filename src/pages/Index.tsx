import { useState, useEffect } from "react";
import PortfolioNavbar from "@/components/portfolio/PortfolioNavbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import WorkExperienceSection from "@/components/portfolio/workExperience";
import ContactSection from "@/components/portfolio/ContactSection";
import PortfolioFooter from "@/components/portfolio/PortfolioFooter";
import { Code2 } from "lucide-react";

const LoadingScreen = () => (
  <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl bg-primary-gradient flex items-center justify-center animate-pulse-glow">
          <Code2 className="w-8 h-8 text-primary-foreground" />
        </div>
        <div className="absolute inset-0 rounded-2xl border-2 border-primary/40 animate-ping" />
      </div>
      <div className="font-display text-xl font-bold text-gradient">Welcome to my Portfolio...</div>
      <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary-gradient rounded-full animate-[shimmer_1.5s_ease-in-out_infinite]"
          style={{ backgroundSize: "200% 100%" }}
        />
      </div>
      <div className="font-mono text-xs text-muted-foreground animate-pulse">
        ....
      </div>
    </div>
  </div>
);

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <div
        className={`transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}
      >
        <PortfolioNavbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificationsSection />
          <WorkExperienceSection />
          <ContactSection />
        </main>
        <PortfolioFooter />
      </div>
    </>
  );
};

export default Index;
