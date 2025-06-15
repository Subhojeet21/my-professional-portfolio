
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Real-time Chat Application",
      description: "A scalable chat application supporting real-time messaging, file sharing, and video calls. Built with modern technologies and optimized for performance.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "Socket.io", "Express", "MongoDB", "Docker"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard for businesses to track KPIs, visualize data trends, and generate reports. Features interactive charts and real-time data updates.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "D3.js", "Python", "FastAPI", "Kubernetes"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Task Management System",
      description: "A collaborative project management tool with features like task assignment, progress tracking, time logging, and team communication. Designed for remote teams.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "TypeScript", "Prisma", "tRPC", "Vercel"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of recent projects demonstrating technical expertise and problem-solving skills
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card rounded-2xl overflow-hidden hover-lift group fade-in-section">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm rounded-full font-medium border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center space-x-2 hover-lift">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </Button>
                  <Button variant="outline" className="glass-card border-blue-400/30 text-blue-400 hover:bg-blue-400/10 flex items-center space-x-2 hover-lift">
                    <Github size={16} />
                    <span>Source Code</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
