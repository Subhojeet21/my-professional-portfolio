const ArchitectureCredentials = () => {
  const credentialGroups = [
    {
      category: "Architecture",
      subtitle: "Salesforce Architect Credentials",
      color: "from-sky-500 to-cyan-500",
      icon: "Architect",
      credentials: [
        { name: "Salesforce Certified Application Architect", level: "Architect" },
        { name: "Salesforce Certified Platform Data Architect", level: "Architect" },
        { name: "Salesforce Certified Sharing & Visibility Architect", level: "Architect" }
      ]
    },
    {
      category: "Platform",
      subtitle: "Salesforce Platform Certifications",
      color: "from-indigo-500 to-blue-500",
      icon: "Code",
      credentials: [
        { name: "Salesforce Certified Platform Developer II", level: "Platform" },
        { name: "Salesforce Certified Platform Developer I", level: "Platform" },
        { name: "Salesforce Certified Platform App Builder", level: "Platform" },
        { name: "Salesforce Certified Administrator", level: "Platform" }
      ]
    },
    {
      category: "Delivery",
      subtitle: "Process & Delivery Certifications",
      color: "from-violet-500 to-purple-500",
      icon: "Target",
      credentials: [
        { name: "Professional Scrum Master I", level: "Delivery" },
        { name: "Advanced Lean Six Sigma Black Belt", level: "Delivery" }
      ]
    },
    {
      category: "Cloud",
      subtitle: "Cloud Foundation",
      color: "from-emerald-500 to-teal-500",
      icon: "Cloud",
      credentials: [
        { name: "AWS Cloud Practitioner", level: "Cloud" }
      ]
    }
  ];

  const icons = {
    Architect: () => (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
      </svg>
    ),
    Code: () => (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    Target: () => (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    Cloud: () => (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 012 2h2a2 2 0 012 2m0 0v3a2 2 0 01-2.182 2H10.5a2 2 0 01-2-2zM16 21V5a2 2 0 00-2-2H8a2 2 0 00-2 2v16a2 2 0 002 2z" />
      </svg>
    )
  };

  return (
    <section id="credentials" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-sky-500/8 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-block px-6 py-3 rounded-full text-xs font-semibold tracking-[0.14em] uppercase section-kicker">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse-dot mr-2" />
            Architecture Credentials
          </div>
          <h2 className="section-title mb-6 text-center">
            Certified Architectural Capability
          </h2>
          <p className="section-subtitle">
            Enterprise architecture credentials grouped by capability domain — proof of architectural authority, not merely a list of badges.
          </p>
        </div>

        {/* Credential Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentialGroups.map((group) => (
            <div
              key={group.category}
              className="relative glass-card-strong rounded-2xl p-8 hover-lift border border-slate-700/50 flex flex-col group"
            >
              {/* Category header */}
              <div className="mb-6 flex items-center gap-3">
                <div className={`p-2 rounded-xl ${group.color}`}>
                  {group.icon && icons[group.icon] && (
                    <span className="text-white">
                      {(() => {
                        const Icon = icons[group.icon];
                        return <Icon className="text-white" />;
                      })()}
                    </span>
                  )}
                </div>
                <div className="flex flex-col leading-none">
                  <h3 className="text-lg font-bold text-white">{group.category}</h3>
                  <span className="text-xs font-semibold tracking-tighter uppercase opacity-40">
                    {group.subtitle}
                  </span>
                </div>
              </div>

              {/* Credentials list */}
              <div className="flex-1 space-y-3">
                {group.credentials.map((cred, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30 border border-transparent hover:bg-sky-500/5 hover:border-sky-500/20 transition-all duration-300 group-hover:pl-1"
                  >
                    <div>
                      <div className="text-sm font-medium text-white">{cred.name}</div>
                      <div className="text-xs text-slate-400">{cred.level}</div>
                    </div>
                    <span className="text-[10px] font-bold tracking-tighter uppercase text-sky-500/70 bg-sky-500/10 px-2 py-1 rounded full">
                      Certified
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Framework note */}
        <div className="mt-16 fade-in-section">
          <div className="glass-card rounded-2xl p-10 md:p-16 border border-slate-700/50">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Architecture Authority Framework
              </h3>
              <p className="text-slate-300 leading-relaxed mb-8">
                Each certification represents verified expertise in a specific architecture domain. Together they form a capability framework spanning enterprise CRM, cloud platforms, delivery methodology and data governance — the complete stack an enterprise architect needs to lead digital transformation programs.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-slate-500 text-sm">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse-dot" />
                  <span>Architecture Governance</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse-dot" style={{ animationDelay: '200ms' }} />
                  <span>Enterprise Data Strategy</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse-dot" style={{ animationDelay: '400ms' }} />
                  <span>Platform Security &amp; Sharing</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureCredentials;
