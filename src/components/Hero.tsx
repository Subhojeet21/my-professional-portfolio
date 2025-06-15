
import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="fade-in-section">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-gradient">
            John Smith
          </h1>
          <div className="h-16 mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate software engineer with 13+ years of experience building scalable 
            web applications and leading development teams. Specializing in full-stack 
            development, cloud architecture, and modern JavaScript frameworks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg hover-lift animate-glow">
              <a href="#contact" className="flex items-center gap-2">
                <Mail size={20} />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" className="glass-card border-blue-400/30 text-blue-400 hover:bg-blue-400/10 px-8 py-3 text-lg hover-lift">
              <a href="#projects" className="flex items-center gap-2">
                View My Work
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "mailto:john@example.com" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                className="p-3 glass-card rounded-full text-gray-400 hover:text-blue-400 transition-all duration-300 hover-lift"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
