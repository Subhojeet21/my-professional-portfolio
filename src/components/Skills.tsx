
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React", "TypeScript", "Next.js", "Vue.js", 
        "Tailwind CSS", "JavaScript", "HTML/CSS", "Angular"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development", 
      skills: [
        "Node.js", "Python", "Java", "Express.js",
        "Django", "Spring Boot", "REST APIs", "GraphQL"
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Database & Cloud",
      skills: [
        "PostgreSQL", "MongoDB", "MySQL", "AWS",
        "Azure", "Docker", "Kubernetes", "Redis"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git", "CI/CD", "Terraform", "Jenkins",
        "Webpack", "Linux", "Monitoring", "Testing"
      ],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium tracking-wide mb-6">
            Technical Expertise
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set built over 13+ years of professional development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="glass-card rounded-3xl p-8 hover-lift fade-in-section border border-gray-700/50 group">
              <div className="flex items-center mb-8">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.gradient} mr-4`}></div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="group/skill relative"
                  >
                    <div className={`
                      h-16 rounded-xl bg-gradient-to-r ${category.gradient} 
                      flex items-center justify-center text-white font-semibold text-sm
                      shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105
                      cursor-pointer border border-white/10 hover:border-white/30
                      backdrop-blur-sm relative overflow-hidden
                    `}>
                      {/* Subtle pattern overlay */}
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                      
                      <span className="relative z-10 font-medium tracking-wide">{skill}</span>
                      
                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Enhanced glow effect on hover */}
                    <div className={`
                      absolute inset-0 h-16 rounded-xl bg-gradient-to-r ${category.gradient}
                      opacity-0 group-hover/skill:opacity-40 transition-all duration-300
                      blur-xl -z-10 scale-110
                    `}></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-25 animate-float" style={{animationDelay: '4s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
