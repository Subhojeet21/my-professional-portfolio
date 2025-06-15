
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React", "TypeScript", "Next.js", "Vue.js", 
        "Tailwind CSS", "JavaScript", "HTML/CSS", "Angular"
      ],
    },
    {
      title: "Backend Development", 
      skills: [
        "Node.js", "Python", "Java", "Express.js",
        "Django", "Spring Boot", "REST APIs", "GraphQL"
      ],
    },
    {
      title: "Database & Cloud",
      skills: [
        "PostgreSQL", "MongoDB", "MySQL", "AWS",
        "Azure", "Docker", "Kubernetes", "Redis"
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git", "CI/CD", "Terraform", "Jenkins",
        "Webpack", "Linux", "Monitoring", "Testing"
      ],
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-block mb-6">
            <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">
              Technical Expertise
            </span>
            <div className="w-1/2 h-0.5 bg-blue-400 mx-auto mt-1"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set built over 13+ years of professional development, focused on creating robust, scalable, and modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="fade-in-section">
              {/* Category Header */}
              <div className="mb-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-200 tracking-wide inline-block relative">
                  {category.title}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 w-1/3 bg-blue-500"></div>
                </h3>
              </div>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="group"
                  >
                    <div className="
                      bg-slate-800/40 border border-slate-700 rounded-lg p-4 h-24
                      flex items-center justify-center text-center
                      transition-all duration-300 ease-in-out
                      hover:bg-slate-700/60 hover:border-blue-500 hover:-translate-y-1
                      hover:shadow-lg hover:shadow-blue-500/10
                    ">
                      <span className="text-slate-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                        {skill}
                      </span>
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
