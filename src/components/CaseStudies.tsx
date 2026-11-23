import { Code, Database, Brain, Shield, Target } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "ai-compliance",
      title: "AI Compliance Engine",
      icon: Brain,
      color: "from-rose-500 to-pink-500",
      techStack: ["Salesforce Platform", "AWS", "AgentForce"],
      businessContext: "Enterprise AI adoption required governance and compliance controls across Salesforce and AWS middleware.",
      problemStatement: "Autodesk Assistant needed a multi-tenant compliance engine with consent management across account hierarchies.",
      architectureChallenges: "Multi-tenant isolation, cascading consent management, AI model audit trails.",
      solutionOverview: "Architected a multi-tenant compliance engine for Autodesk Assistant with automated policy enforcement and audit trails for AI model usage across Salesforce orgs.",
      governanceConsiderations: "Consent management frameworks, regulatory compliance, AI model oversight.",
      outcomes: ["Compliance coverage across account hierarchies", "Automated policy enforcement", "Audit trails for AI model usage"],
      lessonsLearned: "Governance must be designed as an enabler, not a bottleneck, for enterprise AI adoption."
    },
    {
      id: "sap-salesforce",
      title: "SAP-ERP to Salesforce Integration",
      icon: Database,
      color: "from-sky-500 to-cyan-500",
      techStack: ["SAP ERP", "AWS", "EventBridge", "Apex"],
      businessContext: "Enterprise required synchronized opportunity data between SAP ERP and Salesforce for accurate forecasting.",
      problemStatement: "One Order-One Opportunity synchronization between SAP ERP and Salesforce needed reliable, low-latency data flow.",
      architectureChallenges: "Data consistency across systems, minimizing latency, handling concurrency at enterprise scale.",
      solutionOverview: "Architected bi-directional synchronization between SAP ERP and Salesforce using AWS EventBridge and custom Apex triggers.",
      governanceConsiderations: "Data ownership, error handling, reconciliation processes.",
      outcomes: ["Improved forecasting reliability", "Accurate opportunity synchronization", "Real-time data consistency"],
      lessonsLearned: "Integration architecture must prioritize data consistency and observability over raw speed."
    },
    {
      id: "conga-clm",
      title: "Conga CLM Transformation",
      icon: Code,
      color: "from-violet-500 to-purple-500",
      techStack: ["Conga CLM", "Salesforce", "Apex"],
      businessContext: "Contract lifecycle management needed modernization to support GTM initiatives and platform modernization.",
      problemStatement: "Contract processing required business-led configuration without developer dependency for routine changes.",
      architectureChallenges: "Configurable workflows, approval hierarchies, automated redlining capabilities.",
      solutionOverview: "Implemented a metadata-driven Conga CLM solution with configurable workflows, approval hierarchies, and automated redlining capabilities.",
      governanceConsiderations: "Approval workflows, contract governance, change management.",
      outcomes: ["Business-led configuration changes", "Reduced developer dependency", "Streamlined contract lifecycle"],
      lessonsLearned: "Metadata-driven architecture empowers business users while reducing engineering bottlenecks."
    },
    {
      id: "opportunity-recovery",
      title: "Opportunity Recovery Framework",
      icon: Target,
      color: "from-sky-500 to-indigo-500",
      techStack: ["Salesforce", "Apex"],
      businessContext: "Orphaned quotes and opportunities were losing pipeline visibility, impacting revenue operations.",
      problemStatement: "Thousands of orphan quotes needed to be restored to active opportunities to recover pipeline visibility.",
      architectureChallenges: "Asynchronous reconciliation, error handling, data validation at scale.",
      solutionOverview: "Designed a reconciliation framework using Salesforce Data Loader, custom Apex batch jobs, and automated validation rules to restore orphaned opportunities.",
      governanceConsiderations: "Data quality, reconciliation accuracy, pipeline integrity.",
      outcomes: ["Restored orphaned opportunities to active pipeline", "Recovered pipeline visibility", "Proactive pipeline management"],
      lessonsLearned: "Reconciliation frameworks must be proactive, not reactive, to prevent pipeline leakage."
    },
    {
      id: "sales-motion",
      title: "Sales Motion Rules Engine",
      icon: Shield,
      color: "from-amber-500 to-orange-500",
      techStack: ["Salesforce", "Lightning Web Components", "Flow"],
      businessContext: "Sales teams needed business-driven configuration changes without code deployments.",
      problemStatement: "Quote-to-cash workflows required a point-and-click interface for business users to configure rules.",
      architectureChallenges: "Metadata-driven configuration, reduced developer dependency, business-led governance.",
      solutionOverview: "Built a metadata-driven Sales Motion Rules Engine allowing business users to configure quote-to-cash workflows through a point-and-click interface.",
      governanceConsiderations: "Business user governance, configuration change control, rule validation.",
      outcomes: ["Business-led configuration changes", "Eliminated developer dependency for routine changes", "Configurable quote-to-cash workflows"],
      lessonsLearned: "Architecture should enable business autonomy within governed guardrails."
    },
    {
      id: "partner-quoting",
      title: "Global Partner Quoting Solutions",
      icon: Target,
      color: "from-indigo-500 to-blue-500",
      techStack: ["Salesforce CPQ", "Partner Portal"],
      businessContext: "Partner quoting needed standardization across multiple countries with regional compliance variations.",
      problemStatement: "Partner quoting solutions needed to be architected and deployed globally across 9 countries.",
      architectureChallenges: "Multi-country deployment, regional compliance, standardized quoting processes.",
      solutionOverview: "Architected partner quoting solutions deployed across 9 countries, enabling standardized quoting processes while supporting regional variations and compliance requirements.",
      governanceConsiderations: "Regional compliance, multi-tenant data isolation, partner access controls.",
      outcomes: ["9-country solution rollout", "Standardized quoting processes", "Regional compliance support"],
      lessonsLearned: "Global architecture must balance standardization with regional flexibility."
    }
  ];

  return (
    <section id="case-studies" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-block px-6 py-3 rounded-full text-xs font-semibold tracking-[0.14em] uppercase section-kicker">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse-dot mr-2" />
            Architecture Portfolio
          </div>
          <h2 className="section-title mb-6 text-center">
            Architecture Case Studies
          </h2>
          <p className="section-subtitle">
            Enterprise-scale solutions delivering measurable business outcomes across revenue operations, AI governance and platform modernization.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="relative group glass-card-strong rounded-2xl overflow-hidden hover-lift border border-slate-700/50 transform transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Decorative gradient border */}
              <div className="absolute inset-0 rounded-2xl p-[1.5px] bg-gradient-to-r from-sky-500/30 to-indigo-600/30 mask-[linear-gradient(#000_0_0_content-box,_0_0_0)] -mt-[1.5px] -ml-[1.5px] group-hover:opacity-100 opacity-60 transition-opacity duration-300 pointer-events-none" />

              <div className="p-8 relative z-10">
                <div className="flex items-start gap-3 mb-6">
                  <div className={`bg-gradient-to-r ${study.color} p-2.5 rounded-xl shrink-0`}>
                    <study.icon className="text-white" size={20} />
                  </div>
                  <span className="text-xs font-bold tracking-tighter uppercase opacity-50">Architecture Case Study</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors duration-300">
                  {study.title}
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <h5 className="text-xs font-bold text-slate-500 uppercase tracking-tighter mb-1">Business Context</h5>
                    <p className="text-sm text-slate-400">{study.businessContext}</p>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-500 uppercase tracking-tighter mb-1">Solution Overview</h5>
                    <p className="text-sm text-slate-400">{study.solutionOverview}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h5 className="text-xs font-bold text-slate-500 uppercase tracking-tighter mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {study.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-slate-800/60 text-slate-300 border border-slate-700/50 uppercase tracking-tighter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div className="space-y-2 pt-6 border-t border-slate-700/30">
                  <h5 className="text-xs font-bold text-slate-500 uppercase tracking-tighter mb-3">Outcomes</h5>
                  <ul className="space-y-1">
                    {study.outcomes.map((outcome, outcomeIndex) => (
                      <li key={outcomeIndex} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-sky-400 mt-1 flex-shrink-0">▸</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
