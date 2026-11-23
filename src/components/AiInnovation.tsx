import { Code, Brain, Shield, Zap, Globe } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const AiInnovation = () => {
  const innovationPhilosophy = [
    {
      title: "Developer Productivity",
      description: "Simplifying complex workflows so engineers can focus on high-value architecture decisions rather than repetitive manual tasks."
    },
    {
      title: "Engineering Effectiveness",
      description: "Building tools that improve code quality, reduce review cycles, and accelerate delivery without compromising governance."
    },
    {
      title: "Simplifying Complex Workflows",
      description: "Abstracting platform complexity behind intuitive interfaces that make enterprise capabilities accessible to broader teams."
    },
    {
      title: "Knowledge Sharing",
      description: "Documenting patterns, lessons learned, and architecture decisions to multiply impact across the engineering organization."
    },
    {
      title: "Platform Excellence",
      description: "Extending the Salesforce platform with purpose-built tools that respect its governance model and security boundaries."
    },
    {
      title: "Continuous Innovation",
      description: "Treating innovation as a complement to enterprise architecture — not a distraction from it — to stay ahead of evolving business needs."
    }
  ];

  return (
    <section id="ai-innovation" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-block px-6 py-3 rounded-full text-xs font-semibold tracking-[0.14em] uppercase section-kicker">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse-dot mr-2" />
            Innovation Lab
          </div>
          <h2 className="section-title mb-6 text-center">
            Innovation Beyond Enterprise Delivery
          </h2>
          <p className="section-subtitle">
            Demonstrating product thinking, platform expertise, and engineering leadership through autonomous agents and platform tools.
          </p>
        </div>

        {/* Featured Innovation Project #1: ArchonDX */}
        <div className="fade-in-section mb-24">
          <div className="mb-8">
            <div className="inline-block px-6 py-3 rounded-full text-xs font-semibold tracking-[0.14em] uppercase section-kicker mb-4">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse-dot mr-2" />
              Featured Project #1
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              ArchonDX
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700/50">Autonomous Code Review Agent</span>
              <span className="bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700/50">AI-Assisted Engineering</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Positioning */}
            <div className="glass-card-strong rounded-2xl p-8 border border-slate-700/50">
              <h4 className="text-xl font-bold text-white mb-4">Positioning</h4>
              <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1 flex-shrink-0">▸</span>
                  <span>Engineering innovation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1 flex-shrink-0">▸</span>
                  <span>Product thinking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1 flex-shrink-0">▸</span>
                  <span>Architecture-first design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1 flex-shrink-0">▸</span>
                  <span>AI-assisted engineering exploration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1 flex-shrink-0">▸</span>
                  <span>Software quality enablement</span>
                </li>
              </ul>
            </div>

            {/* Problem Statement */}
            <div className="glass-card-strong rounded-2xl p-8 border border-slate-700/50">
              <h4 className="text-xl font-bold text-white mb-4">Problem Statement</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Code review is a critical quality gate but creates bottlenecks as engineering teams scale. Reviewers spend significant time on repetitive checks, slowing down delivery and delaying feedback to developers.
              </p>
            </div>
          </div>

          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            <div className="glass-card-strong rounded-2xl p-8 border border-slate-700/50">
              <h4 className="text-xl font-bold text-white mb-4">Vision</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                An AI-assisted code review agent that augments human reviewers by providing automated review assistance before final human review and approval — accelerating delivery while maintaining quality standards.
              </p>
            </div>
            <div className="glass-card-strong rounded-2xl p-8 border border-slate-700/50">
              <h4 className="text-xl font-bold text-white mb-4">Architecture Thinking</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Designed as an architecture-first system that integrates into existing CI/CD and version control workflows, providing review assistance as a layered capability rather than replacing human judgment.
              </p>
            </div>
            <div className="glass-card-strong rounded-2xl p-8 border border-slate-700/50">
              <h4 className="text-xl font-bold text-white mb-4">Workflow Design</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Automated review assistance surfaces issues before human review, with clear separation between AI-suggested findings and final human approval authority.
              </p>
            </div>
          </div>

          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            <div className="glass-card-strong rounded-2xl p-8 border border-slate-700/50">
              <h4 className="text-xl font-bold text-white mb-4">Technical Challenges</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Balancing automated assistance accuracy with human oversight, integrating into diverse repository and CI environments, and maintaining review context across code changes.
              </p>
            </div>
            <div className="glass-card-strong rounded-2xl p-8 border border-slate-700/50">
              <h4 className="text-xl font-bold text-white mb-4">Design Decisions</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Augmentation over replacement — AI assists, humans approve. Review findings are presented with confidence signals and actionable context to support informed reviewer decisions.
              </p>
            </div>
            <div className="glass-card-strong rounded-2xl p-8 border border-slate-700/50">
              <h4 className="text-xl font-bold text-white mb-4">Lessons Learned</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                AI-assisted review works best when positioned as a force multiplier for human reviewers, not a substitute. Trust is built through transparency about what the agent can and cannot detect.
              </p>
            </div>
          </div>

          <div className="mt-12 glass-card-strong rounded-2xl p-8 border border-slate-700/50">
            <h4 className="text-xl font-bold text-white mb-4">Future Roadmap</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Expanding language support, deepening integration with enterprise version control platforms, and refining review assistance patterns based on real-world reviewer feedback.
            </p>
          </div>
        </div>

        {/* Featured Innovation Project #2: Chrome Extension */}
        <div className="fade-in-section mb-24">
          <div className="mb-8">
            <div className="inline-block px-6 py-3 rounded-full text-xs font-semibold tracking-[0.14em] uppercase section-kicker mb-4">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse-dot mr-2" />
              Featured Project #2
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Retrieve Metadata/Data from Salesforce
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700/50">Google Chrome Extension</span>
              <span className="bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700/50">Salesforce Productivity Tool</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Positioning */}
            <div className="glass-card-strong rounded-2xl p-8 border border-slate-700/50">
              <h4 className="text-xl font-bold text-white mb-4">Positioning</h4>
              <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1 flex-shrink-0">▸</span>
                  <span>Deep Salesforce expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1 flex-shrink-0">▸</span>
                  <span>Platform architecture knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1 flex-shrink-0">▸</span>
                  <span>Metadata understanding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1 flex-shrink-0">▸</span>
                  <span>Developer enablement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1 flex-shrink-0">▸</span>
                  <span>Salesforce ecosystem contribution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1 flex-shrink-0">▸</span>
                  <span>Product ownership</span>
                </li>
              </ul>
            </div>

            {/* Why It Was Built */}
            <div className="glass-card-strong rounded-2xl p-8 border border-slate-700/50">
              <h4 className="text-xl font-bold text-white mb-4">Why It Was Built</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Salesforce developers and architects need fast, in-context access to metadata, data, and debug information without leaving the platform. Existing tooling often requires context switching or complex setup.
              </p>
            </div>
          </div>

          {/* Core Capabilities */}
          <div className="mb-12">
            <h4 className="text-xl font-bold text-white mb-6">Core Capabilities</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Metadata Exploration",
                  items: ["Retrieve Salesforce metadata"]
                },
                {
                  title: "Data Retrieval",
                  items: ["SOQL Support", "SOSL Support", "Query Builder support"]
                },
                {
                  title: "Debug Analysis",
                  items: ["Debug log analysis", "Performance analysis", "Execution flow visualization", "Log filtering"]
                },
                {
                  title: "Record Analysis",
                  items: ["Complete record inspection"]
                },
                {
                  title: "JSON Utilities",
                  items: ["JSON validation", "JSON formatting", "JSON to YAML conversion"]
                },
                {
                  title: "Utility Features",
                  items: ["Text delimiter utilities"]
                },
                {
                  title: "Apex Productivity",
                  items: ["Execute Anonymous Apex", "Debug statement filtering"]
                },
                {
                  title: "Salesforce Learning",
                  items: ["Salesforce release updates", "Code examples", "Feature explanations"]
                },
                {
                  title: "API Testing",
                  items: ["REST Client", "Apex Web Service Testing", "Salesforce REST API Testing"]
                },
                {
                  title: "Event Monitoring",
                  items: ["CDC Event Tracking", "Platform Event Tracking", "Streaming Events Monitoring"]
                },
                {
                  title: "Modern Platform Support",
                  items: ["Salesforce GraphQL API support"]
                }
              ].map((cap) => (
                <div key={cap.title} className="glass-card p-6 rounded-2xl border border-slate-700/50">
                  <h5 className="font-bold text-white mb-3">{cap.title}</h5>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    {cap.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-sky-400 mt-1 flex-shrink-0">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            <div className="glass-card-strong rounded-2xl p-8 border border-slate-700/50">
              <h4 className="text-xl font-bold text-white mb-4">Problems It Solves</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Simplifies metadata exploration, data retrieval, debugging, API testing, and platform analysis directly from the Salesforce interface — reducing context switching and accelerating development workflows.
              </p>
            </div>
            <div className="glass-card-strong rounded-2xl p-8 border border-slate-700/50">
              <h4 className="text-xl font-bold text-white mb-4">Product Design Decisions</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Designed as a Chrome extension for in-context access from any Salesforce page, with an intuitive UI that surfaces complex platform capabilities through a single click.
              </p>
            </div>
            <div className="glass-card-strong rounded-2xl p-8 border border-slate-700/50">
              <h4 className="text-xl font-bold text-white mb-4">Technical Architecture Overview</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Leverages Salesforce Tooling API, Metadata API, and standard APIs (REST, SOAP, GraphQL) to retrieve metadata, data, and debug information directly from the platform.
              </p>
            </div>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <div className="glass-card-strong rounded-2xl p-8 border border-slate-700/50">
              <h4 className="text-xl font-bold text-white mb-4">User Experience Considerations</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Intuitive interface accessible from any Salesforce page, with organized capability groupings that reduce cognitive load and surface relevant tools based on user context.
              </p>
            </div>
            <div className="glass-card-strong rounded-2xl p-8 border border-slate-700/50">
              <h4 className="text-xl font-bold text-white mb-4">Lessons Learned</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Platform tools succeed when they reduce friction rather than add it. In-context access from the user's existing workflow drives adoption more effectively than standalone tooling.
              </p>
            </div>
          </div>

          <div className="mt-12 glass-card-strong rounded-2xl p-8 border border-slate-700/50">
            <h4 className="text-xl font-bold text-white mb-4">Future Roadmap</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Expanding API coverage, deepening integration with newer Salesforce platform capabilities, and extending utility features based on developer feedback.
            </p>
          </div>
        </div>

        {/* Innovation Philosophy */}
        <div className="fade-in-section mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-3 rounded-full text-xs font-semibold tracking-[0.14em] uppercase section-kicker mb-4">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse-dot mr-2" />
              Innovation Philosophy
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Innovation as a Complement to Enterprise Architecture
            </h3>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              The Innovation Lab demonstrates continuous innovation and product thinking while maintaining Enterprise Architecture as the primary personal brand. Innovation complements architecture — it does not replace it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovationPhilosophy.map((item, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl border border-slate-700/50 hover-lift group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="text-white" size={20} />
                </div>
                <h4 className="font-bold text-white mb-3">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiInnovation;
