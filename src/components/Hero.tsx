
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            John Smith
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-8">
            Senior Software Engineer
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate software engineer with 13+ years of experience building scalable 
            web applications and leading development teams. Specializing in full-stack 
            development, cloud architecture, and modern JavaScript frameworks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              <a href="#contact" className="flex items-center gap-2">
                <Mail size={20} />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              <a href="#projects" className="flex items-center gap-2">
                View My Work
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={32} />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={32} />
            </a>
            <a href="mailto:john@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={32} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-600" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
