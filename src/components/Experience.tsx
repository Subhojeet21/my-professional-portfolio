
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "2020 - Present",
      description: [
        "Led a team of 8 developers in building a microservices architecture serving 2M+ users",
        "Reduced system response time by 40% through optimization and caching strategies",
        "Implemented CI/CD pipelines that decreased deployment time from hours to minutes",
        "Mentored junior developers and conducted technical interviews"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "InnovateLabs",
      location: "Austin, TX",
      duration: "2017 - 2020",
      description: [
        "Developed and maintained 5+ web applications using React, Node.js, and PostgreSQL",
        "Collaborated with UX/UI designers to create responsive and accessible user interfaces",
        "Integrated third-party APIs and payment gateways for e-commerce platforms",
        "Participated in agile development processes and sprint planning"
      ]
    },
    {
      title: "Software Developer",
      company: "StartupXYZ",
      location: "Seattle, WA",
      duration: "2014 - 2017",
      description: [
        "Built the company's flagship product from MVP to production with 100K+ users",
        "Implemented real-time features using WebSocket technology",
        "Optimized database queries resulting in 60% performance improvement",
        "Collaborated with product managers to define technical requirements"
      ]
    },
    {
      title: "Junior Developer",
      company: "DevAgency Pro",
      location: "Portland, OR",
      duration: "2011 - 2014",
      description: [
        "Developed custom WordPress themes and plugins for client websites",
        "Learned modern JavaScript frameworks and best practices",
        "Assisted in database design and implementation",
        "Provided technical support and maintenance for existing projects"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of continuous learning and growth in software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="md:ml-20 bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 lg:mb-0">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-blue-600 font-semibold">
                      <Calendar size={16} className="mr-2" />
                      {exp.duration}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center mb-4 text-gray-600">
                    <div className="flex items-center mb-2 sm:mb-0 sm:mr-6">
                      <Building size={16} className="mr-2" />
                      {exp.company}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2 mt-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
