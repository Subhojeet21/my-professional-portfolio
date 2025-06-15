
import { Code, Users, Zap, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "13+ Years Experience",
      description: "Extensive experience in full-stack development and software architecture"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led cross-functional teams and mentored junior developers"
    },
    {
      icon: Zap,
      title: "Performance Focus",
      description: "Optimized applications serving millions of users with 99.9% uptime"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Recognized for technical excellence and innovative solutions"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">About Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A passionate software engineer dedicated to creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-section">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional workspace"
                className="rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          <div className="fade-in-section">
            <h3 className="text-3xl font-semibold text-white mb-6">
              Building the Future, One Line of Code at a Time
            </h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              With over 13 years in the software development industry, I've had the privilege 
              of working with startups, enterprises, and everything in between. My journey has 
              taken me from writing my first "Hello World" to architecting systems that handle 
              millions of requests daily.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              I specialize in modern web technologies, cloud computing, and agile methodologies. 
              My passion lies in solving complex problems with elegant solutions and building 
              products that make a real difference in people's lives.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="glass-card p-4 rounded-xl hover-lift group">
                  <div className="flex items-start space-x-3">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <highlight.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{highlight.title}</h4>
                      <p className="text-gray-400 text-sm">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
