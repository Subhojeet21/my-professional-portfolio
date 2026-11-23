import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#impact", label: "Architecture Impact" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "#expertise", label: "Architecture Expertise" },
    { href: "#credentials", label: "Architecture Credentials" },
    { href: "#ai-innovation", label: "Innovation Lab" },
    { href: "#knowledge-sharing", label: "Knowledge Sharing" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/subhojeet-ghosh-salesforce-professional/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Subhojeet21", label: "GitHub" },
    { icon: Mail, href: "mailto:ghoshsubhojeet21@gmail.com", label: "Email" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass border-b border-slate-700/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-5">
          {/* Logo / Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white tracking-tight hidden sm:block">
              Subhojeet Ghosh
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-sky-300 transition-all duration-300 font-medium relative group px-4 py-2.5 rounded-lg hover:bg-sky-500/5"
              >
                {item.label}
                <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-sky-500 to-indigo-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
              </a>
            ))}

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3 ml-4 border-l border-slate-700/50 pl-4">
              <a href="#contact" className="text-slate-300 hover:text-sky-300 font-medium px-4 py-2.5 rounded-lg hover:bg-sky-500/5 transition-all duration-300">
                Get in Touch
              </a>
              <Button asChild className="bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white px-5 py-2.5 text-sm font-semibold rounded-lg hover-lift">
                <a href="/docs/resume-architect-Subhojeet_Ghosh.pdf" download="Subhojeet_Ghosh_Resume.pdf">
                  Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-sky-300 transition-colors duration-200 p-2 rounded-lg hover:bg-sky-500/5"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 glass-card rounded-2xl mt-2 border border-slate-700/50 animate-fade-in-up">
            <div className="flex flex-col gap-1 mb-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="py-3 px-6 text-slate-300 hover:text-sky-300 hover:bg-sky-500/5 transition-all duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-slate-700/50 flex flex-col gap-3">
              <a href="#contact" className="text-center text-slate-300 hover:text-sky-300 font-medium py-3 px-6 rounded-lg hover:bg-sky-500/5 transition-all duration-200"
                onClick={() => setIsOpen(false)}>
                Get in Touch
              </a>
              <Button asChild className="bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white py-3 px-6 text-sm font-semibold rounded-lg hover-lift">
                <a href="/docs/resume-architect-Subhojeet_Ghosh.pdf" download="Subhojeet_Ghosh_Resume.pdf">
                  Download Resume
                </a>
              </Button>
            </div>
            <div className="mt-4 flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 glass-card rounded-xl text-slate-400 hover:text-sky-300 transition-all duration-300 hover-lift border border-slate-700/50 hover:border-sky-500/30"
                  aria-label={social.label}
                  onClick={() => setIsOpen(false)}
                >
                  <social.icon size={22} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;