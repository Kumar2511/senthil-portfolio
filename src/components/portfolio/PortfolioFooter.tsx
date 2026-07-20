import { Github, Linkedin, Mail, Code2, Heart, ArrowUp } from "lucide-react";

const PortfolioFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary-gradient flex items-center justify-center">
                <Code2 className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg text-gradient">Senthilkumar</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Computer Science Engineering Student & Web Developer. Building secure, scalable, and user-friendly applications.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {["Home", "About", "Skills", "Projects", "Certifications", "Contact"].map((link) => (
                <button key={link} onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })} className="text-sm text-muted-foreground hover:text-primary transition-colors text-left">
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Connect</h4>
            <div className="space-y-3">
              <a href="mailto:senthil.s111002@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> senthil.s111002@gmail.com
              </a>
              <div className="flex items-center gap-3 pt-2">
                <a href="https://github.com/Kumar2511" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all" aria-label="GitHub">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/senthil-kumar-b14b01290/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="mailto:senthil.s111002@gmail.com" className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all" aria-label="Email">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} Senthilkumar. 
          </p>
          <div className="flex items-center gap-4">
            <button onClick={scrollToTop} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors group" aria-label="Scroll to top">
              Back to top <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
