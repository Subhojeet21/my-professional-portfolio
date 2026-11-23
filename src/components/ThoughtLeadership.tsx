import { Book, Video, GraduationCap, Users, ExternalLink } from "lucide-react";

const KnowledgeSharing = () => {
  const channels = [
    {
      icon: Book,
      title: "Technical Blog",
      subtitle: "techietips99.wordpress.com",
      gradient: "from-sky-500 to-cyan-500",
      href: "https://techietips99.wordpress.com/",
      points: [
        "Documenting technical learnings and Salesforce experiences",
        "Platform insights and implementation challenges",
        "Solutions from real-world implementations",
        "Technical best practices and lessons learned"
      ]
    },
    {
      icon: Video,
      title: "YouTube Channel",
      subtitle: "@SubhojeetGhosh",
      gradient: "from-indigo-500 to-blue-500",
      href: "https://www.youtube.com/@SubhojeetGhosh",
      points: [
        "Technology-related educational content",
        "Learning resources and tutorials",
        "Featured technical videos",
        "Platform walkthroughs and demos"
      ]
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning Journey",
      subtitle: "Ongoing professional development",
      gradient: "from-violet-500 to-purple-500",
      points: [
        "MBA (Technology) — IIT Jodhpur",
        "Salesforce Certifications",
        "AWS Certification",
        "Professional Scrum Master I",
        "Lean Six Sigma Black Belt",
        "Salesforce Platform Evolution",
        "Enterprise Architecture Practices",
        "Cloud Technologies",
        "Digital Transformation Trends"
      ]
    },
    {
      icon: Users,
      title: "Salesforce Ecosystem Engagement",
      subtitle: "Sustained community participation",
      gradient: "from-emerald-500 to-teal-500",
      points: [
        "Salesforce Trailhead Ranger achievements",
        "Continuous Salesforce learning",
        "Architecture credential progression",
        "Community-oriented mindset"
      ]
    }
  ];

  return (
    <section id="knowledge-sharing" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-block px-6 py-3 rounded-full text-xs font-semibold tracking-[0.14em] uppercase section-kicker">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse-dot mr-2" />
            Knowledge Sharing & Community Contributions
          </div>
          <h2 className="section-title mb-6 text-center">
            Sharing Knowledge, Growing Continuously
          </h2>
          <p className="section-subtitle">
            Committed to continuous learning, knowledge sharing, professional
            growth, and contributions to the Salesforce ecosystem.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className="relative glass-card-strong rounded-2xl p-8 hover-lift border border-slate-700/50 transform hover:scale-102 transition-transform duration-300 group"
            >
              <div className="mb-6">
                <div
                  className={`inline-flex p-2.5 rounded-lg ${channel.gradient} group-hover:scale-110 transition-transform duration-300`}
                >
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

        {/* Knowledge Sharing Philosophy */}
        <div className="mt-20 fade-in-section">
          <div className="glass-card p-10 rounded-2xl border border-slate-700/50 max-w-3xl mx-auto text-center">
            <p className="text-lg text-slate-300 leading-relaxed italic mb-6">
              "Technology expertise becomes more valuable when shared. Through
              writing, learning, certifications, and community-focused
              contributions, I continuously invest in expanding my knowledge
              while helping others navigate complex technology platforms and
              enterprise solutions."
            </p>
            {channels.map((channel) => (
              <a
                key={channel.title}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sky-400 font-medium text-sm hover:text-sky-300 transition-colors"
              >
                <ExternalLink size={16} /> {channel.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSharing;
