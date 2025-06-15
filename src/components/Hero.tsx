
import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail, Download, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    "Senior Software Engineer",
    "Full-Stack Developer", 
    "Cloud Architect",
    "Team Lead"
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
        }, 2000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 via-purple-500/5 to-transparent rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="fade-in-section">
          {/* Professional greeting */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium tracking-wide">
              Welcome to my portfolio
            </span>
          </div>
          
          <div className="flex justify-center mb-8">
            <Avatar className="w-40 h-40 border-4 border-blue-500/30 shadow-lg bg-slate-900">
              <AvatarImage src="/placeholder.svg" alt="Subhojeet Ghosh" />
              <AvatarFallback className="bg-transparent">
                <User className="w-20 h-20 text-slate-400" />
              </AvatarFallback>
            </Avatar>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-gradient leading-tight">
            Subhojeet Ghosh
          </h1>
          
          <div className="h-20 mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {displayText}
              <span className="animate-pulse text-blue-400">|</span>
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Passionate software engineer with <span className="text-blue-400 font-semibold">13+ years</span> of experience building scalable 
            web applications and leading development teams. Specializing in full-stack 
            development, cloud architecture, and modern JavaScript frameworks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold hover-lift animate-glow shadow-2xl shadow-blue-500/25 rounded-xl">
              <a href="#contact" className="flex items-center gap-3">
                <Mail size={22} />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" className="glass-card border-blue-400/30 text-blue-400 hover:bg-blue-400/10 px-10 py-4 text-lg font-semibold hover-lift rounded-xl">
              <a href="#projects" className="flex items-center gap-3">
                View My Work
              </a>
            </Button>
            <Button variant="outline" size="lg" className="glass-card border-purple-400/30 text-purple-400 hover:bg-purple-400/10 px-8 py-4 text-lg font-semibold hover-lift rounded-xl">
              <a href="#" className="flex items-center gap-3">
                <Download size={20} />
                Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-8">
            {[
              { icon: Github, href: "https://github.com/Subhojeet21", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/subhojeet-ghosh-salesforce-professional/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:john@example.com", label: "Email" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                className="group p-4 glass-card rounded-2xl text-gray-400 hover:text-blue-400 transition-all duration-300 hover-lift border border-gray-700/50 hover:border-blue-400/30"
                aria-label={social.label}
              >
                <social.icon size={28} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <ArrowDown size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
