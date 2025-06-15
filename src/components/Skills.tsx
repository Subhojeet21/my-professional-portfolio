
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "HTML/CSS", "Tailwind CSS", "JavaScript", "Angular"]
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Python", "Java", "Express.js", "Django", "Spring Boot", "REST APIs", "GraphQL"]
    },
    {
      title: "Database & Cloud",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "AWS", "Azure", "Docker", "Kubernetes", "Redis"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "CI/CD", "Terraform", "Jenkins", "Webpack", "Linux", "Monitoring", "Testing"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive skill set built over 13+ years of professional development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="glass-card rounded-2xl p-8 hover-lift fade-in-section">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-3 text-center border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                    <span className="text-gray-300 font-medium">{skill}</span>
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
