
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Vue.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 98 },
        { name: "Angular", level: 80 }
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development", 
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Python", level: 88 },
        { name: "Java", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "Django", level: 82 },
        { name: "Spring Boot", level: 78 },
        { name: "REST APIs", level: 95 },
        { name: "GraphQL", level: 85 }
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "AWS", level: 92 },
        { name: "Azure", level: 80 },
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 85 },
        { name: "Redis", level: 82 }
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 95 },
        { name: "CI/CD", level: 90 },
        { name: "Terraform", level: 85 },
        { name: "Jenkins", level: 82 },
        { name: "Webpack", level: 88 },
        { name: "Linux", level: 90 },
        { name: "Monitoring", level: 85 },
        { name: "Testing", level: 88 }
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
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors duration-200">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
