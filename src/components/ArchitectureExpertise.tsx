import { Cloud, Network, DollarSign, Database, Brain } from "lucide-react";

const ArchitectureExpertise = () => {
  const domains = [
    {
      icon: Cloud,
      title: "Salesforce Architecture",
      subtitle: "Enterprise CRM & Data Models",
      gradient: "from-sky-500 to-cyan-500",
      skills: [
        "Enterprise Data Model",
        "Sharing & Security",
        "Performance Optimization",
        "Territory Management",
        "Sandbox & Release Management"
      ],
      description: "Designing secure, scalable and performant Salesforce architectures optimized for enterprise-grade organizations."
    },
    {
      icon: Network,
      title: "Integration Architecture",
      subtitle: "Connected Enterprise Ecosystems",
      gradient: "from-indigo-500 to-blue-500",
      skills: [
        "REST & SOAP APIs",
        "AWS Lambda & EventBridge",
        "ERP Integrations",
        "Middleware Patterns",
        "Event-Driven Architecture"
      ],
      description: "Orchestrating seamless data flows between disparate enterprise systems and cloud platforms."
    },
    {
      icon: DollarSign,
      title: "Revenue Architecture",
      subtitle: "Quote-to-Cash Optimization",
      gradient: "from-violet-500 to-purple-500",
      skills: [
        "CPQ Implementation",
        "CLM Transformation",
        "Opportunity Lifecycle",
        "Revenue Operations",
        "Pipeline Analytics"
      ],
      description: "Architecting revenue systems that drive deal velocity, pipeline integrity and revenue visibility."
    },
    {
      icon: Database,
      title: "Data Architecture",
      subtitle: "Enterprise Data Governance",
      gradient: "from-emerald-500 to-teal-500",
      skills: [
        "Data Migrations",
        "Reconciliation",
        "Governance",
        "Data Quality",
        "Backup & Recovery"
      ],
      description: "Ensuring data integrity, compliance and accessibility across enterprise data landscapes."
    },
    {
      icon: Brain,
      title: "AI Architecture",
      subtitle: "Agentic & Intelligent Systems",
      gradient: "from-rose-500 to-pink-500",
      skills: [
        "AgentForce",
        "Claude Integration",
        "AI Governance",
        "Agentic Systems",
        "LLM Applications"
      ],
      description: "Building responsible, governed AI solutions that augment human capabilities and transform business processes."
    }
  ];

  return (
    <section id="expertise" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-block px-6 py-3 rounded-full text-xs font-semibold tracking-[0.14em] uppercase section-kicker">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse-dot mr-2" />
            Architecture Expertise
          </div>
          <h2 className="section-title mb-6 text-center">
            Capability Domains
          </h2>
          <p className="section-subtitle">
            Five interconnected architecture domains that form the backbone of enterprise digital transformation.
          </p>
        </div>

        {/* Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="group glass-card-strong rounded-2xl p-8 hover-lift border border-slate-700/50 transform hover:scale-102 transition-transform duration-300"
            >
              {/* Icon + Title */}
              <div className="mb-6">
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${domain.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <domain.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {domain.title}
                </h3>
                <p className="text-sm font-medium text-sky-400/80">
                  {domain.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                {domain.description}
              </p>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2">
                {domain.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-slate-800/60 text-slate-300 border border-slate-700/50 hover:border-sky-500/30 hover:text-sky-300 hover:bg-sky-500/5 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureExpertise;