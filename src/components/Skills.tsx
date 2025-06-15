
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Vue.js", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Python", level: 88 },
        { name: "Java", level: 85 },
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 87 },
        { name: "GraphQL", level: 85 }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 90 },
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 82 },
        { name: "CI/CD", level: 85 },
        { name: "Terraform", level: 80 },
        { name: "Monitoring", level: 85 }
      ]
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

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="glass-card rounded-2xl p-8 hover-lift fade-in-section">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out hover:shadow-lg hover:shadow-blue-500/50"
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `fadeInUp 1s ease-out ${skillIndex * 0.1}s both`
                        }}
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
