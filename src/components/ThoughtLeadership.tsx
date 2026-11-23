import { Book, Video, Users, FileText, Github, ExternalLink } from "lucide-react";

const ThoughtLeadership = () => {
  const channels = [
    {
      icon: Book,
      title: "Architecture Articles",
      subtitle: "Enterprise architecture insights and patterns",
      gradient: "from-sky-500 to-cyan-500",
      points: [
        "Salesforce integration architecture patterns",
        "Enterprise AI governance frameworks",
        "Multi-tenant compliance design",
        "Revenue operations architecture"
      ]
    },
    {
      icon: Video,
      title: "YouTube & Talks",
      subtitle: "Deep-dive architecture content",
      gradient: "from-indigo-500 to-blue-500",
      points: [
        "AgentForce implementation walkthroughs",
        "Salesforce-AWS integration patterns",
        "AI governance best practices",
        "Enterprise data architecture deep-dives"
      ]
    },
    {
      icon: Users,
      title: "Community Contributions",
      subtitle: "Salesforce & enterprise architecture community",
      gradient: "from-violet-500 to-purple-500",
      points: [
        "Architecture review contributions",
        "Mentorship for emerging architects",
        "Technical writing for community",
        "Architecture pattern libraries"
      ]
    },
    {
      icon: FileText,
      title: "AI Experiments",
      subtitle: "Research and experimentation",
      gradient: "from-emerald-500 to-teal-500",
      points: [
        "Agentic system prototypes",
        "LLM application patterns",
        "AI governance tooling",
        "Prompt engineering strategies"
      ]
    },
    {
      icon: Github,
      title: "Open Source Work",
      subtitle: "Architecture tooling and libraries",
      gradient: "from-amber-500 to-orange-500",
      points: [
        "Salesforce platform extensions",
        "Integration middleware tooling",
        "Architecture validation patterns",
        "Enterprise design systems"
      ]
    }
  ];

  return (
    <section id="thought-leadership" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-block px-6 py-3 rounded-full text-xs font-semibold tracking-[0.14em] uppercase section-kicker">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse-dot mr-2" />
            Thought Leadership
          </div>
          <h2 className="section-title mb-6 text-center">
            Shaping the Future of Enterprise Architecture
          </h2>
          <p className="section-subtitle">
            Contributing to the enterprise architecture community through articles, talks, open source and AI experimentation.
          </p>
        </div>

        {/* Thought Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className="relative glass-card-strong rounded-2xl p-8 hover-lift border border-slate-700/50 transform hover:scale-102 transition-transform duration-300 group"
            >
              <div className="mb-6">
                <div className={`inline-flex p-2.5 rounded-lg ${channel.gradient} group-hover:scale-110 transition-transform duration-300`}>
                  <channel.icon className="text-white" size={22} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors duration-300">
                {channel.title}
              </h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                {channel.subtitle}
              </p>

              <div className="space-y-3">
                {channel.points.map((point, pointIndex) => (
                  <span
                    key={pointIndex}
                    className="flex items-start gap-2.5 text-sm text-slate-300"
                  >
                    <span className="text-sky-400 mt-1 flex-shrink-0">▸</span>
                    <span>{point}</span>
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

export default ThoughtLeadership;