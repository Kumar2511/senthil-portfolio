import { useState, useEffect, useRef } from "react";
import { Mail, Phone, Github, Linkedin, Send, MapPin, MessageSquare } from "lucide-react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    setLoading(false);

    const phone = "919363347500";
    const text = `📩 New Portfolio Enquiry\n\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n\n💬 Message:\n${formData.message}`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "senthil.s111002@gmail.com",
      href: "mailto:senthil.s111002@gmail.com",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 93633 47500",
      href: "tel:+919363347500",
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Thiruvarur, Tamil Nadu",
      href: null,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Kumar2511",
      href: "https://github.com/Kumar2511",
      color: "text-muted-foreground",
      bg: "bg-muted",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/senthil-kumar",
      href: "https://www.linkedin.com/in/senthil-kumar-b14b01290/",
      color: "text-primary",
      bg: "bg-primary/10",
    },
  ];

  return (
    <section id="contact" className="py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            // get in touch
          </p>
          <h2 className="section-heading text-gradient">Let's Connect</h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Have an opportunity, project, or just want to say hello? I'm always open to meaningful conversations.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4 scroll-reveal">
            <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              Contact Info
            </h3>
            {contacts.map((contact) => (
              <div
                key={contact.label}
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/40 border border-border hover:border-primary/30 hover:bg-card transition-all duration-300 group"
              >
                <div className={`w-10 h-10 rounded-lg ${contact.bg} flex items-center justify-center flex-shrink-0`}>
                  <contact.icon className={`w-5 h-5 ${contact.color}`} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-mono">{contact.label}</div>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm font-medium hover:text-primary transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium">{contact.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 scroll-reveal">
            <div className="glass-card glow-border p-6 md:p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-4 animate-scale-in">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-gradient mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thanks for reaching out! I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg border border-primary/40 text-sm font-medium hover:bg-primary/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-muted-foreground">
                      Your Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-muted-foreground">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-muted-foreground">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about the opportunity or project..."
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 hover:scale-[1.02] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-primary/30"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
