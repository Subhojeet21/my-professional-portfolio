
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React", "TypeScript", "Next.js", "Vue.js", 
        "Tailwind CSS", "JavaScript", "HTML/CSS", "Angular"
      ],
      color: "blue"
    },
    {
      title: "Backend Development", 
      skills: [
        "Node.js", "Python", "Java", "Express.js",
        "Django", "Spring Boot", "REST APIs", "GraphQL"
      ],
      color: "blue"
    },
    {
      title: "Database & Cloud",
      skills: [
        "PostgreSQL", "MongoDB", "MySQL", "AWS",
        "Azure", "Docker", "Kubernetes", "Redis"
      ],
      color: "blue"
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git", "CI/CD", "Terraform", "Jenkins",
        "Webpack", "Linux", "Monitoring", "Testing"
      ],
      color: "blue"
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium tracking-wide mb-8">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            Technical Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A comprehensive skill set built over 13+ years of professional development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="fade-in-section">
              {/* Category Header */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-1 h-8 bg-blue-500 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    {category.title}
                  </h3>
                </div>
                <div className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-transparent"></div>
              </div>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="group relative"
                  >
                    <div className="
                      bg-white border border-slate-200 rounded-lg p-4 h-16
                      flex items-center justify-center
                      shadow-sm hover:shadow-md
                      transition-all duration-300 ease-out
                      hover:border-blue-300 hover:-translate-y-1
                      cursor-pointer relative overflow-hidden
                    ">
                      {/* Subtle hover background */}
                      <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Skill text */}
                      <span className="relative z-10 text-slate-700 font-medium text-sm text-center leading-tight group-hover:text-blue-700 transition-colors duration-300">
                        {skill}
                      </span>
                      
                      {/* Subtle left border accent */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-lg"></div>
                    </div>
                    
                    {/* Enhanced shadow on hover */}
                    <div className="absolute inset-0 bg-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
            <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
