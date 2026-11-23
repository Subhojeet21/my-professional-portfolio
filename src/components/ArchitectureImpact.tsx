import { TrendingUp, Shield, Gauge, Globe, Zap, Award, Target, Cpu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ArchitectureImpact = () => {
  const metrics = [
    {
      value: "51%",
      label: "Reduction in Critical Production Failures",
      description: "Through automated observability and Splunk-driven monitoring architecture",
      icon: Shield,
      color: "from-emerald-500 to-teal-500"
    },
    {
      value: "70%",
      label: "Platform Health Improvement",
      description: "Reducing platform-related issues and improving org health metrics",
      icon: Gauge,
      color: "from-sky-500 to-cyan-500"
    },
    {
      value: "9",
      label: "Country Solution Rollout",
      description: "Partner quoting solutions architected and deployed globally",
      icon: Globe,
      color: "from-indigo-500 to-blue-500"
    },
    {
      value: "Millions+",
      label: "Pipeline Visibility Recovered",
      description: "Reconciliation framework restoring orphaned opportunities",
      icon: TrendingUp,
      color: "from-violet-500 to-purple-500"
    },
    {
      value: "Business-Led",
      label: "Configuration Model",
      description: "Metadata-driven Sales Motion Rules Engine — changes without code deployment",
      icon: Zap,
      color: "from-amber-500 to-orange-500"
    },
    {
      value: "Multi-Tenant",
      label: "AI Governance Framework",
      description: "Compliance engine with cascading consent management",
      icon: Cpu,
      color: "from-rose-500 to-pink-500"
    }
  ];

  const outcomes = [
    {
      icon: Target,
      title: "Revenue Systems Architecture",
      points: [
        "Architected reconciliation framework restoring orphaned opportunities",
        "Recovered millions of dollars worth of pipeline visibility",
        "Enabled revenue operations teams to act on complete pipeline data"
      ]
    },
    {
      icon: Shield,
      title: "AI Governance Architecture",
      points: [
        "Architected multi-tenant compliance engine for Autodesk Assistant",
        "Salesforce + AWS architecture with established AI compliance governance",
        "Implemented account hierarchy-based cascading consent management"
      ]
    },
    {
      icon: Zap,
      title: "Operational Excellence",
      points: [
        "Reduced critical production failures by 51%",
        "Built automated observability and monitoring solutions using Splunk",
        "Established architecture-level security audits and least-privilege access reviews"
      ]
    },
    {
      icon: Cpu,
      title: "Platform Extensibility",
      points: [
        "Designed metadata-driven Sales Motion Rules Engine",
        "Enabled business-led configuration changes without code deployments",
        "Orchestrated partner quoting solutions across 9 countries"
      ]
    }
  ];

  return (
    <section id="impact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-block px-6 py-3 rounded-full text-xs font-semibold tracking-[0.14em] uppercase section-kicker">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse-dot mr-2" />
            Architecture Impact
          </div>
          <h2 className="section-title mb-6 text-center">
            Measurable Business Outcomes
          </h2>
          <p className="section-subtitle">
            Enterprise architecture decisions translated into quantifiable results across revenue operations, AI governance and platform reliability.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="relative glass-card-strong p-8 rounded-2xl hover-lift group border border-slate-700/50 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-500/10 to-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`bg-gradient-to-r ${metric.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <metric.icon className="text-white" size={22} />
                  </div>
                  <div className="text-4xl font-extrabold text-gradient">
                    {metric.value}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {metric.label}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Outcomes Detail Grid */}
        <div className="fade-in-section">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Enterprise Architecture Domains
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {outcomes.map((outcome, index) => (
              <div key={index} className="glass-card-strong p-8 rounded-2xl hover-lift border border-slate-700/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-sky-500 to-indigo-600 p-3 rounded-xl">
                    <outcome.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {outcome.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {outcome.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3 text-slate-300">
                      <span className="text-sky-400 mt-1.5 flex-shrink-0">▸</span>
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureImpact;