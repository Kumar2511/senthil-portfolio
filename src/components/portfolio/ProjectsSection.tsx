import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import expenseImg from "@/assets/project-expense.jpg";
import emmesImg from "@/assets/project-emmes.png";
import fundTrackerImg from "@/assets/project-fundtracker.png";
import dlpsImg from "@/assets/project-dlps.png";

const projects = [
  {
    id: 1,
    title: "Online Banking Security System",
    description:
      "A secure banking web application implementing hybrid cryptography and multi-factor authentication to protect user data and transactions.",
    image: null,
    tags: ["HTML", "CSS", "Python"],
    category: "Full Stack",
    github: "https://github.com/Kumar2511",
    
    featured: true,
  },
  {
    id: 2,
    title: "Complaint Box System",
    description:
      "A full-stack complaint management system with admin dashboard, complaint tracking, categorization, and status management for efficient resolution.",
    image: null,
    tags: ["HTML", "CSS", "Node.js", "MongoDB"],
    category: "Full Stack",
    github: "https://github.com/Kumar2511",
    featured: true,
  },
  {
    id: 3,
    title: "Expense Calendar",
    description:
      "A smart expense tracking application that tracks daily, monthly, and yearly expenses. Helps in budget planning and expense analysis with visual insights.",
    image: expenseImg,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    github: "https://github.com/Kumar2511",
    live: "https://expenses-calendar-teal.vercel.app/",
    featured: false,
  },
  {
    id: 4,
    title: "Emmes Industries",
    description:
      "A professional business website for Emmes Industries, showcasing their products and services with a modern, responsive design.",
    image: emmesImg,
    tags: ["Web Design", "Responsive", "Business"],
    category: "Web",
    github: "https://github.com/Kumar2511",
    live: "https://www.emmesindustries.in",
    featured: true,
  },
  {
    id: 5,
    title: "Friend's Fund Tracker",
    description:
      "A collaborative expense tracking app to manage shared expenses among friends. Track contributions, split bills, and settle balances easily.",
    image: fundTrackerImg,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    github: "https://github.com/Kumar2511",
    live: "https://expense-tracker-pp9s.vercel.app/",
    featured: true,
  },
  {
    id: 6,
    title: "Digital Land Purchasing System",
    description:
      "A digital platform for land purchasing and registration, streamlining the process of buying, selling, and managing land records with secure transactions.",
    image: dlpsImg,
    tags: ["HTML", "CSS", "JavaScript", "Node.js"],
    category: "Full Stack",
    github: "https://github.com/Kumar2511",
    live: "https://dlps-eat8pgb2t-kumar2511s-projects.vercel.app/",
    featured: true,
  },
];

const categories = ["All", "Full Stack", "Web"];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");

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

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-section-alt" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-reveal">
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">// my work</p>
          <h2 className="section-heading text-gradient">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A showcase of real-world applications I've built — from full-stack systems to creative web projects.
          </p>
        </div>

        <div className="scroll-reveal flex flex-wrap gap-3 justify-center mb-10">
          <Filter className="w-5 h-5 text-muted-foreground self-center" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-secondary border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="scroll-reveal group glass-card glow-border overflow-hidden hover:scale-[1.02] transition-all duration-300"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                ) : (
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl font-display font-bold text-primary/30">{project.title.charAt(0)}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                {project.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-primary/80 text-primary-foreground text-xs font-mono backdrop-blur-sm">★ Featured</span>
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/60 backdrop-blur-sm">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors">
                    <Github className="w-4 h-4" /> Code
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display font-semibold text-lg leading-tight">{project.title}</h3>
                  <span className="badge-tech flex-shrink-0">{project.category}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge-tech">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-2 border-t border-border/50">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-4 h-4" /> Source Code
                  </a>
                  {project.live && (
                    <>
                      <span className="text-border">•</span>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 scroll-reveal">
          <a href="https://github.com/Kumar2511" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/40 text-foreground font-medium hover:border-primary hover:bg-primary/10 transition-all duration-200 hover:scale-105">
            <Github className="w-5 h-5" /> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
