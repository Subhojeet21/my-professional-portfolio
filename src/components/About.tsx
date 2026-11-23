import { Code, Users, Zap, Award, Target, TrendingUp, Globe, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Enterprise Salesforce Architect",
      description: "Architecting secure, scalable Salesforce platforms for enterprise-scale digital transformation.",
      color: "from-sky-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "Technical Leadership",
      description: "Leading architecture reviews, mentoring engineers, and driving cross-functional alignment.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Platform Reliability",
      description: "Reducing critical production incidents and improving platform health at scale.",
      color: "from-emerald-500 to-emerald-400"
    },
    {
      icon: Award,
      title: "Architecture Credentials",
      description: "Salesforce Architect certifications spanning Application, Data, and Sharing & Visibility domains.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Business Outcomes",
      description: "Delivering measurable results across revenue operations, AI governance, and platform modernization.",
      color: "from-sky-500 to-violet-500"
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Architecting partner quoting solutions and enterprise integrations across 9 countries.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { label: "Years in Enterprise Architecture", value: "14+", icon: Target },
    { label: "Salesforce Architect Certifications", value: "9+", icon: Award },
    { label: "Architecture Domains", value: "5", icon: Code },
    { label: "Countries Served", value: "9", icon: Globe }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-block px-6 py-3 rounded-full text-xs font-semibold tracking-[0.14em] uppercase section-kicker">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse-dot mr-2" />
            About Me
          </div>
          <h2 className="section-title mb-6 text-center">
            Enterprise Architect. Strategist. Transformational Leader.
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Architecting enterprise-scale business transformation through Salesforce, integrations, governance, platform strategy, and technical leadership.
          </p>
        </div>

        {/* Career Story - two column */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Narrative */}
          <div className="fade-in-section">
            <h3 className="text-4xl font-bold text-white mb-6">
              From Engineering to Enterprise Architecture
            </h3>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                After 14+ years in enterprise software, I evolved from hands-on development to enterprise architecture because I recognized a fundamental gap: the most innovative code means nothing if it does not serve the business. I now specialize in bridging that gap — designing systems that are technically robust, commercially viable, and operationally sustainable.
              </p>
              <p>
                As Principal Engineer at Autodesk, I lead enterprise integration architecture, AI governance frameworks, and platform extensibility strategy. I architect multi-tenant compliance engines, SAP-ERP to Salesforce synchronization layers, and revenue operations frameworks that recover pipeline visibility. I design with security by default, scalability by design, and governance as an enabler — not a bottleneck.
              </p>
              <p>
                I believe the best architecture is invisible — it enables teams to move faster, customers to realize value sooner, and businesses to transform without technical debt. Whether leading a digital transformation program or mentoring the next generation of architects, my north star is always: business outcomes first.
              </p>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="fade-in-section">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl text-center hover-lift group border border-slate-700/50">
                  <div className="relative">
                    <div className="absolute -top-1 -left-1 w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-lg">
                      {stat.value}
                    </div>
                    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 p-4 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="text-5xl font-bold text-white mb-2">{stat.value === "9" ? "9+" : stat.value}</div>
                  <div className="text-sm font-medium text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="fade-in-section mb-20">
          <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-2xl border border-slate-700/50 hover-lift">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-r from-sky-500 to-indigo-600 p-3 rounded-xl shrink-0">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">MBA (Technology)</h4>
                  <p className="text-sm text-sky-400 font-medium">Indian Institute of Technology Jodhpur</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Specialization: Managing Digital Enterprises with Analytics & AI. Bridging business strategy with technical architecture to drive enterprise transformation.
              </p>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-slate-700/50 hover-lift">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-xl shrink-0">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Bachelor of Technology</h4>
                  <p className="text-sm text-sky-400 font-medium">Electronics & Communication Engineering</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Technical foundation in electronics and communications engineering, forming the basis for enterprise-scale systems thinking.
              </p>
            </div>
          </div>
        </div>

        {/* Key Highlights Grid */}
        <div className="fade-in-section">
          <h2 className="section-title text-center mb-12">
            Core Capabilities
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="glass-card p-5 rounded-2xl text-center hover-lift group border border-slate-700/50 transform hover:scale-105 transition-transform duration-300"
              >
                <div className={`relative bg-gradient-to-r ${highlight.color} p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-105 transition-transform duration-300`}>
                  <highlight.icon className="text-white/90" size={24} />
                </div>
                <h4 className="font-bold text-white mb-3 text-lg">{highlight.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
