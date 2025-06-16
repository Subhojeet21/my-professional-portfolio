import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Retrieve Metadata/Data from Salesforce –A google chrome extension",
      description: "Retrieve any metadata/data from your Salesforceorg. Get detailed analysis of your debug logs inone click! Lightning Compatible. Also get a rangeof other features in just one click on an intuitiveUI from any Salesforce page.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["JavaScript", "Html", "Css", "Tooling API"],
      liveUrl: "https://chromewebstore.google.com/detail/retrieve-metadatadata-fro/jghefmkfgkoaimdcnobhidjbjbbebdkp"
      //githubUrl: "https://github.com"
    },
    {
      title: "Tic-Tac-Toe",
      description: "This is an online version of a very popular gamethat we used to play using pen & paper. I havedeveloped this multiplayer game completely inthe Salesforce Lightning Platform, where twoplayers can play this game in real time in anySalesforce org.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Salesforce Lightning Experience","Streaming API", "Apex"],
      liveUrl: "https://techietips99.wordpress.com/2019/02/08/tic-tac-toe-an-online-version-of-the-game-in-salesforce-lightning-platform/"
      //githubUrl: "https://github.com"
    },
    {
      title: "Finolator",
      description: "One stop for all your financial calculations. Anapp that helps you to be aware of all yourfinancial needs/goals. Key Features: Loan EMIcalculator, SIP calculator, annuity calculations,present value calculations, maturity amountcalculations, etc. for Android devices.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Salesforce Lightning Experience","Apex", "Salesforce Mobile SDK plugin", "AndroidSDK"],
      liveUrl: "https://techietips99.wordpress.com/2020/05/24/finolator-a-financial-calculator/"
      //githubUrl: "https://github.com"
    },
    {
      title: "Khelo-G",
      description: "A Salesforce hybrid remote application built withSalesforce mobile SDK for android mobiledevices. This is the extension of my app 'Predict & Compare' and is meant for android mobile devices only at the moment with improved user experience, new UI for mobile users and betteranalytics.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Salesforce Lightning Experience","Integration, Apex", "Salesforce Community Cloud","Salesforce Mobile SDK"],
      liveUrl: "https://www.youtube.com/watch?v=ZeqSSTcMYDY"
      //githubUrl: "https://github.com"
    },
    {
      title: "Easy Maintenance App",
      description: "A Salesforce application is used to track accounts & maintenance, automate process flows, and generate analytical reports automatically for better monitoring & tracking expenses for any housing society.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Salesforce Lightning Experience","Salesforce Community Cloud", "Apex"],
      liveUrl: "https://www.youtube.com/watch?v=gnjLYCstEYM"
    },
    {
      title: "Top Headlines Now",
      description: "A Salesforce application with a new flavor. Get allthe top headlines of the country from differentcategories (science, politics, sports,entertainment, health, etc.) from differentsources in one place. News gets updated every 2hours, assuring you of the updated news of thehour almost always. You can also share the newsacross top social media platforms and also emailit to your contacts.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Salesforce Lightning Experience","Salesforce Experience Cloud", "Apex", "REST API"],
      liveUrl: "https://ap2mycompany-dev-ed.my.site.com/NewsShare/"
    },
    {
      title: "Slack Reply Generator",
      description: "This application caters to one of my use caseswhere I would like to integrate Slack with myapplication, which generates custom auto-replysuggestions in Slack UI and posts the user-selected reply to the same Slack channel as aSlack bot. This helps users in the channel to replywith a single tap without going through theoverhead of typing the message during busyhours of the day.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Slack", "Python", "AWS", "Rest API"],
      liveUrl: "https://techietips99.wordpress.com/2022/05/24/slackreplygenerator-integrate-slack-with-your-application/"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium tracking-wide mb-6">
            My Work
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of recent projects demonstrating technical expertise and problem-solving skills
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card rounded-2xl overflow-hidden hover-lift group fade-in-section">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm rounded-full font-medium border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center space-x-2 hover-lift">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </Button>
                  </a>
                  {/*<Button variant="outline" className="glass-card border-blue-400/30 text-blue-400 hover:bg-blue-400/10 flex items-center space-x-2 hover-lift">
                    <Github size={16} />
                    <span>Source Code</span>
                  </Button>*/}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
