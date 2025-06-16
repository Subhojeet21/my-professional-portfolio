
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Principal Engineer",
      company: "Autodesk",
      location: "Bengaluru, India",
      duration: "2020 - Present",
      description: [
        "Working as a technical lead and architect for one of the salesengineering teams at Autodesk.",
        "Responsible for creating and reviewing the technical architecture of the solutions, leading the development team, code reviews, ensuring development best practices are followed, performance improvement of the applications, cross-team communications, and interacting with the stakeholders.",
        "Led a team of developers for one of the critical projects atAutodesk which contributed to the company's transition to a new buying experience model for its customers as a part of GTM strategy.",
        "Active contributor of a team responsible for improving theperformance of various legacy applications in Salesforceplatform which was impacting the overall org health. Weachieved around 70% reduction of platform related issuesalready as an outcome.",
        "Architected and developed the complete CLM flow aligning withthe current CPQ process and business requirements forprocessing red-lining quotes for the customers. This streamlinedthe process of maintaining the contract lifecycle withnegotiations."
      ]
    },
    {
      title: "Lead Consultant",
      company: "Cloudaction",
      location: "Pune, India",
      duration: "2018 - 2020",
      description: [
        "mplemented the security model and sharing settings for one ofthe in-house applications in Salesforce platform which is used byhigher management at BMC.",
        "Completed all the major development using LightningExperience, Apex and out of the box features of Salesforce for anapplication created in Salesforce platform as a part of Siebelretirement process in BMC.",
        "Created an interface in Salesforce, which is compatible in bothSalesforce Classic & Lightning Experience for one of theintegration projects where the application can easily integratewith the WebMethods integration server using SOAP API at BMC.",
        "Enhanced and fixed all the major issues and critical functionalityglitches in one of the existing applications built using Apex,Visualforce and jquery which is to be used by the employees forregistering and reporting the hours spent on voluntary activitiesin/outside BMC.",
        "Identified, reviewed, revamped & resolved all the critical issuesfollowed by successfully deploying the code base as a singledeveloper by getting involved in the last critical phase of one ofthe integration projects for 'Entrust Datacard'.",
        "Trained the in-house junior developers on customization inLightning experience using lightning components and events.",
        "Led projects during Lightning roll out process by assisting thedevelopers in effectively migrating to Lightning experience fromSalesforce Classic."
      ]
    },
    {
      title: "Module Lead",
      company: "Persistent Systems",
      location: "Nagpur, India",
      duration: "2015 - 2018",
      description: [
        "Successfully implemented features in one of the activeapplications developed in Service Cloud for our client 'SyneosHealth' which helped in boosting agent productivity whileserving the patients and health care professionals.",
        "Revamped and restructured one of the critical functionalitieswhich led to the automatic creation, prioritization of calls for thiscall center application with minimum manual intervention in theprocess and proper report generation.",
        "Created a java application which is used to transfer the feed filesfrom Salesforce to SFTP server and vice versa, scheduled it withTask Scheduler. Designed and implemented the encryption,decryption logic.",
        "Created patient tracker report using Visualforce and Apex for theclient which helps the Admin to easily view and download client specific HIPPA compliant reports for the patients from thesystem, accumulating data from multiple related and unrelatedobjects based on user specified filters and date ranges from asingle screen in Salesforce org.",
        "Designed and created an interface to send the real time datafrom Salesforce to Snaplogic server using process builder andREST API.",
        "Created an interface to send the order information fromSalesforce and receive the status in real time from an externalclient's order management server using REST API."
      ]
    },
    {
      title: "Systems Engineer",
      company: "Tata Consultancy Services",
      location: "Kolkata, India",
      duration: "2012 - 2015",
      description: [
        "Worked and customized the Claims module of TCS Bancsproduct for Insurance for one of the clients, “NationalEmployment Saving Trust“ in Java 6 and Spring framework.",
        "Developed a user-friendly and fully interactive user interfaceusing Jsf which is used to capture the illness quotient of any userin the system.",
        "Built and optimized the backend batch processes in Java in theClaims module of the product. to send automatic notifications tothe users who are approaching their retirement notifying themabout various annuity options available to them post retirementleading them to take necessary and timely actions resulting inincreased customer trust.",
        "Revamped one of the backend functionalities in Java in theClaims module of the product, which helped in streamlining theprocess of claiming and processing the returns on userretirement from service."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium tracking-wide mb-6">
            My Journey
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A journey of continuous learning and growth in software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start fade-in-section">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900 shadow-lg z-10"></div>
                
                <div className="md:ml-20 glass-card rounded-xl p-8 hover-lift w-full group">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 lg:mb-0 group-hover:text-blue-400 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-blue-400 font-semibold">
                      <Calendar size={16} className="mr-2" />
                      {exp.duration}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center mb-4 text-gray-400">
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
                      <li key={itemIndex} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-3 mt-2 flex-shrink-0">•</span>
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
