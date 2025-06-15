
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-section">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium tracking-wide mb-6">
            My Skillset
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive skill set built over 13+ years of professional development, focused on creating robust, scalable, and modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-slate-900/50 border-slate-800 fade-in-section flex flex-col">
              <CardHeader className="text-center p-3">
                <CardTitle className="text-xl md:text-2xl font-bold text-slate-200 tracking-wide inline-block relative">
                  {category.title}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 w-1/3 bg-blue-500"></div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow p-3 pt-1">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="group"
                    >
                      <div className="
                        bg-slate-800/40 border border-slate-700 rounded-lg p-2 h-16
                        flex items-center justify-center text-center
                        transition-all duration-300 ease-in-out
                        hover:bg-slate-700/60 hover:border-blue-500 hover:-translate-y-1
                        hover:shadow-lg hover:shadow-blue-500/10
                      ">
                        <span className="text-slate-300 font-medium text-xs sm:text-sm group-hover:text-white transition-colors duration-300">
                          {skill}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
