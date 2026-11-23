import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail, Download, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    "Enterprise Salesforce Architect",
    "Solution Architect",
    "Principal Engineer",
    "Technical Architect",
    "Digital Transformation Leader",
    "Enterprise Integration Architect",
    "Platform Governance & Security Leader",
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let index = 0;

    const timer = setInterval(() => {
      if (index <= currentTitle.length) {
        setDisplayText(currentTitle.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2500);
      }
    }, 70);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-sky-500/8 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-indigo-500/8 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-radial from-sky-500/3 via-indigo-500/3 to-transparent rounded-full"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 hero-grid animate-grid" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="fade-in-section">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-[0.14em] uppercase section-kicker">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse-dot" />
              Principal Engineer @ Autodesk
            </span>
          </div>

          {/* Avatar */}
          <div className="flex justify-center mb-10">
            <Avatar className="w-40 h-40 border-4 border-sky-500/30 shadow-[0_0_0_1px_rgba(56,189,248,0.15),0_16px_48px_rgba(0,0,0,0.4)] bg-slate-900 animate-fade-in">
              <AvatarImage src="/my-professional-portfolio/docs/1666772693002.jpg" alt="Subhojeet Ghosh" />
              <AvatarFallback className="bg-transparent">
                <User className="w-20 h-20 text-slate-500" />
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 bg-gradient-to-r from-white via-sky-100 to-indigo-100 bg-clip-text text-transparent animate-gradient leading-[1.1]" style={{ lineHeight: '1.1' }}>
            Subhojeet Ghosh
          </h1>

          {/* Animated title */}
          <div className="h-20 mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gradient-animated" style={{ lineHeight: '1.4' }}>
              {displayText}
              <span className="animate-pulse text-sky-400 ml-2">|</span>
            </h2>
          </div>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
            Architecting enterprise-scale business transformation through Salesforce, integrations, governance, platform strategy, and technical leadership.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
            <Button asChild size="lg" className="bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white px-10 py-4 text-lg font-semibold hover-lift animate-glow shadow-[0_8px_32px_rgba(56,189,248,0.25)] rounded-xl">
              <a href="#case-studies" className="flex items-center gap-3">
                View Architecture Portfolio
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="glass-card border-sky-500/30 text-sky-400 hover:bg-sky-500/10 px-10 py-4 text-lg font-semibold hover-lift rounded-xl">
              <a href="#contact" className="flex items-center gap-3">
                Let's Connect
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="glass-card border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 px-8 py-4 text-lg font-semibold hover-lift rounded-xl">
              <a href="https://github.com/Subhojeet21/my-professional-portfolio/releases/download/v1.0.0/Subhojeet_Ghosh_Resume.pdf" download="Subhojeet_Ghosh_Resume.pdf" className="flex items-center gap-3">
                <Download size={20} />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Location / Role badge */}
          <div className="mt-8 glass-card px-6 py-3 rounded-2xl border border-slate-700/50 inline-block animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-4 text-sm text-slate-300">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Bengaluru, India
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-500/50" />
                Open to: Sr. Principal Engineer · Technical Architect · Solution Architect · Enterprise Transformation Consulting
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center space-x-6">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/subhojeet-ghosh-salesforce-professional/", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/Subhojeet21", label: "GitHub" },
              { icon: Mail, href: "mailto:ghoshsubhojeet21@gmail.com", label: "Email" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="group p-3.5 glass-card rounded-2xl text-slate-400 hover:text-sky-300 transition-all duration-300 hover-lift border border-slate-700/50 hover:border-sky-500/30"
                aria-label={social.label}
              >
                <social.icon size={24} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-slate-500">
            <span className="text-xs font-medium mb-2 tracking-widest uppercase">Explore</span>
            <ArrowDown size={28} className="text-sky-500/70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;