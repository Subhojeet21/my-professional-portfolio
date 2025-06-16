
import { Code, Users, Zap, Award, Target, TrendingUp } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "13+ Years Experience",
      description: "Extensive experience in full-stack Salesforce development and software architecture",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led cross-functional teams and mentored junior developers",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Performance Focus",
      description: "Optimized applications in Salesforce platform focusing on performance and scalability",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Recognized for technical excellence and innovative solutions",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "15+", icon: Target },
    { label: "Team Members Led", value: "25+", icon: Users },
    { label: "Years of Experience", value: "13+", icon: TrendingUp },
    { label: "Technologies Mastered", value: "25+", icon: Code }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium tracking-wide mb-6">
            About Me
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6" style={{ lineHeight: '1.5' }}>
            Crafting Digital Excellence
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A passionate software engineer dedicated to creating exceptional digital experiences
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Story */}
          <div className="fade-in-section">
            <h3 className="text-4xl font-bold text-white mb-8 leading-tight">
              Building the Future, One Line of Code at a Time
            </h3>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                With over <span className="text-blue-400 font-semibold">13 years</span> in the software development industry, I've had the privilege 
                of working with startups, enterprises, and everything in between. My journey has 
                taken me from writing my first "Hello World" to architecting systems meant for performance and scalability.
              </p>
              <p>
                I specialize in <span className="text-purple-400 font-semibold">modern web technologies</span>, cloud computing, and agile methodologies. 
                My passion lies in solving complex problems with elegant solutions and building 
                products that make a real difference in people's lives.
              </p>
              <p>
                When I'm not coding, you'll find me mentoring upcoming developers, building dev tools, real-life projects, 
                or exploring the latest tech trends that are shaping our digital future.
              </p>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="fade-in-section">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl text-center hover-lift group border border-gray-700/50">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="text-white" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="fade-in-section">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-12">
            Key Highlights
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl hover-lift group border border-gray-700/50 text-center">
                <div className={`bg-gradient-to-r ${highlight.color} p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <highlight.icon className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-white mb-3 text-lg">{highlight.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
